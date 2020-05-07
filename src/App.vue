<template>
  <div>
    <transition name="fade">
      <keep-alive :exclude="excludeList">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      excludeList: []
    };
  }
};
</script>

<style lang="scss">
.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
.fade-enter-active,
.fade-leave-active {
  // background-color: red;
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
  position: relative;
}
</style>

