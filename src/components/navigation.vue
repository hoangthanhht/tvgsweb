<template>
<div>
 <div class="nav">
  <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
   
    <b-dropdown class="mx-1 page-home" right text="Trang chủ">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>

    <b-dropdown class="mx-1 nav-tvgs" right text="Công việc">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>

    <b-dropdown class="mx-1 nav-tvgs" right text="Báo cáo">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    
    <b-dropdown class="mx-1 nav-tvgs" right text="Văn bản & tài liệu">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    
    <b-dropdown class="mx-1 nav-tvgs" right text="Hồ sơ">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    
    <b-dropdown class="mx-1 nav-tvgs" right text="Hợp đồng">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    
    <b-dropdown class="mx-1 nav-tvgs" right text="Nhân sự">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    
    <b-dropdown class="mx-1 nav-tvgs" right text="Hệ thống">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    
    <b-dropdown class="mx-1 nav-tvgs" right text="Dự án">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
   
  </b-button-toolbar>
</div>
</div>
</template>

<script>
export default {
name:'navi-tvgs'
}
</script>

<style>
.nav{
    background-color:indigo;
    margin-top: 10px;
}
.nav-tvgs > .btn-secondary {
    background-color: indigo;
  color: #fff;
  border: none;
  margin-left: 20px;
}
.page-home > .btn-secondary {
    background-color: indigo;
  color: #fff;
  border: none;
  margin-left: 5px;
}
</style>