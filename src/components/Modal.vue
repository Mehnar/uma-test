<template>
  <div class="modal-layout">
    <div class="modal-wrapper">
      <div class="modal-header">
        <slot name="header" />
      </div>

      <div class="modal-body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style lang="scss" scoped>
.modal-layout {
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 500px;
  transition: opacity .4s ease;
}
.modal-wrapper {
  width: 350px;
  max-width: 100%;
  max-height: 100%;
  background: #fff;
  box-shadow: 3px 5px 20px #333;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  transition: all .6s ease;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  will-change: transform;
}
.modal-header {
  margin-bottom: 20px;
}
</style>
