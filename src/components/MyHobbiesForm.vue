<template>
  <div class="form-wrapper">
    <h1 class="title">
      О себе
    </h1>

    <div class="subtitle-wrapper">
      <h2 class="subtitle">
        Хобби
      </h2>

      <div class="subtitle-line"></div>
    </div>

    <div class="form">
      <input
        class="form-input"
        v-model.trim="text"
        @keyup.enter="addMyHobbie"
        placeholder="Введите текст"
      >

      <div
        v-for="(hobby, index) in myHobbies"
        :key="index"
        class="hobby"
      >
        <button
          class="control-button hobby-delete-button"
          @click="removeHobbie(index)"
        >
          <img
            :src="require('assets/close.png')"
          />
        </button>

        <p class="text hobby-text">
          {{ hobby }}
        </p>
      </div>

      <a class="link-more">еще 3 интереса</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHobbiesForm',
  data() {
    return {
      text: '',
    };
  },
  computed: {
    myHobbies() {
      return this.$store.state.myHobbies;
    },
  },
  methods: {
    addMyHobbie() {
      if (!this.text) return;

      this.$store.commit('addMyHobbie', this.text);
      this.text = '';
    },
    removeHobbie(index) {
      this.$store.commit('removeHobbie', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  border: 1px solid gray;
  box-sizing: border-box;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  padding: 5px;
  box-shadow: 0 0 1px gray inset;
  margin-bottom: 10px;

  &::placeholder {
    color: gray;
  }
}
.hobby {
  $root: &;

  display: flex;
  align-items: center;

  &-delete-button {
    display: none;
    margin-right: 5px;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    margin-left: -17px;

    #{$root} {
      &-delete-button {
        display: block;
      }
    }
  }
}
</style>
