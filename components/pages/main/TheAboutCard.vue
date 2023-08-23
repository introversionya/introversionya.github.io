<script setup>
import { useIconsStore } from '@/stores/IconsStore';
const iconsStore = useIconsStore().getIcons;
</script>

<template>
  <div class="about__card">
    <div class="about__profile">
      <div class="about__photo">
        <img src="@/assets/images/my-photo.jpg" alt="Anton Demidenko[introversionya] - автор сайта">
      </div>
      <span class="about__position">Frontend developer</span>
    </div>
    <div class="about__socials">
      <NuxtLink class="about__link" to="https://vk.com/introya" target="_blank" title="https://vk.com/introya">
        <span class="about__link-icon" v-html="iconsStore.vk"></span>
      </NuxtLink>
      <NuxtLink class="about__link" to="https://t.me/introversionya" target="_blank" title="https://t.me/introversionya">
        <span class="about__link-icon" v-html="iconsStore.tg"></span>
      </NuxtLink>
      <NuxtLink class="about__link" to="https://github.com/introversionya" target="_blank" title="https://github.com/introversionya">
        <span class="about__link-icon" v-html="iconsStore.gh"></span>
      </NuxtLink>
      <NuxtLink class="about__link" to="mailto:yaintroversivnost@gmail.com" title="yaintroversivnost@gmail.com">
        <span class="about__link-icon" v-html="iconsStore.email"></span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about__card {
  background-color: var(--content-substrate-bg-color);
  padding: 10px;
  border: 1px solid var(--border-color);
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

.about__photo {
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  overflow: hidden;
  width: 120px;
  height: 120px;
}

.about__position {
  margin-top: 15px;
  white-space: nowrap;
  text-shadow: 0 0 0 var(--accent-color), 0 0 5px;
  color: var(--about-card-position-color);
}

.about__socials {
  display: flex;
  justify-content: center;
  column-gap: 15px;
  margin-top: 25px;
}

.about__link {
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  overflow: hidden;
  background-color: var(--content-bg-color);
  width: 35px;
  height: 35px;

  &:focus-visible,
  &:hover {
    border: 2px dotted var(--accent-color);
  }
}

.about__link-icon {
  display: inline-block;
  padding: 7px;
}

.about__link-icon:deep(svg) {
  fill: var(--accent-color);
}

@media (max-width: 920px) {
  .about__card {
    max-width: 330px;
  }
  .about__photo {
    width: 100px;
    height: 100px;
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
  .about__photo {
    width: 80px;
    height: 80px;
  }
}
</style>
