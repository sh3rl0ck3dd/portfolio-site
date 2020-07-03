<template>
	<div class="parent">
		<div class="grow-left">
			 	
  				 <router-link to="/contact" class="list-li "><object class="list-li-demo"><font-awesome-icon  :icon="['fas', 'envelope']" ></font-awesome-icon></object></router-link> 	
  				<a  href="https://github.com/sh3rl0ck3dd" class="list-li" target="_blank"><object class="list-li-medium"><font-awesome-icon  :icon="['fab', 'github']" ></font-awesome-icon></object></a>
  				<a  href="https://www.linkedin.com/in/-rajat-sharma/"  class="list-li" target="_blank"><object class="list-li-link"><font-awesome-icon class="" :icon="['fab', 'linkedin']"></font-awesome-icon></object></a>
		</div>
	</div>
</template>
<style scoped >
.parent{
	position: relative;
}
.grow-left {
	right:0;
	top:200px;
	z-index: 100;
	position:fixed;
  direction: rtl;
  text-align: center;
}

object {
  display: block;
  border-radius: 3px;
  border: 1px solid #2F5B89;
  padding: 7px;
  transition: all, 0.5s;
  width: 40px;
  height:35px

}

object:hover {
  width: 80px;
}
.list-li{
	font-size: 25px;
	color: white;
}
.linklis{
	font-size: 15px;
	color: white;

}
.list-li:hover{
color: white;
}
.linklis:hover{
	text-decoration: none;
}
.list-li-medium{
	background-color: black;
	color: white;
}
.list-li-demo{
	background-color: #2F5B89;
}
.list-li-link{
	background-color: blue;

}
	
</style>
<script>
	
</script>