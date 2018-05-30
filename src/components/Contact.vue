<template>
   <div class="about-class">
  <aside></aside>
  <section>
      <h2 style="text-decoration: none;">About</h2>
      <p>I have a lots of skills, you can see here what I can do, when it comes to webdesign.</p>
      <p>Soon I will be able to create sites with React (JS-Frameworks), but until then I will master CSS/HTML and Javascript.</p>
      <p>Webdesign isn't easy, but if you invest your time, nothing is impossible!</p>
      <p>Besides these skills, I can also speak Russian, German, English, Ukrainian and little bit French</p>
      <p>In my sparetime, I also like to play violin and learn new things.</p>
      <p>---</p>
    <article class="container">
      <form class="contact"  method="POST">
        <h3>Contact me...</h3>
          <fieldset>
          <input name="Name" placeholder="Your name" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
          <input name="Email" placeholder="Your Email Address" type="email" tabindex="2" required>
        </fieldset>
        <fieldset>
          <input name="Phone" placeholder="Your Phone Number (optional)" type="tel" tabindex="3">
        </fieldset>
        <fieldset>
          <input name="Website" placeholder="Your Web Site (optional)" type="url" tabindex="4">
        </fieldset>
        <fieldset>
          <textarea name="Message" placeholder="Type your message here...." tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
          <input name="submit" type="submit" id="contact-submit" data-submit="...Sending"  value="Submit">
        </fieldset>
      </form>
    </article>
  </section>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Contact-Route'
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

/* other one */



.contact {
  background: rgba(0, 0, 0, 0.0);
  padding: 25px;
  margin: 10px;
  margin-top: 50px;
  width: 250px;
  margin: 0 auto;
}

.contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #787A79;
}

.contact h4 {
  margin: 5px 0 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: none;
  margin-right: 10px;
  min-width: 100%;


}

.contact input[type="text"],
.contact input[type="email"],
.contact input[type="tel"],
.contact input[type="url"],
.contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin-bottom:  3px;
  margin-right: 5px;
  padding: 8px
}

.contact input[type="text"]:hover,
.contact input[type="email"]:hover,
.contact input[type="tel"]:hover,
.contact input[type="url"]:hover,
.contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

.contact textarea {
  height: 100px;
  max-width: 100%;
}

#contact-submit {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #787A79;
  color: #FFF;
  margin: 0 0 0px;
  padding: 10px;
  font-size: 15px;
  width: 100%;
}

.contact button[type="submit"]:hover {
  background: #2c3e50;
  -webkit-transition: background-color 0.3s ease-in-out;
  -webkit-transition: background-color 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

.contact button[type="submit"]:active {
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}


.contact input:focus,
.contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}




</style>
