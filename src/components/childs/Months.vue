<template>
  <div class="datepicker-panel month-picker">
    <ul class="navigation">
      <li @click="prevMonth">prev</li>
      <li @click="triggerShowYear">{{ today.getFullYear() }}</li>
      <li @click="nextMonth">next</li>
    </ul>

    <ul class="list month-list">
      <li v-for="month in months" :key="month.index" @click="triggerShowDate">
        {{ month }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Months',

  computed: {
    ...mapState([
      'today',
      'months',
      'startDay',
      'dates'
    ])
  },

  methods: {
    ...mapActions([
      'triggerShowYear',
      'triggerShowDate',
      'prevMonth',
      'nextMonth'
    ])
  }
}
</script>

<style>

</style>