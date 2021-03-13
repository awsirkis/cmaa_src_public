<template>
    <main>
        <h1>
            Archive
        </h1>
        <div class="container-fluid">
            <div class="row justify-content-center text-center">
                <card NAME="11-25-2020" DESCRIPTION="Combatives" LNK="/resources/archive/2020/11/25" SRC="osmkkf_logo.png" />
                <card NAME="11-30-2020" DESCRIPTION="Youth" LNK="/resources/archive/2020/11/30" SRC="osmkkf_logo.png" />
                <card NAME="12-1-2020" DESCRIPTION="Calisthetics" LNK="/resources/archive/2020/12/1" SRC="osmkkf_logo.png" />
                <card NAME="12-2-2020" DESCRIPTION="Combatives" LNK="/resources/archive/2020/12/2" SRC="osmkkf_logo.png" />
                <card NAME="12-3-2020" DESCRIPTION="Kobudo" LNK="/resources/archive/2020/12/3" SRC="osmkkf_logo.png" />
                <card NAME="12-8-2020" DESCRIPTION="Karate" LNK="/resources/archive/2020/12/8" SRC="osmkkf_logo.png" />
                <card NAME="12-9-2020" DESCRIPTION="Combatives" LNK="/resources/archive/2020/12/9" SRC="osmkkf_logo.png" />
                <card NAME="12-10-2020" DESCRIPTION="Kobudo (No Audio)" LNK="/resources/archive/2020/12/10" SRC="osmkkf_logo.png" />
                <card NAME="12-14-2020" DESCRIPTION="Youth" LNK="/resources/archive/2020/12/14" SRC="osmkkf_logo.png" />
                <card NAME="12-15-2020" DESCRIPTION="Youth/Adults Karate" LNK="/resources/archive/2020/12/15" SRC="osmkkf_logo.png" />
                <card NAME="12-16-2020" DESCRIPTION="Combatives" LNK="/resources/archive/2020/12/16" SRC="osmkkf_logo.png" />
                <card NAME="01-04-2020" DESCRIPTION="Youth Karate" LNK="/resources/archive/2021/01/04" SRC="osmkkf_logo.png" />
                <card NAME="01-05-2020" DESCRIPTION="Youth/Adult Karate" LNK="/resources/archive/2021/01/05" SRC="osmkkf_logo.png" />
                <card NAME="01-06-2020" DESCRIPTION="Combatives" LNK="/resources/archive/2021/01/06" SRC="osmkkf_logo.png" />
                <card NAME="01-07-2020" DESCRIPTION="Kobudo" LNK="/resources/archive/2021/01/07" SRC="osmkkf_logo.png" />
                <card NAME="01-11-2020" DESCRIPTION="Karate" LNK="/resources/archive/2021/11/07" SRC="osmkkf_logo.png" />
                <card NAME="01-26-2020" DESCRIPTION="Karate" LNK="/resources/archive/2021/26/07" SRC="osmkkf_logo.png" />
                <card NAME="01-27-2020" DESCRIPTION="Karate" LNK="/resources/archive/2021/27/07" SRC="osmkkf_logo.png" />
                <card NAME="01-28-2020" DESCRIPTION="Kobudo" LNK="/resources/archive/2021/28/07" SRC="osmkkf_logo.png" />
            </div>
        </div>
    </main>
</template>

<script>
import card from '~/components/linkbutton.vue'
export default{
    components:{
        card
    },
    head(){
        return{
            title: 'Archive | CMAA',
            meta:[
                {
                    name:'description', content:'CMAA recordings'
                }
            ]
        }
    }
}
</script>