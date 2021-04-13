<template>
  <div class="muchoso">
    <div class="btn-muchs">
      <b-button 
      @click="handleClick"
      v-bind:class="{ active: isActive }"
      size="sm" 
      class="mb-2 add-cv"> Hồ Sơ Nghiệm Thu </b-button>
    </div>

    <div class="btn-muchs">
      <b-button 
       @click="handleClick"
     v-bind:class="{ active: isActive }"
      size="sm" 
      class="mb-2 add-cv"> Hồ Sơ Thiết Kế </b-button>
    </div>

    <div class="btn-muchs">
      <b-button 
       @click="handleClick"
      v-bind:class="{ active: isActive }"
      size="sm" 
      class="mb-2 add-cv"> Loại Hồ Sơ Khác </b-button>
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
  methods:{
    handleClick(){
      console.log(e);
      isActive = !isActive;
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

</style>