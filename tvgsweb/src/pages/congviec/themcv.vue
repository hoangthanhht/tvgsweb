<template>
  <div class="add-gr">
    <!-- group 1 -->
    <div class="add-gr1">
      <h5 class="mb-3 header-title">Cập nhật thông tin công việc</h5>
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Tên công việc (tiêu đề)"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Nhập tên công việc"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          description="Việc mô tả chi tiết công việc sẽ giúp người thực hiện dễ dàng hơn"
          id="input-group-2"
          label="Nội dung công việc"
          label-for="input-2"
        >
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Nội dung chi tiết công việc"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          tooltip
          label="Lưu ý"
          label-for="input-2"
        >
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Lưu ý"
            rows="3"
            max-rows="6"
          >
          </b-form-textarea>
        </b-form-group>

        <div class="add-gr11">
          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Thời gian bắt đầu:"
              label-for="input-1"
            >
              <b-form-input id="input-1" type="email" required></b-form-input>
            </b-form-group>
          </div>

          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Thời gian kết thúc dự kiến:"
              label-for="input-1"
            >
              <b-form-input id="input-1" type="email" required></b-form-input>
            </b-form-group>
          </div>
        </div>
        <!-- input -->
        <div class="add-gr11">
          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Mức độ ưu tiên:"
              label-for="input-1"
            >
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
            </b-form-group>
          </div>

          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Trạng thái công việc"
              label-for="input-1"
            >
              <b-form-input id="input-1" type="email" required></b-form-input>
            </b-form-group>
          </div>
        </div>

        <!-- input 3 -->
        <div class="add-gr11">
          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Thời gian bắt đầu thực tế:"
              label-for="input-1"
            >
              <b-form-input id="input-1" type="email" required></b-form-input>
            </b-form-group>
          </div>

          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Thời gian kết thúc thực tế:"
              label-for="input-1"
            >
              <b-form-input id="input-1" type="email" required></b-form-input>
            </b-form-group>
          </div>
        </div>
        <!-- combobox -->

        <b-form-group
          id="input-group-1"
          label="Kết quả thực hiện:"
          label-for="input-1"
        >
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-form-group>
      </b-form>
    </div>
    <!-- group 2 -->
    <div class="add-gr2">
      <h5 class="mb-3 header-title">Thành phần liên quan</h5>
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Nhân sự liên quan:"
          label-for="input-1"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
      </b-form>

      <b-form>
        <b-form-group
          id="input-group-1"
          label="Người giao việc:"
          label-for="input-1"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
      </b-form>

      <b-form>
        <b-form-group
          id="input-group-1"
          label="Dự án liên quan:"
          label-for="input-1"
        >
          <b-form-input id="input-1" type="email" required></b-form-input>
        </b-form-group>
      </b-form>
    </div>

    <!-- group 3 -->
    <div class="add-gr3">
      <h5>File và tài liệu liên quan</h5>

      <b-form-file id="file-small" size="sm"></b-form-file>
    </div>

    <div class="add-gr4">
      <div class="add-gr41">
        <b-tabs content-class="mt-3">
          <b-tab title="Ghi Chú" active><p>Sau khi thêm bản ghi bạn có thể sử dụng chức năng ghi chú
Giúp bạn ghi lại những gì liên quan đến bản ghi này theo từng giai đoạn, thời gian khác nhau
Nội dung sẽ được hiển thị theo format mẫu bên dưới.</p></b-tab>
          <b-tab title="Lịch Sử"><p>Dưới đây là lịch sử các lần cập nhật dữ liệu
Giúp bạn xem được ai đã cập nhật thông tin? cập nhật vào lúc nào? và cập nhật những gì?
Nội dung sẽ được hiển thị theo format mẫu bên dưới.</p></b-tab>
        </b-tabs>
      </div>  
      <div class="add-gr41">
        <p>
          Tên nhân viên ghi chú Thời điểm ghi chú Đây là mẫu format ghi chú. Nội
          dung ghi chú sẽ được hiển thị ở đây
        </p>
      </div>
    </div>

    <div class="add-gr5">
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
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      form: {
        email: "",
        name: "",
      },
      show: true,
    };
  },
};
</script>

<style scoped>
.add-gr {
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
}
.add-gr .add-gr5 .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.add-gr5 {
  background-color: #00a53c;
  height: 32px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.add-gr .add-gr5 .add-gr51 {
  float: left;
}
.add-gr .add-gr5 .add-gr52 {
  position: absolute;
  left: 10%;
}
.add-gr .add-gr5 .add-gr52 .btn-secondary:hover {
  background-color: chartreuse;
}
.add-gr3 .custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}
.add-gr1 .add-gr11 .add-gr111 {
  float: left;
  width: 48%;
  margin: 5px;
  box-sizing: border-box;
}
div.add-gr1,
div.add-gr2,
div.add-gr3 {
  width: 50%;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 20px;
}
.add-gr .add-gr4 .add-gr41 {
  background-color: #fff;
  padding-left: 5px;
}
div.add-gr4 {
  width: 50%;
  position: absolute;
  right: 0;
  top: -8px;
  padding-left: 40px;
  padding-right: 20px;
  box-sizing: border-box;
}
</style>