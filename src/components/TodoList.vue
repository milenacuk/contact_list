<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <slot :todo="todo"> </slot>
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    props: ['todos']
}
</script>
