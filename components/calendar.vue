<template>
    <div class="container-fluid" style="background-color: white; color: black;border-radius:15px">
        <div class="row justify-content-center text-center">
<p @click="prev" class="col-1"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg></p>
            <h4 class="col-2 text-center">{{title}}</h4>
            <p @click="next" class="col-1"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
</svg></p>
        </div>
        <div class="row" style="margin:15px;">
            <div v-for="(item, index) in dateRange" :key="index" style="border: solid black 1px; width: 14.28%;text-align:center;">
                <p v-if="index == 0 || item.date.getDate() == 1">{{monthName(item.date.getMonth())}} {{item.date.getDate()}}</p>
                <p v-else>{{item.date.getDate()}}</p>
                <div class="card" v-for="(it, ind) in item.events" :key="ind" :style="`background:${it.color};margin:5%`">
                    <strong>{{it.name}}</strong>
                    <p>{{it.start}} - {{it.end}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    computed:{
        dateRange: function(){
            if(!this.start || !this.end){
                return []
            }
            const dates = []
            for(let i = this.start; i <= this.end; i.setDate(i.getDate()+1)){
                dates.push({
                    date: new Date(i),
                    events:this.dayCal(i)
                })
            }
            return dates
        },
        title: function(){
            let s = new Date()
            s.setDate(1)
            s.setMonth(s.getMonth() + this.offset)
            switch(s.getMonth()){
                case 0:
                    return 'January ' + (s.getYear() + 1900)
                case 1:
                    return 'February ' + (s.getYear() + 1900)
                case 2:
                    return 'March ' + (s.getYear() + 1900)
                case 3:
                    return 'April ' + (s.getYear() + 1900)
                case 4:
                    return 'May ' + (s.getYear() + 1900)
                case 5:
                    return 'June ' + (s.getYear() + 1900)
                case 6:
                    return 'July ' + (s.getYear() + 1900)
                case 7:
                    return 'August ' + (s.getYear() + 1900)
                case 8:
                    return 'September ' + (s.getYear() + 1900)
                case 9:
                    return 'October ' + (s.getYear() + 1900)
                case 10:
                    return 'November ' + (s.getYear() + 1900)
                case 11:
                    return 'December ' + (s.getYear() + 1900)
            } 
        },
        timeString: function(start, end){
            let s = ''
        }
    },
    methods:{
        next: function(){
            this.offset++
            let s = new Date()
            let e = new Date()
            s.setDate(1)
            e.setDate(28)
            s.setMonth(s.getMonth()+this.offset)
            e.setMonth(e.getMonth()+this.offset)
            while(s.getDate() != 1){
                s.setDate(s.getDate()-1)
            }
            while(s.getDay() != 0){
                s.setDate(s.getDate()-1)
            }
            while(e.getDate() != 1){
                e.setDate(e.getDate() + 1)
            }
            e.setDate(e.getDate() - 1)
            while(e.getDay() != 6){
                e.setDate(e.getDate() + 1)
            }
            this.start = s
            this.end = e
        },
        prev: function(){
            this.offset--
            let s = new Date()
            let e = new Date()
            s.setDate(1)
            e.setDate(28)
            s.setMonth(s.getMonth()+this.offset)
            e.setMonth(e.getMonth()+this.offset)
            while(s.getDate() != 1){
                s.setDate(s.getDate()-1)
            }
            while(s.getDay() != 0){
                s.setDate(s.getDate()-1)
            }
            while(e.getDate() != 1){
                e.setDate(e.getDate() + 1)
            }
            e.setDate(e.getDate() - 1)
            while(e.getDay() != 6){
                e.setDate(e.getDate() + 1)
            }
            this.start = s
            this.end = e

        },
        monthName: function(month){
            switch(month){
                case 0:
                    return 'Jan'
                case 1:
                    return 'Feb'
                case 2:
                    return 'Mar'
                case 3:
                    return 'Apr'
                case 4:
                    return 'May'
                case 5:
                    return 'Jun'
                case 6:
                    return 'Jul'
                case 7:
                    return 'Aug'
                case 8:
                    return 'Sep'
                case 9:
                    return 'Oct'
                case 10:
                    return 'Nov'
                case 11:
                    return 'Dec'
            }
        },
        dayCal: function(date){
            let rcal = this.$store.getters.recCal
            let scal = this.$store.getters.sinCal
            let today = new Date(date)
            let events = []
            for(let i in scal){
                let sString = scal[i].date.split('-')
                let sDate = new Date(sString[0], sString[1] - 1, sString[2])
                if(this.compare(today, sDate)){
                    events.push({
                        name: scal[i].name,
                        color: scal[i].color,
                        description: scal[i].description,
                        start: scal[i].start,
                        end: scal[i].end,
                        override: scal[i].override
                    })
                }
            }
            if(events.filter(function(item){return item.override}).length > 0){
                return events
            }
            for(let i in rcal){
                if(rcal[i].days[today.getDay()]){
                    events.push({
                        name: rcal[i].name,
                        color: rcal[i].color,
                        description: rcal[i].description,
                        start: rcal[i].start,
                        end: rcal[i].end
                    })
                }
            }
            return events
        },
        compare(d1, d2){
            return d1.getFullYear() == d2.getFullYear() &&
                    d1.getMonth() == d2.getMonth() &&
                    d1.getDate() == d2.getDate()
        },
    },
    data(){
        return{
            display:'month',
            selectedDay:'',
            start: null,
            end: null,
            offset: 0,
            month: null,
            year: null
        }
    },
    async mounted(){
        let s = new Date()
        let e = new Date()
        while(s.getDate() != 1){
            s.setDate(s.getDate()-1)
        }
        while(s.getDay() != 0){
            s.setDate(s.getDate()-1)
        }
        while(e.getDate() != 1){
            e.setDate(e.getDate() + 1)
        }
        e.setDate(e.getDate() - 1)
        while(e.getDay() != 6){
            e.setDate(e.getDate() + 1)
        }
        this.start = s
        this.end = e
        console.log(this.start, this.end)
    }
}
</script>