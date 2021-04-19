<template>
  <div class="them-hd">
    <div class="body-hstk">
      <div class="form-add-hd">
        <h5>Cập nhật thông tin hợp đồng</h5>
        <div class="hd-gr1">
          <p>Tên hợp đồng:</p>
          <b-form-input
            id="input-1"
            type="text"
            placeholder="Nhập tên công việc"
            required
          ></b-form-input>
        </div>

        <div class="hd-gr2">
          <div class="du-an-moi">
            <p>Dự án (Thêm mới)</p>
            <v-select
              class="select-duan"
              :options="options"
              v-model="selectedBank"
            ></v-select>
          </div>
          <div class="gia-tri-hd">
            <p>Giá trị theo HĐ/PLHĐ</p>
            <b-form-input
			style="height :34px"
              id="input-1"
              type="text"
              placeholder="Nhập tên công việc"
              required
            ></b-form-input>
          </div>
        </div>

        <div class="hd-gr3">
          <p>Nhân sự liên quan:</p>
          <v-select
            class="select-duan"
            :options="options"
            v-model="selectedBank"
          ></v-select>
        </div>

        <h5>Khối lượng thực hiện theo hợp đồng</h5>
        <div class="hd-gr4">
          <div class="hd-bat-dau">
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

          <div class="hd-ket-thuc">
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
        </div>

        <div >
          <p>Đơn vị (Thêm mới)</p>
          <v-select
            class="select-duan"
            :options="options"
            v-model="selectedBank"
          ></v-select>
        </div>

        <div >
          <p>Khối lượng</p>
          <v-select
            class="select-duan"
            :options="options"
            v-model="selectedBank"
          ></v-select>
        </div>

        <div class="hs-gr5">
          <h5>File và tài liệu liên quan</h5>
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
export default {
  data() {
    return {
      isActive: false,
    };
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
.hd-gr2{
	display: flex;
}
.du-an-moi{
	flex: 0 0 50%;
	padding-right: 5px;
}
.gia-tri-hd{
	flex: 1;
}

.hd-gr4{
	display: flex;
}
.hd-bat-dau{
	flex: 0 0 50%;
	padding-right: 5px;
}
.hd-ket-thuc{
	flex: 1;
}


.them-hd {
  margin-left: 10px;
  margin-right: 10px;
}
.form-add-hd {
  width: 50%;
  background-color: #fff;
  padding: 10px;
}

h5{
	padding-top: 15px;
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
.body-hstk {
  display: flex;
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