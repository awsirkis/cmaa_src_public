<template>
  <div>
      <article>
        <h1>{{TITLE}}</h1>
        <p v-if="DESCRIPTION">{{DESCRIPTION}}</p>
        <div class="iframe-container">
          <iframe :src="SRC" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen v-if="SRC"></iframe>
        </div>
      </article>
  </div>
</template>

<script>
export default {
    
    name: 'videopage',
    props:{
        SRC:{
            type: String,
            default: null
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