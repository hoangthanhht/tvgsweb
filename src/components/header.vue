<template>
<div>
  <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
  <b-dropdown  right text="Tiện Ích">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
      <div class="col-6">
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
.acount> .btn-secondary {
   margin-left: 360px;
}
.input-group{
  margin-left: 300px;
}
</style>