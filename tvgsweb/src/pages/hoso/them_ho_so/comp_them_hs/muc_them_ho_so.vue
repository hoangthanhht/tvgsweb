<template>
  <div class="muchoso">
    <div class="btn-muchs">
      <!-- <b-button 
      @click="handleClick"
      v-bind:class="{ active: isActive }"
      size="sm" 
      class="mb-2 add-cv"> Hồ Sơ Nghiệm Thu </b-button> -->
      <router-link to="/them-ho-so" tag="b-button" class="add-cv">Hồ Sơ Nghiệm Thu</router-link>

    </div>

    <div class="btn-muchs">
      <!-- <b-button 
       @click="handleClick"
      v-bind:class="{ active: isActive }"
      size="sm" 
      class="mb-2 add-cv"> Hồ Sơ Thiết Kế </b-button> -->
      <router-link to="/ho-so-thiet-ke" tag="b-button" class="add-cv">Hồ Sơ Thiết Kế</router-link>

    </div>

    <div class="btn-muchs">
      <!-- <b-button 
       @click="handleClick"
      v-bind:class="{ active: isActive }"
      size="sm" 
      class="mb-2 add-cv"> Loại Hồ Sơ Khác </b-button> -->
      <router-link to="/ho-so-khac" tag="b-button" class="add-cv">Loại Hồ Sơ Khác</router-link>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isActive :false,
    }
   
  },
  props:{
    isActive:{type:Boolean,default:false}
  },
  methods:{
    handleClick(){
      console.log('comp con');
      this.$emit('handleClick')
    }
  },

};
</script>

<style scoped>
.muchoso {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.btn-muchs {
  /* margin-left: 3%;
  float: left;
  width: calc(100% / 7); */
  overflow: hidden;
  flex: auto;
  display: flex;
}
.add-cv {
  flex: auto;
}
.add-cv.active {
  background-color:darkviolet !important;
}
.router-link-exact-active{
  background-color: #00a53c;
}
</style>