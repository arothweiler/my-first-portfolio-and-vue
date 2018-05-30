<template>
<div>
    <p> {{nach}} und {{message}} </p>
     <button @click="changeStatus">Change Status</button> 
     <button @click="resetName">Our Funktion</button>
</div>
</template>

<script>
export default {
    props:{
            nach:{
                type: String
            },     
    } ,
    data(){
        return {
           message: "hello World",
                         }
                },
           template: "<p>{{message}}  (<button @click='changeStatus'>change</button>)" ,
           methods: {
                changeStatus(){
                 this.nach = "Riz Carlton";
                },
                resetName(){
                    this.nach = "Max";
                    this.$emit('boy', this.nach);
                    
                }
            }
        }


</script>
