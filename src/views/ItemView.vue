<template>
<div class="Item" >
        <div v-if="this.Item.rating!=undefined">
    <h1>{{Item.title}}</h1>
    <h5>
        <img  src="https://cdn0.iconfinder.com/data/icons/zlat-shopping-ecommerce-vol-1/25/tag_product_label-512.png" alt=""> 
    {{Item.category}}
    </h5>
      <div class="imgDiv">
          <img :src="Item.image" alt="">
      </div>
      <h3>{{Item.description}}</h3>
      <h1>{{Item.price}} ₹</h1>
     <p>
         <span>{{Item.rating.rate}} </span> Star out of <span> {{Item.rating.count}} </span> peoples
     </p>
         </div>


    <div id="loader" v-else >
     <Loader />
    </div>
     </div>
</template>

<script>
import Loader from '../components/Loader.vue'
import {ProductData} from '@/components/productList.js'

export default({
    name:"Item",
    data(){
        return{
            Item:ProductData.find(item => item.id==this.$route.params.id)
        }
    },
    mounted(){
        document.getElementById("loader").style.display="none"
    },
    components:{
        Loader
    }
})
</script>


<style>
h1{
    color:#41b883
}
h5{
    /* background-color: #41b883da; */
    color: gray;
    /* padding: 4px; */
    text-transform: capitalize;
    width: max-content;
    font-size: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    
}

   h5 > img{
       height: 40px;
      
       
    }

.Item > img{
    height: 400px;
    width: auto;
}
.imgDiv{
display: flex;
align-items: center;
justify-content: center;
height: 400px;
overflow: hidden;
background-color: #fff;
border-radius: 10px;
margin: 10px 0px;
}
.imgDiv > img{
height: 350px;
cursor: pointer;
width: auto;
transition: 0.3s ease-in-out;
}
.imgDiv > img:hover{
height: 400px;
}
p{
    font-size: 20px;
}
span{
    color: yellow;
}
</style>