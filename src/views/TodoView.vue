<template>
  <div>
    <details>
      <summary>VUE-JS FORM</summary>
      <p><Form /></p>
    </details>

   <details>
      <summary>TODO ( CRUD APP )</summary>
      <p>
       <TODO />
      </p>
    </details>
    
      
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import TODO from '@/components/Todo.vue'

export default {
  name: "Todo",
  data() {
    return {
        
          };
  },
  methods: {
   
  },
  components: {
    Form , TODO
  }
};
</script>

<style scoped>
details{
    padding: 10px;
    background-color: #34495e;
    border-left: 3px solid #41b883;
    margin: 10px;
    cursor: pointer;
}
</style>