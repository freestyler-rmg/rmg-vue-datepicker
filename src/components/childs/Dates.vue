<template>
  <div class="datepicker-panel date-picker">
    <ul class="navigation">
      <li @click="prevMonth">prev</li>
      <li>{{ months[today.getMonth()]}} {{today.getFullYear() }}</li>
      <li @click="nextMonth">next</li>
    </ul>

    <ul class="list days-list">
      <li v-for="dayName in daysName" :key="dayName">{{ dayName }}</li>
    </ul>

    <ul class="list date-list">
      <li v-for="date in startDay" :key="date" class="disabled">
        &nbsp;
      </li>
      <li v-for="date in dates" :key="date.index">
        {{ date }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Dates',

  computed: mapState([
    'today',
    'months',
    'daysName',
    'startDay',
    'dates'
  ]),

  watch: {

  },

  methods: {
    ...mapActions([
      'prevMonth',
      'nextMonth',
      'initDates',
      'testing'
    ]),
  },

  mounted: function() {
    this.initDates();
    // this.dates = this.totalDays(this.today.getFullYear(), this.today.getMonth());
    // this.startDay = this.firstDay(this.today.getFullYear(), this.today.getMonth());
    // this.testing();
  }
}
</script>

<style>

</style>