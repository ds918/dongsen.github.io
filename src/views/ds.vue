<template>
  <div>
    <router-link :to="{name: 'dss',params: {age: 100}}">100ages</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "ds",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  methods: {}
};
</script>
