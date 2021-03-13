<template>
    <div>
        
        <main>
            <article>
                <h1>Pricing</h1>
                <p>There are two fees paid to different organizations, as well as purchasing your own equipment. Large-ticket pricing can be negotiated as needed directly with Sensei.</p>
            </article>
            <article>
                <h1>List of Prices</h1>
                <question QUESTION="Monthly Dues - to the Dojo" :ANSWER="['$135 per month for adults (16+) and $75 for youth. This monthly fee gets you unlimited access to regular classes (MTWThSa) for adults and 3 classes (MWSa) for youth. There is no distinction between a Karate student and a combatives student besides their karate rank.']" INDEX="0" />
                <question QUESTION="Annual Dues - to the Federation" :ANSWER="['$50 per year paid to the OSMKKF covers your recognition by Okinawa as a student.']" INDEX="1" />
                <question QUESTION="Testing Fees" :ANSWER="['Testing fees can be found under each section of our Testing page.']" INDEX="2" />
            </article>
        </main>
        
    </div>
</template>

<script>
    import question from '~/components/question.vue'
    export default {
    
        components: {
            question
        },
        head() {
            return {
                title: 'Pricing | CMAA',
                meta: [
        { name: 'description', content: 'Monthly and Annual Pricing for Cascade Martial Arts Academy' },
        
      ],
    
    }
    }
    }
</script>