<script setup>
import { useIconsStore } from '@/stores/IconsStore';
const iconsStore = useIconsStore().getIcons;

let countId = 0;

const socialsLinks = reactive([
  { id: countId++, url: 'https://vk.com/introya', title: 'Вконтакте\nhttps://vk.com/introya', icon: iconsStore.vk },
  { id: countId++, url: 'https://t.me/introversionya', title: 'Телеграм\nhttps://t.me/introversionya', icon: iconsStore.tg },
  { id: countId++, url: 'https://github.com/introversionya', title: 'Гитхаб\nhttps://github.com/introversionya', icon: iconsStore.gh },
  { id: countId++, url: 'mailto:yaintroversivnost@gmail.com', title: 'Написать на почту\nyaintroversivnost@gmail.com', icon: iconsStore.email },
]);
</script>

<template>
  <div class="about__card">
    <div class="about__profile">

      <div class="about__author">
        <img src="@/assets/images/my-photo.jpg" alt="Anton Demidenko[introversionya]&nbsp;&mdash; автор сайта">
        <span class="about__position">Frontend developer</span>
      </div>

      <div class="about__socials">
        <NuxtLink class="about__link" v-for="link in socialsLinks" :to="link.url" :key="link.countId" :title="link.title" target="_blank">
          <span class="about__link-icon" v-html="link.icon"></span>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.about__card {
  background-color: var(--content-substrate-bg-color);
  padding: 10px;
  border-radius: 5px;
  align-self: flex-start;
  max-width: 400px;
  width: 100%;
  flex-shrink: 0;
}

.about__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about__author img {
  margin: 0 auto;
  border-radius: 50%;
  border: 3px solid #eeebeb;
  width: 100px;
  height: 100px;
}

.about__position {
  display: block;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: var(--content-bg-color);
  color: var(--main-color);
  margin-top: 15px;
  white-space: nowrap;
}

.about__socials {
  display: flex;
  justify-content: center;
  column-gap: 15px;
  margin-top: 25px;
}

.about__link {
  border-radius: 50%;
  border: 2px solid var(--border-color);
  overflow: hidden;
  background-color: var(--content-bg-color);
  width: 34px;
  height: 34px;
  transition: border .3s;

  &:focus-visible,
  &:hover {
    border: 2px solid var(--accent-color);
  }

  &:focus-visible .about__link-icon:deep(svg),
  &:hover .about__link-icon:deep(svg) {
    fill: var(--accent-color);
  }
}

.about__link-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
}

.about__link-icon:deep(svg) {
  transition: fill .3s;
  fill: var(--main-color);
}

@media (max-width: 920px) {
  .about__card {
    max-width: 330px;
  }
  .about__author img {
    width: 85px;
    height: 85px;
  }
  .about__position {
    padding: 4px 8px;
  }
  .about__link {
    width: 30px;
    height: 30px;
  }
  .about__link-icon {
    padding: 6px;
  }
}

@media (max-width: 768px) {
  .about__card {
    align-self: center;
    max-width: 100%;
  }
}

@media (max-width: 360px) {
  .about__author img {
    width: 80px;
    height: 80px;
  }
  .about__position {
    font-size: 12px;
  }
}
</style>
