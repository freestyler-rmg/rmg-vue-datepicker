<template>
  <div class="datepicker-panel date-picker">
    <ul class="navigation">
      <li>prev</li>
      <li>{{ months[today.getMonth()]}} {{today.getFullYear() }}</li>
      <li>next</li>
    </ul>

    <ul class="list days-list">
      <li v-for="dayName in daysName" :key="dayName">{{ dayName }}</li>
    </ul>

    <ul class="list date-list">
      <li v-for="date in startDay" :key="date">
        a
      </li>
      <li v-for="date in dates" :key="date.index">
        {{ date }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dates',

  data: function() {
    return {
      today: new Date(),
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
      daysName: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      startDay: 0,
      dates: []
    }
  },

  computed: {

  },

  watch: {

  },

  methods: {
    firstDay: function(year, month) {
      return (new Date(year, month)).getDay();
    },

    totalDays: function(year, month) {
      let temp = 32 - (new Date(year, month, 32)).getDate();
      let array = [];
      for (let i = 1; i <= temp; i++) {
        array.push(i);
      }
      return array;
    }
  },

  mounted: function() {
    this.dates = this.totalDays(this.today.getFullYear(), this.today.getMonth());
    this.startDay = this.firstDay(this.today.getFullYear(), this.today.getMonth());
    console.log((new Date(2019, 11)).getDay());
  }
}
</script>

<style>

</style>