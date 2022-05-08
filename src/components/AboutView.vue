<template>
        <div class="main">
       
        <div class="content">
           
            <h1 class="sub-header">ABOUT ME</h1>
            <br/>
                         
            <p class="par">I am Monika Veerati based in Toronto, Canada. I am currently pursuing a master's degree in computer science from the University of new haven. 
                I'm passionate about web design and enjoy creating for both the web and mobile devices.</p>

               
        </div>

      
       

        <div class="content">
            
            <h1 class="sub-header" id="education">EDUCATION</h1>
            <br/>
<div style="padding-left: 20px;">
    
      <p >University of new haven, West Haven, CT. Pursuing master in computer science.</p>
  <br/>
       <p> Kakatiya Institute of Technology and Science(2014) .Bachelors in computer science engineering.</p>
    
    </div>



         

               
        </div>

        <div class="content">
            
            <h1 class="sub-header" id="blog">BLOG</h1>
            <br/>

            <p class="par par_exp">
                <i class="fa fa-github" style="font-size:36px"></i>

              <a href="https://github.com/monikv/monikv">https://github.com/monikv/monikv>

              </a>  
                
                </p>

               
        </div>

       


     </div>
   
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .main {
        width: 100%;
        background: #C1F4C5;
        background-position: center;
        background-size: cover;
    }

    .navbar {
        width: 100%;
        height: 75px;
        display: flex;
        justify-content: space-between;
        background-color: #FFBED8;
    }

    .icon {
        width: 275px;
        float: left;
        height: 70px;
    }

    .logo {
        color: #FF7BA9;
        font-size: 35px;
        font-family: Arial;
        padding-left: 20px;
        float: left;
        padding-top: 10px;
        margin-top: 5px
    }

    .menu {
        width: 875px;
        float: left;
        height: 70px;
    }

    ul {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
    }

        ul li {
            list-style: none;
            margin-left: 62px;
            margin-top: 27px;
            font-size: 15px;
        }

            ul li a {
                color: #FF7BA9;
                text-decoration: none;
                font-family: Arial;
                font-weight: bold;
                transition: 0.4s ease-in-out;
            }

                ul li a:hover {
                    color: #fa3d68;
                }

    .search {
        width: 330px;
        float: left;
        margin-left: 270px;
    }


    .content {
        height: auto;
        margin: auto;
        color: #65C18C;
        position: relative;
    }

        .content .par {
            padding-left: 20px;
            padding-bottom: 25px;
            font-family: Arial;
            letter-spacing: 1.2px;
            line-height: 30px;
            font-size: 16px;
        }



        .content h1 {
            font-family: 'Oswald', sans-serif;
            font-size: 20px;
            padding-left: 20px;
            margin-top: 5%;
            letter-spacing: 2px;
        }

    .content {
        border: none;
        margin-bottom: 10px;
        margin-left: 20px;
        font-size: 18px;
        border-radius: 10px;
        cursor: pointer;
        transition: .4s ease;
    }

    .sub-header {
        color: #FF7BA9;
    }

    .content a {
        text-decoration: none;
        color: #65C18C;
        transition: .3s ease;
    }

    .content span {
        color: #fa3d68;
        font-size: 65px
    }

    .card {
        width: 250px;
        height: 200px;
        background: linear-gradient(to top, rgba(0,0,0,0.8)50%,rgba(0,0,0,0.8)50%);
        left: 470px;
        transform: translate(0%,-5%);
        border-radius: 10px;
        margin-top: 3%;
        margin-left: 40%;
    }

    .form h2 {
        width: 220px;
        font-family: sans-serif;
        text-align: center;
        color: #FF008E;
        font-size: 25px;
        background-color: #FDBAF8;
        border-radius: 10px;
        margin: 2px;
        padding: 8px;
    }



    .a {
        text-decoration: none;
        color: #000;
        font-weight: bold;
    }



    .footer {
        padding: 25px;
        color: #65C18C;
        font-size: 16px;
    }

    .social {
        padding: 40px;
    }

    .fa {
        padding: 20px;
        font-size: 30px;
        width: 50px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
    }

        .fa:hover {
            opacity: 0.7;
        }

    .fa-facebook {
        background: #3B5998;
        color: white;
    }



    .fa-linkedin {
        background: #007bb5;
        color: white;
    }



    .fa-instagram {
        background: #af1770;
        color: white;
    }
</style>