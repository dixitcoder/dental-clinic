<template>
  <!-- Your template content -->
  <div style="padding:2pc">
  <div class="card" style="padding: 1pc;">
    <form >
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">First Report No</label>
        <input
          type="email"
          v-model="form.No"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name </label>
        <input
          type="email"
          v-model="form.firstName"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Phone </label>
        <input
          type="email"
          v-model="form.phone"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address </label>
        <input
          type="email"
          v-model="form.address"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email </label>
        <input
          type="email"
          v-model="form.email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <label>Select Time: </label>
      <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
        <input class="form-control" type="time" v-model="form.time" />
        <span class="input-group-addon"
          ><i class="glyphicon glyphicon-calendar"></i
        ></span>
      </div>
      <label>Select Date: </label>
      <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
        <input class="form-control" type="date" v-model="form.date" />
        <span class="input-group-addon"
          ><i class="glyphicon glyphicon-calendar"></i
        ></span>
      </div>
      <label>Select DateBirth Date: </label>
      <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
        <input class="form-control" v-model="form.dateOfBirth" type="date" />
        <span class="input-group-addon"
          ><i class="glyphicon glyphicon-calendar"></i
        ></span>
      </div>
 <br>
      <button @click="pushDataToArray()" type="submit" class="btn btn-primary">
        Add Report
      </button>
      <span class="width:20px"></span>
     
    </form>
</div>
</div>
</template>

<script>
import { db } from './firebasecofig'; // Correct the import path to firebaseconfig
import {  doc, updateDoc, arrayUnion ,getDoc,setDoc } from 'firebase/firestore'; // Import the required Firestore functions

export default {
  data() {
    return {
      form: {
        phone: Number(),
        No: Number(),
        firstName: "",
        address: "",
        gender: "",
        email: "",
        time: "",
        date: "",
        dateOfBirth: "",
      },
    }
  },
  methods: {
    async pushDataToArray() {
      try {
        // Data to push to the array
        // const dataToAdd = {
        //  name:'dixitpatel'
        // };
        const id  = this.$route.params.array
        // Reference to the Firestore document
        const documentRef = doc(db, 'dental', id);

        // Get the current data from the document
        const documentData = (await getDoc(documentRef)).data();

        // Check if the 'array' field exists in the document
        if (documentData.array) {
          // Update the array field in Firestore using arrayUnion
           await updateDoc(documentRef, {
            array: arrayUnion(this.form)
          });
        } else {
          // If 'array' doesn't exist, create it as an array with the first element
          await setDoc(documentRef, {
            array: [this.form]
          });
        }

       
        console.log('Data pushed to the array successfully.');
        this.$router.push(`/formEdit/${id}`)

      } catch (error) {
        console.error('Error pushing data to the array:', error);
      }
    }
  }
}
</script>
<style scoped>

</style>
