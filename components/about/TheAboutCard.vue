<template>
  <div class="about__card">
    <div class="about__profile">
      <div class="about__photo">
        <img src="@/assets/images/my-photo.jpg" alt="Anton Demidenko[introversionya] - автор сайта">
      </div>
      <span class="about__position">Frontend developer</span>
    </div>
    <div class="about__socials">
      <NuxtLink class="about__link" to="https://vk.com/introya" target="_blank">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M93.3686 27.0757C94.0004 25.0058 93.3686 23.4849 90.361 23.4849H80.4155C77.8868 23.4849 76.7208 24.7988 76.0887 26.2476C76.0887 26.2476 71.0307 38.3563 63.8659 46.2216C61.5481 48.4985 60.4943 49.2231 59.2299 49.2231C58.5977 49.2231 57.6493 48.4985 57.6493 46.4288V27.0757C57.6493 24.5919 56.9489 23.4849 54.8413 23.4849H39.2126C37.6324 23.4849 36.6819 24.6377 36.6819 25.7302C36.6819 28.0849 40.2642 28.6279 40.6334 35.2516V49.6371C40.6334 52.7909 40.0535 53.3629 38.7891 53.3629C35.4176 53.3629 27.2162 41.2001 22.352 27.2826C21.3988 24.5776 20.4427 23.4849 17.9009 23.4849H7.95539C5.11382 23.4849 4.54547 24.7988 4.54547 26.2476C4.54547 28.835 7.91722 41.6682 20.2449 58.6409C28.4632 70.2318 40.0424 76.5152 50.5788 76.5152C56.9008 76.5152 57.683 75.1197 57.683 72.7159V63.9553C57.683 61.1644 58.2818 60.6072 60.2837 60.6072C61.7587 60.6072 64.2875 61.3318 70.1879 66.9205C76.9315 73.544 78.0432 76.5152 81.836 76.5152H91.7818C94.6231 76.5152 96.044 75.1197 95.2243 72.3655C94.3273 69.6208 91.108 65.6387 86.836 60.9178C84.5178 58.2269 81.0405 55.3292 79.9868 53.8799C78.5118 52.0174 78.9333 51.1894 79.9868 49.5337C79.9868 49.5337 92.1042 32.7677 93.3686 27.0757Z" fill="black"/>
        </svg>
      </NuxtLink>
      <NuxtLink class="about__link" to="https://t.me/introversionya" target="_blank">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M82.822 18.625L15.6629 44.5227C11.0795 46.3636 11.106 48.9204 14.8219 50.0606L32.0644 55.4394L71.9583 30.2689C73.8447 29.1212 75.5682 29.7386 74.1515 30.9962L41.8295 60.1667H41.8219L41.8295 60.1704L40.6401 77.9432C42.3826 77.9432 43.1515 77.1439 44.1288 76.2008L52.5038 68.0568L69.9242 80.9242C73.1363 82.6932 75.4432 81.7841 76.2424 77.9508L87.678 24.0568C88.8485 19.3636 85.8863 17.2386 82.822 18.625Z" fill="black"/>
        </svg>
      </NuxtLink>
      <NuxtLink class="about__link" to="https://github.com/introversionya" target="_blank">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M50 10.2273C28.0284 10.2273 10.2273 28.0114 10.2273 49.9603C10.2273 67.5171 21.625 82.4034 37.4262 87.6591C39.4148 88.0228 40.1421 86.7955 40.1421 85.7444C40.1421 84.8012 40.108 82.3012 40.0853 78.983C29.0228 81.3864 26.6932 73.6591 26.6932 73.6591C24.8807 69.0682 22.2727 67.8466 22.2727 67.8466C18.6648 65.3807 22.5455 65.4318 22.5455 65.4318C26.5398 65.7159 28.6421 69.5228 28.6421 69.5228C32.1875 75.6023 37.9489 73.8409 40.2159 72.8296C40.5739 70.2614 41.6023 68.5114 42.7387 67.5171C33.9091 66.5171 24.625 63.108 24.625 47.8807C24.625 43.5455 26.1762 39.9943 28.7159 37.2216C28.3068 36.2159 26.9432 32.1762 29.1137 26.7103C29.1137 26.7103 32.4432 25.6364 40.0455 30.7784C43.29 29.8945 46.6372 29.4436 50 29.4375C53.3807 29.4546 56.7841 29.8921 59.9603 30.7784C67.5512 25.6364 70.8864 26.7046 70.8864 26.7046C73.0568 32.1762 71.6932 36.2159 71.2841 37.2159C73.8296 40 75.375 43.5455 75.375 47.8807C75.375 63.1421 66.0682 66.5057 57.2103 67.483C58.6364 68.7103 59.9091 71.1364 59.9091 74.8466C59.9091 80.1534 59.858 84.4375 59.858 85.7444C59.858 86.8069 60.5796 88.0398 62.5966 87.6534C70.5079 85.0155 77.3891 79.9561 82.2662 73.1915C87.1434 66.4269 89.7695 58.2997 89.7728 49.9603C89.7667 39.4174 85.5732 29.3086 78.1145 21.8574C70.6559 14.4062 60.5429 10.2228 50 10.2273Z" fill="black"/>
        </svg>
      </NuxtLink>
      <NuxtLink class="about__link" to="mailto:yaintroversivnost@gmail.com">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M50 69.896L10 34.5959V80H90V34.5959L50 69.896ZM50.004 59.2481L10 23.9241V20H90V23.9241L50.004 59.2481Z" fill="black"/>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about__card {
  max-width: 400px;
  width: 100%;
  align-self: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 25px;
  position: relative;
  z-index: 1;
  padding: 15px 10px;
  &::before {
    position: absolute;
    content: '';
    inset: 0;
    z-index: -1;
    background-image: var(--about-card-gradient);
    filter: var(--about-card-blur);
  }
}

.about__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about__photo {
  overflow: hidden;
  border-radius: 50%;
  width: 150px;
}

.about__position {
  margin-top: 10px;
  white-space: nowrap;
}

.about__socials {
  display: flex;
  justify-content: center;
  gap: 0 15px;
  margin-top: 35px;
}

.about__link {
  overflow: hidden;
  border-radius: 50%;
  background-color: var(--about-link-bg);
  width: 35px;
  height: 35px;
  padding: 7px;
  transition: background-color 0.5s;
  svg path {
    transition: fill 0.5s;
  }
  &:hover {
    background-color: var(--about-link-hover-bg);
  }
  &:hover path {
    fill: var(--about-link-hover-path);
  }
}

@media screen and (max-width: 960px) {
  .about__card {
    max-width: 480px;
    align-self: center;
    margin-bottom: 15px;
  }
  .about__socials {
    margin-top: 15px;
  }
}

@media screen and (max-width: 580px) {

}

@media screen and (max-width: 460px) {
  .about__photo {
    width: 130px;
  }
}

@media screen and (max-width: 380px) {
  .about__photo {
    width: 100px;
  }
  .about__socials {
    gap: 0 10px;
  }
  .about__link {
    width: 30px;
    height: 30px;
    padding: 5px;
  }
}
</style>
