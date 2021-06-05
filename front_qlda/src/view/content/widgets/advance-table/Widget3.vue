<template>
  <!--begin::Advance Table Widget 9-->
  <div class="card card-custom card-stretch gutter-b">
	 
    <!--begin::Header-->
    <!-- <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Agents Stats</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <a class="btn btn-info font-weight-bolder font-size-sm mr-3"
          >New Arrivals</a
        >
        <a class="btn btn-danger font-weight-bolder font-size-sm">Create</a>
      </div>
    </div> -->
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-0 pb-3">
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive">
          <table
            class="table table-head-custom table-vertical-center table-head-bg table-borderless"
          >
            <thead>
              <tr class="text-left">
                <th style="max-width: 50px" class="pl-7">
                  id
                </th>
                <th style="min-width: 120px">mã định mức</th>
                <th style="min-width: 100px">tên mã định mức</th>
                <th style="min-width: 100px">ghi chú</th>
                <th style="min-width: 100px"></th>
                <th style="min-width: 100px"></th>
                <th style="min-width: 101px"></th>
              </tr>
            </thead>
            <tbody>
              <template  v-for="(item, index) in dataArr">
                <tr v-bind:key="index">
                  <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td>
                  <td>
                    <span class="text-muted font-weight-bold">{{
                      item.maDinhMuc
                    }}</span>
                  </td>
                  <td>
                    <span class="text-muted font-weight-bold">{{
                      item.tenMaDinhMuc
                    }}</span>
                  </td>
                  <td>
                    <textarea 
					v-bind:class="{ '2048': index }"
					 name="" id="" cols="15" rows="3" >
					 </textarea>
                    <!-- <input class="text-dark-75 font-weight-bolder d-block font-size-lg text-muted font-weight-bold"
					type="text"> -->
                  </td>

                  <td class="pr-0 text-right">
                    <a
                      class="btn btn-light-success font-weight-bolder font-size-sm"
                      >Edit</a
                    >
                  </td>
                  <td class="pr-0 text-right">
                    <a
					 v-on:click="handleSave(index)"
                      class="btn btn-light-success font-weight-bolder font-size-sm"
                      >Save</a
                    >
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Advance Table Widget 9-->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "widget-3",
  data() {
    return {
		note: "",
    };
  },
  created() {
    this["storeqlda/getListDataDm"]();
  },
  mounted() {
    //this.dataArr = this["storeqlda/getListDataDinhMuc"];
  },
  computed: {
    ...mapGetters(["storeqlda/getListDataDinhMuc"]),
    dataArr() {
      return this["storeqlda/getListDataDinhMuc"];
    },
  },
  methods: {
    ...mapActions(["storeqlda/getListDataDm"]),
	  handleSave(index) {
		 var a = document.querySelector('.textthanh')
	  console.log(this.dataArr[index].id);
	  console.log('this.dataArr[index].id',a);
  }
  },


};
</script>
<style lang="scss" scoped>
button,input,select,textarea {
  background-color: transparent;
  border-style: solid;
}
</style>