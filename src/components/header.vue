<template>
<div class="comp-header">
  <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
  <b-dropdown class="ultilyti" right text="Tiện Ích">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
        <div class="input-group">
            <input 
                v-bind:value="strSearch"
                v-on:input="handleSearch"
                type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button 
                    v-on:click="handleClear"
                    class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    <b-dropdown class="acount" right text="Nguyễn Hồng Quang">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    </b-button-toolbar>
</div>
</template>

<script>
export default {
    name: 'tvgs',
    data() {
        return {
           
        }
    }

}
</script>

<style>

.acount >.btn-secondary{
  background-color: #fff;
  color: #000;
  border: none;
  margin-right: 5px;
}
.ultilyti >.btn-secondary{
  background-color: #fff;
  color: #000;
  border: none;
  margin-left: 5px;
}

.acount{
  position: absolute;
  right: 0;
}
.input-group{
}
.btn-toolbar {
 position: relative;
}
.btn-toolbar >.input-group {
    width: 40%;
    right: 30%;
    position:absolute;
}
</style>