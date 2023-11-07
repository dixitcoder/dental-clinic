<template>
  <div style="padding: 2pc">
    <div class="card">
      <div class="card-header pb-0">
        <h6>Update Table</h6>
        <form v-if="form">
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
          <button @click="updateData()" type="submit" class="btn btn-primary">
            Update
          </button>
          <span style="padding: 15px">
            <button @click="dataPush()" type="submit" class="btn btn-outline-success">
              Add
            </button>
          </span>
        </form>
        <h3>Medical History :</h3>
        <div class="card-body px-0 pt-0 pb-2">
          <div class="table-responsive p-0">
            <table v-if="report" class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Author
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Phone <u>Time</u>
                  </th>
                  <th
                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Male
                  </th>

                  <th
                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    birthday
                  </th>
                  <th
                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Date
                  </th>

                  <th class="text-secondary opacity-7"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in report.array" :key="item">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ item.firstName }}</h6>
                        <p class="text-xs text-secondary mb-0">{{ item.email }}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">{{ item.phone }}</p>
                    <p class="text-xs text-secondary mb-0">{{ item.time }}</p>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="badge badge-sm bg-gradient-success">{{
                      item.gender
                    }}</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">{{
                      item.dateOfBirth
                    }}</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">{{
                      item.date
                    }}</span>
                  </td>

                  <td class="align-middle">
                    <a
                      @click="edit(index)"
                      class="text-secondary font-weight-bold text-xs xu"
                      data-toggle="tooltip"
                      data-original-title="Edit user"
                      ><span class="material-symbols-outlined"> edit </span></a
                    >
                  </td>
                  <td class="align-middle">
                    <!-- Button trigger modal -->
                    <button
                      @click="openDialog(index, item.firstName)"
                      style="cursor: not-allowed"
                      type="button"
                      class="btn btn-primary xu"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delate
                    </button>

                    <!-- Modal -->
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Modal title
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            {{ IdName }}
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              @click="deleteElementAtIndex0()"
                              type="button"
                              class="btn btn-primary"
                            >
                              Delate
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { ref } from 'vue';
// import {  onMounted } from "vue"; // Vue 3
import { getDoc, doc, updateDoc  } from "firebase/firestore"; // Import Firestore functions
import { db } from "./firebasecofig";
export default {
  data() {
    return {
      data: {
        array: [],
      },
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
        array: [],
      },
      report: [],
      id: [],
      idDelate: "",
      IdName: "",
    };
  },
  created() {
    this.call();
    this.dixit();
  },
  methods: {
    async deleteElementAtIndex0() {
      try {
       let index = this.idDelate

        const id = this.$route.params.id;
        const docRef = doc(db, `dental/${id}`);

        // Get the current array from Firestore
        const docSnapshot = await getDoc(docRef);
        const array = docSnapshot.data().array;

        // Check if the index is within the array bounds
        if (index >= 0 && index < array.length) {
          // Remove the element at the specified index
          array.splice(index, 1);

          // Update the document in Firestore with the modified array
          await updateDoc(docRef, { array });

          console.log(`Element at index ${index} deleted successfully.`);
          location.reload();
        } else {
          console.error(`Invalid index: ${index}`);
        }
      } catch (error) {
        console.error("Error deleting element at the specified index:", error);
      }
    },
    async fetchDocumentData() {
      const id = this.$route.params.id;
      const docRef = doc(db, `dental/${id}`);
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
    },
    edit(i) {
      const id = this.$route.params.id;
      this.$router.push(`/reportEdit/${id}/${i}`);
    },
    openDialog(idDelate, IdName) {
      this.idDelate = idDelate;
      this.IdName = IdName;
    },
    //     deleteItem(){
    //   const id = this.$route.params.id;
    //   const itemDocRef = doc(db, `dental/${id}/array`, this.iddelate);
    //   console.log(itemDocRef);
    //   deleteDoc(itemDocRef)
    //     .then(() => {
    //       console.log("Document deleted successfully.");
    //       console.log(itemDocRef);
    //     })
    //     .catch((error) => {
    //       console.error("Error deleting document:", error);
    //     });
    // },
    async dixit() {
      try {
        const id = this.$route.params.id;
        const docRef = doc(db, "dental", id); // Replace with your collection name and document ID
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          this.report = docSnapshot.data();
          // console.log(this.form);
        } else {
          console.error("Document not found.");
        }
      } catch (error) {
        console.error("Error fetching document data:", error);
      } finally {
        this.loading = false;
      }
    },
    dataPush() {
      const array = this.$route.params.id;
      this.$router.push(`/${array}`);
    },
    async call() {
      try {
        const id = this.$route.params.id;
        const docRef = doc(db, "dental", id); // Replace with your collection name and document ID
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          this.form = docSnapshot.data();
          console.log(this.form);
          console.log(this.id);
        } else {
          console.error("Document not found.");
        }
      } catch (error) {
        console.error("Error fetching document data:", error);
      } finally {
        this.loading = false;
      }
    },
    async updateData() {
      const id = this.$route.params.id;

      const itemDocRef = doc(db, "dental", id); // Use the provided 'id' to reference the specific document
      try {
        await updateDoc(itemDocRef, this.form);
        console.log("Document updated successfully.");
        this.show = false;
        setTimeout(() => {
          this.$router.push("/tables");
        }, 8000);
        // You can navigate back to the previous page or perform other actions as needed.
      } catch (error) {
        console.error("Error updating document:", error);
      }
    },
  },
};
</script>
