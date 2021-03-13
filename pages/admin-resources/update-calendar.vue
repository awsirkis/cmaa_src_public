<template>
<div>
    <main>
        <h1>Manage Calendar</h1>
        <div style="background-color: lightgrey">
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item" @click="display = 'recurring'">
                    <a class="nav-link active" href="#" v-if="display == 'recurring'">Normal Schedule</a>
                    <a class="nav-link" href="#" v-else>Normal Schedule</a>
                </li>
                <li class="nav-item" @click="display = 'special'">
                    <a class="nav-link" href="#" v-if="display == 'recurring'">Special</a>
                    <a class="nav-link active" href="#" v-else>Special</a>
                </li>
            </ul>
            <div style="color: black;padding: 15px" v-if="display == 'recurring'">
                <div class="container-fluid">
                    <recurring v-for="(item, index) in $store.getters.recCal" :key="index" :NAME="item.name" :START="item.start" :END="item.end" :DAYS="item.days" :COLOR="item.color" :DESCRIPTION="item.description" :ID="item.id"/>
                </div>
                <div class='container-fluid'>
                    <h3>Add Recurring Event</h3>
                    <input type="text" v-model="recurring.name" placeholder="Name" class="form-control" required>
                    <input type="text" v-model="recurring.description" placeholder="Description" class="form-control">
                    Start Time: <input type="time" v-model="recurring.start" placeholder="Start Time" class="form-control" required>
                    End Time: <input type="time" v-model="recurring.end" placeholder="Start Time" class="form-control" required>
                    Color:<select class="form-control" v-model="singleton.color">
                        <option value="#5661f5">Kids: #5661f5 (blue)</option>
                        <option value="#3eb155">Adults: #3eb155 (green)</option>
                        <option value="#9d2fbc">Combatives: #9d2fbc (purple)</option>
                        <option value="#D79D37">Tai Chi: #D79D37 (orange)</option>
                        <option value="#C8BF3C">Seminar: #C8BF3C (yellow)</option>
                        <option value="#D855CD">Women's Self Defense: #D855CD (pink)</option>
                        <option value="#767676">Black Belt: #767676 (grey)</option>
                        <option value="#982020">No Class: #982020 (red)</option>
                    </select>
                    <div class="row">
                        <div class="col-md-1 col-6">
                            Sunday
                            <input type="checkbox" v-model="recurring.days[0]" class="form-control">
                        </div>
                        <div class="col-md-1 col-6">
                            Monday
                            <input type="checkbox" v-model="recurring.days[1]" class="form-control">
                        </div>
                        <div class="col-md-1 col-6">
                            Tuesday
                            <input type="checkbox" v-model="recurring.days[2]" class="form-control">
                        </div>
                        <div class="col-md-1 col-6">
                            Wednesday
                            <input type="checkbox" v-model="recurring.days[3]" class="form-control">
                        </div>
                        <div class="col-md-1 col-6">
                            Thursday
                            <input type="checkbox" v-model="recurring.days[4]" class="form-control">
                        </div>
                        <div class="col-md-1 col-6">
                            Friday
                            <input type="checkbox" v-model="recurring.days[5]" class="form-control">
                        </div>
                        <div class="col-md-1 col-6">
                            Saturday
                            <input type="checkbox" v-model="recurring.days[6]" class="form-control">
                        </div>
                    </div>
                    <button class="btn btn-primary" @click="postRecurring" style="margin-top: 15px">&#10133; Add Event</button>
                </div>
            </div>
            <div style="color: black;padding:15px" v-if="display == 'special'">
                <div class="container-fluid">
                    <singleton v-for="(item, index) in $store.getters.sinCal" :key="index" :NAME="item.name" :START="item.start" :END="item.end" :DATE="item.date" :OVERRIDE="item.override" :COLOR="item.color" :DESCRIPTION="item.description" :ID="item.id"/>
                </div>
                <div>
                    <h3>Add Special Event</h3>
                    <input type="text" v-model="singleton.name" placeholder="Name" class="form-control">
                    <input type="text" v-model="singleton.description" placeholder="Description" class="form-control">
                    Start Time: <input type="time" v-model="singleton.start" placeholder="Start Time" class="form-control">
                    End Time: <input type="time" v-model="singleton.end" placeholder="Start Time" class="form-control">
                    Color:<select class="form-control" v-model="singleton.color">
                        <option value="#5661f5">Kids: #5661f5 (blue)</option>
                        <option value="#3eb155">Adults: #3eb155 (green)</option>
                        <option value="#9d2fbc">Combatives: #9d2fbc (purple)</option>
                        <option value="#D79D37">Tai Chi: #D79D37 (orange)</option>
                        <option value="#C8BF3C">Seminar: #C8BF3C (yellow)</option>
                        <option value="#D855CD">Women's Self Defense: #D855CD (pink)</option>
                        <option value="#767676">Black Belt: #767676 (grey)</option>
                        <option value="#982020">No Class: #982020 (red)</option>
                    </select>
                    Date: <input type="date" v-model="singleton.day" placeholder="date" class="form-control">
                    Override Recurring Events: <input type="checkbox" class="form-control" placeholder="Override" v-model="singleton.override">
                    <button class="btn btn-primary" @click="postSpecial" style="margin-top: 15px">&#10133; Add Event</button>
                </div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import recurring from '~/components/calendar_item_recurring.vue'
import singleton from '~/components/calendar_item_singleton.vue'
export default{
    components:{
        recurring, 
        singleton
    },
    head(){
        return{
            title: 'Manage Calendar | CMAA',
            meta:[
                {name:'description', content:''}
            ]
        }
    },
    data(){
        return{
            recurring:{
                name:"",
                description:"",
                days:[false, false, false, false, false, false, false],
                start:"",
                end:"",
                color:"#FFFFFF"
            },
            singleton:{
                name:"",
                description:"",
                day:"",
                start:"",
                end:"",
                color:"#FFFFFF",
                override: false
            },
            display:'recurring'
        }
    },
  mounted(){
    this.get()
  },
  methods:{
    async get(){
        const fetch = require('node-fetch')
        const res = await fetch('/.netlify/functions/recurring', {method:'GET'})
        let json = JSON.parse(await res.text())
        this.$store.dispatch('setRecCal', {cal: json})
        const res2 = await fetch('/.netlify/functions/singleton', {method:'GET'})
            let json2 = JSON.parse(await res2.text())
        this.$store.dispatch('setSinCal', {cal: json2})
        console.log(this.$store.getters.sinCal)
    },
    async postRecurring(){
        const fetch = require('node-fetch')
        const params={
            name: this.recurring.name,
            start: this.recurring.start,
            end: this.recurring.end,
            days: this.recurring.days,
            color: this.recurring.color,
            description: this.recurring.description
        }
        console.log(params)
      const res = await fetch('/.netlify/functions/recurring', {method:"POST", body: JSON.stringify(params)})
      if(res.status==200)
        this.get()
    },
    async postSpecial(){
        const fetch = require('node-fetch')
        const params={
            name: this.singleton.name,
            start: this.singleton.start,
            end: this.singleton.end,
            date: this.singleton.day,
            color: this.singleton.color,
            description: this.singleton.description,
            override: this.singleton.override
        }
      const res = await fetch('/.netlify/functions/singleton', {method:"POST", body: JSON.stringify(params)})
      if(res.status==200)
        this.get()
    }
  }
}
</script>