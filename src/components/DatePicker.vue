<template>
  <div class="vuejs-datepicker">

    <DateInput />

    <div class="datepicker-panel-container">

      <Years v-show="showYears" />

      <Months v-show="showMonths" />

      <Dates v-show="showDates" />
    </div>


  </div>
</template>

<script>
import { mapState } from 'vuex';

import Years from './childs/Years.vue';
import DateInput from './childs/DateInput.vue';
import Months from './childs/Months.vue';
import Dates from './childs/Dates.vue';

export default {
  name: 'DatePicker',

  components: {
    Years,
    DateInput,
    Months,
    Dates
  },

  computed: mapState([
    'showYears',
    'showMonths',
    'showDates'
  ]),
}
</script>

<style lang="scss">
  .datepicker-panel-container {
    display: inline-block;
    text-align: center;
  }

  .datepicker-panel {
    width: 22rem;
    height: auto;
    border: .1rem solid #ccc;
    padding: .4rem;
    border-radius: .5rem;
    background-color: #fff;
    ul {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        list-style-type: none;
        flex: 0 0 auto;
        background-color: #fff;
        height: 3rem;
        line-height: 3rem;
        border-radius: .2rem;
        &:hover {
          background-color: #eee;
          cursor: pointer;
        }
        &.active {
          color: #fff;
          background-color: #333;
        }
        &.disabled {
          color: #aaa;
          &:hover {
            background-color: #fff;
            color: #aaa;
            cursor: not-allowed;
          }
        }
      }
    }

    .navigation {
      li {
        flex: 1 0 auto;
        &:first-child,
        &:last-child {
          flex: 0 0 3rem;
          font-size: 0;
          position: relative;
          &::before {
            content: '';
            width: 1.6rem;
            height: 1.6rem;
            display: block;
            border-top: 1rem solid transparent;
            border-bottom: 1rem solid transparent;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        &:first-child {
          &::before {
            border-right: 1rem solid #333;
          }
        }
        &:last-child {
          &::before {
            border-left: 1rem solid #333;
          }
        }
      }
    }

    .list {
      &.year-list,
      &.month-list {
        li {
          flex: 0 0 21/4*1rem;
          height: 4rem;
          line-height: 4rem;
        }
      }

      &.days-list {
        li {
          cursor: default;
          flex: 0 0 21/7*1rem;
          color: #777;
          &:hover {
            background-color: inherit;
          }
        }
      }

      &.date-list {
        li {
          flex: 0 0 21/7*1rem;
        }
      }
    }
  }
</style>