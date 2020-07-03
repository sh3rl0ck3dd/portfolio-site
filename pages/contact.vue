<template>
	<div clas="maindiv">
		<br>
		<br>

		<div class="headblock">
		<div class="heading">
			Contact
		</div>
		 <div class="hrline" ></div>
		 <br>
		 <br>
		 <div class="disc">Think we can make great things together?</div>
			<div class="mail">Let's get in touch!</div>
			<br>
			<div class="name"> Rajat Sharma</div>
			<div class="email "><a class="email" href="mailto:rajatsharmaz831.com"> rajatsharmaz831@gmail.com</a></div>
			<div class="link"> <a class="email"  target="_blank" href="https://www.linkedin.com/in/-rajat-sharma"><font-awesome-icon class="icomm" :icon="['fab', 'linkedin']"></font-awesome-icon>Linkedin</a></div>

		 </div>
		 
		 
	</div>
</template>
<style scoped>
.maindiv{
	width: 100vw;
	font-size: 20px;

}
.heading{	
	font-weight: 900;
	font-size: 54px;
}
.headblock{
text-align: center;
position: relative;
  display: table;
margin: 0 auto;

}
	.hrline{
  width: 300px;
 height: 4px;
  border-radius: 17%;
  margin:0px;
  background-color: #b30000;
  
}
.disc{
	font-size: 20px;
}
.mail{
	font-size: 18px;
	font-weight:500 ; 
	color: #b30000;
	cursor: pointer;

}
.mail:hover{
	font-weight:900 ; 
	/*font-size: 20px;*/


}
.name{
	font-size: 20px;

}
.email{
	text-decoration:none;
	color: #b30000;
	font-size: 18px;
	
}
.email:hover{
	font-weight: 900;
}
.icomm{
	font-size: 23px;
	transform: translateY(3px);
}
</style>
<script >
	
</script>