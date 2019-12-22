<template>
  <div class="datepicker-panel date-picker">
    <ul class="navigation">
      <li @click="prevMonth">prev</li>
      <li @click="triggerShowMonth">{{ months[today.getMonth()]}} {{today.getFullYear() }}</li>
      <li @click="nextMonth">next</li>
    </ul>

    <ul class="list days-list">
      <li v-for="dayName in daysName" :key="dayName">{{ dayName }}</li>
    </ul>

    <ul class="list date-list">
      <li v-for="date in startDay" :key="date" class="disabled">
        &nbsp;
      </li>
      <li v-for="(date) in dates" :key="date.index" @click="testClick()">
        {{ date }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Dates',

  computed: {
    ...mapState([
      'today',
      'months',
      'daysName',
      'startDay',
      'dates'
    ])
  },

  watch: {

  },

  methods: {
    ...mapActions([
      'prevMonth',
      'nextMonth',
      'initDates',
      'pickDate',
      'triggerShowMonth',
      'testing'
    ]),

    testClick: function() {
      console.log('test click');
    }
  },

  mounted: function() {
    this.initDates();
    // this.testing();
  }
}
</script>

<style>

</style>