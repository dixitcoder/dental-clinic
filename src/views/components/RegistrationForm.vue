<template>
  <div style="padding:2pc">
  <div class="card">
    <form>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Case No.</label>
          <input type="email" v-model="form.No" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name </label>
          <input type="email" v-model="form.firstName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Phone </label>
          <input type="email" v-model="form.phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Address </label>
          <input type="email" v-model="form.address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email </label>
          <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <label>Select Time: </label>
        <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
            <input class="form-control" type="time" v-model="form.time"  />
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
        <label>Select Date: </label>
        <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
            <input class="form-control" type="date" v-model="form.date"  />
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
        <label>Select DateBirth Date: </label>
        <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
            <input class="form-control" v-model="form.dateOfBirth" type="date" />
            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Gender </label><br>
          <select  class="input-group date" data-date-format="mm-dd-yyyy" v-model="form.gender" name="" id="">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            
        </div>
   
     
 

       
        <button :disabled="isButtonDisabled" @click="addDataToFirestore()" type="submit" class="btn btn-primary">Submit</button>
        <div class="position-relative">
          <div class="position-absolute top-0 start-0"></div>
          <div class="position-absolute top-0 end-0"></div>
          <div class="position-absolute top-50 start-50"></div>
          <div class="position-absolute bottom-50 end-50"></div>
          <div class="position-absolute bottom-0 start-0"></div>
          <div class="position-absolute bottom-0 end-0"></div>
        </div>
             <!-- <button type="submit" class="btn btn-primary" @click="languageChange1()">languageChange</button> -->
    </form>
    </div>
</div>

</template>
<script>
import { ref } from "vue";
// import { useRouter }/ from 'vue-router';

import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "./firebasecofig"; // Import your Firestore instance
import router from "../../router";

export default {
    
  data() {
    return {
        languageChange:true,
        locations: [
    {
      "gujarati": "આછવણી",
      "english": "Achhavani"
    },
    {
      "gujarati": "અમલસાડ",
      "english": "Amalsad"
    },
    {
      "gujarati": "બારતાડ (ખા)",
      "english": "Baratad (Kha)"
    },
    {
      "gujarati": "બીગરી",
      "english": "Bigari"
    },
    {
      "gujarati": "ચાપલધરા",
      "english": "Chapaldhara"
    },
    {
      "gujarati": "દેવસર",
      "english": "Devsar"
    },
    {
      "gujarati": "એફ",
      "english": "F"
    },
    {
      "gujarati": "ગણદેવા",
      "english": "Gandeva"
    },
    {
      "gujarati": "ઘેજ",
      "english": "Ghej"
    },
    {
      "gujarati": "ખડસુપા",
      "english": "Khadsupa"
    },
    {
      "gujarati": "ખાટાઆંબા",
      "english": "Khataamba"
    },
    {
      "gujarati": "ખેરગામ",
      "english": "Kheragam"
    },
    {
      "gujarati": "ધ",
      "english": "Dh"
    },
    {
      "gujarati": "કુકેરી",
      "english": "Kukeri"
    },
    {
      "gujarati": "મહુવર",
      "english": "Mahuvar"
    },
    {
      "gujarati": "માંડવખડક",
      "english": "Mandavkhadak"
    },
    {
      "gujarati": "ઓંજલ",
      "english": "Onjal"
    },
    {
      "gujarati": "રૂમલા",
      "english": "Roomla"
    },
    {
      "gujarati": "સાદપોર",
      "english": "Sadpor"
    },
    {
      "gujarati": "સમરોલી",
      "english": "Samaroli"
    },
    {
      "gujarati": "સરીબુજરંગ",
      "english": "Saribujrang"
    },
    {
      "gujarati": "સાતેમ",
      "english": "Satem"
    },
    {
      "gujarati": "સીસોદ્રા(ગ)",
      "english": "Sisodra(G)"
    },
    {
      "gujarati": "સુપા",
      "english": "Supa"
    },
    {
      "gujarati": "ઉનાઈ",
      "english": "Unai"
    },
    {
      "gujarati": "વાંદરવેલા",
      "english": "Vandarvela"
    },
    {
      "gujarati": "વાંગણ",
      "english": "Vangan"
    },
    {
      "gujarati": "વાંસદા",
      "english": "Vansada"
    },
    {
      "gujarati": "વાંઝણા",
      "english": "Vanzna"
    },
    {
      "gujarati": "વેસ્મા",
      "english": "Vesma"
    },
],
        swastikCase: {
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        email: "johndoe@example.com",
        address: "123 Main St, City, State, 12345",
        phoneNumber: "(123) 456-7890",
        hasAppliedBefore: true,
          department: "Dermatology",
          procedure: "Chemical Peel",
          dateOfBirth: "01/01/1980",
          appointmentDate: "04/20/2022",
      },
    };
  },
  setup() {
    const show =ref(true) ;
    const form = ref({
      phone:Number(),
            No:Number(),
            firstName:'',
            address:'',
            gender:'',
            email:'',
            time:'',
            date:'',
            dateOfBirth:'',
            array:[

            ]
    });

    const addDataToFirestore = async () => {
    try {
        const collectionRef = collection(db, "/dental");
        const docRef = await addDoc(collectionRef, form.value);
        console.log("Document written with ID:", docRef.id);
      setTimeout(() => {
        router.push('/tables')
      }, 1000*8);
    } catch (error) {
        console.error("Error adding document:", error);
    }
    };

    return {
    form,
    show,
    addDataToFirestore,
    };
},
  methods: {
    languageChange1() {
    this.languageChange = !this.languageChange;
  },
  formList() {
    console.log(this.form);
  },
        callback(){
            
        }
    },
    computed: {
    isButtonDisabled() {
      for (const key in this.form) {
        if (!this.form[key]) {
          return true; // Disable the button if any field is empty
        }
      }
      return false; // Enable the button if all fields are filled
    },
  },
};
</script>
<style scoped>
.card{
    padding:25px
}
</style>
