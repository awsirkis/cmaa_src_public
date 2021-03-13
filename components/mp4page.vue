<template>
  <div>
      <article>
        <h2>{{TITLE}}</h2>
        <p v-if="DESCRIPTION">{{DESCRIPTION}}</p>
            
            <div class="responsive-iframe-container">
                <iframe :src="`https://drive.google.com/file/d/${SRC}/preview`" style="border:none"></iframe>
            </div>
      </article>
  </div>
</template>

<script>
export default {
    
    name: 'mp4page',
    props:{
        SRC:{
            type: String,
            default: '1KS89z4GBDFoPv9qhtl1zknAMTV-Q8-vy'
        },
        TITLE:{
            type: String
        },
        DESCRIPTION:{
            type: String
        }
    }
}
</script>

<style>
video{
    width:100%;
    height:100%;
}
</style>