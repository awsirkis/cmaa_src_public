<template>
    <nav>
      <link href="/assets/css/mbcsmbutv9.css">
      <div id="mbutv9ebul_wrapper">
        <ul id="mbutv9ebul_table" class="mbutv9ebul_menulist css_menu">
          <li class="li">
            <div class="buttonbg">
              <nuxt-link to="/">Home</nuxt-link>
            </div>
          </li>
          <li class="li">
            <div class="arrow buttonbg">
              <nuxt-link to="/programs/" class="button_2">Programs</nuxt-link>
            </div>
            <ul>
              <li>
                <nuxt-link to="/programs/youth" title="">Youth Karate</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programs/adult" title="">Adult Karate</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programs/combatives" title="">Combatives</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programs/taichi" title="">Tai Chi</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programs/women" title="">Women's Self Defense</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/programs/enforcement" title="">Law Enforcement</nuxt-link>
              </li>
            </ul>
          </li>
          <li class="li">
            <div class="arrow buttonbg">
              <nuxt-link class="button_6" to="/contact/">Contact</nuxt-link>
            </div>
            <ul>
              <li>
                <nuxt-link to="/contact/faq" title="">FAQ</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact/signup" title="">Sign Up</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact/pricing" title="">Pricing</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact/resources/" title="">Federation Resources</nuxt-link>
              </li>
            </ul>
          </li>
          <li class="li">
            <div class="buttonbg">
              <nuxt-link to="/calendar">Calendar</nuxt-link>
            </div>
          </li>    
          <li class="li">
            <div class="buttonbg">
              <nuxt-link to="/gallery">Gallery</nuxt-link>
            </div>
          </li>        
          <li class="li">
            <div class="buttonbg">
              <nuxt-link to="/instructors">Instructors</nuxt-link>
            </div>
          </li>
          <li class="li">
            <div class="arrow buttonbg">
              <nuxt-link class="button_6" to="/shop/">Shop</nuxt-link>
            </div>
            <ul>
              <li>
                <nuxt-link to="/shop/weapons/" title="">Weapons</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/shop/uniforms/" title="">Uniforms</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/shop/testing/" title="">Testing</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/shop/camps" title="">Camps and Seminars</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <script src="mbjsmbutv9.js"></script>
    </nav>
</template>

<script>
</script>

<style>
@media screen and (min-width: 6in){
  .li{
    width: 14.28%;
  }
  .li:last-of-type{
    width: 14.32%;
  }
}
@media screen and (max-width: 6in){
  .li {
    width: 100%;
    
  }
}
</style>
