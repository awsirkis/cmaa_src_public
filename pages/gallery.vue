<template>
  <div>
    
    <main>
      <article>
        <h1>Gallery</h1>
        <p>We have had a lot of fun classes and moments at Cascade Martial Arts Academy, but only a few get shown at a time. Here you can see all of the fun moments we've shared.</p>
      </article>
      <div class="container-fluid">
        <div class="row align-content-center">
          <article class="col-12 col-md-6">
            <h1>Recent Promotions</h1>
            <carousel2 ID="0" :images="['promotions/DSC_0325.jpeg','promotions/DSC_0326.jpeg','promotions/DSC_0331.jpeg','promotions/DSC_0332.jpeg','promotions/DSC_0334.jpeg','promotions/DSC_0337.jpeg','promotions/DSC_0338.jpeg','promotions/DSC_0341.jpeg','promotions/DSC_0345.jpeg','promotions/DSC_0343.jpeg']" :C_TITLE="['Jace Hicks','Nathan Webb','Alyssa Webb','Torrin Anderson', 'Hendricks McGinty','Gary Norris','Lien Hoa May Hollenbeck','Kennidy Kukkonen','Angelina Kukkonen', 'Jean Luc LeBlanc']" :CAPTIONS="['10th Kyu -> 9th Kyu','9th Kyu -> 8th Kyu','9th Kyu -> 8th Kyu','9th Kyu -> 8th Kyu','8th Kyu -> 7th Kyu','9th Kyu -> 8th Kyu','5th Kyu -> 4th Kyu','3rd Kyu -> 2nd Kyu','2nd Kyu -> 1st Kyu','4th Kyu -> 3rd Kyu']" />
          </article>
          <article class="col-12 col-md-6">
            <h1>Youth Classes</h1>
            <carousel ID="1" :images="['youth/tuite/3.jpeg', 'youth/tuite/7.jpeg']" />
          </article>
          <article class="col-12 col-md-6">
            <h1>Adult Classes</h1>
            <carousel ID="2" :images="['adults/karate/19.jpeg', 'adults/karate/37.jpeg', 'adults/karate/41.jpeg','adults/kobudo/2.jpeg', 'adults/kobudo/7.jpeg']" />
          </article>
          <article class="col-12 col-md-6">
            <h1>Combatives</h1>
            <carousel ID="3" :images="['combatives/kali/1.jpeg','combatives/muaythai/1.jpeg', 'combatives/muaythai/2.jpeg', 'combatives/muaythai/3.jpeg', 'combatives/muaythai/4.jpeg','combatives/silat/01.jpeg', 'combatives/silat/16.jpeg', 'combatives/silat/17.jpeg', 'combatives/silat/18.jpeg', 'combatives/silat/22.jpeg', 'combatives/silat/23.jpeg', 'combatives/silat/24.jpeg']" />
          </article>
          <article class="col-12 col-md-6">
            <h1>Seminars</h1>
            <carousel ID="4" :images="['combatives/kali/9.jpeg','combatives/kali/12.jpeg','combatives/kali/32.jpeg','combatives/kali/47.jpeg','combatives/kali/49.jpeg','combatives/kali/51.jpeg','combatives/kali/63.jpeg','combatives/kali/66.jpeg','combatives/kali/68.jpeg','combatives/kali/70.jpeg','combatives/kali/72.jpeg','combatives/kali/73.jpeg','combatives/kali/75.jpeg','combatives/kali/76.jpeg','combatives/kali/77.jpeg','combatives/kali/78.jpeg','combatives/kali/84.jpeg','combatives/kali/85.jpeg','combatives/kali/91.jpeg']" />
          </article>
          <article class="col-12 col-md-6">
            <h1>Women's Self Defense</h1>
            <carousel ID="5" :images="['womens/12.jpeg','womens/30.jpeg']" />
          </article>

        </div>
      </div>
    </main>
    
  </div>
</template>


<script>
    import carousel from '~/components/carousel.vue'
    import carousel2 from '~/components/carousel2.vue'
export default {
    
  components: {
    carousel,
    carousel2
  },
  head () {
    return {
      title: 'Gallery | CMAA',
      meta: [
        { name: 'description', content: 'Image Gallery for CMAA' },
        
      ],
    
    }
  },
}
</script>