<template>
	<div class="comp-header">
		<b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
			<div class="logo-box">
              <img 
			  width="32" height="32"
			  src="src/assets/logo.png" 
			  alt="">
            </div>
			<b-dropdown class="ultilyti" right text="Tiện ich">
				<b-dropdown-item>Item 1</b-dropdown-item>
				<b-dropdown-item>Item 2</b-dropdown-item>
				<b-dropdown-item>Item 3</b-dropdown-item>
			</b-dropdown>
			<div class="input-group">
				<input
					placeholder="Search for..."
				/>
				<span class="input-group-append">
					<button v-on:click="handleClear" class="btn btn-info" type="button">
						Clear!
					</button>
				</span>
			</div>
			<div>
				<b-icon icon="bell-fill" variant="info" font-scale="1.5"></b-icon>
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
	name: "tvgs",
	data() {
		return {};
	},
};
</script>

<style>
.acount > .btn-secondary {
	background-color: #fff;
	color: #000;
	border: none;
	margin-right: 5px;
}
.ultilyti > .btn-secondary {
	background-color: #fff;
	color: #000;
	border: none;
}
.ultilyti {
	position: relative;
	left: 15%;
}
.acount {
	position: absolute;
	right: 0;
}
.logo-box{
	position: absolute;
    top: 4px;
	left: 5%;
}
.logo-box:hover{
cursor: pointer;
}
.btn-toolbar {
	position: relative;
}
.btn-toolbar > .input-group {
	width: 40%;
	right: 30%;
	position: absolute;
}
.b-icon.bi {
	top: 25%;
	position: absolute;
	right: 20%;
}
.b-icon.bi:hover {
	cursor: pointer;
}
.comp-header{


}
</style>