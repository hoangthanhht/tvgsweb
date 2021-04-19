<template>
  <div class="conatiner-chucdanh">
    <div class="nsdschucdanh">
      <div class="btn-add-cv">
        <b-button size="sm" class="mb-2 add-cv icon-tvgs">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </b-button>
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
        "Mã_chức_danh_Chức_danh",
        "Ghi_chú",
        "Action",
      ],
      items: [
        {
          isActive: false,
          Mã_chức_danh_Chức_danh: "1 - TGĐ",
          Ghi_chú: "Không có ghi chú",
          Action: "",
        },
        {
          isActive: false,
          Mã_chức_danh_Chức_danh: "2 - P.TGD",
          Ghi_chú: "Không có ghi chú",
          Action: "",
        },
        {
          isActive: false,
          Mã_chức_danh_Chức_danh: "3 - TBP/TRƯỞNG ĐOÀN",
          Ghi_chú: "Không có ghi chú",
          Action: "",
        },
      ],
    };
  },



};
</script>

<style scoped>
.conatiner-chucdanh{
    margin-left: 10px;
    margin-right: 10px;
}
.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.nsdschucdanh{
    display: flex;
    justify-content: space-between;
}
.table-cv{
    background-color: #fff;
}
</style>