import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { firstDay, totalDays, testing } from '../helper';

export const store = new Vuex.Store({
  state: {
    today: new Date(),
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
    daysName: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    startDay: 0,
    dates: []
  },

  mutations: {
    prevMonth(state) {
      state.today = new Date(state.today.setMonth(state.today.getMonth() - 1));
    },

    nextMonth(state) {
      state.today = new Date(state.today.setMonth(state.today.getMonth() + 1));
    },

    refreshDates(state) {
      state.dates = totalDays(state.today.getFullYear(), state.today.getMonth());
    },

    refreshStartDay(state) {
      state.startDay = firstDay(state.today.getFullYear(), state.today.getMonth());
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

    initDates({ commit }) {
      commit('refreshDates');
      commit('refreshStartDay');
    },

    pickDate() {
      console.log('pick a date');
    },

    testing() {
      testing();
    }
  },

  getters: {

  }
});