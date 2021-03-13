<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem :REQ="['Passai Sho', 'Pinan Godan', 'Black Belt Ippon Kumite','Bo Yondan', 'Sai Sandan', 'Tonfa Basics','1st Dan Tuite #1-5']" PRICE_ADULT='150.00' PRICE_YOUTH="150.00" TIME="24 Months" AGE="18 Years" />
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
                title: '2nd Dan Testing | CMAA',
                meta: [
        { name: 'description', content: '2nd Dan Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>