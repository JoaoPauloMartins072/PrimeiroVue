const vm = new Vue({
    el: '#app',
    data: {
      showInput: true,
      name: ''       
    },
    components: {
      'custom-input': {
        template: `
        <input
          class="custom"
          :placeholder="placeholder"
          :value="value"
          :type="type"
          @input="$emit('input', value)"/>
        
        `,

        props: ['value', 'type', 'placeholder'],
        created() {
          console.log('Input component created.')
        }
      }
    }

  })