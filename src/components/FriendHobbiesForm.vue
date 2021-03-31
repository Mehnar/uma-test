<template>
  <div class="form-wrapper">
    <h1 class="title">
      Интересы друга
    </h1>

    <div class="subtitle-wrapper">
      <h2 class="subtitle">
        Хобби
      </h2>

      <div class="subtitle-line"></div>
    </div>

    <div class="form">
      <div
        v-for="(hobby, index) in friendsHobbies"
        :key="index"
        :class="{added: hobby.isAdded }"
        class="hobby"
      >
        <button
          class="control-button hobby-delete-button"
          @click="addFriendHobbieToMy(index)"
        >
          <img
            :src="require('assets/add.gif')"
          />
        </button>

          <div class="text hobby-text">
            <p class="hobby-text-description">
              {{ hobby.value }}
            </p>

            <span
              v-if="hobby.isAdded"
              class="hobby-text-success-message"
            >
              <img
                :src="require('assets/ok.png')"
                class="success-icon"
              />
              добавлено в ваши увлечения
            </span>
          </div>

          <!-- <p class="text hobby-text">
            {{ hobby.value }}

            <span v-if="hobby.isAdded">
              Добавлено
            </span>
          </p> -->

        <router-link
          class="control-button hobby-report-button"
          :to="{
            name: 'Report',
            params: {
              id: hobby.id,
            }
          }"
        >
          <img
            :src="require('assets/warn.png')"
          />

          <span class="hobby-report-button-text">
            пожаловаться
          </span>
        </router-link>
      </div>

      <a class="link-more">еще 3 интереса</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendHobbiesForm',
  computed: {
    friendsHobbies() {
      return this.$store.state.friendsHobbies;
    },
  },
  methods: {
    addFriendHobbieToMy(index) {
      this.$store.dispatch('addFriendHobbieToMy', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.hobby {
  $root: &;

  display: flex;
  align-items: flex-start;

  &-text {
    flex-wrap: wrap;

    &-description {
      margin: 0 15px 0 0;
    }

    &-success-message {
      display: flex;
      align-items: center;

      color: #449f1b;

      .success-icon {
        margin-right: 10px;
      }
    }
  }

  &-delete-button {
    display: none;
    margin-right: 5px;
  }

  &-report-button {
    display: none;
    margin-left: 5px;
    text-decoration: none;
    color: black;

    &-text {
      margin-left: 5px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    #{$root} {
      &-report-button {
        display: flex;
      }
    }

    &:not(.added) {
      margin-left: -17px;

      #{$root} {
        &-delete-button {
          display: block;
        }
      }
    }
  }
}
</style>
