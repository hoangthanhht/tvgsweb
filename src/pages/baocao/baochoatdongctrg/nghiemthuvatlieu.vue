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
      <div class="theodoi-thicong">
        <input
          type="text"
          placeholder="Thông số kỹ thuật"
          style="height: 34px;width :90px"
        />
      </div>

      <div class="theodoi-thicong">
        <input
          type="text"
          placeholder="Tên nhà thầu"
          style="height: 34px ;width :90px"
        />
      </div>
      <div class="theodoi-thicong">
        <form action="">
          <input
            style="height: 34px;width :150px"
            type="date"
            id="birthday"
            name="birthday"
          />
        </form>
      </div >
      <div class="theodoi-thicong">
        <form action="">
          <input
            style="height: 34px;width :150px"
            type="date"
            id="birthday"
            name="birthday"
          />
        </form>
      </div>
      <div class="theodoi-thicong">
        <v-select
        placeholder="Người thực hiện"
          class="select-duan"
          :options="['Nguyễn văn C', 'Nguyễn văn D']"
        ></v-select>
      </div>

      <div class="theodoi-thicong">
        <v-select
        placeholder="Dự án"
          class="select-duan"
          :options="['Dự án A', 'Dự án B']"
        ></v-select>
      </div>

      <div class="theodoi-thicong">
        <v-select
        placeholder="Loại"
          class="select-duan"
          :options="['Xi măng', 'Thép','Gạch']"
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
        "Tên_vật_liệu",
        "Loại_vật_liệu",
        "Thông_số_kỹ_thuật",
        "Ngày_nhập",
        "Đơn_vị",
        "Khối_lượng",
        "Lấy_mẫu",
        "Đánh_giá",
        "Người_thực_hiện",
        " ",
      ],
      items: [
        {
          isActive: false,
          Tên_vật_liệu:
            "Xi măng ",
          Loại_vật_liệu: "Thi công thô, và hoàn thiện tầng 4",
          Thông_số_kỹ_thuật:
            "40kg/bao",
          Ngày_nhập: "15:31 02/03/2021",

          Đơn_vị: "Bao",
          Khối_lượng: "KL Nhập: 350KL Lũy kế: 350",
          Lấy_mẫu: "Bắt đầu: 10:30 04/03/2021,Kết thúc: 17:00 05/03/2021",
          Đánh_giá: "Nguyễn Như Thế",
          Người_thực_hiện: "Vũ Đức  Nguyễn Hồng Quan Trịnh Thị T",
        },
         {
          isActive: false,
          Tên_vật_liệu:
            "Xi măng ",
          Loại_vật_liệu: "Thi công thô, và hoàn thiện tầng 4",
          Thông_số_kỹ_thuật:
            "40kg/bao",
          Ngày_nhập: "15:31 02/03/2021",

          Đơn_vị: "Bao",
          Khối_lượng: "KL Nhập: 350KL Lũy kế: 350",
          Lấy_mẫu: "Bắt đầu: 10:30 04/03/2021,Kết thúc: 17:00 05/03/2021",
          Đánh_giá: "Nguyễn Như Thế",
          Người_thực_hiện: "Vũ Đức  Nguyễn Hồng Quan Trịnh Thị T",
        },
       {
          isActive: false,
          Tên_vật_liệu:
            "Xi măng ",
          Loại_vật_liệu: "Thi công thô, và hoàn thiện tầng 4",
          Thông_số_kỹ_thuật:
            "40kg/bao",
          Ngày_nhập: "15:31 02/03/2021",

          Đơn_vị: "Bao",
          Khối_lượng: "KL Nhập: 350KL Lũy kế: 350",
          Lấy_mẫu: "Bắt đầu: 10:30 04/03/2021,Kết thúc: 17:00 05/03/2021",
          Đánh_giá: "Nguyễn Như Thế",
          Người_thực_hiện: "Vũ Đức  Nguyễn Hồng Quan Trịnh Thị T",
        },
               {
          isActive: false,
          Tên_vật_liệu:
            "Xi măng ",
          Loại_vật_liệu: "Thi công thô, và hoàn thiện tầng 4",
          Thông_số_kỹ_thuật:
            "40kg/bao",
          Ngày_nhập: "15:31 02/03/2021",

          Đơn_vị: "Bao",
          Khối_lượng: "KL Nhập: 350KL Lũy kế: 350",
          Lấy_mẫu: "Bắt đầu: 10:30 04/03/2021,Kết thúc: 17:00 05/03/2021",
          Đánh_giá: "Nguyễn Như Thế",
          Người_thực_hiện: "Vũ Đức  Nguyễn Hồng Quan Trịnh Thị T",
        },
               {
          isActive: false,
          Tên_vật_liệu:
            "Xi măng ",
          Loại_vật_liệu: "Thi công thô, và hoàn thiện tầng 4",
          Thông_số_kỹ_thuật:
            "40kg/bao",
          Ngày_nhập: "15:31 02/03/2021",

          Đơn_vị: "Bao",
          Khối_lượng: "KL Nhập: 350KL Lũy kế: 350",
          Lấy_mẫu: "Bắt đầu: 10:30 04/03/2021,Kết thúc: 17:00 05/03/2021",
          Đánh_giá: "Nguyễn Như Thế",
          Người_thực_hiện: "Vũ Đức  Nguyễn Hồng Quan Trịnh Thị T",
        },
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
.table-theodoitc{
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
.theodoi-thicong{
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
  width: 150px;
  background-color: #fff;
}

</style>