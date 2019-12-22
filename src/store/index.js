import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {
  firstDay,
  totalDays,
  shiftYears,
  testing
} from '../helper';

export const store = new Vuex.Store({
  state: {
    showYears: false,
    showMonths: false,
    showDates: true,
    today: new Date(),
    todayDate: 0,
    todayMonth: 0,
    todayYear: 0,
    chosenDate: new Date().getDate(),
    chosenMonth: new Date().getMonth(),
    chosenYear: new Date().getFullYear(),
    chosenFull: '',
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
    daysName: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    startDay: 0,
    dates: [],
    years: []
  },

  mutations: {
    prevMonth(state) {
      state.today = new Date(state.today.setMonth(state.today.getMonth() - 1));
    },

    nextMonth(state) {
      state.today = new Date(state.today.setMonth(state.today.getMonth() + 1));
    },

    prevYears(state) {
      state.years = shiftYears(state.years[0], 'prev');
    },

    nextYears(state) {
      state.years = shiftYears(state.years[0], 'next');
    },

    refreshDates(state) {
      state.dates = totalDays(state.today.getFullYear(), state.today.getMonth());
      state.todayDate = state.today.getDate();
      state.todayMonth = state.today.getMonth();
      state.todayYear = state.today.getFullYear();
    },

    refreshStartDay(state) {
      state.startDay = firstDay(state.today.getFullYear(), state.today.getMonth());
    },

    refreshYears(state) {
      state.years = shiftYears(state.today.getFullYear());
    },

    changeDate(state, date) {
      state.chosenDate = date;
      // state.today = state.today.setDate(date);
    },

    showDatePicker(state) {
      state.showDates = true;
      state.showMonths = false;
      state.showYears = false;
    },

    changeMonth(state, month) {
      // state.today = new Date(state.today.setMonth(state.today.getMonth()));
      state.chosenMonth = month;
      state.today = state.today.setMonth(month);
    },

    showMonthPicker(state) {
      state.showDates = false;
      state.showMonths = true;
      state.showYears = false;
    },

    showYearPicker(state) {
      state.showDates = false;
      state.showMonths = false;
      state.showYears = true;
    },

    getChosenFull(state) {
      state.chosenFull = `${state.chosenDate} ${state.months[state.chosenMonth]} ${state.chosenYear}}`
    }
  },

  actions: {
    prevMonth({ commit }) {
      commit('prevMonth');
      commit('refreshDates');
      commit('refreshStartDay');
    },

    nextMonth({ commit }) {
      commit('nextMonth');
      commit('refreshDates');
      commit('refreshStartDay');
    },

    prevYears({ commit }) {
      commit('prevYears');
    },

    nextYears({ commit }) {
      commit('nextYears');
    },

    initDates({ commit }) {
      commit('refreshDates');
      commit('refreshStartDay');
      commit('refreshYears');

      // console.log(this.state.chosenMonth);
    },

    // pickDate({ commit }, date) {
    //   // console.log('pick a date');
    //   // console.log(test);
    //   // commit('changeDate', date);
    // },

    triggerShowDate({ commit }, month) {
      commit('showDatePicker');
      commit('changeMonth', month);
    },

    triggerShowMonth({ commit }) {
      commit('showMonthPicker');
    },

    triggerShowYear({ commit }) {
      commit('showYearPicker');
    },

    testing() {
      testing();
    }
  },

  getters: {

  }
});