<template>
    <div>
        <button class="button" :type="type">
            {{text}}
        </button>
    </div>
</template>

<script>
    export default {
        name:'ButtonComponent',
        props:{
            text:{
                type:String,
                required:true,
            },
            type:{
                type:String,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>