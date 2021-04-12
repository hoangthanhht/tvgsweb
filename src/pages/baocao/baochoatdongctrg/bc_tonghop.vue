<template>
  <div class="bcao-cv">
    <div>
      <MucBC />
    </div>

    <div>
      <div class="block-select">
        <div class="select-datecv baocao-congviec">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div>
          <p>{{ currentValue.text }}</p>
        </div>
        <div class="select-nhansu baocao-congviec">
          <div>
            <b-dropdown id="dropdown-form" text="Theo nhân sự" ref="dropdown">
              <b-dropdown-form>
                <b-form-group>
                  <b-form-input> </b-form-input>
                  <div>
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      multiple
                      :select-size="4"
                    ></b-form-select>
                  </div>
                </b-form-group>
              </b-dropdown-form>
            </b-dropdown>
          </div>
        </div>

        <div class="select-duan baocao-congviec">
          <div>
            <b-dropdown id="dropdown-form" text="Theo dự án" ref="dropdown">
              <b-dropdown-form>
                <b-form-group>
                  <b-form-input> </b-form-input>
                  <div>
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      multiple
                      :select-size="4"
                    ></b-form-select>
                  </div>
                </b-form-group>
              </b-dropdown-form>
            </b-dropdown>
          </div>
        </div>

        <div class="search-baoc baocao-congviec">
          <b-input-group size="sm" class="mb-2 baocao-cv">
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
          Họ_tên: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Theo_dõi_thi_công:
            "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Nghiệm_thu_công_việc:
            "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Giám_sát_nguồn_lực: "Nguyễn Như Tùng",
          Văn_bản_phát_hành: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
        },
        {
          isActive: false,
          Họ_tên: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Theo_dõi_thi_công:
            "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Nghiệm_thu_công_việc:
            "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Giám_sát_nguồn_lực: "Nguyễn Như Tùng",
          Văn_bản_phát_hành: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
        },
        {
          isActive: false,
          Họ_tên: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
          Theo_dõi_thi_công:
            "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Nghiệm_thu_công_việc:
            "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
          Giám_sát_nguồn_lực: "Nguyễn Như Tùng",
          Văn_bản_phát_hành: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
        },
      ],
      selected: "g", // Array reference
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
    computed: {
    currentValue() {
      // console.log(this.options.find(option => option.value === this.selected).text)
      return this.options.find(option => option.value === this.selected)
      
    }
  },
  components: {
    MucBC,
  },
};
</script>

<style scoped>
.baocao-cv .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}

.search-baoc input[type="search"]{
  height: 38px;
}
.block-select{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
}
.bcao-cv {
  margin-right: 20px;
  margin-left: 20px;
}
</style>