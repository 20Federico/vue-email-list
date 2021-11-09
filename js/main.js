'use strict'
Vue.config.devtools = true;

// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

window.addEventListener('DOMContentLoaded', function () {
  new Vue({
      el: '#root',
      data: {
        apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emailList: [],
        nOfEmail: 10,
      },
      methods: {
      },
      mounted() {
        for (let i = 0; i < this.nOfEmail; i++) {
          axios.get(this.apiUrl).then((element) => {
            this.emailList.push(element.data.response);
          });
        }
      }
  });
})