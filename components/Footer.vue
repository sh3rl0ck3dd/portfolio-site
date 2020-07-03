<template>
  <div class="main">
    <div class="hrline" ></div>
  <p class="footerp">Find me online or <span><a class="email" href="mailto:rajatsharmaz831.com"> get in touch.</a></span></p>
  <div class="iconline">
  	<a   href="https://github.com/sh3rl0ck3dd" class="list-li spacefront" target="_blank"><object  class="margr"><font-awesome-icon  :icon="['fab', 'github']" ></font-awesome-icon></object> GITHUB</a>
  				<a  href="https://www.linkedin.com/in/-rajat-sharma/"  class="list-li space" target="_blank"><object class="margr"><font-awesome-icon class="" :icon="['fab', 'linkedin']"></font-awesome-icon></object> LINKEDIN</a>
  </div>
  </div>
  	
</template>
<style scoped>
.main{
  margin:100px;
}
.footerp{
	font-size: 20px;
}
.hrline{
  width: 200px;
  height: 2px;
  margin:0px;
  border-radius: 17%;
  background-color: #b30000;
  
}
.email{
	text-decoration:none;
	color: #b30000;
}
.email:hover{
	font-weight: 600;
}
.iconline{
	font-size: 19px;
}
.list-li{
	text-decoration: none;
	color:#202020;
	margin-right: 4px;
	margin-top: 5px;
}
.margr{
	margin-right: 4px;
}
.space{
	margin-left: 20px;
	margin-right: 4px;
}
.list-li:hover{
	color:#b30000;
}
.spacefront{
	margin-left: 20px;
}
</style>
<script>

</script>