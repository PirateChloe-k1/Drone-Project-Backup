<template>
  <div class="m2">
    <div class="m2-top">
      <M2PA />
      <M2PB class="m2-top-map" />
    </div>
    <M2PC />
    <M2PD />
    <M2PG />
  </div>
</template>
<script lang="ts" setup>
import M2PA from "@/view/ptc/M2/M2PA.vue";
import M2PB from "@/view/ptc/M2/M2PB.vue";
// import M2PC from "@/view/ptc/M2/M2PC.vue";
// import M2PD from "@/view/ptc/M2/M2PD.vue";
import M2PG from "@/view/ptc/M2/M2PG.vue";
</script>
<style lang="scss" scoped>
.m2 {
  &-top {
    margin-top: 26px;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 38px;

    &-map {
      margin: 0 20px;
    }
  }
}
</style>
