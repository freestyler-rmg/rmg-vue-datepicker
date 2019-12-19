import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    today: new Date(),
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
    daysName: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    startDay: 0,
    dates: []
  },
});