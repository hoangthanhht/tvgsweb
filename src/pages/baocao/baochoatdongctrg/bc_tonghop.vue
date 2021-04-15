<template>
  <div class="bcao-cv">
    <div>
      <MucBC />
    </div>

    <div>
      <div class="block-select">
        <div class="select-datecv select-cbb-baocao">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div class="theodoi-thicong">
          <v-select
		  	placeholder="Theo nhân sự"
            class="select-duan"
            :options="options1"
          ></v-select>
        </div>

        <div class="theodoi-thicong">
          <v-select
		  placeholder="Theo dự án"
            class="select-duan"
            :options="options2"
          ></v-select>
        </div>

        <div class="search-baoc baocao-congviec">
          <b-input-group size="sm" class="mb-2 baocao-cv icon-tvgs">
            <b-form-input
              type="search"
              placeholder="Search terms"
            ></b-form-input>
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>

            <b-input-group-prepend is-text>
              <b-icon icon="arrow-repeat"></b-icon>
            </b-input-group-prepend>
          </b-input-group>
        </div>
      </div>

      <div class="table-bc">
        <b-table
          striped
          hover
          bordered
          :items="items"
          :fields="fields"
        ></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import MucBC from "./comp_hoatdongctrg/muc_baocao";
export default {
  data() {
    return {
      fields: [
        "Họ_tên",
        "Theo_dõi_thi_công",
        "Nghiệm_thu_công_việc",
        "Giám_sát_nguồn_lực",
        "Văn_bản_phát_hành",
      ],
      items: [
        {
          isActive: false,
          Họ_tên: "Hồ sơ thanh toán đợt 8- Sai Gon Pearl",
          Theo_dõi_thi_công:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Nghiệm_thu_công_việc:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Giám_sát_nguồn_lực: "Nguyễn Như Tranh",
          Văn_bản_phát_hành: "Văn bản số 1",
        },
        {
          isActive: false,
          Họ_tên: "Hồ sơ thanh toán đợt 8- Sai Gon Pearl",
          Theo_dõi_thi_công:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Nghiệm_thu_công_việc:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Giám_sát_nguồn_lực: "Nguyễn Như Tranh",
          Văn_bản_phát_hành: "Văn bản số 1",
        },
        {
          isActive: false,
          Họ_tên: "Hồ sơ thanh toán đợt 8- Sai Gon Pearl",
          Theo_dõi_thi_công:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Nghiệm_thu_công_việc:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Giám_sát_nguồn_lực: "Nguyễn Như Tranh",
          Văn_bản_phát_hành: "Văn bản số 1",
        },
      ],
      options1: [
        "Nguyễn VĂn A" ,
        "Nguyễn Văn B" ,

      ],
	   options2: [
          "Khách sạn Ceraton" ,
          "Khách sạn Thái Bình",
      ],
      selected: "a", // Array reference
      options: [
        { value: "a", text: "Hôm nay" },
        { value: "b", text: "Hôm qua" },
        { value: "c", text: "3 ngày qua" },
        { value: "c", text: "7 ngày qua" },
        { value: "c", text: "Tự chọn" },
      ],
    };
  },
  computed: {
    currentValue() {
      // console.log(this.options.find(option => option.value === this.selected).text)
      return this.options.find((option) => option.value === this.selected);
    },
  },
  components: {
    MucBC,
  },
};
</script>

<style scoped>
.select-duan {
  width: 200px;
  background-color: #fff;
}
.baocao-cv .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.select-cbb-baocao .custom-select {
  height: 34px;
}
.search-baoc input[type="search"] {
  height: 34px;
}
.block-select {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
}
.bcao-cv {
  margin-right: 20px;
  margin-left: 20px;
}
.table-bc{
	background-color: #fff;
}
</style>