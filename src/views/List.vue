<template>
  <div class="home">
    <h1>This is the list page</h1>

    <input type="text" v-model="newContact" placeholder="Name">
    <button @click="addContact">Add Contact</button>
    <button @click="sortContact">Sort</button>
    
    <transition-group tag="ul" name="slide-up" appear>
        <li v-for="contact in contacts" :key="contact">
            {{ contact }}
        </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContact: '',
      contacts: ['Henry Chung', 'Hao Chung', 'The Hao'],
    }
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact);
      this.newContact = '';
    },
    sortContact() {
        this.contacts.sort();
    }
  }
}
</script>

<style>
</style>
