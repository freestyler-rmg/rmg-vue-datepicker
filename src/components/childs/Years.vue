<template>
  <div class="datepicker-panel year-picker">
    <ul class="navigation">
      <li>prev</li>
      <li class="disabled">2014 - 2025</li>
      <li>next</li>
    </ul>

    <ul class="list year-list">
      <li v-for="year in years" :key="year.index">
        {{ year }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Years',
  data: function() {
    return {
      years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
    }
  }
}
</script>

<style lang="scss">

</style>