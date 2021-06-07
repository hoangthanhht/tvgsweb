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
                <th style="min-width: 400px">ghi chú</th>

                <th style="min-width: 100px"></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template  v-for="(item, index) in dataArr">
                <tr v-bind:key="index" class="row_table_note">
                  <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td>
                  <td>
                    <span class="ma_dinh_muc text-muted font-weight-bold">{{
                      item.maDinhMuc
                    }}</span>
                  </td>
                  <td>
                    <span class="ten_ma_dinh_muc text-muted font-weight-bold">{{
                      item.tenMaDinhMuc
                    }}</span>
                  </td>
                  <td>
                    <textarea 		
						 :value = noteDM(index)
				          class="area_notes"
					      name="" id="" cols="60" rows="3" >
						  
					 </textarea>
                    <!-- <input class="text-dark-75 font-weight-bolder d-block font-size-lg text-muted font-weight-bold"
					type="text"> -->
                  </td>
<!-- 
                  <td class="pr-0 text-right">
                    <a
                      class="btn btn-light-success font-weight-bolder font-size-sm"
                      >Edit</a
                    >
                  </td> -->
                  <td class="pr-0 text-right">
                    <a
					v-on:click="handleSave($event,index)"
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
		// maDinhMuc: "",
		// tenMaDinhMuc: "",
		// noteDinhMuc: "",
		// idDinhMuc: "",
		
    };
  },
  created() {
    this["storeqlda/getListDataDm"]();// khi load lai trang
  },
  mounted() {
    //this.dataArr = this["storeqlda/getListDataDinhMuc"];
  },
  computed: {
    ...mapGetters(["storeqlda/getListDataDinhMuc","storeqlda/arrDmSearch"]),
    dataArr() {
      return this["storeqlda/arrDmSearch"];
    },
  },
  methods: {
    ...mapActions(["storeqlda/getListDataDm","storeqlda/updateDataWithId"]),
    getParentSelect(el,select) {
      while(el.parentElement) {
        var pr = el.parentElement;
        if(pr.matches(select)) {
          return pr
        }
        el = pr
      }
    },
	noteDM(index) {
		return this.dataArr[index].ghiChuDinhMuc;
	},
	handleSave(e,index) {
		 //var a = document.querySelector('.textthanh')
	  //console.log(this.dataArr[index].id);
     var elParentLarge = this.getParentSelect(e.target,'.row_table_note');
	 var maDinhMuc = elParentLarge.querySelector('.ma_dinh_muc').innerText;
	 var tenMaDinhMuc = elParentLarge.querySelector('.ten_ma_dinh_muc').innerText;
	 var noteDinhMuc = elParentLarge.querySelector('.area_notes').value;
     var idDinhMuc = this.dataArr[index].id;

	  var data = {
		  maDinhMuc:maDinhMuc,
		  tenMaDinhMuc:tenMaDinhMuc,
		  noteDinhMuc:noteDinhMuc,
		  idDinhMuc:idDinhMuc
	  }

	// this.$store.dispatch('storeqlda/updateDataWithId', data);
	  this["storeqlda/updateDataWithId"](data);

	//   console.log('tenMaDinhMuc',tenMaDinhMuc);
	//   console.log('noteDinhMuc',noteDinhMuc);
	   console.log('this.dataArr[index].id',idDinhMuc);
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