export const useScroll = () => {
  const isActiveScroll = ref(true);
  const scrollPosition = ref(0);

  const disableScroll = () => {
    if (isActiveScroll.value) {
      scrollPosition.value = window.scrollY;
      document.body.classList.add('no-scroll');
      document.body.style.inset = `-${scrollPosition.value}px 0px 0px 0px`;
      document.querySelector('.header').style.top = `${scrollPosition.value}px`;
      isActiveScroll.value = false;
    }
  };

  const enableScroll = () => {
    if (!isActiveScroll.value) {
      document.body.classList.remove('no-scroll');
      document.body.style.removeProperty('inset');
      document.querySelector('.header').style.top = '0px';
      window.scrollTo(0, scrollPosition.value);
      isActiveScroll.value = true;
    }
  };

  return { isActiveScroll, scrollPosition, disableScroll, enableScroll };
};
