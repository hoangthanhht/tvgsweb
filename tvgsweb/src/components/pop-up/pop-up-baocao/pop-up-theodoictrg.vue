<template>
  <div class="pop-up open-pop">
    <h2 class="pop" v-b-popover.hover="'I am popover content!'" 
    title="Popover Title" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, maxime
      id neque rem nemo harum, perspiciatis pariatur officia vero nobis,
      officiis alias quas voluptatum. Distinctio exercitationem minima magnam
      quisquam velit!
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style>
.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
}
.pop-up.open-pop{
opacity: 1;
  visibility: visible;
}
.pop{
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    position: absolute;
}
</style>