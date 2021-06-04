<template>
  <div class="them-hs-ngthu">
    <div>
      <CompThemHs :isActive="isActive" v-on:handleClick="handleClick" />
    </div>
    <div class="body-hstk">
      <div class="form-add-hs-nghthu">
        <h4>Cập nhật thông tin Hồ sơ nghiệm thu</h4>
        <div class="select-for-hs">
          <p>Loại Hồ sơ:</p>

          <div class="theodoi-thicong">
            <v-select
              class="select-duan"
              :options="options"
              v-model="selectedBank"
            ></v-select>
          </div>

          <p>Chọn dự án:</p>

          <div class="theodoi-thicong">
            <v-select
              class="select-duan"
              :options="options"
              v-model="selectedBank"
            ></v-select>
          </div>
        </div>
        <div class="hs-gr1">
          <div class="gr-ten-hs">
            <p>Tên Hồ sơ</p>
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Nhập tên công việc"
              required
            ></b-form-input>
          </div>

          <div class="gr-sl">
            <p>Số lượng:</p>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="-9999"
              max="9999"
              style="width: 100%; height: 38px"
            />
          </div>
        </div>

        <div class="hs-gr2">
          <div class="gr-nhan">
            <p>Ngày nhận:</p>
            <form action="">
              <input
                style="height: 34px; width: 100%"
                type="date"
                id="birthday"
                name="birthday"
              />
            </form>
          </div>

          <div class="gr-tra">
            <p>Ngày trả:</p>
            <form action="">
              <input
                style="height: 34px; width: 100%"
                type="date"
                id="birthday"
                name="birthday"
              />
            </form>
          </div>
        </div>

        <div class="hs-gr3">
          <div class="gr-ktra">
            <p>Lần kiểm tra:</p>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="-9999"
              max="9999"
              style="width: 100%; height: 34px"
            />
          </div>

          <div class="gr-kqua">
            <p>Kết quả kiểm tra:</p>
            <v-select
              class="select-duan"
              :options="options"
              v-model="selectedBank"
            ></v-select>
          </div>
        </div>

        <div class="hs-gr4">
          <p>Lý do không đạt:</p>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Lưu ý"
            rows="3"
            max-rows="6"
          >
          </b-form-textarea>
        </div>

        <div class="hs-gr5">
          <p>File và tài liệu liên quan</p>
          <b-form-file id="file-small" size="sm"></b-form-file>
        </div>
      </div>
      <div class="hstk_note">
        <div class="add-gr41">
          <b-tabs content-class="mt-3">
            <b-tab title="First" active><p>I'm the first tab</p></b-tab>
            <b-tab title="Second"><p>I'm the second tab</p></b-tab>
          </b-tabs>
        </div>
        <div class="add-gr41">
          <p>
            Tên nhân viên ghi chú Thời điểm ghi chú Đây là mẫu format ghi chú.
            Nội dung ghi chú sẽ được hiển thị ở đây
          </p>
        </div>
      </div>
    </div>

    <div class="hs-gr6">
      <div class="add-gr51">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="x-octagon-fill" aria-hidden="true"></b-icon> Bỏ qua
        </b-button>
      </div>
      <div class="add-gr51 add-gr52">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="check2" aria-hidden="true"></b-icon> Cập nhật
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import CompThemHs from "./comp_them_hs/muc_them_ho_so";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    CompThemHs,
  },
  methods: {
    handleClick() {
      // console.log('comp cha',this.isActive);
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.them-hs-ngthu {
  margin-left: 10px;
  margin-right: 10px;
}
.form-add-hs-nghthu {
  width: 50%;
  background-color: #fff;
  padding: 10px;
}
.select-for-hs {
}
.hs-gr1 {
  display: flex;
}
.gr-ten-hs {
  min-width: 66.66667%;
  padding-right: 10px;
}
.gr-sl {
  flex: 1;
}
.hs-gr2 {
  display: flex;
}
.gr-nhan {
  min-width: 50%;
  padding-right: 10px;
}
.gr-tra {
  flex: 1;
}
.hs-gr3 {
  display: flex;
}
.gr-ktra {
  min-width: 50%;
  padding-right: 10px;
}
.gr-kqua {
  flex: 1;
}
.hs-gr6 .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.hs-gr6 {
  background-color: #00a53c;
  height: 32px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.add-gr51 {
  float: left;
}
.add-gr52 {
  margin-left: 30px;
}
.body-hstk{
	display: flex;
  margin-top: 20px;
}
.hstk_note .add-gr41 {
  background-color: #fff;
  margin-left: 20px;
  border-radius: 5px;
}
.hstk_note .add-gr41 p {
  padding: 10px;
}
</style>