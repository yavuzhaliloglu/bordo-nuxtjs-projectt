<template>
    <div>
        <p>{{content.text}}</p>
        <h5>{{content.header}}</h5>
        <p>{{content.title}}</p>
    </div>
</template>

<script>
    export default {
        name:'OpportunitiesOneSlide',
        props:{
            content:{
                type:Object,
                required:true
            }
        },
        created(){
            console.log(this.content)
        }
    }
</script>

<style lang="scss" scoped>

</style>