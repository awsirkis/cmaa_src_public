<template>
  <div>
    
    <main>
      <article>
        <h1>Calendar</h1>
        <p>Below is a full calendar schedule. Regular classes are always here, but check back for our special events, including camps, seminars, and demonstrations.</p>
        <p><strong>All classes are on Zoom for now. Contact Sensei Rick for the link.</strong></p>
      </article>
      <calendar/>
    </main>
    
  </div>
</template>

<script>
import calendar from '~/components/calendar.vue'

export default {
    
  components: {
    calendar
  },
  head () {
    return {
      title: 'Calendar | CMAA',
      meta: [
        { name: 'description', content: 'Event Calendar for Cascade Martial Arts Academy' },
        
      ],
      
    }
  }
}
</script>

<style>
.responsive-iframe-container{
  font-size: 24px;
}
#app{
  overflow: hidden;
}
</style>