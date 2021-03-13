<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Ranks</h1>
                <div class="container-fluid">
                    <div class="row justify-content-center text-center">
                        <linkbutton SRC="Ranks/kyu/9.png" LNK="/resources/requirements/9-kyu" NAME="9th Kyu" />
                        <linkbutton SRC="Ranks/kyu/8.png" LNK="/resources/requirements/8-kyu" NAME="8th Kyu" />
                        <linkbutton SRC="Ranks/kyu/7.png" LNK="/resources/requirements/7-kyu" NAME="7th Kyu" />
                        <linkbutton SRC="Ranks/kyu/6.png" LNK="/resources/requirements/6-kyu" NAME="6th Kyu" />
                        <linkbutton SRC="Ranks/kyu/5.png" LNK="/resources/requirements/5-kyu" NAME="5th Kyu" />
                        <linkbutton SRC="Ranks/kyu/4.png" LNK="/resources/requirements/4-kyu" NAME="4th Kyu" />
                        <linkbutton SRC="Ranks/kyu/3.png" LNK="/resources/requirements/3-kyu" NAME="3rd Kyu" />
                        <linkbutton SRC="Ranks/kyu/2.png" LNK="/resources/requirements/2-kyu" NAME="2nd Kyu" />
                        <linkbutton SRC="Ranks/kyu/1.png" LNK="/resources/requirements/1-kyu" NAME="1st Kyu" />
                        <linkbutton SRC="Ranks/dan/1.png" LNK="/resources/requirements/1-dan" NAME="1st Dan" />
                        <linkbutton SRC="Ranks/dan/2.png" LNK="/resources/requirements/2-dan" NAME="2nd Dan" />
                        <linkbutton SRC="Ranks/dan/3.png" LNK="/resources/requirements/3-dan" NAME="3rd Dan" />
                        <linkbutton SRC="Ranks/dan/4.png" LNK="/resources/requirements/4-dan" NAME="4th Dan" />
                        <linkbutton SRC="Ranks/dan/5.png" LNK="/resources/requirements/5-dan" NAME="5th Dan" />
                        <linkbutton SRC="Ranks/dan/6.png" LNK="/resources/requirements/6-dan" NAME="6th Dan" />
                        <linkbutton SRC="Ranks/dan/7.png" LNK="/resources/requirements/7-dan" NAME="7th Dan" />
                    </div>
                </div>
            </article>
            <article>
                <h1>Certifications</h1>
                <div class="container-fluid">
                    <div class="row justify-content-center text-center">
                        <linkbutton SRC="Ranks/karate-instructor.png" LNK="/resources/requirements/karate-instructor" NAME="Karate Instructor" />
                        <linkbutton SRC="Ranks/karate-instructor.png" LNK="/resources/requirements/kobudo-instructor" NAME="Kobudo Instrctor" />
                        <linkbutton SRC="Ranks/karate-instructor.png" LNK="/resources/requirements/tuite-instructor" NAME="Tuite Instructor" />
                        <linkbutton SRC="Ranks/law-instructor.png" LNK="/resources/requirements/law-instructor" NAME="Law Enforcement Instructor" />
                    </div>
                </div>
            </article>
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
    if(!this.$store.getters.isAuth){
      this.$router.push('/')
    }
  },
        head() {
            return {
                title: 'Testing | CMAA',
                meta: [
        { name: 'description', content: 'All Testing Requirements at Cascade Martial Arts Academy' },
        
      ],
    
    }
        }
    }
</script>