<script setup></script>

<template>
  <section class="works">
    <div class="container">
      <div class="works__inner">
        <h2 class="works__title title">Мои работы</h2>
          <div class="works__slides">
          <NuxtLink class="works__slide" to="https://introversionya.github.io/calc/app/" target="_blank" title="Калькулятор">
            <h3 class="works__slide-title">Калькулятор</h3>
            <img class="works__slide-img" src="@/assets/images/calc.png" alt="Калькулятор">
            <p class="works__slide-description">Калькулятор на&nbsp;ванильном&nbsp;js</p>
          </NuxtLink>
          <!-- -->
          <NuxtLink class="works__slide" to="https://introversionya.github.io/Breakout-game/" target="_blank" title="Игра &rsquo;Breakout&rsquo;">
            <h3 class="works__slide-title">Игра &rsquo;Breakout&rsquo;</h3>
            <img class="works__slide-img" src="@/assets/images/breakout.png" alt="Игра 'Breakout'">
            <p class="works__slide-description">Breakout&nbsp;&mdash; игра на&nbsp;js&nbsp;и&nbsp;canvas</p>
          </NuxtLink>
          <!-- -->
          <NuxtLink class="works__slide" to="https://introversionya.github.io/ToDo/app/" target="_blank" title="Список дел (ToDo)">
            <h3 class="works__slide-title">Список дел (ToDo)</h3>
            <img class="works__slide-img" src="@/assets/images/todo.png" alt="Список дел (ToDo)">
            <p class="works__slide-description">ToDo list (native JS)</p>
          </NuxtLink>
          <!-- -->
          <NuxtLink class="works__slide" to="https://introversionya.github.io/snake/" target="_blank" title="Игра 'snake'">
            <h3 class="works__slide-title">Игра &rsquo;snake&rsquo;</h3>
            <img class="works__slide-img" src="@/assets/images/snake.png" alt="Игра 'snake'">
            <p class="works__slide-description">Змейка на&nbsp;js (canvas)</p>
          </NuxtLink>
          <!-- -->
          <NuxtLink class="works__slide" to="https://introversionya.github.io/free-psd/" target="_blank" title="Верстка макета">
            <h3 class="works__slide-title">Верстка макета</h3>
            <img class="works__slide-img" src="@/assets/images/maket.png" alt="Изображение сайта">
            <p class="works__slide-description">Верстка макета из&nbsp;сети</p>
          </NuxtLink>

          <NuxtLink class="works__slide" to="https://introversionya.github.io/calc/app/" target="_blank" title="Калькулятор">
            <h3 class="works__slide-title">Калькулятор</h3>
            <img class="works__slide-img" src="@/assets/images/calc.png" alt="Калькулятор">
            <p class="works__slide-description">Калькулятор на&nbsp;ванильном&nbsp;js</p>
          </NuxtLink>
          <!-- -->
          <NuxtLink class="works__slide" to="https://introversionya.github.io/Breakout-game/" target="_blank" title="Игра &rsquo;Breakout&rsquo;">
            <h3 class="works__slide-title">Игра &rsquo;Breakout&rsquo;</h3>
            <img class="works__slide-img" src="@/assets/images/breakout.png" alt="Игра 'Breakout'">
            <p class="works__slide-description">Breakout&nbsp;&mdash; игра на&nbsp;js&nbsp;и&nbsp;canvas</p>
          </NuxtLink>
          <!-- -->
          <NuxtLink class="works__slide" to="https://introversionya.github.io/ToDo/app/" target="_blank" title="Список дел (ToDo)">
            <h3 class="works__slide-title">Список дел (ToDo)</h3>
            <img class="works__slide-img" src="@/assets/images/todo.png" alt="Список дел (ToDo)">
            <p class="works__slide-description">ToDo list (native JS)</p>
          </NuxtLink>
          <!-- -->
          <NuxtLink class="works__slide" to="https://introversionya.github.io/snake/" target="_blank" title="Игра 'snake'">
            <h3 class="works__slide-title">Игра &rsquo;snake&rsquo;</h3>
            <img class="works__slide-img" src="@/assets/images/snake.png" alt="Игра 'snake'">
            <p class="works__slide-description">Змейка на&nbsp;js (canvas)</p>
          </NuxtLink>
          <!-- -->
          <NuxtLink class="works__slide" to="https://introversionya.github.io/free-psd/" target="_blank" title="Верстка макета">
            <h3 class="works__slide-title">Верстка макета</h3>
            <img class="works__slide-img" src="@/assets/images/maket.png" alt="Изображение сайта">
            <p class="works__slide-description">Верстка макета из&nbsp;сети</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// .works {}

.works__inner {
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: var(--content-bg-color);
}

.works__title {
  border-radius: inherit;
  text-align: center;
  padding: 15px 10px;
  white-space: nowrap;
  background-color: var(--main-bg-color);
}

.works__slides {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;
  padding: 10px;
}

.works__slide {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--content-substrate-bg-color);
  width: 150px;
  height: 200px;
  box-shadow: none;
  &:active {
    transform: scale(.98);
  }
  &:focus-within,
  &:hover {
    box-shadow: 0 0 4px 0 var(--accent-color);
    .works__slide-title {
      text-shadow: 0 0 0 var(--accent-color), 0 0 5px;
    }
    .works__slide-description {
      white-space: initial;
      overflow: initial;
    }
  }
}

.works__slide-title {
  text-align: center;
  background-color: var(--main-bg-color);
  padding: 10px 15px;
}

.works__slide-img {
  height: 100%;
}

.works__slide-description {
  text-align: center;
  padding: 10px 15px;
  background-color: var(--main-bg-color);
  line-height: 1.3;
  white-space: nowrap;
  overflow: clip;
  text-overflow: ellipsis;
}
</style>
