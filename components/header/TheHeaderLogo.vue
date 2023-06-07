<template>
  <div
    class="header__logo"
    title="На главную"
  >
    <NuxtLink
      to="/"
      aria-label="На главную"
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_17_29)">
          <path
            d="M50 7C49.3989 7.00008 48.8038 7.11938 48.2491 7.35102C47.6944 7.58265 47.1911 7.922 46.7685 8.34943L0.923295 48.353C0.636973 48.5643 0.404259 48.8398 0.243892 49.1575C0.0835256 49.4751 -1.36713e-05 49.826 1.67814e-09 50.1818C1.67814e-09 50.7846 0.239447 51.3627 0.665666 51.7889C1.09189 52.2151 1.66996 52.4545 2.27273 52.4545H13.6364V88.8182C13.6364 91.3273 15.6727 93.3636 18.1818 93.3636H36.3636C38.8727 93.3636 40.9091 91.3273 40.9091 88.8182V61.5455H59.0909V88.8182C59.0909 91.3273 61.1273 93.3636 63.6364 93.3636H81.8182C84.3273 93.3636 86.3636 91.3273 86.3636 88.8182V52.4545H97.7273C98.33 52.4545 98.9081 52.2151 99.3343 51.7889C99.7606 51.3627 100 50.7846 100 50.1818C100 49.826 99.9165 49.4751 99.7561 49.1575C99.5957 48.8398 99.363 48.5643 99.0767 48.353L53.2582 8.37607C53.2493 8.36715 53.2405 8.35827 53.2315 8.34943C52.8089 7.922 52.3056 7.58265 51.7509 7.35102C51.1962 7.11938 50.6011 7.00008 50 7Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_29">
            <rect
              width="100"
              height="100"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
      Главная
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
$logo-right-distance: 85px;
.header__logo {
  position: relative;
  margin-right: $logo-right-distance;
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--header-logo-color);
    transition: color 0.2s;
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: currentColor;
      }
    }
  }

  &:hover a {
    color: var(--header-logo-hover);
  }

  &::before {
    pointer-events: none;
    position: absolute;
    content: '';
    top: 0;
    right: calc(-1 * ($logo-right-distance / 2));
    width: 1px;
    height: 100%;
    background-color: var(--header-logo-color);
  }
}
</style>
