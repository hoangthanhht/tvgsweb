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
          placeholder="Theo nhân sự"
          class="select-duan"
          :options="opvselect"
          v-model="selectedBank"
        ></v-select>
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

    <div class="table-cv">
      <b-table striped hover bordered :items="items" :fields="fields"></b-table>
    </div>
    <ComPagi />
  </div>
</template>

<script>
import ComPagi from '../components/pagination'
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
          Tên: "Hồ sơ thanh toán đợt 8- Khách sạn Premier Best Western",
          Kế_hoạch: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Thực_hiện: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Người_đề_xuất: "Nguyễn Văn A",
          Người_phối_hợp: "Nguyễn Văn B,Nguyễn Văn C",
          Yêu_cầu_công_việc: "trình ký Mr.Tuân",
          Uu_tiên: "Quan trọng và khẩn cấp",
          Kết_quả: "Đã hoàn thành",
          Tình_trạng: "Quá hạn",
          Lưu_ý: "Chưa cập nhật",
        },
        {
          isActive: false,
          Tên: "Hồ sơ thanh toán đợt 8- Khách sạn Premier Best Western",
          Kế_hoạch: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Thực_hiện: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Người_đề_xuất: "Nguyễn Văn A",
          Người_phối_hợp: "Nguyễn Văn B,Nguyễn Văn C",
          Yêu_cầu_công_việc: "trình ký Mr.Tuân",
          Uu_tiên: "Quan trọng và khẩn cấp",
          Kết_quả: "Đã hoàn thành",
          Tình_trạng: "Quá hạn",
          Lưu_ý: "Chưa cập nhật",
        },
        {
          isActive: false,
          Tên: "Hồ sơ thanh toán đợt 8- Khách sạn Premier Best Western",
          Kế_hoạch: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Thực_hiện: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Người_đề_xuất: "Nguyễn Văn A",
          Người_phối_hợp: "Nguyễn Văn B,Nguyễn Văn C",
          Yêu_cầu_công_việc: "trình ký Mr.Tuân",
          Uu_tiên: "Quan trọng và khẩn cấp",
          Kết_quả: "Đã hoàn thành",
          Tình_trạng: "Quá hạn",
          Lưu_ý: "Chưa cập nhật",
        },
      ],
      opvselect:['Nguyễn Văn A',
       'Nguyễn Văn B',
       ],
      selected1: "1", // Array reference
      options1: [
        { value: "1", text: "Chọn mức độ ưu tiên" },
        { value: "a", text: "Quan trọng và khẩn cấp" },
        { value: "b", text: "Quan trọng nhưng không khẩn cấp" },
        { value: "c", text: "Khẩn cấp nhưng không quan trọng" },
        { value: "d", text: "Không quan trọng và không khẩn cấp" },
      ],
       selected2: "2", // Array reference
      options2: [
        { value: "2", text: "Tình trạng công việc" },
        { value: "a", text: "Chưa khởi động" },
        { value: "b", text: "Đang thực hiện" },
        { value: "c", text: "Quá hạn" },
        { value: "d", text: "Đã phê duyệt" },
      ],
       selected3: "3", // Array reference
      options3: [
        { value: "3", text: "Kết quả công việc" },
        { value: "a", text: "Đã hoàn thành" },
        { value: "b", text: "Chưa hoàn thành" },

      ],
    };
  },
  components:{
    ComPagi
  }
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
.select-cbb{
  max-width: 200px;
}
.header-page-giaocv {
  margin-left: 10px;
  margin-right: 10px;
}
.table-cv{
  background-color: #fff;
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