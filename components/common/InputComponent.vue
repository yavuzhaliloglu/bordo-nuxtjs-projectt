<template>
    <div class="input-group">
        <label class="input-group-label mx-2">{{title}}</label>
        <input class="input-group-input" :type="type" :value="value" @input="updateValue($event.target.value)">
    </div>
</template>

<script>
    export default {
        name:'InputComponent',
        props:{
            type:{
                type:String,
                required:true
            },
            value:{
                type:String,
            },
            title:{
                type:String
            },
        },
        methods:{
            updateValue(value){
                this.$emit('input',value)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>