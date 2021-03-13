<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="position:sticky;top:0;z-index: 5">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Programs
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <nuxt-link class="dropdown-item" to="/programs/youth">Youth Karate</nuxt-link>
          <nuxt-link class="dropdown-item" to="/programs/adult">Adults Karate</nuxt-link>
          <nuxt-link class="dropdown-item" to="/programs/combatives">Combatives</nuxt-link>
          <nuxt-link class="dropdown-item" to="/programs/taichi">Tai Chi</nuxt-link>
          <nuxt-link class="dropdown-item" to="/programs/women">Women's Self Defense</nuxt-link>
        </div>
      </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contact
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <nuxt-link class="dropdown-item" to="/contact/">Ask Us a Question</nuxt-link>
          <nuxt-link class="dropdown-item" to="/contact/faq">FAQ</nuxt-link>
          <nuxt-link class="dropdown-item" to="/contact/signup">Sign Up</nuxt-link>
          <nuxt-link class="dropdown-item" to="/contact/pricing">Pricing</nuxt-link>
          <nuxt-link class="dropdown-item" to="/contact/resources">Resources</nuxt-link>
        </div>
      </li>
    <li class="nav-item">
        <nuxt-link class="nav-link" to="/calendar"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> Calendar</nuxt-link>
      </li>
    <li class="nav-item">
        <nuxt-link class="nav-link" to="/gallery">Gallery</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/instructors">Instructors</nuxt-link>
      </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <nuxt-link class="dropdown-item" to="/shop/weapons/" v-if="$store.getters.store.filter(item=>{return item.category === 'staff' || item.category === 'eku' || item.category === 'kama' || item.category === 'knife' || item.category === 'nunchaku' || item.category === 'sai' || item.category === 'tambo' || item.category === 'tekko' || item.category === 'tinbe' || item.category === 'rochin' || item.category === 'tonfa'}).length > 0">Weapons</nuxt-link>
          <nuxt-link class="dropdown-item" to="/shop/uniforms/" v-if="$store.getters.store.filter(item=>{return item.category === 'gi' || item.category === 'clothing'}).length > 0">Uniforms</nuxt-link>
          <nuxt-link class="dropdown-item" to="/shop/gear/" v-if="$store.getters.store.filter(item=>{return item.category === 'gloves' || item.category === 'legs' || item.category === 'headgear' || item.category === 'mouthguard'}).length > 0">Gear</nuxt-link>
          <nuxt-link class="dropdown-item" to="/shop/manual" v-if="$store.getters.isAuth && $store.getters.store.filter(item=>{return item.category === 'manual'}).length > 0">Manual</nuxt-link>
          <nuxt-link class="dropdown-item" to="/shop/camps/" v-if="$store.getters.store.filter(item=>{return item.category === 'event'}).length > 0">Camps and Seminars</nuxt-link>
        </div>
      </li>
      <li class="nav-item" v-if="$store.getters.isAuth">
        <nuxt-link class="nav-link" to="/resources/">Video Resources</nuxt-link>
      </li>  
      <li class="nav-item" v-if="$store.getters.role >= 4">
        <nuxt-link class="nav-link" to="/admin-resources/">Admin Resources</nuxt-link>
      </li>
      <li class="nav-item" v-if="$store.getters.role >= 4">
        <nuxt-link class="nav-link" to="/test">Test Features</nuxt-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<style>
.li {
    width: 14.28%
}
.li:last-of-type{
    width: 14.32%;
}
</style>