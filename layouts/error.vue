<template>
<div>
    
    <main>
        <div v-if="error.statusCode === 400">
            <h1>
                400: Bad Request
            </h1>
            <p>
                Seems like we don't like something you did! Since we don't use cookies, try accessing a normal page, OR check your firewall settings!
            </p>    
        </div>
        <div v-else-if="error.statusCode === 401">
            <h1>
                401: Authorization Required
            </h1>
            <p>
                Looks like ya tried to go to a page you can't use! This page may only be able to be accessed by CMAA staff, so try accessing a page you're meant to.
            </p>   
            <p>
                If you think you're supposed to be here, try checking to see if you have <nuxt-link to="/login">logged on</nuxt-link>! 
            </p>
        </div>
        <div v-else-if="error.statusCode === 403">
            <h1>
                403: Forbidden
            </h1>
            <p>
                Looks like ya tried to go to access one of our directories! We don't like that, so would you please access a page? Thank you.
            </p>
        </div>
        <div v-else-if="error.statusCode === 404">
        <article>
            <h1>
                404: Page Not Found
            </h1>
            <p>
                Looks like ya tried to go to a fake page! Luckily, we have many real pages that you can use!
            </p>
        </article>
        </div>
        <div v-else-if="error.statusCode === 405">
            <h1>
                405: Method Not Allowed
            </h1>
            <p>
                Seems like you're trying to do something we don't like. How Sneaky! 
            </p>    
        </div>
        <div v-else-if="error.statusCode === 414">
            <h1>
                414: URI Too Long
            </h1>
            <p>
                Seems you're doing something we really don't like. Try accessing something that actually exists!
            </p>    
        </div>
        <div v-else-if="error.statusCode === 416">
            <h1>
                416: Requested Range not Satisfiable
            </h1>
            <p>
                Something messed up when making a request to the servers. Try refreshing the page.
            </p>    
        </div>
        <div v-else-if="error.statusCode === 500">
            <h1>
                500: Internal Server Error
            </h1>
            <p>
                Sorry we missed ya! It seems like somethings mussin' up the servers, so check back later for better luck!
            </p> 
        </div>
        <div v-else-if="error.statusCode === 501">
            <h1>
                501: Not Implemented
            </h1>
            <p>
                Seems like we don't have the functionality you're looking for! We should have everything needed for our site, however in the event you aren't a lost wanderer, then you can request more features in our <nuxt-link to="/contact/">contact</nuxt-link> section.
            </p>    
        </div>
        <div v-else-if="error.statusCode === 502">
            <h1>
                502: Bad Gateway
            </h1>
            <p>
                Theres some problem with server connections at the moment. Expect resolution soon.
            </p>    
        </div>
        <div v-else-if="error.statusCode === 503">
            <h1>
                503: Service Unavailable
            </h1>
            <p>
                There is a problem with our servers. We have our smartest monkeys working to fix the problem!
            </p>    
        </div>
        <div v-else-if="error.statusCode === 504">
            <h1>
                504: Gateway Timeout
            </h1>
            <p>
                There was some long delay communicating between servers. This may be due to a borken connection or server. Try again later!
            </p>    
        </div>
        <div v-else>
            <h1>
                Unknown
            </h1>
            <p>
                There's probably some problem going on somewhere! We don't know what it is, but if you can't get to one of these links, it's not your fault!
            </p>
        </div>
    </main>
    
</div>
</template>

<script>
import pageheader from '~/components/page-header.vue'
import foot from '~/components/footer.vue'
export default {
    
    components: {
        pageheader,
        foot
    },
    props:[
        'error'
    ],
    head () {
        return {
        title: this.error.statusCode + ' | CMAA',
        meta: [
            { name: 'description', content: 'Error Page' },
            {
            name: 'keywords', content: 'karate, okinawan, Everett, tuite, kali, silat, JKD, muay thai, WA, washington, washington state, snohomish, judo, BJJ,jiujitsu,jiu-jitsu, brazilian,jiu,jitsu, aikido, aikijitsu, iaido, iaijitsu, tae,kwan,do, taekwando, krav,maga, boxing, filipino,boxing, law enforcement, military, martial, arts'
            },
            {
                charset: 'UTF-8'
            },
            {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=0'
            }
        ]
        }
    }
}
</script>

<style>
html, body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	min-height: 100%;
	overflow:overlay;
	overflow-x: hidden;
}
html{
	overflow-y: hidden !important;
}
body {
	display: flex;
	flex-direction: column;
	background-color: black;
	/*padding-left: calc(100vw - 100%);*/
}
.responsive-iframe-container {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px;
	height: 0;
	}
.responsive-iframe-container iframe,
.vresponsive-iframe-container object,
.vresponsive-iframe-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	}
header {
	background-image: none;
	background-color: #353839;
	color: #fcfcfc;
}

main {
	padding-left: 10%;
	padding-right: 10%;
	padding-top: 2%;
	padding-bottom: 2%;
	background-color: #330000;
	color: #fcfcfc;
}
footer{
	margin-top: auto;
	background-color: black;
	width: inherit;
	padding: 0;
}


@media screen and (max-width: 6in){
	
	#mobile-calendar{
		display: contents;
	}
	#desktop-calendar{
		display: none;
	}
	#text{
		position: relative;
		left: 10%;
		text-align: center;
		width: 80%;
		}

	p{
		font-size: 16px;
	}
	
	h2{
		width: 100%;
		border-bottom-color: lightgrey;
		border-bottom-style: solid;
		border-bottom-width: 5px;
		font-size: 25px !important; 
	}
}
@media screen and (min-width: 6in) and (max-width: 11in){
	#mobile-calendar{
		display: none;
	}
	#desktop-calendar{
		display: contents;
	}
	#text{
		text-align: center;
		height: auto;
		width: 100%;
	}

	p{
		font-size: 16px;
	}

	h2{
		width: 100%;
		border-bottom-color: lightgrey;
		border-bottom-style: solid;
		border-bottom-width: 5px;
	}
}
@media screen and (min-width: 11in){
	#text{
		text-align: center;
		height: auto;
		width: 100%;
	}

	#mobile-calendar{
		display: none;
	}
	#desktop-calendar{
		display: contents;
	}
	h2{
		width: 100%;
		border-bottom-color: lightgrey;
		border-bottom-style: solid;
		border-bottom-width: 5px;
	}
	p{
		font-size: 20px;
	}
}

article p{
	padding-top: 2%;
	padding-bottom: 2%;
}

.card-link{
	color: #000000;
}

.card-link:hover{
	color: #333333;
}

#mbutv9ebul_table li a {
	display: content;
}
#mbutv9ebul_table li div.buttonbg {
	display: content;
}

h3{
    border-bottom: 3px grey solid;
}


.form-all{
	width: 100% !important;
}
#to_home #title {
	height: auto;
	font-weight:normal;
	font-style:normal;
	width: 100%;
}

.iframe-container {
	padding-top: 56.25%;
	position: relative;
  }
   
  .iframe-container iframe {
	 border: 0;
	 height: 100%;
	 left: 0;
	 position: absolute;
	 top: 0;
	 width: 100%;
  }
   


  ::-webkit-scrollbar{
	width: 5px;
  }
  ::-webkit-scrollbar:hover{
	width:20px;
  }

  ::-webkit-scrollbar-track{
	background: rgba(0, 0, 0, 0)!important;
	
  }
  ::-webkit-scrollbar-thumb{
	background: darkred;
  }


</style>