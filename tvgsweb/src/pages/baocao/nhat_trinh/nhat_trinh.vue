<template>
<div class="nhat-trinh">
    <div class="nhat-trinh-fillter">

     <div class="block-select">
      <div class="btn-add-cv">
        <b-button size="sm" class="mb-2 add-cv icon-tvgs">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </b-button>
      </div>
      </div>

         <div class="search-congv">
        <b-input-group size="sm" class="mb-2 add-cv icon-tvgs">
          <b-form-input type="search" placeholder="Search terms"></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>

          <b-input-group-prepend is-text>
            <b-icon icon="arrow-repeat"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>

      <div class="table-cv">
      <b-table striped hover bordered :items="items" :fields="fields"></b-table>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "Dự_án",
        "Báo_cáo",
        "Thời_gian",
        "Action",
      ],
      items: [
        {
          isActive: false,
          Dự_án: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Báo_cáo: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Thời_gian: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Action: "",
        },
      {
          isActive: false,
          Dự_án: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Báo_cáo: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Thời_gian: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Action: "",
        },
      {
          isActive: false,
          Dự_án: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Báo_cáo: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Thời_gian: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Action: "",
        },
      ],
    };
  },
}
</script>

<style scoped>
.table-cv{
    background-color: #fff;
}
.nhat-trinh{
    margin-left: 10px;
    margin-right: 10px;
}
.nhat-trinh-fillter{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.btn-add-cv {
  padding-top: 0;
  padding-bottom: 0;
}
.btn-add-cv .icon-tvgs {
  height: 38px;
  width: 200px;
}
.search-congv .icon-tvgs {
  height: 38px;
  width: 400px;
}
.search-congv .icon-tvgs .form-control{
  height: 38px;
}
</style>