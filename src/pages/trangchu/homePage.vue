<template>
  <div class="home-page">
  <div class="col">
  <b-card >
    <b-tabs card>
      <b-tab title="Tab 1" active>
        <b-card-text>Tab contents 1</b-card-text>
      </b-tab>
      <b-tab title="Tab 2">
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>

<div class="col">
   <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card
      </b-card-text>
    </b-card>
     <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card
      </b-card-text>
    </b-card>
     <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card
      </b-card-text>
    </b-card>
     <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card
      </b-card-text>
    </b-card>
    <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card
      </b-card-text>
    </b-card>
     <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card .
      </b-card-text>
    </b-card> 
    <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card .
      </b-card-text>
    </b-card> 
    <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card .
      </b-card-text>
    </b-card>
        <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card .
      </b-card-text>
    </b-card>
        <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card .
      </b-card-text>
    </b-card>
        <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card .
      </b-card-text>
    </b-card>
        <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card .
      </b-card-text>
    </b-card>
        <b-card title="Title" class="card-tvgs">
      <b-card-text>
        This is a wider card .
      </b-card-text>
    </b-card>
    
    

</div>
     

    <div class="col-md-4">
      <div class="card-box">
		<div class="title-employee">Thông tin</div>
        <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>
        <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>
        <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>
        <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>
        <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>
      </div>
      <!-- end card-box-->
      <div class="card-box">
        <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>
            <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>    <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>    <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>    <b-card
          header="featured"
          header-tag="header"
          footer-tag="footer"
          title="Title"
        >
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>
      </div>
      <!-- end card-box-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.columnb {
  float: left;
  padding-left: 8px;
  padding-right: 8px;
}
.home-page{
	position: relative;
}
.col {
  width: 70%;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #000;
  background-clip: content-box;
  background-color: #fff;
}

.col-md-4 {
  width: 30%;
  position: absolute;
  right: 0;
  top: 20px;
}
.card-box {
  height: 300px;
  overflow-y: hidden;
  margin-top: 50px;
  margin-bottom: 50px;
}
.card-box:hover {
  overflow-y: scroll;
}
.title-employee{
	font-size: 20px;
}
.text-secondary {
    color: #000 !important;
}
.text-muted {
    color: #000 !important;
     -webkit-line-clamp: 1 !important;  
	
}
.card-tvgs{
  width: calc(70%/3.9);
  height: 150px;
  float: left;
  margin: 1%
}
.nav-tabs{
	background-color:#fff;
}
</style>