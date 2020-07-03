<template>
    <div class="main">
      <div class="row">
         <nuxt-link
                    tag="div"
                    to="/"
                    class="nav-elements">
                       Home
          </nuxt-link>
            <nuxt-link
                    tag="div"
                    to="/work"
                    class="nav-elements">
                       Work
          </nuxt-link>
            <nuxt-link
                    tag="div"
                    to="/"
                    class="nav-elements">
                       About
          </nuxt-link>
            <nuxt-link
                    tag="div"
                    to="/contact"
                    class="nav-elements">
                       Contact
          </nuxt-link>
      </div>
    </div>
</template>


<style scoped>
  .row{
    display:flex;
margin-left: 60px;

  }
  .nav-elements{
    margin:25px 15px 5px 15px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
  }
  .nav-elements:hover{
    color: #b30000;

  }
</style>

<script>

 
</script>


