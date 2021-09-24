const customInput = {
  props: ['value', 'placeholder', 'id', 'label', 'required'],
  data: () => ({
    content: this.value
  }),
  methods: {
    handleSubmit(e) {
      this.content = e.target.value
      this.$emit('input', this.content)
    }
  },
  template: `
    <div class="custom-input">
      <label :for=id">{{ label }}</label>
      <input
      type="text"
      :id="id"
      :placeholder="placeholder"
      @input="handleSubmit"
      />
    {{ required && '*obrigatorio' }}
    </div>
  `
}

Vue.component('custom-input', customInput) //(definir componente de forma global)

const vm = new Vue({
    el: '#app',
    data: {
      usuario: {
        nome: '',
        telefone:''
      }
      
    },
    //(componente de forma local)
    // components: {
      //   'custom-input': customInput      
    // }
  })