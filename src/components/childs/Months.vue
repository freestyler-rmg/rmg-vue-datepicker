<template>
  <div class="datepicker-panel month-picker">
    <ul class="navigation">
      <li>prev</li>
      <li>2020</li>
      <li>next</li>
    </ul>

    <ul class="list month-list">
      <li v-for="month in months" :key="month.index">
        {{ month }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Months',
  data: function() {
    return {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]
    }
  }
}
</script>

<style>

</style>