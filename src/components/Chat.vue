<template>
    <div class="chat container">
        <h1>Chat {{ this.name }}</h1>
        <div>
            <ul>
                <li>
                    <span>Name</span>
                    <span>message</span>
                    <span>Time</span>
                </li>
            </ul>
        </div>
        <div>
            <NewMessage :name="name" />
        </div>
    </div>
</template>
<script>

import NewMessage from '@/components/NewMessage'
export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {

        }
    }
    
}
</script>
<style>
ul{
    list-style: none;
}
</style>


