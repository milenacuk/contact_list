<template>
<div>
    <ContactDetails :contact="routeContact"/>
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
import ContactDetails from './ContactDetails'

export default {   
     components: {
            ContactTable,
            ContactDetails
        },
    data(){        
        return {
            newContact: {
                firstName: '',
                lastName: '',
                email: ''
            },
            contacts: [
                { id: 1, firstName: 'John', lastName: 'Doe', email: 'exemple@exemple.com'},
                { id: 2,firstName: 'Jane', lastName: 'Doe', email: 'exemple@exemple.com'},
                { id: 3,firstName: 'Jack', lastName: 'Doe', email: 'exemple@exemple.com'},
                { id: 4,firstName: 'Susan', lastName: 'Doe', email: 'exemple@exemple.com'},
                { id: 5,firstName: 'Jasmin', lastName: 'Doe', email: 'exemple@exemple.com'}
                
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
        
    },
    computed: {
        routeContact(){
            let findedContact =  this.contacts.find(contact => contact.id == this.$route.params.id); //na ovaj nacin uvek izvacimo parametre iz rute
            console.log(findedContact);
            return findedContact;
        }
        
       
    }
}
</script>


