<template>
 
<div>
  <!-- home pages  -->
  <div class="body ">
    <!-- <a class="btn btn-primary" href="/login" >Welcome To Dental Clinic</a> -->
    
    <div  id="container">
        <img src="https://news.harvard.edu/wp-content/uploads/2023/02/20230208_dental-1200x800.jpg">
        <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg0NjExNDZ8&ixlib=rb-4.0.3&q=85">
        <div id="reflection-gradient">

          <div>
            <button @click="showAlert" class="btn btn-primary">sign</button>
           </div>
        </div>
 

 <!-- dental-clinic -->

    <nav>
        <img class="logo" draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify">
        <hr class="hr1">
        
        <div>
          <p class="home-p pages">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img"  class="Svg-sc-1bi12j5-0 gSLhUO home-active-icon" viewBox="0 0 24 24">
              <path d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z"></path>
            </svg>
            Home
          </p>
          <p class="pages">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" class="Svg-sc-1bi12j5-0 gSLhUO search-active-icon" viewBox="0 0 24 24">
              <path d="M16.736 16.262A8.457 8.457 0 0019 10.5a8.5 8.5 0 10-3.779 7.067l4.424 5.18 1.521-1.299-4.43-5.186zM10.5 17C6.916 17 4 14.084 4 10.5S6.916 4 10.5 4 17 6.916 17 10.5 14.084 17 10.5 17z" fill="#B3B3B3"></path>
            </svg>
            Search
          </p>
          <p class="pages">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" class="Svg-sc-1bi12j5-0 gSLhUO collection-active-icon" viewBox="0 0 24 24">
              <path d="M14.617 3.893l-1.827.814 7.797 17.513 1.827-.813-7.797-17.514zM3 22h2V4H3v18zm5 0h2V4H8v18z"></path>
            </svg>
            Your Library
          </p>
          <p class="pages">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO">
              <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path>
            </svg>
            Favorite Songs
          </p>
        </div>
        <hr class="hr2">
        <div class="list">
          <div>
            <img src="https://i.discogs.com/_Js5PUQJRCfZ9eKpUII4yuiOqIqFLxy6tuwQ0Gvsko0/rs:fill/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDQ2/MjktMTY5MTg1NTE2/Mi01NzgzLmpwZWc.jpeg" alt="#">
            <p>Ruhun Sarışın</p>
            <a>Teoman</a>
          </div>
      
          <div>
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/e1/15/0c/e1150cc6-92ff-cc88-8be2-ea1b7aac55ab/cover.jpg/1200x1200bf-60.jpg" alt="#">
            <p>Ben Böyleyim</p>
            <a>Athena</a>
          </div>
      
          <div>
            <img src="https://images.genius.com/3e21343c160da9325b427c05ad7daa63.640x640x1.jpg" alt="#">
            <p>Hayalet Sevgilim</p>
            <a>İrem</a>
          </div>
      
          <div>
            <img src="data:image/jpeg;base64,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" alt="#">
            <p>Hikaye</p>
            <a>Adamlar</a>
          </div>
      
          <div>
            <img src="https://www.sozmuzik.com/wp-content/uploads/2023/07/mabel_matiz20-640x640.jpg" alt="#">
            <p>Numaracı</p>
            <a>Mabel Matiz</a>
          </div>
        </div>
        <hr class="hr3">
        <div class="play">
          <img src="https://cdns-images.dzcdn.net/images/cover/72a17df8e5c9a4dcb022ec900d09b804/500x500.jpg" alt="#22">
          <div class="container">
            <p class="songName">Biraz Delisin</p>
            <a class="name">Dolu Kadehi Ters Tut</a>
            <div>
              <p>2:16</p>
              <span></span>
              <p>3:53</p>
            </div>
            <div class="controls">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path></svg>
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO play-btn"><path d="M4.018 14L14.41 8 4.018 2z"></path></svg>
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO"><path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" ></path></svg>
            </div>
          </div>
        </div>
      </nav>
   
      <div>
        <div class="demo">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="pricingTable">
                            <div class="pricingTable-header">
                                <div class="price-value">
                                    <span class="amount">$9.99</span>
                                    <span class="duration">per month</span>
                                </div>
                                <h3 class="title">Standard</h3>
                            </div>
                            <ul class="pricing-content">
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>50GB Bandwidth</li>
                                <li class="disable">Maintenance</li>
                                <li class="disable">15 Subdomains</li>
                            </ul>
                            <div class="pricingTable-signup">
                                <a href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="pricingTable green">
                            <div class="pricingTable-header">
                                <div class="price-value">
                                    <span class="amount">$19.99</span>
                                    <span class="duration">per month</span>
                                </div>
                                <h3 class="title">Business</h3>
                            </div>
                            <ul class="pricing-content">
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>50GB Bandwidth</li>
                                <li>Maintenance</li>
                                <li class="disable">15 Subdomains</li>
                            </ul>
                            <div class="pricingTable-signup">
                                <a href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
       
 </div>
</div>
</div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import router from '../router';
 // Adjust the path based on your project structure
 document.body.onmousemove = function(e) {
      this.style.setProperty("--rot-y", `${80 * e.clientX / innerWidth - 40}deg`);
      this.style.setProperty("--rot-x", `${5 - 20 * e.clientY / innerHeight}deg`);
      this.style.setProperty("--zoom", 1.4 - .8 * e.clientY / innerHeight);
  }
  
  const url = location.href;
  if(url.startsWith("https://cdpn.io/finnchillah/fullcpgrid/") || url.startsWith("https://cdpn.io/username/fullcpgrid/")) {
      document.body.onmousemove({ clientX: .2 * innerWidth, clientY: .1 * innerHeight });
  }
// Define reactive variables
console.log(ref);
const showAlert = () => {
  router.push("/signin")
};
console.log(showAlert);
// Access the Vuex store
const store = useStore();


// Update Vuex store state on component creation
store.state.hideConfigButton = true;
store.state.showNavbar = false;
store.state.showSidenav = false;
store.state.showFooter = false;

// Handle cleanup before component is unmounted
onBeforeUnmount(() => {
  // Reset Vuex store state
  store.state.hideConfigButton = false;
  store.state.showNavbar = true;
  store.state.showSidenav = true;
  store.state.showFooter = true;
});


</script>



<style scoped>
.pricingTable{
  color: #fff;
  background: linear-gradient(to right,#3D4353,#2F3545);
  font-family: 'Signika Negative', sans-serif;
  text-align: center;
  padding: 15px 0 22px;
  border: 2px solid #7B8493;
  border-radius: 25px;
}
.pricingTable .pricingTable-header{ margin: 0 0 20px; }
.pricingTable .price-value{ margin: 0 0 15px; }
.pricingTable .price-value .amount{
  font-size: 50px;
  font-weight: 600;
  line-height: 50px;
  display: block;
}
.pricingTable .price-value .duration{
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
  display: block;
}
.pricingTable .title{
  background:linear-gradient(to right, #ED364A,#F35844);
  font-size: 45px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0;
  margin: 0;
}
.pricingTable .pricing-content{
  text-align: left;
  padding: 0;
  margin: 0 0 20px;
  list-style: none;
  display: inline-block;
}
.pricingTable .pricing-content li{
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: .5px;
  padding: 0 15px 0 25px;
  margin: 0 0 5px;
  position: relative;
}
.pricingTable .pricing-content li:last-child{ margin: 0; }
.pricingTable .pricing-content li:before{
  content: "\f00c";
  color: #2a8317;
  font-family: "Font Awesome 5 Free";
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  position: absolute;
  top: 1px;
  left: 0;
}
.pricingTable .pricing-content li.disable:before{
  content: "\f00d";
  color: #f32e30;
}
.pricingTable .pricingTable-signup a{
  color: #fff;
  background:linear-gradient(to right, #ED364A,#F35844);
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 7px 20px 5px;
  border-radius: 50px;
  display: inline-block;
  transition: all 0.3s ease;
}
.pricingTable .pricingTable-signup a:hover{ 
  text-shadow: 3px 3px 3px rgba(0,0,0,0.5);
}
.pricingTable.green .title,
.pricingTable.green .pricingTable-signup a{
  background:linear-gradient(to right,#59AB2F,#94D255);
}
.pricingTable.blue .title,
.pricingTable.blue .pricingTable-signup a{
  background:linear-gradient(to right,#5A86E7,#36CEDC);
}
@media only screen and (max-width: 990px){
  .pricingTable{ margin: 0 0 40px; }
}
.body {
  height: 100vh;
  margin: 0px;
  background-color: #000;
  overflow: hidden;
  perspective: calc(50vw + 50vh);
}

#container {
  width: 100vw;
  height: 100vh;
  transform: scale(var(--zoom)) rotateX(var(--rot-x)) rotateY(var(--rot-y));
  transition: transform 3s cubic-bezier(0, 0, 0, 1);
}

img {
  width: 50vw;
  height: 50vh;
  position: absolute;
  left: 25vw;
  border-radius: 5vh;
  object-fit: cover;
}
img:nth-child(1) {
  top: 25vh;
  z-index: 2;
}
img:nth-child(2) {
  top: 75vh;
  scale: 1 -1;
  filter: blur(calc(.7vw + .7vh));
}

#reflection-gradient {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0vw;
  top: 75vh;
  background-image: linear-gradient(#0000, #000 50%);
}
.body{
  text-align:center;
  height: 20pc;
  padding: 2pc;
  background:black;
}

svg{
  height:400px;
  width:400px;
  stroke-dasharray:2000;
  stroke-dashoffset:2000;
  animation:write 4s linear infinite;
}

@keyframes write{
  0%{
    stroke-dashoffset:2000;
  }
  100%{
     stroke-dashoffset:0;
  }
}
*{
  font-family:sans-serif;
  box-sizing:border-box;
  user-select:none;
  outline:none;
}
html, .body{
  width:100%;
  height:100%;
  position:relative;
}
.body{
  background-image:url("https://cdn.neowin.com/news/images/galleries/4714/1670778824_flower_(dark).jpg");
  background-position:center center;
  background-size:cover;
  background-repeat:no-repeat;
  overflow:hidden;
}

/*spotify*/
html{
    width:100vw;
    font-family:sans-serif;
    height:100vh;
    color:lightgray;
    overflow: hidden;
    user-select:none;
}
body{
    margin:0px;
    padding:0px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    overflow: hidden;
}
nav{
    width:270px;
    height:490px;
    background:rgba(000, 000, 000, 0.65);
    align-self:center;
    justify-self:center;
    border-radius:20px;
    position:relative;
    padding:10px;
}
.logo{
    width:95px;
    position:absolute;
    inset:15px;
    filter:grayscale(100%);
    -webkit-filter:grayscale(100%);
}
hr, .hr1{
    width:100%;
    height:1px;
    border:none;
    border-bottom:1px solid rgba(111, 111, 111, 0.60);
    margin-top:43px;
}
.pages{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    font-size:14px;
    box-sizing:border-box;
    cursor:pointer;
    user-select:none;
    padding:7px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    margin:6px 0px;
}
.pages svg{
    height:21px;
    margin-right: 10px;
}
.pages svg path{
    fill:lightgray;
}
.home-p svg path{
    fill:white;
}
.home-p, .pages:hover{
    color:white;
    background:rgba(000, 000, 000, 0.30);
}
.pages:hover svg path{
    fill:white;
}
.hr2{
    margin-top: 6px;
}
.list{
    display: flex;
    width:100%;
    overflow: auto;
    padding: 5px 0px;
}
.list div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width:90px;
    color:lightgray;
    cursor: pointer;
    height: 120px;
    margin: 7px;
}
.list div img{
    width:90px;
    filter:grayscale(60%);
    -webkit-filter:grayscale(60%);
}
.list div:hover img{
    filter:grayscale(0%);
    -webkit-filter:grayscale(0%);
}
.list div p{
    font-size: 10px;
    margin-top: 5px;
    font-weight: bolder;
    margin-bottom: 0px;
}
.list div a{
    font-size: 9px;
    margin-top: 3px;
}
.list div:hover{
    color:white;
}
.hr3{
    margin-top: 10px;
}
.play{
    max-width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.play img{
    width: 55px;
    margin-right: 5px;
}
.play .container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
.play .songName{
    font-weight: bolder;
    font-size: 12px;
    margin-top: 0px;
}
.play .name{
    font-size: 9px;
    margin-top: -10px;
}
.play .container div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.play .container div span{
    width: 100%;
    height: 2px;
    position: relative;
    display: block;
    background-color: rgba(111, 111, 111, 0.90);
    margin: 0px 5px;
    display: flex;
    align-items: center;
}
.play .container div span::after{
    position: absolute;
    content: "";
    width:60%;
    height: 100%;
    background-color: #1ed760;
}
.play .container div span::before{
    width:10px;
    height: 10px;
    position: absolute;
    content: "";
    background-color: #1ed760;
    opacity: 0;
    left: 60%;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
}
.play:hover .container div span::before{
    opacity: 1;
}
.play .container div p{
    font-size: 8px;
}
.play .container .controls{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2px;
}
.play .container .controls svg{
    fill:lightgray;
    border-radius: 50%;
    width: 16px;
    margin: 2px 5px;
    height: 16px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    cursor: pointer;
}
.play .container .controls svg.play-btn{
    background-color: lightgray;
    fill:black;
    padding: 2px;
}
.play .container .controls svg:hover{
    fill: #1ed760;
}
.play .container .controls svg.play-btn:hover{
    background-color: #1ed760;
    fill:lightgray;
}
::-webkit-scrollbar{
    height: 6px;
}
::-webkit-scrollbar-track{
    background: transparent;
}
::-webkit-scrollbar-thumb{
    background-color: rgba(111, 111, 111, 0.60);
    border-radius: 40px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    -ms-border-radius: 40px;
    -o-border-radius: 40px;
}
::-webkit-scrollbar-thumb:hover{
    background-color: rgba(111, 111, 111, 0.80);
}
/*menu*/
.nav-bar *{
  padding:0px;
  margin:0px;
}
.nav-bar{
  width:100%;
  height:50px;
  background:#3333;
  position:fixed;
  bottom:0px;
  left:0px;
  right:0px;
  display:flex;
  justify-content:center;
  align-items:center;
}
.icon{
  width:50px;
  height:50px;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:background;
  transition-duration:0.5s;
}
.nav{
  width:70%;
  min-width:600px;
  max-width:720px;
  height:400px;
  background:rgb(82, 82, 120, 0.6);
  position:fixed;
  bottom:-400px;
  border:1px solid #3333;
  border-radius:15px 15px 0px 0px;
  transition:bottom;
  transition-duration:0.5s;
  padding:25px;
}
.nav-button:focus + .nav, .nav:hover{
  bottom:0px;
}
.nav-bar svg{
  width:70%;
  height:70%;
}
.nav input{
  width:100%;
  height:35px;
  padding:10px;
  border-radius:10px;
  border:none;
  margin-top:20px;
  text-align:center;
  font-size:100%;
}
.box-container{
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:1%;
}
.location, .date, .store{
  color:whitesmoke;
  display:flex;
  justify-content:center;
  align-items:center;
  width:33%;
  height:100px;
  padding:20px;
  background:#3333;
  font-size:100%;
  border-radius:10px;
  cursor:pointer;
}
.date{
  flex-direction:column;
}
.location{
  background-image:url("https://c4.wallpaperflare.com/wallpaper/375/751/675/mountains-landscape-winter-snow-wallpaper-preview.jpg");
  background-position:center center;
  background-size:cover;
  background-repeat:no-repeat;
  overflow:hidden;
  filter:grayscale(40%);
}
.location svg{
  width:45px;
  height:45px;
  display:inline;
  margin-left:5px;
}
.store svg{
  width:70px;
  height:70px;
}
.programs{
  width:100%;
  height:100%;
  padding-top:20px;
  display:flex;
  justify-content:center;
  gap:15px;
}
.programs svg{
  width:80px;
  height:80px;
  background:#3333;
  padding:10px;
  cursor:pointer;
}
.icon:hover, .programs svg:hover{
  background:rgb(88, 86, 125, 0.6);
}
nav{
  visibility:hidden;
}
</style>