<template>
  <div class="container-nhanvien">
    <div class="block-select">
      <div class="btn-add-cv">
        <b-button size="sm" class="mb-2 add-cv icon-tvgs">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </b-button>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selected1" :options="options1"></b-form-select>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selected2" :options="options2"></b-form-select>
      </div>
      <div class="select-cbb">
        <b-form-select v-model="selected3" :options="options3"></b-form-select>
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

    <div class="table-dsnhanvien">
      <b-table
        class="text-center"
        striped
        hover
        bordered
        :items="items"
        :fields="fields"
        responsive="sm"
      >
        <template #cell(Stt)="data">
          <div>
            <p style="vertical-align: middle" variant="info" size="sm">{{
              data.index + 1
            }}</p>
          </div>
        </template>

        <template #cell(chọn)="row">
          <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
          <b-form-checkbox
            v-model="row.detailsShowing"
            @change="row.toggleDetails"
          >
          </b-form-checkbox>
        </template>

      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "Stt",
        "chọn",
        "Họ_tên",
        "Mã_nhân_viên",
        "ngày_sinh",
        "năm_tốt_nghiệp",
        "ngày_vào_Cty",
        "Số_năm",
        "mã_số_chức_danh",
        "chức_danh_tại_Cty",
        "ghi_chú",
      ],
      items: [
        {
          isActive: true,
          Stt: null,
          chọn: "",
          Họ_tên: "Mai Văn T",
          Mã_nhân_viên: "APA101",
          ngày_sinh: "22/02/1982",
          năm_tốt_nghiệp: "2009",
          ngày_vào_Cty: "13/04/2015",
          Số_năm: 6,
          mã_số_chức_danh: "12",
          chức_danh_tại_Cty: "P.GĐ",
          ghi_chú: "",
        },
        {
          isActive: true,
          Stt: null,
          chọn: "",
          Họ_tên: "Mai Văn T",
          Mã_nhân_viên: "APA101",
          ngày_sinh: "22/02/1982",
          năm_tốt_nghiệp: "2009",
          ngày_vào_Cty: "13/04/2015",
          Số_năm: 6,
          mã_số_chức_danh: "12",
          chức_danh_tại_Cty: "P.GĐ",
          ghi_chú: "",
        },
        {
          isActive: true,
          Stt: null,
          chọn: "",
          Họ_tên: "Mai Văn T",
          Mã_nhân_viên: "APA101",
          ngày_sinh: "22/02/1982",
          năm_tốt_nghiệp: "2009",
          ngày_vào_Cty: "13/04/2015",
          Số_năm: 6,
          mã_số_chức_danh: "12",
          chức_danh_tại_Cty: "P.GĐ",
          ghi_chú: "",
        },
      ],
      opvselect: ["Nguyễn Văn A", "Nguyễn Văn B"],
      selected1: "1", // Array reference
      options1: [
        { value: "1", text: "Đang cộng tác" },
        { value: "a", text: "Đã nghỉ việc" },
        { value: "b", text: "Tất cả" },
      ],
      selected2: "2", // Array reference
      options2: [
        { value: "2", text: "Phòng ban" },
        { value: "a", text: "Dự án" },
        { value: "b", text: "Nhân sự - Hành chính" },
        { value: "c", text: "Kế hoạch - Kỹ thuật" },
        { value: "d", text: "Tài chính - Kế toán" },
      ],
      selected3: "3", // Array reference
      options3: [
        { value: "3", text: "GIÁM ĐỐC" },
        { value: "a", text: "P.GIÁM ĐỐC" },
        { value: "b", text: "P ĐOÀN" },
      ],
    };
  },
};
</script>

<style scoped>
.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.container-nhanvien {
  margin-left: 10px;
  margin-right: 10px;
}
.block-select {
  display: flex;
  justify-content: space-between;
}
.select-cbb .custom-select {
  height: 38px;
}
.search-congv input[type="search"] {
  height: 38px;
}
.add-cv {
  height: 38px;
}
.table-dsnhanvien {
  background-color: #fff;
  max-width: 100%;
}
</style>