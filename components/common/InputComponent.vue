<template>
    <div class="input-group">
        <label class="input-group-label mx-2" :for="name">{{name}}</label>
        <input class="input-group-input" :type="type" :name="name" :value="value" @input="updateValue($event.target.value)">
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
            name:{
                type:String,
                required:true
            }
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