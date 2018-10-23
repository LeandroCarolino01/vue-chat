<template>
    <div class="chat container">
        <h1>Chat {{ this.name }}</h1>
        <div>
            <ul v-chat-scroll>
                <li v-for="message in messages" :key="message.id">
                    <span>{{ message.name }}</span>
                    <span>{{ message.content}}</span>
                    <span>{{ message.timestamp}}</span>
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
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges.forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
    
}
</script>
<style>
ul{
    list-style: none;
}
</style>


