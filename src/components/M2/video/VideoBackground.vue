<template>
  <div class="video-background">
    <video
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      @loadstart="onLoadStart"
      @canplay="onCanPlay"
      @error="onError"
    ></video>

    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>加载视频流中...</p>
    </div>

    <div v-if="error" class="error-overlay">
      <p>视频流加载失败</p>
      <button @click="retry">重试</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Hls from 'hls.js'

const videoRef = ref<HTMLVideoElement>()
const videoSrc = ref('/stream/playlist.m3u8')

const loading = ref(true)
const error = ref(false)

let hls: Hls | null = null
let retryTimeout: number | undefined

const onLoadStart = () => {
  loading.value = true
  error.value = false
}

const onCanPlay = () => {
  loading.value = false
  error.value = false
}

const onError = () => {
  loading.value = false
  error.value = true
}

const initHls = () => {
  if (!videoRef.value) return

  if (Hls.isSupported()) {
    hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 10,
      maxBufferLength: 6,
      maxBufferSize: 5 * 1024 * 1024,
      maxBufferHole: 1.5,
      liveSyncDuration: 3,
      liveMaxLatencyDuration: 5,
    })

    hls.loadSource(videoSrc.value)
    hls.attachMedia(videoRef.value)

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      videoRef.value?.play().catch(err => {
        console.warn('视频播放失败:', err)
      })
    })

    hls.on(Hls.Events.ERROR, (_, data) => {
      console.error('HLS 播放错误:', data)

      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            hls?.startLoad()
            break
          case Hls.ErrorTypes.MEDIA_ERROR:
            hls?.recoverMediaError()
            break
          default:
            destroyHls()
            error.value = true
        }
      }
    })
  } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari 原生支持 HLS
    videoRef.value.src = videoSrc.value
    videoRef.value.play().catch(err => {
      console.warn('Safari 播放失败:', err)
      error.value = true
    })
  } else {
    error.value = true
  }
}

const destroyHls = () => {
  hls?.destroy()
  hls = null
}

const retry = () => {
  error.value = false
  loading.value = true
  destroyHls()

  clearTimeout(retryTimeout)
  retryTimeout = window.setTimeout(() => {
    initHls()
  }, 1500)
}

onMounted(() => {
  initHls()
})

onUnmounted(() => {
  destroyHls()
  clearTimeout(retryTimeout)
})
</script>

<style lang="scss" scoped>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
  }

  .loading-overlay,
  .error-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    z-index: 1;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .error-overlay button {
    margin-top: 16px;
    padding: 8px 16px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #2980b9;
    }
  }
}
</style>
