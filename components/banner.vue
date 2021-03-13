<template>
    <div id="header-banner" class="container-fluid" style="padding-top:15px">
		<div class="alert alert-warning alert-dismissable">
			<button type="button" class="close" data-dismiss="alert">&times;</button>
			<strong>Notice: </strong>Cascade Martial Arst Academy is once again open. See the full notice <nuxt-link to="/contact/resources/re-re-opening" data-dismiss="alert">here.</nuxt-link>
		</div>
		<div class="row justify-content-center text-center">
			<div class="col-lg-2 col-md-2 d-none d-lg-block">
				<a class="external" href="http://www.kenshin-kan.com/">
					<img alt="image" class="logo" src="~/assets/img/osmkkf_logo_3.jpg" >
				</a>
			</div>
			<div class="d-none col-md-1 col-lg-1 col-xl-1"/>
			<div class="col-xs-8 col-sm-8 col-md-6 col-lg-4 col-xl-4">
				<nuxt-link id="to_home" to="/">
				<img alt="image" src="/cmaa_kanji_new.png" style="width:100%">
				</nuxt-link>
			</div>
			<div class="col-lg-2 col-md-2 d-none d-lg-block">
				<a class="external" href="https://parraacademy.com/">
					<img alt="image" class="logo" src="~/assets/img/parra_academy.jpg">
				</a>
			</div>
		</div>
        <div class="row justify-content-end p" style="margin-right:30px;padding-bottom:10px;">
            <div v-if="!$store.getters.isAuth">
                <p style="display:inline-block;margin:0;padding:0"><nuxt-link to="/profile/login" class="profile">Login</nuxt-link>
				<span > | <nuxt-link to="/shop/cart" class="profile"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>  {{$store.getters.cartQty}}</nuxt-link></span></p>
            </div>
			<div v-else style="margin:0;padding:0;">
				
				<p style="display:inline-block;margin:0;min-height:30px"><nuxt-link to="/profile" class="profile"><img alt="image" :src="$store.getters.image" style="border-radius: 50%;height:60px;">  {{$store.getters.name}}</nuxt-link> |
				<span id="signout" @click="logout">Sign Out</span>
				<span> | <nuxt-link to="/shop/cart" class="profile"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>  {{ $store.getters.cartQty}}</nuxt-link></span></p>
			</div>
        </div>
    </div>
</template>

<script>
export default {
    
	methods:{
		logout: function(){
			this.$store.dispatch('logout')
			this.$router.push('/')
			//location.reload();
		}
	}
}
</script>
<style>
#header-banner {
	align-content: center;
	background-image: url('/taki.png');
	background-size: 100% 100%;
	background-color: #B22222;
}
#header-banner .external .logo {
	width: 90%;
	height: auto;
	padding: 5%;
	border-radius:50%;
}
#to_home{
	width: 100%;
	align-content: center;
	
	text-decoration: none !important;
	color:white;
}
#to_home:hover{
	text-decoration: none !important;
	color:white;
}

.Button__button___1FrBC{
	background-color: #B22222 !important;
	margin:0px 0px 5px 0px !important;
	padding:0px !important;
	width:auto !important;
	min-width:auto !important;
	min-height:30px !important;
	font-size: inherit !important;
	line-height: auto !important;
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',Roboto, 'Helvetica Neue', Arial, sans-serif !important;
}

#signout, #signout:hover{
	color: white;
	text-decoration: none;
}
#signout:hover{
	opacity: 0.8;
	cursor: pointer;
}
.Input__inputLabel___nQolz{
	margin: 0px !important;
	display:none !important;
}
.Form__formField___2DWhT{
	margin: 0px !important;

}
.profile, .profile:hover{
	color: white;
	text-decoration:none;
}
.profile:hover{
	opacity:0.8;
}
@media screen and (max-width: 576px){
	#title{
		font-size: 2.5rem !important;
	}
}
@media screen and (max-width: 768px) and (min-width: 576px){
	#title{
		font-size: 3rem !important;
	}
}
@media screen and (max-width: 992px) and (min-width: 768px){
	#title{
		font-size: 3rem !important;
	}	
}
@media screen and (max-width: 1200px) and (min-width: 992px){
	#title{
		font-size: 4rem !important;
	}	
}
@media screen and (min-width: 1200px){
	#title{
		font-size: 5rem !important;
	}	
}

</style>