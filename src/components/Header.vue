<script setup>
   function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "sub-nav") {
        x.className += " responsive";
      } else {
        x.className = "sub-nav";
      }
    }
</script>

<template>
    <!-- Nav bar -->
    <nav class="header">
      <div class="container">
        <a class="nav-icon">Housing Market</a>
 <ul class="sub-nav" id="myTopnav">
    <li>
            <a href="javascript:void(0);" class="nav-link icon" style="font-size:18px;"  v-on:click="myFunction()">&#9776;</a>
       </li>
        
          <li class="nav-item">
            <router-link class="nav-link " to="/"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/about"> About Us </router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link " to="/properties"> Properties </router-link>
          </li>
         
        </ul>
      </div>
    </nav>
</template>

<style>
.header{
  position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    flex-direction: row;
    background-color :rgb(13, 110, 253)
}
a{
  color: white !important;
}
.container{
  display: flex;
  justify-content: space-between;
  width: 100%;
    padding: 10px;
    margin-right: 30px;
    margin-left: 30px;

}
.nav-link{
  color:white !important;
  padding-right: 20px !important;
  cursor: pointer;
  text-decoration: none;
}
.sub-nav{
  display: flex;
  flex-direction: row !important;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 0px !important;
  margin-top: 5px !important;
}
.nav-icon{
  padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
}
 .sub-nav .icon {
    display: none;
  }
   @media screen and (max-width: 700px) {
     .icon{
       display: block;
     }
   }
   .sub-nav{
    overflow: hidden;
}

  @media screen and (max-width: 700px) {
      .logo{
          width: 80%;
      }
  .sub-nav a {
    display: none;
  }
  .sub-nav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 700px) {
  .sub-nav.responsive {position: relative;}
  .sub-nav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
  }
  .sub-nav.responsive a {
    float: none;
    display: block;
    text-align: left;
    padding: 15px;
    width: 20%;
  }
  .sub-nav.responsive  {float: none;}
  .sub-nav.responsive  {position: relative;}
  .sub-nav.responsive  {
    display: block;
    width: 25%;
    text-align: left;
  }
}
</style>