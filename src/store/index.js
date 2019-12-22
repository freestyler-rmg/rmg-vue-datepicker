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
    },

    refreshStartDay(state) {
      state.startDay = firstDay(state.today.getFullYear(), state.today.getMonth());
    },

    refreshYears(state) {
      state.years = shiftYears(state.today.getFullYear());
    },

    showDatePicker(state) {
      state.showDates = true;
      state.showMonths = false;
      state.showYears = false;
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
      console.log(this.state.years);
    },

    pickDate(test) {
      console.log('pick a date');
      console.log(test);
    },

    triggerShowDate({ commit }) {
      commit('showDatePicker');
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