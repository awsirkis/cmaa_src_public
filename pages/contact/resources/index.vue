<template>
    <div>
        
        <main>
            <article>
                <h1>Resources</h1>
                <p>A compilation of useful resources for both new and current students.</p>
            </article>
            <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <linkbutton NAME="Re-Re-Opening" LNK="/contact/resources/re-re-opening" DESCRIPTION="Reopening Procedures for January 2021" />
                    <linkbutton  NAME="Back Under Lockdown" LNK="/contact/resources/covid-pt-2" DESCRIPTION="We are under lockdown. Again. Join us on Zoom." />
                    <linkbutton SRC="COVIDSafeInstructorLogo.png" NAME="Reopening Procedures" LNK="/contact/resources/reopening" DESCRIPTION="Reopening Rules during COVID-19" />
                    <linkbutton NAME="Regarding COVID-19" LNK="/contact/resources/covid" DESCRIPTION="Announcement regarding training during the COVID-19 crisis" />
                    <linkbutton SRC="articles/ettiquette.png" NAME="Ettiquette" LNK="/contact/resources/ettiquette" DESCRIPTION="Dojo ettiquette, from formalities to language" />
                    <linkbutton SRC="articles/history.png" NAME="History" LNK="/contact/resources/history" DESCRIPTION="The grand history of the OSMKKF and Cascade Martial Arts Academy" />
                    <linkbutton SRC="articles/uniform.png" NAME="Uniform Maintenance" LNK="/contact/resources/uniform-maintenance" DESCRIPTION="How to maintain your gi and obi" />
                    <linkbutton SRC="ISMSKF_logo.png" NAME="Regarding the ISMSKF" LNK="/contact/resources/ismskf" DESCRIPTION="Regarding the delinquent ISMSKF" />
                    
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
        head() {
            return {
                title: 'Resources | CMAA',
                meta: [
            { name: 'description', content: 'Important Cascade Martial Arts Academy Resources' },
        
            ],
    
             }
        }
    }
</script>