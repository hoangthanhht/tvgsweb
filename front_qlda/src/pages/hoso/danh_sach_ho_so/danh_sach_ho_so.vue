<template>
  <div class="danh-sach-ho-so">
    <div class="div-fillter">
      <div class="btn-add-cv">
        <b-button size="sm" class="mb-2 add-cv icon-tvgs">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </b-button>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>

      <div class="theodoi-thicong">
        <v-select
          class="select-duan"
          :options="options"
          v-model="selectedBank"
        ></v-select>
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
      <b-table striped hover bordered :items="items" :fields="fields" :text-center="true"></b-table>
    </div>
  <ComPagi/>
  </div>
</template>

<script>
import ComPagi from '../../components/pagination'

export default {
  data() {
    return {
      fields: [
        "Tên_Hồ_sơ",
        "Số_lượng",
        "Lần_kiểm_tra",
        "Ngày",
        "Kết_quả",
        "Người_kiểm_tra",
      ],
      items: [
        {
          isActive: false,
          Tên_Hồ_sơ: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Số_lượng: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Lần_kiểm_tra: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Ngày: "Nguyễn Như Tùng",
          Kết_quả: "Đạt",
          Người_kiểm_tra: "trình ký Mr.Tuân, nộp hồ sơ lên Euro",
        },
        {
          isActive: false,
          Tên_Hồ_sơ: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Số_lượng: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Lần_kiểm_tra: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Ngày: "Nguyễn Như Tùng",
          Kết_quả: "Đạt",
          Người_kiểm_tra: "trình ký Mr.Tuân, nộp hồ sơ lên Euro",
        },
        {
          isActive: false,
          Tên_Hồ_sơ: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Số_lượng: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Lần_kiểm_tra: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Ngày: "Nguyễn Như Tùng",
          Kết_quả: "Đạt",
          Người_kiểm_tra: "trình ký Mr.Tuân, nộp hồ sơ lên Euro",
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
  components:{
    ComPagi,
  }

};
</script>

<style scoped>
.danh-sach-ho-so{
    margin-left: 10px;
    margin-right: 10px;
}
/* .table-cv {
  text-align: center !important;
} */
.search-congv input[type="search"] {
  height: 34px;
}

.btn-add-cv {
  height: 38px;
  padding-top: 0;
  padding-bottom: 0;
}

.div-fillter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
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
.table-cv{
    background-color: #fff;
}
</style>