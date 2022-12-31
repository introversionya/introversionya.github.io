<script>
import AppHeader from "@/components/header/AppHeader.vue";
export default {
  name: "App",
  components: { AppHeader },
  data() {
    return {
      showComponent: false,
    }
  },
  methods: {
    isPageLoaded() {
      this.$store.commit("changeLoader", false);
    },
  },
  mounted() {
    this.showComponent = true;
  },
  updated() {
    this.$nextTick(() => {
      this.isPageLoaded();
    })
  },
};
</script>

<template>
  <transition name="loader" :duration="1000">
    <app-loader v-if="$store.getters.loader" />
  </transition>

  <app-header v-if="showComponent" />

  <router-view />
</template>

<style lang="scss" scoped>

</style>
