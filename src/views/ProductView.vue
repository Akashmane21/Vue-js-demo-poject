<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <h1>All Products List</h1>
    <hr>
    <div id="loader">
        <Loader />
    </div>
    <div class="allproducts">
        <div v-for="Product in ProductDataList">
            <div  v-on:click="Go(Product.id)"  class="Product">
                <div class="imgdiv">
                    <img :src="Product.image" alt="">
                </div>
                <div style="padding:10px">

                    <h2>{{Product.title}}</h2>
                <h3>{{Product.price}} ₹</h3>
                  <p style="font-size: 15px;">

         <span>{{Product.rating.rate}} </span> star out of <span> {{Product.rating.count}} </span> peoples
     </p>
                    <h4> 
                        <img  src="https://cdn0.iconfinder.com/data/icons/zlat-shopping-ecommerce-vol-1/25/tag_product_label-512.png" alt=""> 
                    {{Product.category}}</h4>
          
          <!-- <router-link :to="{ path: '/Product/'+ Product.id}" v-bind:tooltip="Alignment" append><a >Read more ></a></router-link> -->

                        </div>
            </div>
            </div>
       </div>
    </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import {ProductData} from '@/components/productList.js'

export default {
  name: "Product",
  data() {
    return {
      ProductDataList: ProductData
    };
  },
  components:{
      Loader
  },
  methods: {
    Go(id){
        console.log(id)
        this.$router.push(`/Product/${id}`)
    }
  },
    mounted() {
           document.getElementById("loader").style.display="none"
  }
};
</script>


<style>

h1{
    text-transform: uppercase;
}
.imgdiv{
display: flex;
align-items: center;
justify-content: center;
height: 200px;
overflow: hidden;
background-color: #fff;
border-radius: 10px 10px 0px 0px;
}

span{
    color: yellow;
}
.imgdiv > img{
height: 200px;
width: auto;
transition: 0.3s ease-in-out;
}
.imgdiv > img:hover{
height: 250px;
}
.Product{
    border-radius: 10px;
    width: 210px;
    margin: 20px;
    background-color: #34495e;
    /* padding: 10px; */
    overflow: hidden;
    flex: 1 1 200px;
    border: 2px solid #34495e;
    transition: 0.3s ease-in-out;
}
.allproducts{
    display: flex;
    flex-wrap: wrap;

}
.Product:hover{
    cursor: pointer;
border: 2px solid #41b883;
}
h2{
    color: #41b883;
    font-size: 16px;
    height: 50px;
    overflow: hidden;
}
h4{
    background-color: #41b883da;
    color: #ffffff;
    padding: 4px;
    width: max-content;
    /* height: 0px; */
    position: relative;
    top: -310px;
    left: -10px;
    border-radius: 10px 0px 10px 0px;
    
}

   h4 > img{
       height: 18px;
       position: relative;
       top: 5px;
    }

</style>