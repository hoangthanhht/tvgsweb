<template>
  <div class="baoc-theodoi">
    <!-- block1 -->
    <div>
      <MucBC />
    </div>
    <!-- block 2 -->
    <div class="gr-card">
      <div class="card-tvgs">
        <b-card title="315">
          <b-card-text>Móng + Tầng hầm</b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="501">
          <b-card-text> Kết cấu thân </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="457">
          <b-card-text> Hoàn thiện kiến trúc </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="174">
          <b-card-text> Hoàn thiện ME </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="27">
          <b-card-text> Hạ tầng cảnh quan </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="14">
          <b-card-text> Khác </b-card-text>
        </b-card>
      </div>
    </div>
    <!-- block 3 -->
    <div class="block-select">
      <div class="btn-add-cv theodoi-thicong">
        <b-button size="sm" class="mb-2 icon-tvgs">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </b-button>
      </div>

      <div>
        <form action="">
          <input
            style="height: 34px"
            type="date"
            id="birthday"
            name="birthday"
          />
        </form>
      </div>
      <div>
        <form action="">
          <input
            style="height: 34px"
            type="date"
            id="birthday"
            name="birthday"
          />
        </form>
      </div>

      <div class="theodoi-thicong">
        <v-select
          placeholder="Theo dự án"
          class="select-duan"
          :options="['Dự án A', 'Dự án B']"
        ></v-select>
      </div>

      <div class="theodoi-thicong">
        <v-select
          placeholder="Theo nhân sự"
          class="select-duan"
          :options="['Nguyễn Văn A', 'Nguyễn Văn B']"
        ></v-select>
      </div>

      <div class="theodoi-thicong">
        <v-select
          placeholder="Loại"
          class="select-duan"
          :options="['Móng', 'Hầm', 'Thân', 'Hoàn thiện']"
        ></v-select>
      </div>

      <div class="search-baoc theodoi-thicong">
        <b-input-group size="sm" class="mb-2 icon-tvgs">
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
    <!-- block 4 -->
    <div class="table-theodoitc">
      <b-table striped hover bordered :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
import MucBC from "./comp_hoatdongctrg/muc_baocao";
export default {
  data() {
    return {
      fields: [
        "Nội_dung_công_việc",
        "Ảnh",
        "Thời_điểm_thực_hiện",
        "Đánh_giá",
        "Thời_gian_làm_việc",
        "Người_thực_hiện",
        " ",
      ],
      items: [
        {
          isActive: false,
          Nội_dung_công_việc: "Phần hầm B1,Xây tầng 3",
          Ảnh: "",
          Thời_điểm_thực_hiện:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Đánh_giá: "Nguyễn Như Vậy",
          Thời_gian_làm_việc:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Người_thực_hiện: "Vũ Đức T Nguyễn Hồng Q Trịnh Thị T",
        },
        {
          isActive: false,
          Nội_dung_công_việc: "Phần hầm B1,Xây tầng 3",
          Ảnh: "",
          Thời_điểm_thực_hiện:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Đánh_giá: "Nguyễn Như Vậy",
          Thời_gian_làm_việc:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Người_thực_hiện: "Vũ Đức T Nguyễn Hồng Q Trịnh Thị T",
        },
        {
          isActive: false,
          Nội_dung_công_việc: "Phần hầm B1,Xây tầng 3",
          Ảnh: "",
          Thời_điểm_thực_hiện:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Đánh_giá: "Nguyễn Như Vậy",
          Thời_gian_làm_việc:
            "Bắt đầu: 10:30 04/04/2021,Kết thúc: 17:00 05/04/2021",
          Người_thực_hiện: "Vũ Đức T Nguyễn Hồng Q Trịnh Thị T",
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
  components: {
    MucBC,
  },
};
</script>

<style scoped>
/* .clear{
	clear: both;
} */

.gr-card {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-clip: content-box;
  background-color: #fff;
  margin-top: 15px;
  margin-bottom: 15px;
}
.card {
  border: none;
}
.card-tvgs {
  overflow: hidden;
  margin-bottom: 10px;
}
.card-tvgs .card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.btn-add-cv {
  height: 34px;
  padding-top: 0;
  padding-bottom: 0;
}
.block-select {
  display: flex;
  justify-content: space-between;
}
.icon-tvgs {
  height: 34px;
}
/* .search-baoc .form-control{
	height: 38px;
} */
.search-baoc input[type="search"] {
  height: 34px;
}
.baoc-theodoi {
  margin-right: 10px;
  margin-left: 10px;
}
.select-duan {
  width: 200px;
  background-color: #fff;
}
.table-theodoitc {
  background-color: #fff;
}
</style>