<script setup>
const isActive = ref(true);
const targetLeft = ref(null);
const targetRight = ref(null);

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
</script>

<template>
  <div>
      <div class="wrap">
    <div class="box" ref="targetLeft" v-if="isActive">
      <div v-for="i of leftList" :key="i.id">{{ i.text }}</div>
    </div>

    <div class="box" ref="targetRight">
      <KeepAlive><div v-for="i of rightList" :key="i.id">{{ i.text }}</div></KeepAlive>
    </div>
  </div>

    <button @click="fn">переместить</button>
    <button @click="isActive = false">отключить</button>
    <button @click="isActive = true">включить</button>
    <button @click="list[1].text = 'change'">изменить</button>
    <NuxtLink to="/">home</NuxtLink>
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
}

.box {
  border: 1px solid;
  padding: 5px;
}
</style>
