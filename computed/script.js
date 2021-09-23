const vm = new Vue({
    el: '#app',
    data: {
      question:'',
      answer: 'Eu não posso responder nada se você não me perguntar!' 
    },

    methods: {
      getAnswer() {
        if (!this.question.includes('?')) {
          this.answer = 'Perguntas geralmente tem uma interrogação. ;-)'
          return
        }

        axios('https://yesno.wtf/api')
        .then(res => {
          this.answer = res.data.answer
        })
        .catch(err => {
          this.answer = 'Erro ao recuperar informação da API' + err
        })
      }
    },

    created(){
      this.deboucedGetAnswer = _.debounce(this.getAnswer, 500)
    },

    watch: {
      question() {
        this.answer = 'Esperando voce terminar de digitar...'
        this.deboucedGetAnswer()
      }
    }
  })

