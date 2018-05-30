<template>
  <div id="app">
    <ul class="hello-class">
        <router-link :to="{ name: 'Home' }" tag="li" active-class="active" exact>Home</router-link>
        <router-link to="/about" tag="li" active-class="active">About</router-link>
        <router-link to="/portfolio" tag="li" active-class="active"> Portfolio</router-link> 
        <router-link to="/contact" tag="li" active-class="active">Contact</router-link>
    </ul>
    <router-view class="about-class" style="overflow: auto;"></router-view>
    <footer>
      <div class="unserfooter">
        <p>This site was created with modern CSS3 and JavaScript and it might not work with your browser!</p>
        <p>{{myName +" "+ myFooter()}}</p>
    </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
    data () {
        return {
        msg: 'Welcome to Crypto Info',
        myName: 'André Rothweiler'
       }
      },
  methods: {
    myFooter(){
      return ("copyright @ " + new Date().getFullYear())
    }

  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  
}
#app ul{
  background-color: #2c3e50;
  display: flex;
  list-style-type: none;
}
#app ul li{
  width: 100px;
  height: 100%;
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
}
#app ul li:hover{
  box-shadow: 0px 2px 4px grey;
  background: #C1CFD0;
  transform: scale(1.05);
  transition: all 300ms ease-out;
  cursor: pointer;
}

#app .active {
  background: #C1CFD0;
  color: #2c3e50;
}



/* general settings */
.hello-class{
  background: lightblue;
  width: 100vw;
  height: 8vh;
  
}
.hello-two-columns{
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.about-class{
  width: 100vw;
  height: 84vh;
  background: #C1CFD0;
  color: #2c3e50;
  flex: 2;

}

/* aside picture */

aside{
  background: url('./assets/portrait.jpg');
  flex: 3;
  background-repeat: no-repeat;
  background-size: cover;
  height: 84vh;  
}

footer{
  background-color: #2c3e50;
}
</style>