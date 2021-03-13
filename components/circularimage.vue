<template>
    <img alt="image" :src="`${src}`" style="border-radius: 50%;">
</template>

<script>
export default{
    name: 'circularimage',
    props:{
        SRC:{
            type: String,
            default:'osmkkf_logo.png'
        }
    },
    computed:{
        src: function(){
            try{
                var m = require('~/assets/img/' + this.SRC)
            }
            catch(){
                var m = require('~/assets/img/osmkkf_logo.png')
            }
            return m.toString()
        }
    }
}
</script>