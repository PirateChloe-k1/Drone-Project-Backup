<template>
  <div class="m2">
    <div class="m2-top">
      <M2PA />
      <M2PB class="m2-top-map" />
    </div>
    <div class="m2-bottom">
      <div class="m2-bottom-R">
        <M2PC />
        <M2PD />
      </div>
      <M2PG />
      <M2PH />
    </div>
    <M2PI class="m2-M2PI" />
  </div>
</template>
<script lang="ts" setup>
import M2PA from "@/view/ptc/M2/M2PA.vue";
import M2PB from "@/view/ptc/M2/M2PB.vue";
import M2PC from "@/view/ptc/M2/M2PC.vue";
import M2PD from "@/view/ptc/M2/M2PD.vue";
import M2PG from "@/view/ptc/M2/M2PG.vue";
import M2PH from "@/view/ptc/M2/M2PH.vue";
import M2PI from "@/view/ptc/M2/M2PI.vue";
</script>
<style lang="scss" scoped>
.m2 {
  box-shadow: inset 0 0 160px #081c33;
  width: 100vw;
  height: 100vh;

  &-top {
    padding: 26px 16px 0;
    display: flex;
    flex-direction: column;
    gap: 38px;

    &-map {
      margin: 0 20px;
    }
  }

  &-bottom {
    position: absolute;
    bottom: 15px;
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    &-R {
      display: flex;
      gap: 18px;
      align-items: flex-end;
    }
  }

  &-M2PI {
    position: absolute;
    right: 11px;
    top: 68px;
  }
}
</style>
