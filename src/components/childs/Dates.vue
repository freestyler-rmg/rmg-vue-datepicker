<template>
  <div class="datepicker-panel date-picker">
    <ul class="navigation">
      <li>prev</li>
      <li>January</li>
      <li>next</li>
    </ul>

    <ul class="list days-list">
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      <li>Su</li>
    </ul>

    <ul class="list date-list">
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
      dates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }
}
</script>

<style>

</style>