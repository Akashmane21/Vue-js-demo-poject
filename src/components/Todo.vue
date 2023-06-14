<template>

      <input placeholder="Enter Task here" type="text" @keyup.enter="Add" v-model="data" required />

    <div v-for="todo in Todos">
    <div style="display:flex;">
        <button @click="Delete(todo.Title)"> X </button>
            <label class="container">
                <input  v-on:click="update(todo.Title)" type="checkbox" class="nes-checkbox" v-model="todo.isComplete">
                <span class="checkmark"></span>
            </label>
             <del  v-on:click="update(todo.Title)" v-if="todo.isComplete">{{ todo.Title }}</del>
             <span  v-on:click="update(todo.Title)" v-else>{{ todo.Title }}</span>
     </div>
        </div>
</template>
<script>
export default({
    name:"TODO",
    data(){
        return{
            data:"",
             Todos:JSON.parse(localStorage.getItem("Todos"))
        }
    },
    methods:{
        Add(){
            let Todo = {
                Title : this.data,
                isComplete : false
            }
            this.Todos.push(Todo)
            localStorage.setItem("Todos" , JSON.stringify(this.Todos))
            this.data=""
       },
        update(title){
            this.Todos.forEach(element => {
                if(element.Title==title){
                    element.isComplete=!element.isComplete
                }
            });
            localStorage.setItem("Todos" , JSON.stringify(this.Todos))
        },
        Delete(title){
            this.Todos =this.Todos.filter(e => e.Title!=title)
            localStorage.setItem("Todos" , JSON.stringify(this.Todos))

        }
    }
})
</script>


<style scoped>
del{
    color: #007fff;
    position: relative;
    top: -3px;
}
span{
     /* position: relative;
    top: -3px;
    color: red; */
}
input{
    font-size: 20px;
    padding: 3px;
    margin-top: 10px;
}
button{
    background-color: orangered;
    padding: 7px 10px;
    border-color: red;
}
</style>