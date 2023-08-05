<script setup>
const router = useRouter();
const isActive = ref(true);
const targetLeft = ref(null);
const targetRight = ref(null);
const { isActiveScroll, scrollPosition, disableScroll, enableScroll } = useScroll();


// scrollY - высота страницы


const list = reactive([
  { id: 1, text: 'list 1', location: 'left' },
  { id: 2, text: 'list 2', location: 'left' },
  { id: 3, text: 'list 3', location: 'left' },
]);

const leftList = computed(() => list.filter(item => item.location === 'left'));
const rightList = computed(() => list.filter(item => item.location === 'right'));

const fn = () => {
  list[1].location = 'right'
}


onMounted(() => {
  // disableScroll();
  // enableScroll();
});


</script>

<template>
  <div>
      <div class="wrap">
    <div class="box" ref="targetLeft" v-if="isActive">
      <div v-for="i of leftList" :key="i.id">{{ i.text }}</div>
    </div>

    <div class="box" ref="targetRight">
      <div v-for="i of rightList" :key="i.id">{{ i.text }}</div>
    </div>
  </div>

    <button @click="fn">переместить</button>
    <button @click="isActive = false">отключить</button>
    <button @click="isActive = true">включить</button>
    <button @click="list[1].text = 'change'">изменить</button>
    <NuxtLink to="/" :no-prefetch="true">home</NuxtLink>
    <!-- <iframe src="https://introversionya.github.io" width="100%" height="100vh"></iframe> -->
    <img src="https://w.forfun.com/fetch/d1/d111102ea185f562c4693ab3235512cb.jpeg" alt="">
    <img src="https://kadet39.ru/wp-content/uploads/f/d/0/fd0ea8bb1170fc0cb436ffb842f77805.jpeg" alt="">
    <img src="https://images.wallpaperscraft.ru/image/single/tigr_hishchnik_bolshaia_koshka_113300_2160x3840.jpg" alt="">
    <img src="https://imgpile.com/images/1ggROl.jpg" alt="">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Siberian_Tiger_enjoying_snow_43.jpg" alt="">
    <img src="https://skinal.by/images/catal/animals/763-Skinal.by.jpg" alt="">

  </div>

</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 15px;
  width: fit-content;
}

button {
  border: 1px solid;
  width: fit-content;
  padding: 5px 10px;
  &:active {
    background-color: red;
  }
}

.box {
  border: 1px solid;
  padding: 5px;
}
</style>
