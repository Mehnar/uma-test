<template>
  <div class="container">
    <my-hobbies-form />
    <friend-hobbies-form />

    <router-view />
  </div>
</template>

<script>
import MyHobbiesForm from '@/components/MyHobbiesForm';
import FriendHobbiesForm from '@/components/FriendHobbiesForm';

export default {
  name: 'Home',
  components: {
    MyHobbiesForm,
    FriendHobbiesForm,
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1260px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
}

.form-wrapper:not(:last-child) {
  margin-bottom: 30px;
}

.form {
  padding: 0 20px;
}

.title {
  border-bottom: 3px solid black;
}
.subtitle-wrapper {
  display: flex;
  justify-content: space-between;

  .subtitle {
    margin-right: 15px;
  }

  .subtitle-line {
    flex-grow: 1;
    transform: translateY(calc(-50% + 0.2em));
    border-bottom: 1px dotted black;
  }
}
.control-button {
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0;
}
.text {
  max-width: 100%;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  -webkit-mask-image: linear-gradient(to left, transparent 0%, black 30%, black 100%,);
  mask-image: linear-gradient(to right, black 60%, transparent 80%);
  margin: 0;
}
.link-more {
  text-decoration: underline;
  color: orange;
}
</style>
