<template>
  
  <div class="card">
    <div class="card-header pb-0">
      <h6>Authors table</h6>
      
      
        <div class="row  d-flex justify-content-end align-items-center">

          <div class="col-md-6">

            <div class="form">
              <i @click="focusButton" class="fa fa-search"></i>
              <input  v-model="searchQuery" type="text" class="form-control form-input" placeholder="Search anything...">
       
            </div>
            

          
        </div>
        
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Phone  <u>Time</u></th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Male</th>
              
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >birthday</th>
              <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >Date</th>
            
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for=" item in filteredItems" :key="item">
              <td>
                <div class="d-flex px-2 py-1">
                
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ item.firstName}}</h6>
                    <p class="text-xs text-secondary mb-0">{{ item.email }}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{item.phone}}</p>
                <p class="text-xs text-secondary mb-0">{{ item.time }}</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">{{ item.gender }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ item.dateOfBirth}}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ item.date
                }}</span>
              </td>

              <td class="align-middle">
                <a
                  :href="`formEdit/${item.id}`"
                  class="text-secondary font-weight-bold text-xs xu"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                ><span class="material-symbols-outlined">
                  edit
                  </span></a>
              </td>
              <td class="align-middle">
         <!-- Button trigger modal -->
<button @click="openDialog(item.id,item.firstName)"  style="cursor:  not-allowed;" type="button" class="btn btn-primary xu" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Delate
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       {{itemName}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="delate()" type="button" class="btn btn-primary">Delate</button>
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
</template>

<script>
import { ref, onMounted ,computed } from "vue"; // Vue 3
import { collection, getDocs ,addDoc ,doc,deleteDoc  } from "firebase/firestore"; // Import Firestore functions
import { db } from "./firebasecofig";

export default {
  data() {
    return {
      itemId:'',
      itemName:'',
      
      newData: {
        name: "John Doe",
        age: 30,
        city: "New York",
      },
      myButton:''
    };
  },
  methods: {
    openDialog(item , name){
      this.itemId=item
      this.itemName=name
      
    },
    editItem(id){
      this.$router.push(`/pasentUpdate/${id}`)
    },
    delate() {
      const itemDocRef = doc(db, "dental", this.itemId);
      deleteDoc(itemDocRef)
        .then(() => {
          console.log("Document deleted successfully.");
          location.reload();
        })
        .catch((error) => {
          console.error("Error deleting document:", error);
        });
      // Replace 'your-collection-name' with your collection name
    },
    
    call() {
      
      const collectionRef = collection(db, "dental");
      addDoc(collectionRef, this.newData)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
  },
  setup() {
    const items = ref([]);
    const store = ref(Number)
    const searchQuery = ref("")

  
    const filteredItems = computed(() => {
      return items.value.filter((item) =>
      item.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const fetchDataFromFirestore = async function(){
      try {
        const itemsCollection = collection(db, "dental");
        console.log(itemsCollection);
        const querySnapshot = await getDocs(itemsCollection);
console.log(querySnapshot);
        console.log(store.value=querySnapshot.size);
        querySnapshot.forEach((doc) => {
          items.value.push({
            id: doc.id,
            name: doc.data().name,
            Address: doc.data().Address,
            phone: doc.data().phone,
            email: doc.data().email,
            gender:doc.data().gender,
            date:doc.data().date,
            time:doc.data().time,
            firstName:doc.data().firstName,
            dateOfBirth:doc.data().dateOfBirth
          });

        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchDataFromFirestore();
     
    });

    return {
      items,
      store,
      searchQuery,
      filteredItems,
      
    };
  },
  mounted() {},

};
</script>
<style scoepd>
.not-allowed {cursor: not-allowed;}
.xu {cursor: cell;}
.xu:hover{
  color: red;
}
body{

    background: #d1d5db;
}

.height{

    height: 100vh;
}

.form{

    position: relative;
}

.form .fa-search{

    position: absolute;
    top:20px;
    left: 20px;
    color: #9ca3af;

}

.form span{

        position: absolute;
    right: 17px;
    top: 13px;
    padding: 2px;
    border-left: 1px solid #d1d5db;

}

.left-pan{
    padding-left: 7px;
}

.left-pan i{
   
   padding-left: 10px;
}

.form-input{

    height: 55px;
    text-indent: 33px;
    border-radius: 10px;
}

.form-input:focus{

    box-shadow: none;
    border:none;
}
</style>