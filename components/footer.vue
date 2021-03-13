<template>
    <footer id="footer-wrapper" class="container-fluid">
        <div id="footer-grid" class="row justify-content-center text-center">        
            <div id="contact-info" class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <p>Address:</p>
                <p>2809 D Rockefeller Ave Everett WA 98201</p>
                <p>Phone:</p>
                <p><a href="tel:+1-425-766-2357">425-766-2357</a></p>
                <p>e-mail:</p>
                <p><a href="mailto:senseirick.cmaa@gmail.com">senseirick.cmaa@gmail.com</a></p>
            </div>
            <div class="col-3" style="display:none">
                <a href="https://www.facebook.com/cascademartialartsacademy/">
                    <img alt="image" src="~/assets/img/social-facebook-square1-512.png" class="sociallink">
                </a>
            </div>
            <div  class="col-3" style="display:none">
                <a href="#">
                    <img alt="image" src="~/assets/img/instagram_square.png" class="sociallink">
                </a>
            </div>
            <div class="col-3" style="display:none">
                <a href="#">
                    <img alt="image" src="~/assets/img/twitter_social.png" class="sociallink">    
                </a>
            </div>
                
        </div>
    </footer>
</template>

<script>
export default{
}
</script>

<style>


#footer-grid{
    padding-top: 25px;
    padding-bottom: 25px;
    height: 75%;
}


.sociallink{
    border-radius: 50%;
    width: 80%;
    height: auto;
}

#footer-grid a{
    align-content: center;
    height: 100%;
}

#footer-grid #contact-info{
    height: 100%;
}

#contact-info {
    color: white;
    font-size:36px !important;
}
</style>