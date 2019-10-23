import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrency: 0,
      euroAmount: 0
    },
    computed: {
      toEuroConversion: function() {
        return this.euroAmount * this.selectedCurrency
      },
      fromEuroConversion: function() {
        return this.euroAmount / this.selectedCurrency
      }
    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(currencies => this.currencies = currencies)
      }
    }
  })

})
