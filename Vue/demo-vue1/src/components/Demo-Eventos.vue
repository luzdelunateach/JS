<template>
    <button @click="botonClick()">Click me</button>
</template>
<script>


export default{
    data (){
        return {
            message: "Mensaje"
        }
    },
    methods: {
        botonClick: function() {
            this.$emit('TriggerNotification',this.message);
        }
    }

}
</script>
