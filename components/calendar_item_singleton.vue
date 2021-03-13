<template>
<div class="row" style="border-bottom: solid grey 2px; padding-bottom: 15px;padding-top:15px">
    <div v-if="state == 'display'">
        <p>Name: {{NAME}}</p>
        <p>Start Time: {{START}}</p>
        <p>End Time: {{END}}</p>
        <p>Color: {{COLOR}} <svg :style="`color:${COLOR}`" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
</svg></p>
        <p>Description: {{DESCRIPTION}}</p>
        <p>Date: {{DATE}}</p>
        <p>Override: {{OVERRIDE}}</p>
        <div style="margin:15px;">
        <button class="btn btn-primary" @click="state='edit'"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg> Edit</button>
        <button class="btn btn-danger" @click="remove"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-octagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg> Delete</button>
        </div>
    </div>
    <div v-if="state == 'edit'">
        <input type="text" class="form-control" placeholder="Name" v-model="name">
        <input type="time" class="form-control" placeholder="Start" v-model="start">
        <input type="time" class="form-control" placeholder="End" v-model="end">
        Color:<select class="form-control" v-model="color">
            <option value="#5661f5">Kids: #5661f5 (blue)</option>
            <option value="#3eb155">Adults: #3eb155 (green)</option>
            <option value="#9d2fbc">Combatives: #9d2fbc (purple)</option>
            <option value="#D79D37">Tai Chi: #D79D37 (orange)</option>
            <option value="#C8BF3C">Seminar: #C8BF3C (yellow)</option>
            <option value="#D855CD">Women's Self Defense: #D855CD (pink)</option>
            <option value="#767676">Black Belt: #767676 (grey)</option>
            <option value="#982020">No Class: #982020 (red)</option>
        </select>
        <input type="text" class="form-control" placeholder="Description" v-model="description">
        <input type="date" class="form-control" placeholder="Date" v-model="date">
        Override: <input type="checkbox" class="form-control" placeholder="Override" v-model="override">
        <div class="row col-12" style="margin:15px">
                <button class="btn btn-primary" @click="edit"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg> Commit</button>
                <button class="btn btn-danger" @click="state='display'"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-octagon-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg> Cancel</button>
            </div>
    </div>
</div>
</template>

<script>
export default{
    name:'calendar_singleton',
    data(){
        return{
            id: this.ID,
            name: this.NAME,
            start: this.START,
            end: this.END,
            override: this.OVERRIDE,
            color: this.COLOR,
            description: this.DESCRIPTION,
            date: this.DATE,
            state: 'display'
        }
    },
    props:{
        ID:{
            type:String,
            default:"'"
        },
        NAME:{
            type: String,
            default:""
        },
        START:{
            type: String,
            default:""
        },
        END:{
             type:String,
             default:""
        },
        OVERRIDE:{
            type:Boolean,
            default: false
        },
        COLOR:{
            type:String,
            default:""
        },
        DESCRIPTION:{
            type:String,
            default:""
        },
        DATE:{
            type:String,
            default:""
        }
    },
    methods:{
        async get(){
            const fetch = require('node-fetch');
            let response = await fetch('/.netlify/functions/singleton', {method:'GET'})
            let json = JSON.parse(await response.text())
            this.$store.dispatch('setSinCal', {cal: json})
        },
        async edit(){
            const fetch = require('node-fetch');
            const params={
                name: this.name,
                description: this.description,
                start: this.start,
                end: this.end,
                date: this.date,
                override: this.override,
                color: this.color,
                id: this.ID
            }
            const response = await fetch('/.netlify/functions/singleton', {method:'PUT', body:JSON.stringify(params)})
            console.log(response)
            if(response.status == 200){
                this.state= 'display'
                this.get()
            }
        },
        async remove(){
            const fetch = require('node-fetch');
            const response = await fetch('/.netlify/functions/singleton', {method:'DELETE', body:JSON.stringify({id:this.ID})})
            console.log(await response.text())
            if(response.status==200)
                this.get()
            
        }
    }
}</script>