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
          <b-card-text>Tổ hợp thương mại Melinh</b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="501">
          <b-card-text> Khu dân cư phức hợp </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="457">
          <b-card-text> MB Land Golden Field</b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="174">
          <b-card-text> CEN - HIBRAND </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="27">
          <b-card-text> Tòa KeangNam </b-card-text>
        </b-card>
      </div>
      <div class="card-tvgs">
        <b-card title="14">
          <b-card-text> Homeland</b-card-text>
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

      <div class="theodoi-thicong">
        <v-select
        placeholder="Theo dự án"
          class="select-duan"
          :options="['Dự án A', 'Dự án B']"
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
        "Tên_thiết_bị",
        "Ngày",
        "Người_vận_hành",
        "Tình_trạng",
        "Đánh_giá",
        "Ảnh",
        "Kiểm_tra",
        " ",
      ],
      items: [
        {
          isActive: false,
          Tên_thiết_bị:
            "Máy đào bánh lốp : Hitachi- ex100WD-2",
          Ngày: "Kiểm định: 09:00 13/03/2019 Hết hạn: 23:55 13/03/2020",
          Người_vận_hành:
            "",
          Tình_trạng: "Bình thường",
          Đánh_giá: "BPTC: Phù hợp An toàn: Đảm bảo",

          Ảnh: "",
          Kiểm_tra: "Ngày KT: 16:29 02/08/2019 Người KT: Lưu Hoàng Hòa [Duyệt: Nguyễn Hồng Q]",
        },
        {
          isActive: false,
          Tên_thiết_bị:
            "Máy đào bánh lốp : Hitachi- ex100WD-2",
          Ngày: "Kiểm định: 09:00 13/03/2019 Hết hạn: 23:55 13/03/2020",
          Người_vận_hành:
            "",
          Tình_trạng: "Bình thường",
          Đánh_giá: "BPTC: Phù hợp An toàn: Đảm bảo",

          Ảnh: "",
          Kiểm_tra: "Ngày KT: 16:29 02/08/2019 Người KT: Lưu Hoàng Hòa [Duyệt: Nguyễn Hồng Q]",
        },
        {
          isActive: false,
          Tên_thiết_bị:
            "Máy đào bánh lốp : Hitachi- ex100WD-2",
          Ngày: "Kiểm định: 09:00 13/03/2019 Hết hạn: 23:55 13/03/2020",
          Người_vận_hành:
            "",
          Tình_trạng: "Bình thường",
          Đánh_giá: "BPTC: Phù hợp An toàn: Đảm bảo",

          Ảnh: "",
          Kiểm_tra: "Ngày KT: 16:29 02/08/2019 Người KT: Lưu Hoàng Hòa [Duyệt: Nguyễn Hồng Q]",
        },
                {
          isActive: false,
          Tên_thiết_bị:
            "Máy đào bánh lốp : Hitachi- ex100WD-2",
          Ngày: "Kiểm định: 09:00 13/03/2019 Hết hạn: 23:55 13/03/2020",
          Người_vận_hành:
            "",
          Tình_trạng: "Bình thường",
          Đánh_giá: "BPTC: Phù hợp An toàn: Đảm bảo",

          Ảnh: "",
          Kiểm_tra: "Ngày KT: 16:29 02/08/2019 Người KT: Lưu Hoàng Hòa [Duyệt: Nguyễn Hồng Q]",
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
.select-duan {
  width: 200px;
  background-color: #fff;
}
.gr-card {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-clip: border-box;
  background-color: #fff;
  margin-bottom: 10px;
  margin-top: 15px;
}
.card {
  border: none;
}
.card-tvgs {
  overflow: hidden;
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
.table-theodoitc{
  background-color:  #fff;
}
</style>