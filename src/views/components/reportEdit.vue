<template>
    <div style="padding:2pc">
    <div style="padding:1pc" class="card">
        <form v-if="form">
            <div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Case No.</label>
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
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Gender </label><br />
              <select
                class="input-group date"
                data-date-format="mm-dd-yyyy"
                v-model="form.gender"
                name=""
                id=""
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button @click="updateItem()" type="submit" class="btn btn-primary">
              Update
            </button>
            <span  style="padding:15px">
            <button @click="Back()" type="submit" class="btn btn-outline-success">
              Back
            </button>
            
          </span>
          </div>
          </form>
         <div ></div> 
    </div>
</div>
  </template>
  
  <script>
//   import { ref } from "vue";
  import { doc,getDoc, updateDoc } from "firebase/firestore";
  import { db } from "./firebasecofig"; // Import your Firebase config
  
  export default {
    data() {
      return {
        report:[],
       form:{
      
       }, // New data to update the element
        data: {
          array: [
            {name:'dixitpatel'}
          ],
          
        }
      };
    },
    created() {
      this.listing()
    },
    methods: {
     async listing(){
      try {
        const id = this.$route.params.edit;
        const docRef = doc(db, "dental", id); // Replace with your collection name and document ID
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          this.report = docSnapshot.data();
          const index = this.$route.params.index;
          const arry = this.report.array[parseInt(index)]
          this.form=arry
          // console.log(this.form);
        } else {
          console.error("Document not found.");
        }
      } catch (error) {
        console.error("Error fetching document data:", error);
      }
      },
        Back(){
         
        const array = this.$route.params.edit;

            this.$router.push(`/formEdit/${array}`)
        },
      async updateItem() {
        // Fetch the Firestore document
        const array = this.$route.params.edit;
        const index = this.$route.params.index;
        console.log(index);
        console.log(array);
        
        const docRef = doc(db, `dental/${array}`);
  
        // Update the item at index 0 in the array
       const index1 = this.data.array[index] = this.form;
       console.log(index1);
  
        // Update the document in Firestore with the modified array
        try {
          await updateDoc(docRef, {
            array: this.data.array
          });
          console.log("Item at index 0 updated successfully.");
        } catch (error) {
          console.error("Error updating item at index 0:", error);
        }
      },
      // Fetch the document data when the component is mounted
      async fetchDocumentData() {
        
        const docRef = doc(db, "dental/7PDLH0xWESIanAXTACGA");
        try {
          const docSnapshot = await getDoc(docRef);
          if (docSnapshot.exists()) {
            this.data = docSnapshot.data();
          } else {
            console.error("Document not found.");
          }
        } catch (error) {
          console.error("Error fetching document data:", error);
        }
      }
    },
    mounted() {
      this.fetchDocumentData();
    }
  };
  </script>
  