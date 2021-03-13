<template>
    <div class="testing_item">
        <div v-id="TIME">
            <h3>Minimum Time in Grade</h3>
            <p>{{TIME}}</p>
        </div>
        <div v-if="AGE">
            <h3>Minimum Age (Never Waived)</h3>
            <p><b>Minimum Age: </b>{{AGE}}</p>
        </div>
        <div>
            <h3>Testing Fee</h3>
            <p v-if="PRICE_ADULT">Adults: ${{PRICE_ADULT}}</p>
            <p v-if="PRICE_YOUTH">Youth: ${{PRICE_YOUTH}}</p>
            <p v-else>Youth: N/A</p>
            <p>Testing fees go towards paying for your official certificate from Okinawa.</p>
        </div>
        <div>
            <h3>Requirements:</h3>
            <ul v-if="REQ">
                <li v-for="item in REQ" :key="item">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    name: 'testingitem',
    props:{
        REQ: {
            type: Array,
            default: null
        },
        PRICE_ADULT:{
            type: String
        },
        PRICE_YOUTH:{
            type: String,
            default: null
        },
        TIME:{
            type: String,
            default: null
        },
        AGE:{
            type: String,
            default: null
        }
    }
}
</script>