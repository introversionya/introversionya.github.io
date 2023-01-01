import store from '@/store/index';

async function getUserIp() {
  try {
    const data = await fetch('https://api.ipify.org');
    const res = await data.text();
    store.commit('setUserIp', res);
  } catch (e) {
    store.commit('setUserIp', 'error');
  }
}

getUserIp();
// перенести в action
