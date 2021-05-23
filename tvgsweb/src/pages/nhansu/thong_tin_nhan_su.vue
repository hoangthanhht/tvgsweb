<template>
  <div class="containerblock">
    <div class="container-info">
      <div class="container-info__card">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">Thông tin về nhân sự</h4>
            <div class="form-row">
              <div class="col-md-8">
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label>Mã nv</label>
                    <div class="text-primary" name="obj[code]">APA017</div>
                  </div>
                  <div class="form-group col-md-12">
                    <label>Tài khoản</label>
                    <div class="text-primary" name="obj[account]">
                      nguyenhong
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <label>Nhập tên nhân viên</label>
                    <div class="text-primary" name="obj[name]">
                      Nguyễn Hồng Q
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="avatar-container"
                  style="
                    max-height: 230px;
                    height: 100%;
                    padding: 10px;
                    width: 100%;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #80808024;
                  "
                >
                  <div
                    id="avatar_bg"
                    style="
                      background: url('') center center / cover;
                      width: 100%;
                      height: 100%;
                      position: relative;
                    "
                  >
                    <div
                      id="html5_1f3kftfccshe11cjijh1sl61uca3_container"
                      class="moxie-shim moxie-shim-html5"
                      style="
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 0px;
                        height: 0px;
                        overflow: hidden;
                        z-index: 0;
                      "
                    >
                      <input
                        id="html5_1f3kftfccshe11cjijh1sl61uca3"
                        type="file"
                        style="
                          font-size: 999px;
                          opacity: 0;
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 100%;
                          height: 100%;
                        "
                        multiple=""
                        accept=""
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="hidden"
                  id="avatar_brief"
                  value=""
                  name="obj[avatar][brief]"
                />
                <input
                  type="hidden"
                  id="avatar_full_size_link"
                  value="http://vpdt.beacons.vn/data/upload/2019/09/07/ban-sao-cua-img-quang.jpg"
                  name="obj[avatar][full_size_link]"
                />
                <input
                  type="hidden"
                  id="avatar_id"
                  value="5d7367c5ce22d139ec5cf975"
                  name="obj[avatar][id]"
                />
                <input
                  type="hidden"
                  id="avatar_name"
                  value="Bản sao của IMG_Quang"
                  name="obj[avatar][name]"
                />
                <input
                  type="hidden"
                  id="avatar_relative_link"
                  value="upload/2019/09/07/ban-sao-cua-img-quang.jpg"
                  name="obj[avatar][relative_link]"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Điện thoại liên hệ:</label>
                <div class="text-primary" name="obj[phone]">0973786388</div>
              </div>
              <div class="form-group col-md-6">
                <label>Email:</label>
                <div class="text-primary" name="obj[email]">
                  nguyenhong@apave.vn
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-3">
                <label>Giới tính:</label>
                <div class="text-primary">Nam</div>
              </div>
              <div class="form-group col-md-3">
                <label>Ngày sinh:</label>
                <div class="text-primary" name="obj[date_of_birth]">
                  21/11/1988
                </div>
              </div>
              <div class="form-group col-md-6">
                <label>Nơi sinh:</label>
                <div class="text-primary" name="obj[noi_sinh]">Nam Định</div>
              </div>
            </div>

            <div class="form-group">
              <label>Nguyên quán:</label>
              <div class="text-primary" name="obj[nguyen_quan]">
                Chưa cập nhật
              </div>
            </div>
            <div class="form-group">
              <label>Nơi đăng ký hộ khẩu thường trú:</label>
              <div class="text-primary" name="obj[noi_dang_ky_ho_khau]">
                40/93 Quang Trung - Nam Định
              </div>
            </div>
            <div class="form-group">
              <label>Chỗ ở hiện nay:</label>
              <div class="text-primary" name="obj[cho_o_hien_nay]">
                Chưa cập nhật
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Dân tộc:</label>
                <div class="text-primary" name="obj[dan_toc]">Kinh</div>
              </div>
              <div class="form-group col-md-6">
                <label>Tôn giáo:</label>
                <div class="text-primary" name="obj[ton_giao]">Không</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Trình độ chuyên môn:</label>
                <div class="text-primary" name="obj[trinh_do_chuyen_mon]">
                  Đại học
                </div>
              </div>
              <div class="form-group col-md-6">
                <label>Năm tốt nghiệp:</label>
                <div class="text-primary" name="obj[ngay_tot_nghiep]">
                  07/05/2011
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Ngành học:</label>
                <div class="text-primary" name="obj[nganh_hoc]">
                  Xây dựng dân dụng và công nghiệp
                </div>
              </div>
              <div class="form-group col-md-6">
                <label>Nơi đào tạo:</label>
                <div class="text-primary" name="obj[noi_dao_tao]">
                  Chưa cập nhật
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Chứng minh thư/căn cước:</label>
                <div class="text-primary" name="obj[chung_minh_thu_number]">
                  162783317
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>Ngày cấp:</label>
                <div class="text-primary" name="obj[chung_minh_thu_ngay_cap]">
                  Chưa cập nhật
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>Nơi cấp:</label>
                <div class="text-primary" name="obj[chung_minh_thu_noi_cap]">
                  Chưa cập nhật
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Số tài khoản:</label>
                <div
                  class="text-primary"
                  name="obj[tai_khoan_ngan_hang_number]"
                >
                  Chưa cập nhật
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>Ngân hàng:</label>
                <div
                  class="text-primary"
                  name="obj[tai_khoan_ngan_hang_ngan_hang][id]"
                >
                  Chưa cập nhật
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>Chi nhánh:</label>
                <div
                  class="text-primary"
                  name="obj[tai_khoan_ngan_hang_chi_nhanh]"
                >
                  Chưa cập nhật
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>CCHN TVGS:</label>
                <div class="text-primary" name="obj[cchn_tvgs]">
                  Chưa cập nhật
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>Ngày hiệu lực:</label>
                <div class="text-primary" name="obj[cchn_tvgs_ngay_hieu_luc]">
                  Chưa cập nhật
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>CC ATLD:</label>
                <div class="text-primary">Chọn</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>CCHN TVTK:</label>
                <div class="text-primary" name="obj[cchn_tvtk]">
                  Chưa cập nhật
                </div>
              </div>
              <div class="form-group col-md-6">
                <label>Chứng chỉ khác:</label>
                <div class="text-primary" name="obj[chung_chi_khac]">
                  Chưa cập nhật
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Ngày nhận công tác:</label>
                <div class="text-primary" name="obj[ngay_nhan_cong_tac]">
                  01/07/2015
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>Phòng ban:</label>
                <div class="text-primary" name="obj[department][id]">Dự Án</div>
              </div>
              <div class="form-group col-md-3">
                <label title="Dùng để phân quyền">Chức danh (*):</label>
                <div class="text-primary" name="obj[position][id]">
                  TRƯỞNG ĐOÀN
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Ngày đóng bảo hiểm xã hội:</label>
                <div class="text-primary" name="obj[ngay_dong_bao_hiem_xa_hoi]">
                  08/08/2019
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>Loại hợp đồng:</label>
                <div class="text-primary">}</div>
              </div>
              <div class="form-group col-md-3">
                <label>Trạng thái công việc:</label>
                <div class="text-primary"></div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Số sổ bảo hiểm xã hội:</label>
                <div class="text-primary" name="obj[so_so_bao_hiem_xa_hoi]">
                  Chưa cập nhật
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>Mức đóng BHXH:</label>
                <div class="text-primary" name="obj[muc_dong_bao_hiem_xa_hoi]">
                  Chưa cập nhật
                </div>
              </div>
              <div class="form-group col-md-3">
                <label>Ngày nghỉ việc:</label>
                <div class="text-primary" name="obj[ngay_nghi_viec]">
                  Chưa cập nhật
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="obj-description">Mô tả về nhân viên:</label>
              <div class="text-primary" style="white-space: pre-line">
                Chưa cập nhật
              </div>
            </div>
          </div>
        </div>

        <div class="add-gr3">
          <h5>File và tài liệu liên quan</h5>
          <b-form-file id="file-small" size="sm"></b-form-file>
        </div>
      </div>

      <div class="container-info__tab">
        <div class="container-info__tab--label">
          <b-tabs content-class="mt-3">
            <b-tab title="Ghi Chú" active
              ><p>
                Sau khi thêm bản ghi bạn có thể sử dụng chức năng ghi chú Giúp
                bạn ghi lại những gì liên quan đến bản ghi này theo từng giai
                đoạn, thời gian khác nhau Nội dung sẽ được hiển thị theo format
                mẫu bên dưới.
              </p></b-tab
            >
            <b-tab title="Lịch Sử"
              ><p>
                Dưới đây là lịch sử các lần cập nhật dữ liệu Giúp bạn xem được
                ai đã cập nhật thông tin? cập nhật vào lúc nào? và cập nhật
                những gì? Nội dung sẽ được hiển thị theo format mẫu bên dưới.
              </p></b-tab
            >
          </b-tabs>
        </div>
        <div class="container-info__tab--discr">
          <p>
            Tên nhân viên ghi chú Thời điểm ghi chú Đây là mẫu format ghi chú.
            Nội dung ghi chú sẽ được hiển thị ở đây
          </p>
        </div>
      </div>
    </div>
    <div class="container-info__foot">
      <div class="container-info__foot--btn">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="backspace-fill" aria-hidden="true"></b-icon> Xóa
        </b-button>
      </div>
      <div class="container-info__foot--btn">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="x-octagon-fill" aria-hidden="true"></b-icon> Bỏ qua
        </b-button>
      </div>
      <div class="container-info__foot--btn">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="printer-fill" aria-hidden="true"></b-icon> Xem bản in
        </b-button>
      </div>
      <div class="container-info__foot--btn">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="check-circle-fill" aria-hidden="true"></b-icon> Xem chấm
          công
        </b-button>
      </div>
      <div class="container-info__foot--btn">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="pencil-square" aria-hidden="true"></b-icon> Sửa thông tin
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.containerblock{
    margin-left: 10px;
    margin-right: 10px;
}
.container-info {
  display: flex;
}
.container-info__card {
  flex: 0 0 50%;
  margin-right: 25px;
}
.container-info__tab {
  
}
.container-info__tab--discr,
.container-info__tab--label {
  background-color: #fff;
  padding-left: 5px;
  border-radius: 10px;
}
.container-info__foot .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.container-info__foot {
  display: flex;
  background-color: #00a53c;
  height: 32px;
  width: 100%;
  position: fixed;
  bottom: 0;
  align-items: stretch;
}
/* css cho các btn cạnh nhau marinleft */
.container-info__foot--btn 
+ .container-info__foot--btn{
 margin-left: 30px;
}
</style>