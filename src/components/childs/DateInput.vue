<template>
  <div class="datepicker-input">
    <div class="input-container">
      <input
        type="text"
        placeholder="Pick your date"
      >
      <span class="input-ornament"></span>
      <img alt="Calendar icon" src="../../assets/calendar.svg">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DateInput',
  props: ['focus', 'blur'],
  computed: {
    ...mapState([
      'chosenFull'
    ])
  },
}
</script>

<style lang="scss" scoped>
  .datepicker-input {
    margin-bottom: 2rem;
    position: relative;
    .input-container {
      position: relative;
      width: 30rem;
    }
    .input-ornament {
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      overflow-x: hidden;
      &::before {
        content: '';
        width: 200%;
        height: 1px;
        background: linear-gradient(to right, #333, #333 50%, #ccc 50%, #ccc);
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateX(-50%);
        transition: transform .15s ease-out;
      }
    }
    input[type='text'] {
      width: 100%;
      padding: .5rem;
      padding-right: 3rem;
      &:focus,
      &.filled {
        & + .input-ornament::before {
          transform: translateX(0);
        }
      }
    }
    img {
      position: absolute;
      top: 50%;
      right: .3rem;
      transform: translateY(-50%);
      width: 2rem;
    }
  }
</style>