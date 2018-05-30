<template>
  <div class="hello-class">
<!--     <h1>{{ msg }}</h1> -->
      <div class="hello-two-columns">
        <aside></aside>
                  <section > <!-- style="overflow: auto;" -->
                      <article style="text-align: center; font-size: 1.5em; ">
                        <h2 style = "font-size: 1.8em; line-height: 2em;">Welcome!</h2>
                        <h3>My name is <br> Andre Rothweiler</h3>
                        <p>I’m an enthusiastic Web-Developer currently <br>
                        working as a Freelancer in Zurich, Switzerland.<br>
                        I love to learn and create new things!<br>
                        Just take a look on my site, to find out more<br>
                        about me!</p>
                      </article>
                      <button @click="navHome"> Check Portfolio!</button>
                  </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Welcome to Crypto Info'
       }
      },
    methods: {
      navHome(){
        this.$router.push('/portfolio');
      }
     }
    
  }
</script>

<style scoped>


/* animation */

section{
  flex: 3;
}
aside{
   flex: 2;
}
article h2{
  -webkit-animation-name: h1animation;
          animation-name: h1animation;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
}


article h3 {
  -webkit-animation-name: h1animation;
          animation-name: h1animation;
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
}
article p {
  -webkit-animation-name: h1animation;
          animation-name: h1animation;
  -webkit-animation-duration: 4s;
          animation-duration: 4s;
}

@-webkit-keyframes h1animation {
            0%   {opacity: 0;}
            40%  {opacity: 0;}
            100% {opacity: 1;}
          }

@keyframes h1animation {
            0%   {opacity: 0;}
            40%  {opacity: 0;}
            100% {opacity: 1;}
          }

          button {
            position: relative;
            margin-top: 70px;
            left: 50%;
            -webkit-transform: translateX(-50%) translateY(-50%);
                    transform: translateX(-50%) translateY(-50%);

            -webkit-animation-name: h1animation;
                    animation-name: h1animation;
            -webkit-animation-duration: 4s;
                    animation-duration: 4s;
          }


          button a {
           color: #d0cfc5;
          }
          button {
            background: rgba(0, 0, 0, 0.5);
            width: 200px;
            height: 60px;
            border: 0;
            font-size: 18px;
            border-radius: 4px;
            -webkit-transition: 0.6s;
            transition: 0.6s;
            overflow: hidden;
          }
          button:focus {
            outline: 0;
          }
          button:before {
            content: '';
            display: block;
            position: absolute;
            background: rgba(255, 255, 255, 0.5);
            width: 60px;
            height: 100%;
            opacity: 0.5;
            -webkit-filter: blur(30px);
                    filter: blur(30px);
            -webkit-transform: translateX(-100px) skewX(-15deg);
                    transform: translateX(-100px) skewX(-15deg);
          }
          button:after {
            content: '';
            display: block;
            position: absolute;
            background: rgba(255, 255, 255, 0.2);
            width: 30px;
            height: 100%;
            left: 30px;
            opacity: 0;
            -webkit-filter: blur(5px);
                    filter: blur(5px);
            -webkit-transform: translateX(-100px) skewX(-15deg);
                    transform: translateX(-100px) skewX(-15deg);
          }
          button:hover {
            background: #2c3e50;
            cursor: pointer;
          }
          button:hover:before {
            -webkit-transform: translateX(300px) skewX(-15deg);
                    transform: translateX(300px) skewX(-15deg);
            opacity: 0.6;
            -webkit-transition: .7s;
            transition: .7s;
          }
          button:hover:after {
            -webkit-transform: translateX(300px) skewX(-15deg);
                    transform: translateX(300px) skewX(-15deg);
            opacity: 1;
            -webkit-transition: .7s;
            transition: .7s;
          }


@media only screen and (max-width: 678px) {
  button {
    margin-top: 30px;
  }

  article h2{
    margin: -20px 0px -20px 0;
  }
}

@media only screen and (max-width: 678px) {
  button {
    margin-top: 30px;
  }

  article h2{
    margin: -20px 0px -20px 0;
  }
}

.hello-two-columns{
display: flex;
}

</style>
