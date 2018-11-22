<template>
<div>
    <ContactTable :contactList='contacts'/>
    
    <h3>Add contact</h3>
    <form @submit.prevent="addContact">
        <label>First Name</label>
        <input v-model="newContact.firstName" placeholder="First Name"/><br>

        <label>Last Name</label>
        <input v-model="newContact.lastName" placeholder="Last Name"/><br>

        <label>Email</label>
        <input v-model="newContact.email" placeholder="Email"/><br>

        <button type='submit' >ADD CONTACT</button>
    </form>
    <!-- {{newContact}} -->
   
</div>
</template>

<script>
import ContactTable from './ContactTable'
export default {   
     components: {
            ContactTable
        },
    data(){        
        return {
            newContact: {
                firstName: '',
                lastName: '',
                email: ''
            },
            contacts: [
                { firstName: 'John', lastName: 'Doe', email: 'exemple@exemple.com'},
                { firstName: 'Jane', lastName: 'Doe', email: 'exemple@exemple.com'},
                { firstName: 'Jack', lastName: 'Doe', email: 'exemple@exemple.com'},
                { firstName: 'Susan', lastName: 'Doe', email: 'exemple@exemple.com'},
                { firstName: 'Jasmin', lastName: 'Doe', email: 'exemple@exemple.com'}
                
            ]
        };
    },
    methods: {
        addContact(){
            this.contacts.push(this.newContact);
            this.newContact = {};
        },
        removeContact(contact){
            let index = this.contacts.indexOf(contact);
            //console.log(index);
            this.contacts.splice(index,1);
        }
    }
}
</script>


