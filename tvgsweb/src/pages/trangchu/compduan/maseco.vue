<template>
  <div class="modal-content">

        <div class="image">
          <h4 class="mb-3 header-title">Ảnh dự án</h4>
        <div class="image__item">
          <img
            style="width: 50%"
            src="../../../assets/anh_du_an/maseco.png"
            alt=""
          />
           <img
            style="width: 50%"
            src="../../../assets/anh_du_an/maseco.png"
            alt=""
          />
        </div>
    </div>
    <div class="modal-header bg-teal">
      <button
        type="button"
        onclick="_CLOSE_MODAL()"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <form method="post" id="mainFormInput">
        <input type="hidden" />
        <input type="hidden" name="id" value="5fbf0e7ece22d1194721fcab" />
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Thông tin chi tiết dự án</h4>
            <div class="row">
              <div class="col-md-9">
                <div class="form-group">
                  <label>Tên dự án</label>
                  <div class="text-primary" name="obj[name]">
                    KHÁCH SẠN MASECO
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Mã dự án</label>
                  <div class="text-primary" name="obj[code]"></div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Tên chủ đầu tư</label>
              <div class="text-primary" name="obj[chu_dau_tu]">
                Công ty CP Dịch vụ Phú Nhuận (Maseco).
              </div>
            </div>
            <div class="form-group">
              <label for="obj-description">Mô tả, ghi chú về dự án</label>
              <div class="text-primary">02 hầm, 12 tầng.</div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Ngày bắt đầu tiếp nhận:</label>
                <div class="text-primary" name="obj[time_start]"></div>
              </div>
              <div class="form-group col-md-6">
                <label>Thời gian kết thúc dự kiến:</label>
                <div class="text-primary" name="obj[time_end_plan]"></div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Thời gian kết thúc thực tế:</label>
                <div class="text-primary" name="obj[time_end]">
                  Chưa cập nhật
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="example-select">Trạng thái dự án:</label>
                <div class="text-primary"></div>
              </div>
            </div>

            <div class="form-group mb-3">
              <label>Mức độ thành công với dự án này:</label>
              <div class="text-primary" name="obj[percent]">
                <span class="badge badge-primary">Hoàn thành 0%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end card -->

        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Nhân viên tham gia dự án</h4>

            <div class="form-group">
              <label>Nhân sự phụ trách chính:</label>
              <div class="text-primary">Vũ Đức ,Nguyễn Trung H,Phạm Văn N</div>
            </div>
            <div class="form-group">
              <label>Nhân sự liên quan:</label>
              <div class="text-primary">Hoàng Đình K,Phạm Văn T</div>
            </div>
          </div>
        </div>
        <!-- end card -->
      </form>
    </div>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.image__item{
    display: flex;
}
.image{
    margin-left: 18px;
    margin-right: 18px;
        background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}
.image .header-title{
    padding-left: 20px;
}

</style>