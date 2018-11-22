<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ContactList/> -->
    <!-- <BlogPost v-bind:title="parentTitle"
    @callParentFuction="parentFunction"  
    />   -->
    <NavBar/>
   <router-view></router-view>
   
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactList from './components/ContactList.vue'  //inportujemo komponentu
import BlogPost from './components/BlogPost.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  data(){
    return{
      parentTitle: 'Blog title'
                                          // ovde pravimo props za perent
    };
  },
  methods: {
    parentFunction(name){
      console.log('Hi from parent, ' + name);
    }
  },
  components: {
    HelloWorld,
    ContactList  ,
    BlogPost ,
    NavBar   
    // i ovde treba navesti da smo inportovali
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
