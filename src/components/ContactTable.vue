<template>
    
    <div>
        
 <h1>Contacts Table</h1>
     <center>
    <table border=1>
        <thead>
            <th>KEY</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </thead>
        <tbody>
            <tr v-for="(contact, index) in contactList" :key="index">
                <td>{{ index + 1 }}</td>              
                <td>{{ contact.firstName }}</td>
                <td>{{ contact.lastName }}</td>
                <td>{{ contact.email }}</td>
                <td>
                    <button class='btn btn-danger' @click="removeContact(contact)">Remove</button>
                </td>
            </tr>
                
        </tbody>
    </table>
    </center>

    </div>
</template>

<script>
export default {
    props: ['contactList']
}
</script>
