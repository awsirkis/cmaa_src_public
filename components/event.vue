<template>
    <article>
        <h3>{{DATE}}</h3>
        <p>{{DESCRIPTION}}</p>
    </article>
</template>

<script>
export default {
    
    name: 'event',
    props:{
        DATE:{
            type: String
        },
        DESCRIPTION:{
            type: String
        }
    }
}
</script>