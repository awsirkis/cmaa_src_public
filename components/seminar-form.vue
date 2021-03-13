<template>
<form :action="`${submit}`" :method="`${method}`">
    <heading/>
    <div id="shoppinglist">
        <uniformitem v-for="(item,index) in items" v-bind:key="item.id" :availableItems="availableItems" :index="index" v-on:childToParent="childChange"/>
        
    </div>
    <div class="row justify-content-center" style="padding-top:15px">
        <button class="btn btn-secondary col-3" @click="addItem">Add Item</button>
    </div>
    <totals/>
    <contactinfo />
    <div class="row justify-content-center text-center">
        <div id="adult-waivers" v-show="numAdult > 0">
            <h3>WAIVER AND RELEASE FROM LIABILITY (TO BE COMPLETED BY PARTICIPANT)</h3>
            <ol>
                <li>Subject: Participant recognizes and expressly agrees that participating in martial arts and its related activities is an inherently dangerous activity. Further, Participant recognizes that certain safety precautions must be followed, yet even strict adherence to those procedures does not guarantee nor does CMAA guarantee Participant’s safety.</li>
                <li>Waiver and Release from Liability: Participant understands that CMAA assumes no responsibility for injuries or illnesses that Participant may sustain a) as a result of Participant’s physical condition, b) resulting from Participant’s participation in this activity, c) as a result of another participant’s or third person’s actions, or d) as a result of Participant’s use of CMAA’s facilities, field and/or equipment in connection with this activity.</li>
                <li>The Participant releases and agrees to hold harmless, defend and indemnify CMAA and its directors, officers, employees and agents from and against any and all claims for personal injury (including loss of life) and all other losses or damages (except those caused entirely by the gross negligence or intentional conduct of CMAA) that the Participant may suffer as a result of the Child’s participation and/or enrollment in Cascade Martial Arts Academy.</li>
                <li>Medical Consent: Participant grants permission to CMAA and its employees and agents to take the Participant to a licensed physician for medical treatment, emergency surgery, or hospitalization if Participant becomes ill, sustains an injury, or otherwise requires medical treatment or attention and CMAA are unable to contact the Emergency Contact listed by Participant. The Participant gives consent to any licensed physician to administer drugs or medicine or to perform such medical procedures as that physician determines necessary for the relief of pain and to preserve the Participant’s life or health. Participant further authorizes CMAA to give first aid, CPR or other treatment by a qualified staff member to Participant</li>
                <li>Property Loss: Participant understands and agrees that CMAA is not responsible for personal property that is lost, damaged, or stolen in connection with this activity.</li>
                <li>Binding Effect: This Agreement shall be binding upon Participant, his or her heirs, estate, successors, and legal representatives</li>
                <li>Entire Agreement: This Agreement represents the entire agreement between the parties. This Agreement shall not be modified or amended except by an agreement in writing signed by both parties.</li>
                <li>Acceptance: If any portions of this waiver and release are held to be invalid, Participant agrees that the remaining terms shall continue to be in full legal force and effect. Participant understands and agrees that this Waiver and Release is binding upon me and my heirs, estates and legal representatives.</li>
                <li>Pictures/ Video: The participant acknowledges and understands that by signing this agreement, they agree to have their picture/ video taken for promotional purposes of the dojo and training. No compensation will be given for any pictures or video that is taken of anyone. If the participant desires to not have their picture/ video taken, you are allowed to remove yourself from field or view of the camera. </li>
            </ol>
            <p>THIS DOCUMENT CONTAINS A RELEASE AND WAIVER OF LIABILITY. PLEASE READ IT CAREFULLY BEFORE SIGNING</p>
            <p>I have read and voluntarily signed this Waiver and Release from Liability (Signature required for each adult):</p>
            <div class="form-row" v-for="(item,index) in adult" :key="index + 'adult'" style="padding:15px 0px">
                <input type="text" :name="`adult-signature-${index}`" class="form-control" :placeholder="`Sign Here for participant ${index + 1}`" required>
            </div>
        </div>
        <div id="child-waivers" v-if="numChild > 0">
            <h3>WAIVER AND RELEASE FROM LIABILITY (TO BE COMPLETED BY PARENT OR GUARDIAN OF MINOR PARTICIPANT) </h3>
            <ol>
                <li>The undersigned parent(s) or legal guardian(s) (“Parent”) grants permission for their son or daughter (“Child”) to participate in Cascade Martial Arts Academy (“CMAA”) and all its associated activities.</li>
                <li>The Parent grants permission to CMAA and its employees and agents to take the Child to a licensed physician for medical treatment, emergency surgery, or hospitalization if Child becomes ill, sustains an injury, or otherwise requires medical treatment or attention and CMAA are unable to contact the Parent. The Parent gives consent to any licensed physician to administer drugs or medicine or to perform such medical procedures as that physician determines necessary for the relief of pain and to preserve the Child’s life or health.</li>
                <li>The Parent agrees to assume the responsibility for all medical, transportation, rescue and other related expenses incurred on behalf of the Child.</li>
                <li>The Parent releases and agrees to hold harmless, defend and indemnify Cascade Martial Arts Academy, Athens Karate School, All Okinawa Karate &#38; Kobudo Club, OSMKKF, AOSKKF and its directors, officers, employees and agents from and against any and all claims for personal injury (including loss of life) and all other losses or damages (except those caused entirely by the gross negligence or intentional conduct of CMAA) that the Child or the Parent may suffer as a result of the Child’s participation and/or enrollment in Cascade Martial Arts Academy.</li>
            </ol>
            <p>PLEASE READ CAREFULLY. THIS DOCUMENT CONTAINS A RELEASE AND WAIVER OF LIABILITY, AND PARENT/ GUARDIAN SIGNATURE, NOTES AS ACKNOWLEDGEMENT OF R&#38;W OF L</p>
            <div class="form-row" v-for="(item,index) in child" :key="index + 'minor'" style="padding:15px 0px">
                <input type="text" :name="`minor-signature-${index}`" class="form-control" :placeholder="`Sign Here for participant ${index + 1}`"  required>
            </div>
        </div>
    </div>
    
    <div class="row justify-content-center" style="padding-top:15px">
        <input type="submit" class="btn btn-secondary" value="Sign Up">
    </div>
    
    <input type="text" name="_formname" :value="`${formname}`" hidden readonly />
</form>

</template>

<script>
import contactinfo from "~/components/shoppingcontact.vue"
import totals from "~/components/shopping-total.vue"
import heading from "~/components/shopping-header.vue"
import uniformitem from '~/components/shoppingitem.vue'

export default{
    props:{
        submit:{
            type:String,
            default:""
        },
        method:{
            type:String,
            default: "POST"
        },
        availableItems:{
            type:Array,
            defauly:null
        },
        formname:{
            type:String,
            default:null
        }
    },
    data(){
        return{
            numItems:0,
            subtotal: 0,
            items: [],
            numAdult: 0,
            numChild: 0,
            child:[],
            adult:[]
        }
    },
    components:{
        contactinfo,
        totals,
        heading,
        uniformitem
    },
    methods:{
        addItem: function(){
            this.items.push({
                id: this.numItems++
            })
        },
        childChange: function(value1, value2){
            this.numAdult = value1
            this.numChild = value2
            this.child = []
            this.adult = []
            for(let i = 0; i < this.numAdult; ++i){
                this.adult.push(i)
            }
            for(let i = 0; i < this.numChild; ++i){
                this.child.push(i)
                
            }
            console.log(this.child.length, this.adult.length)
        }

    }
}
</script>

<style>
form{
    width: 100%;
    background-color: lightgrey;
    color: black;
    border-radius:15px;
}
#shoppinglist{
    width:100%;
}
</style>
