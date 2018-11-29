<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ContactList/> -->
    <!-- <BlogPost v-bind:title="parentTitle"
    @callParentFuction="parentFunction"  
    />   -->
    {{ message | capitalize }}
    <NavBar/>
    <SlotDemo>
      <!-- Hello from App component -->
      {{ message }}
      </SlotDemo>

      <BaseLayout>
      <template slot='header'>
        <h2>Title header slot</h2>
        </template>
      </BaseLayout>
      <TodoList
        :todos="todos">
        <template slot-scope="{ todo }">
          {{ todo.text }}
          <!-- a moze i gore u scope ="props" a dole props.todo.text -->
          </template>
        </TodoList>
   <router-view></router-view>
   
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactList from './components/ContactList.vue'  //inportujemo komponentu
import BlogPost from './components/BlogPost.vue'
import NavBar from './components/NavBar.vue'
import SlotDemo from './components/SlotDemo.vue'
import BaseLayout from "./components/BaseLayout.vue"
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  data(){
    return{
      todos: [
        {
          id: 1,
          text: 'Bay eggs'
        },
        {
          id:2,
          text: 'Bay milk' 
        },
        {
          id:3,
          text: 'Bay something' 
        }
      ],
      
      message: 'hello, world',
      
      parentTitle: 'Blog title'
                                          // ovde pravimo props za perent
    }
    
  },
  filters: {
        capitalize(value){
            if(!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
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
    NavBar  ,
    SlotDemo ,
    BaseLayout,
    TodoList
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
