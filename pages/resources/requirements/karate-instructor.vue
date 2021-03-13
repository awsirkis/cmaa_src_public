<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem :REQ="['Minimum rank of Shodan', 'Instruction of 1-hour karate class', 'Advanced knowledge of all karate techniques up to rank', 'Written Test']" PRICE_ADULT='75.00'  TIME="1 year" AGE="17 Years" />
            </article>
        </main>
        
    </div>
</template>

<script>
        import testingitem from '~/components/testingitem.vue'    
export default {
        components: {
            testingitem
        },
  mounted(){
    if(!this.$store.getters.isAuth){
      this.$router.push('/')
    }
  },
        head() {
            return {
                title: 'Karate Instructor | CMAA',
                meta: [
        { name: 'description', content: 'Karate Instructor requirements' },
        
      ],
                
            }
        }
    }
</script>