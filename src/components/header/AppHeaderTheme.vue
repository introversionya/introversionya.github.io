<script>
export default {
  name: 'AppHeaderTheme',
  data() {
    return {
      isOpen: false,
      menuTooltip: { indent: 10, text: 'Вы vfvfv vfvfvf vfvfvf vfvfvf', position: 'top', isActive: true },
      themeProp: { activeIcon: null, activeTheme: null, mode: null },
      isDarkTheme: window.matchMedia('(prefers-color-scheme: dark)'),
      html: document.querySelector('html'),
      themeMenuProp: [
        {
          description: 'Как на устройстве',
          attr: 'default',
          icon: `<svg viewBox="1.00 1.00 512.00 512.00">
                  <path
                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 448V64c105.9 0 192 86.13 192 192S361.9 448 256 448z">
                  </path>
                </svg>`,
        },
        {
          description: 'Светлая',
          attr: 'light',
          icon: `<svg viewBox="0.98 0.10 512.05 512.92">
                  <path
                    d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z">
                  </path>
                </svg>`,
        },
        {
          description: 'Темная',
          attr: 'dark',
          icon: `<svg viewBox="33.00 33.00 400.00 448.00">
                  <path
                    d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z">
                  </path>
                </svg>`,
        },
        {
          description: 'Настроить вручную',
          attr: 'manual',
          icon: `<svg viewBox="1.00 1.00 100.00 100.00">
                  <path
                    d="M87.687 45.077c-.313-2.433-.816-4.807-1.542-7.079l8.145-11.73-5.827-7.515-.094-.123-5.824-7.514-12.955 5.577c-2.041-1.265-4.192-2.362-6.459-3.219L59.42 0H40.586l-3.709 13.474c-2.27.857-4.421 1.955-6.463 3.222l-12.957-5.577-5.825 7.514-.097.124-5.822 7.517 8.146 11.731a39.832 39.832 0 00-1.544 7.079L0 52.032l2.08 9.375.033.15 2.08 9.375 14.001.761a39.157 39.157 0 004.4 5.668l-2.396 14.227 8.416 4.173.138.067L37.169 100l9.309-10.796c1.161.109 2.335.173 3.524.173s2.358-.074 3.52-.184l9.317 10.804 8.415-4.173.141-.066 8.413-4.172-2.396-14.228a39.06 39.06 0 004.4-5.672l14-.759 2.078-9.375.035-.154L100 52.025l-12.313-6.948zM50.003 34.51c8.435 0 15.272 7.035 15.272 15.719 0 8.679-6.839 15.717-15.272 15.717-8.436 0-15.272-7.038-15.272-15.717 0-8.684 6.838-15.719 15.272-15.719z">
                  </path>
                </svg>`,
        },
      ],
    };
  },
  methods: {
    openMenuTheme(e) {
      if (e.target.closest('.theme-switcher__btn')) {
        this.isOpen = !this.isOpen;
      } else {
        this.isOpen = false;
      }
    },
    initTheme() {
      if (localStorage.getItem('theme') === null) {
        this.themeProp.mode = 'system';
      } else {
        this.themeProp = JSON.parse(localStorage.getItem('theme'));
        this.html.setAttribute('data-theme', this.themeProp.activeTheme);
      }

      if (this.themeProp.mode === 'system') {
        this.systemTheme();
      }
    },
    systemTheme() {
      this.isDarkTheme.onchange = this.systemTheme;
      this.themeProp.mode = 'system';
      this.themeProp.activeIcon = this.themeMenuProp[0].icon;
      if (this.isDarkTheme.matches) {
        this.themeProp.activeTheme = 'dark';
      } else {
        this.themeProp.activeTheme = 'light';
      }
      this.html.setAttribute('data-theme', this.themeProp.activeTheme);
      localStorage.setItem('theme', JSON.stringify(this.themeProp));
    },
    manualTheme(e) {
      this.isDarkTheme.onchange = null;
      this.themeProp.mode = 'manual';
      if (e.currentTarget.dataset.value === 'default') {
        this.systemTheme();
      } else if (e.currentTarget.dataset.value === 'light') {
        this.themeProp.activeIcon = this.themeMenuProp[1].icon;
        this.themeProp.activeTheme = 'light';
      } else if (e.currentTarget.dataset.value === 'dark') {
        this.themeProp.activeIcon = this.themeMenuProp[2].icon;
        this.themeProp.activeTheme = 'dark';
      } else if (e.currentTarget.dataset.value === 'manual') {
        this.themeProp.activeIcon = this.themeMenuProp[3].icon;
        this.themeProp.activeTheme = 'manual';
      }
      this.html.setAttribute('data-theme', this.themeProp.activeTheme);
      localStorage.setItem('theme', JSON.stringify(this.themeProp));
    },
  },
  mounted() {
    this.initTheme();
    document.addEventListener('click', this.openMenuTheme);

    setInterval(() => {
      // this.menuTooltip.isActive = !this.menuTooltip.isActive;
      // this.menuTooltip.text = Math.random() * 5;
      // this.menuTooltip.indent += 1
    }, 500);
  },
  unmounted() {
    document.removeEventListener('click', this.openMenuTheme);
  },
};
</script>

<template>
  <div class="theme-switcher">
    <button
      v-tooltip="menuTooltip"
      class="theme-switcher__btn"
      :class="{ 'theme-switcher__btn--active': isOpen }"
      aria-label="Переключить тему"
    >
      <span>Тема:</span>
      <span
        class="theme-switcher__span"
        v-html="themeProp.activeIcon"
      ></span>
    </button>

    <div
      class="theme-switcher__menu"
      aria-label="Меню выбора темы"
      :class="{ 'theme-switcher__menu--active': isOpen }"
    >
      <button
        class="theme-switcher__menu-btn"
        v-for="btn in themeMenuProp"
        :data-value="btn.attr"
        @click="manualTheme"
      >
        <span>{{ btn.description }}</span>
        <span v-html="btn.icon"></span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-switcher {
  position: relative;
  margin-right: 50px;
}

.theme-switcher__btn {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid var(--theme-switcher-color);
  border-radius: 4px;
  background-color: var(--theme-switcher-bg);
  transition: border 0.2s, color 0.2s;

  &:hover {
    color: var(--theme-switcher-hover);
    border-color: var(--theme-switcher-hover);
  }

  &:hover :deep(svg) {
    fill: var(--theme-switcher-hover);
  }
}

.theme-switcher__span {
  margin-left: 7px;
}

.theme-switcher__span :deep(svg) {
  width: 15px;
  height: 15px;
  fill: var(--theme-switcher-color);
  transition: fill 0.2s;
}

.theme-switcher__btn--active {
  color: var(--theme-switcher-hover);
  border-color: var(--theme-switcher-hover);

  :deep(svg) {
    fill: var(--theme-switcher-hover);
  }
}

// menu
.theme-switcher__menu {
  will-change: transform;
  position: absolute;
  bottom: -20px;
  right: 0;
  transform: translateY(calc(100% + 20px));
  padding: 5px 10px;
  border: 1px solid var(--theme-switcher-color);
  background-color: var(--theme-switcher-menu-bg);
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: transform 0.2s, opacity 0.2s;

  &::before {
    position: absolute;
    content: '';
    top: -17px;
    right: 17px;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-right-width: 14px;
    border-left-width: 14px;
    border-bottom: 17px solid var(--theme-switcher-color);
  }

  &::after {
    position: absolute;
    content: '';
    top: -15px;
    right: 18px;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-right-width: 13px;
    border-left-width: 13px;
    border-bottom: 16px solid var(--theme-switcher-menu-bg);
  }
}

.theme-switcher__menu-btn:not(:last-child) {
  border-bottom: 1px solid var(--theme-switcher-color);
  margin-bottom: 5px;
}

.theme-switcher__menu-btn {
  padding: 10px 5px;
  width: 100%;
  border: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--theme-switcher-color);
}

.theme-switcher__menu-btn :deep(span):nth-child(2n) {
  margin-left: 15px;

  svg {
    width: 15px;
    height: 15px;
    fill: var(--theme-switcher-color);
  }
}

.theme-switcher__menu-btn {
  &:hover {
    border-radius: 4px;
    background-color: var(--theme-switcher-color);
    color: var(--theme-switcher-menu-hover);
  }

  &:hover :deep(span svg) {
    fill: var(--theme-switcher-menu-hover);
  }
}

.theme-switcher__menu--active {
  visibility: visible;
  opacity: 1;
  transform: translateY(100%);
}
</style>
