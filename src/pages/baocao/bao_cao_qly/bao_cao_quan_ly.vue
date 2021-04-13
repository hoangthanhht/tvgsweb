<template>
  <div class="header-page-giaocv">
    <div class="block-select">
      <div class="btn-add-cv">
        <b-button size="sm" class="mb-2 add-cv icon-tvgs">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </b-button>
      </div>

      <div class="theodoi-thicong">
        <v-select
          class="select-duan"
          :options="options"
          v-model="selectedBank"
        ></v-select>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>
      <div class="select-cbb">
        <b-form-select v-model="selected" :options="options"></b-form-select>
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
        "Tên",
        "Kế_hoạch",
        "Thực_hiện",
        "Người_đề_xuất",
        "Người_phối_hợp",
        "Yêu_cầu_công_việc",
        "Uu_tiên",
        "Kết_quả",
        "Tình_trạng",
        "Lưu_ý",
      ],
      items: [
        {
          isActive: false,
          Tên: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Kế_hoạch: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Thực_hiện: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Người_đề_xuất: "Nguyễn Như Tùng",
          Người_phối_hợp: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
          Yêu_cầu_công_việc: "trình ký Mr.Tuân, nộp hồ sơ lên Euro",
          Uu_tiên: "Quan trọng và khẩn cấp",
          Kết_quả: "Đã hoàn thành",
          Tình_trạng: "Quá hạn",
          Lưu_ý: "Chưa cập nhật",
        },
        {
          isActive: false,
          Tên: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Kế_hoạch: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Thực_hiện: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Người_đề_xuất: "Nguyễn Như Tùng",
          Người_phối_hợp: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
          Yêu_cầu_công_việc: "trình ký Mr.Tuân, nộp hồ sơ lên Euro",
          Uu_tiên: "Quan trọng và khẩn cấp",
          Kết_quả: "Đã hoàn thành",
          Tình_trạng: "Quá hạn",
          Lưu_ý: "Chưa cập nhật",
        },
        {
          isActive: false,
          Tên: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Kế_hoạch: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Thực_hiện: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Người_đề_xuất: "Nguyễn Như Tùng",
          Người_phối_hợp: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
          Yêu_cầu_công_việc: "trình ký Mr.Tuân, nộp hồ sơ lên Euro",
          Uu_tiên: "Quan trọng và khẩn cấp",
          Kết_quả: "Đã hoàn thành",
          Tình_trạng: "Quá hạn",
          Lưu_ý: "Chưa cập nhật",
        },
      ],
      selected: ["b"], // Array reference
      options: [
        { value: "a", text: "This is First option" },
        { value: "b", text: "Default Selected Option" },
        { value: "c", text: "This is another option" },
        { value: "d", text: "This one is disabled", disabled: true },
        { value: "e", text: "This is option e" },
        { value: "f", text: "This is option f" },
        { value: "g", text: "This is option g" },
      ],
    };
  },
};
</script>

<style scoped>
.search-congv input[type="search"] {
  height: 34px;
}

.btn-add-cv {
  height: 38px;
  padding-top: 0;
  padding-bottom: 0;
}

.block-select {
  display: flex;
  justify-content: space-between;
}
.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.select-duan {
	width: 200px;
	background-color: #fff;
}
.select-cbb .custom-select{
	height: 34px;
}
.header-page-giaocv {
  margin-left: 10px;
  margin-right: 10px;
}
/* .btn-secondary:hover {
  color: #fff;
  background-color: red;
  border-color: #6c757d;
}
.add-cv .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}

.btn-add-cv {
  position: absolute;
  left: 10px;
}
.select-name .btn-secondary {
  background-color: #fff;
  color: #000;
}
.select-name {
  position: absolute;
  left: 10%;
}
.select-mucdo {
  position: absolute;
  left: 25%;
}
.select-tinhtrang {
  position: absolute;
  left: 45%;
}
.select-ketqua {
  position: absolute;
  left: 65%;
}
.search-congv {
  position: absolute;
  right: 0;
}
.table-cv {
  position: absolute;
  top: 60px;
  width: 100%;
} */
</style>