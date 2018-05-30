
<template>
   <div class="about-class">
<!--     <h1>{{ msg }}</h1> -->
<aside></aside>
<section>
  <h2 style="text-decoration: none;">About</h2>
  <p>I have a lots of skills, you can see here what I can do, when it comes to webdesign.</p>
  <p>Soon I will be able to create sites with React (JS-Frameworks), but until then I will master CSS/HTML and Javascript.</p>
  <p>Webdesign isn't easy, but if you invest your time, nothing is impossible!</p>
  <p>Besides these skills, I can also speak Russian, German, English, Ukranian and little bit French</p>
  <p>In my sparetime, I also like to play violin and learn new things.</p>
  <p>---</p>
    <article>
        <progress value="70" max="100"></progress><span>HTML5</span>
        <progress value="75" max="100"></progress><span>CSS3</span>
        <progress value="45" max="100"></progress><span>JavaScript</span>
        <progress value="50" max="100"></progress><span>jQuery</span>
        <progress value="25" max="100"></progress><span>Gimp</span>
    </article>
</section>
 
</div>
</template>

<script>



  export default {
    name: 'About',
    data () {
      return {
        msg: 'About-Route'
      }
    }
  }
</script>
<style scoped>
.about-class{
  display: flex;
  justify-content: center;
  flex-direction: row;
}
section {
  text-align: center;
  overflow: auto;
  flex: 3;
}


aside{
  background: url('../assets/violin.jpg');
  flex: 2;
  background-repeat: no-repeat;
  background-size: cover;
  height: 84vh;  
}

section h2 {
  text-decoration:underline;
}
article{
  width: 80%;
  margin: 0 auto;
}

 article span {
  top: -25px;
  left: 2%;
  position: relative;
  float: left;
  font-size: 1.4em;
  font-weight: bolder;
  font-family: monospace;
  color: #fff;
    

}

progress {
  background-color: white;
  height: 3.5em;
  width: 100%;
  margin-bottom: -20px;

}

progress::-webkit-progress-bar {
  background-color: #e0eaf0;
}

progress::-webkit-progress-value {
  background-color: #329ad1;
}

progress::-moz-progress-bar {
  background-color: #329ad1;
}


</style>
