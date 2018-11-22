<template>
    <div>
        <h3>{{ title }}</h3>
        <button @click='functionInChild'>Call parent function</button><br>
        {{message}}
        <br>
        {{getReverseMessageMethod()}}
        <br>
        {{getReverseMessageComputed}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: 'Ovo je neka poruka!'
        }
    },
    props: ['title'],
    methods: {
        functionInChild(){
            console.log('child function');
            this.$emit('callParentFuction', 'Jack');
        },
        getReverseMessageMethod(){
            return this.message.split(' ').reverse().join(' ');
        }   
    },
    computed: {
        getReverseMessageComputed(){
            return this.message.split(' ').reverse().join(' ');
        }
    }
};
</script>
//ovo child od BlogPost

