<template>
  <modal>
    <template
      v-slot:header
    >
      <p>Пожаловаться</p>
      <p>{{ `id:${id}, ${hobbieValue}` }}</p>
    </template>

    <template
      v-slot:body
    >
      <div class="report-body">
        <textarea
          class="textarea"
          v-model="text"
        />

        <div class="buttons">
          <router-link
            :to="{ name: 'Hobbies' }"
          >
            <button>
              Отмена
            </button>

          </router-link>

          <router-link
            :to="{ name: 'Hobbies' }"
          >
            <button>
              Отправить
            </button>

          </router-link>
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  name: 'ReportModal',
  components: {
    Modal,
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      hobbieValue: '',
      text: '',
    };
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(newVal) {
        const { id } = newVal.params;
        const hobbieValue = this.$store.state.friendsHobbies.find((hobby) => hobby.id === parseInt(id, 10))?.value;

        if (!hobbieValue) {
          this.$router.push({ name: 'Hobbies' });
          return;
        }

        this.hobbieValue = hobbieValue;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.report-body {
  width: 100%;
}
.textarea {
  box-sizing: border-box;
  width: 100%;
  resize: none;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
