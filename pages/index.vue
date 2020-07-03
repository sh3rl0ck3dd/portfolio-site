<template>
  <div class="maindiv">
  	<div class="namediv">
        <br>
        <br>
        <br>
    <div class="headername">
    	Rajat Sharma
    </div>
    <div class="hrline" ></div>

    <div class="maindisc">
    	Software developer with Expirience in Vue.js React and javascript.
    </div>
    </div>
    <br>
    <br>
    <br>
    <div class = "row">
    	<div class="column-one-of-two">
    		<div class="columnseconddiv">

    		<div class="secondpic">
    			<img  class="secondimage" src="../assets/webapp.jpeg" alt="">
    		</div>
    		<div class="secondheader">
    			Web app design 
 
    		</div>
    		<div class="seconddisc">
    			Whether it's designing a new product or refreshing the design of an existing application, I'm happy to help making your project beautiful and easy to use.
    		</div>
    	</div>
    </div>
    	<div class="column-one-of-two">
    		<div class="columnseconddiv">

    		<div class="secondpic">
    			<img  class="secondimage" src="../assets/download.png" alt="">
    			
    		</div>
    		<div class="secondheader">
    			Front-end development
    		</div>
    		<div class="seconddisc">
    			Modern browsers offer a lot of possibilities but also demand for a specialized approach. I translate designs to production ready HTML, CSS and Javascript. Vue.js and React complete my front-end stack.
    		</div>
    	</div>
    </div>
</div>
<br>
<br>
    <div class = "row">
    	<div class="column-one-of-two">
    		<div class="columnseconddiv">

    		<div class="secondpic">
    			<img class="secondimage" src="../assets/ybrid.png" alt="">
    			
    		</div>
    		<div class="secondheader">
    			Hybrid Apps
    		</div>
    		<div class="seconddisc">
    			I can provide you with a custom mobile app design, tailored for your tech stack (whether your app is iOS, Android, React Native or based on web technology).
    	</div>
    </div>
    	</div>
    	<div class="column-one-of-two">
    		<div class="columnseconddiv">

    		<div class="secondpic">
    			<img class="secondimage" src="../assets/ml.png" alt="">
    			
    		</div>
    		<div class="secondheader">
    			Machine Learning
    		</div>
    		<div class="seconddisc">
    			The details of design are often hard to express through static images. Interactive prototypes can be helpful for both user testing and design implementation.
    		</div>
    	</div>
    </div>
    </div>

    </div>
  </div>
</template>
<style>
    * {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
*{
    /*outline:1px solid red;*/
}
.hrline{
  width: 540px;
  height: 4px;
  border-radius: 17%;
  margin:0px;
  background-color: #b30000;
  
}
    .maindiv{
    width:96vw;
    margin:0px 1vw;
    }
	.namediv{
		/*width: 100%;*/
        display: table;
        margin:0 auto;
		text-align: center;
	}
	.headername{
		font-size: 55px;
		font-weight: 700;
	}
	.maindisc{
        width: 90%;
		font-size: 24px;
		font-weight: 400;
	}
	.row{
		display: flex;
		width:100%;
        justify-content: center;
	}
	.column-one-of-two{
		width: 30%;
	}
	.secondimage{
		width: 150px;
		height: 150px;
        margin-bottom: 7px;
	}
	
	.columnseconddiv{
	width: 82%;
	margin:4%;
	}
	.secondheader{
		font-size: 20px;
		font-weight: 700;
        margin-bottom: 7px;

	}
    .seconddisc{
        font-size:18px;
    }
</style>
<script>  
</script>