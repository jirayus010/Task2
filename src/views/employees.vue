<template>
    <div>
        <h1>Employees List</h1>   
        <b-table striped hover 
        :items="employees" 
        :fields="fields" 
        :per-page="pageSize" 
        :current-page="pageIndex"></b-table>
        <b-pagination size="md" :total-rows="employees.length" v-model="pageIndex" :per-page="pageSize"></b-pagination>    
    </div>
</template>
<script>
import axios from 'axios'


export default {
name: 'employees', 
  data(){
      return{
          message:'Final Exam',
          employees: [],
          pageSize: 10,
          pageIndex: 1,
          fields: [
              {
                  key:'employee_id',
                  sortable : true,
                  variant : "success"
              },
              {
                  key:'last_name',
                  sortable : true
              },
              {
                  key:'first_name',
                  sortable : true,
                  variant : "danger"
              },
              {
                  key:'title',
                  sortable : true,
              },
              {
                  key:'title_of_courtesy',
                  sortable : true,
                  variant : "info"
              },
              {
                  key:'birth_date',
                  sortable : true,
              },
              {
                  key:'hire_date',
                  sortable : true,
                  variant : "warning"
              },
              {
                  key:'address',
                  sortable : true,
              },
              {
                  key:'city',
                  sortable : true,
                  variant : "success"
              },
              {
                  key:'region',
                  sortable : true,
              },
              {
                  key:'postal_code',
                  sortable : true,
                  variant : "danger"
              },
              {
                  key:'country',
                  sortable : true,
              },
              {
                  key:'home_phone',
                  sortable : true,
                  variant : "info"
              },
              {
                  key:'extension',
                  sortable : true,
              },
              {
                  key:'photo',
                  sortable : true,
                  variant : "warning"
              },
              {
                  key:'notes',
                  sortable : true,
              },
              {
                  key:'reports_to',
                  sortable : true,
                  variant : "success"
              },
              {
                  key:'photo_path',
                  sortable : true,
              },
          ],
      }
  },
  mounted () {
      var instance = this
    axios
      .get('https://glacial-crag-87870.herokuapp.com/api/employees')
      .then(function(response){
          console.log(response.data)
          instance.employees = response.data.data
      })
  }
}

</script>

