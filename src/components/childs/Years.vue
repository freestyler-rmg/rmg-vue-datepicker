<template>
  <div class="datepicker-panel year-picker">
    <ul class="navigation">
      <li @click="prevYears">prev</li>
      <li class="disabled">{{ years[0] }} - {{ years[years.length - 1] }}</li>
      <li @click="nextYears">next</li>
    </ul>

    <ul class="list year-list">
      <li
        v-for="year in years"
        :key="year.index"
        :class="{ 'active' : ( year == todayYear ) }"
        @click="triggerShowMonth"
      >
        {{ year }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Years',

  computed: {
    ...mapState([
      'today',
      'todayYear',
      'months',
      'startDay',
      'years',
      'dates'
    ])
  },

  methods: {
    ...mapActions([
      'prevYears',
      'nextYears',
      'triggerShowMonth'
    ])
  }
}
</script>

<style lang="scss">

</style>