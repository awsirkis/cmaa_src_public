<template>
  <div>
    
    <main>
      <article>
        <h1>Admin Resources</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <linkbutton SRC='certificate.png' NAME="Print Certificates" LNK="/admin-resources/print-certificates" DESCRIPTION="Print Advancement Certificates" />
              <linkbutton SRC='calendar.png' NAME="Update Calendar" LNK="/admin-resources/update-calendar" DESCRIPTION="Update the Calendar" />
              <linkbutton SRC='student.png' NAME="Manage Students" LNK="/admin-resources/students/" DESCRIPTION="Advance or Delete Students" />
              <linkbutton SRC='store.png' NAME="Manage Store" LNK="/admin-resources/store/" DESCRIPTION="Add, Edit, and Delete items in the Store" />
              <linkbutton SRC='knowledge.png' NAME="Upload Video" LNK="/admin-resources/videos" DESCRIPTION="Add, Edit, and Delete Video Lessons" />
              <linkbutton SRC='messages.png' NAME="Control Blog" LNK="/admin-resources/blog" DESCRIPTION="Add, Edit, or Delete Resource Posts" />
              <linkbutton SRC='messages.png' NAME="Attendance" LNK="/admin-resources/attendance" DESCRIPTION="" />
          
          </div>
        </div>
    </main>
    
  </div>
</template>

<script>
import linkbutton from '~/components/linkbutton.vue'
export default {
    
  components: {
    linkbutton
  },
  mounted(){
    if(this.$store.getters.role < 4){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Admin Resources | CMAA',
      meta: [
        { name: 'description', content: 'Administrator resources' },
        
      ],
    
    }
  }
}
</script>
