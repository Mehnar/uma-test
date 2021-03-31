import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myHobbies: [
      'Хоккей',
      'Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01',
    ],
    friendsHobbies: [
      {
        id: 1,
        value: 'Баскетбол',
        isAdded: false,
      },
      {
        id: 2,
        value: 'Нарезка Photoshop/Fireworks макетов на скорость, в экстримельных условиях, на природе',
        isAdded: false,
      },
    ],
  },
  mutations: {
    addMyHobbie(state, payload) {
      state.myHobbies = [...state.myHobbies, payload];
    },
    removeHobbie(state, index) {
      state.myHobbies = state.myHobbies.filter((item, idx) => index !== idx);
    },
    setFriendHobbieAdded(state, index) {
      state.friendsHobbies[index].isAdded = true;
    },
  },
  actions: {
    addFriendHobbieToMy({ state, commit }, index) {
      commit('addMyHobbie', state.friendsHobbies[index].value);
      commit('setFriendHobbieAdded', index);
    },
  },
  modules: {},
});
