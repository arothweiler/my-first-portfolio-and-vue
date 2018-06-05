<template>
  <div class="about-class">
    <aside></aside>
    <section>
      <h1 style="display:inline">{{nach}}</h1>
        <div class="cases">
          <div class="case" v-for="task in tasks" :key="task">
            <div><img @click="showModal"  :src="task.images" :alt="task.alt" height="250px" width="300px"></div>
               
                <port-modal v-show="isModalVisible" @close="closeModal"> 
                <h2 slot="header"></h2>
                <p slot="body">sdfsdf</p>
                
                </port-modal>

          </div>
         
         <!-- <app-button :nach='nach' @boy="nach = $event"></app-button>  -->
        </div> 
    </section> 
  </div>
</template>

<script>
import Modal from './modals/Modal.vue';

  export default {
    name: 'Portfolio',
    data() {
      return {
        isModalVisible: false,
        nach: 'Contact me',
         tasks: [  /* A bug in webpack or so, I cannot add internal pictures in a loop */
            { 
              title: "Clean my room",
              description: "This is a discription",
              images: "http://deluxecafemoree.com.au/wp-content/uploads/2016/01/sharpeis-in-car-dogs-in-hot-car-summer-url.jpg", 
              alt: "first"
            },
             { 
              title: 'holla', 
              images: "http://deluxecafemoree.com.au/wp-content/uploads/2016/01/sharpeis-in-car-dogs-in-hot-car-summer-url.jpg", 
              alt: "second"
            },
             { 
              title: 'bonjour', 
              images: "http://deluxecafemoree.com.au/wp-content/uploads/2016/01/sharpeis-in-car-dogs-in-hot-car-summer-url.jpg", 
              alt: "third"
            },
          

          ]
        }
      },
    components: {
      'port-modal': Modal
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  }
</script>
<style scoped>
h1{
  font-size: 3em;
  text-align: center;
  line-height: 1.9em;
}
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

.cases{
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  flex-wrap: wrap;
}


</style>