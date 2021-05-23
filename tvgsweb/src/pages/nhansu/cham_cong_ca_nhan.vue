<template>
  <div class="container-chamcongcanhan">
    <div class="block1">
      <h4>Bảng chấm công nhân viên Nguyễn Văn Gì</h4>
      <div class="search-congv">
        <b-input-group size="sm" class="mb-2 add-cv icon-tvgs">
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
    <div class="block2">
      <div>
        <div class="block2__quote">
          <div class="block2__quote--dachamcong"></div>
          <p>Đã chấm công</p>
        </div>
      </div>

      <div>
        <div class="block2__quote">
          <div class="block2__quote--daxacnhan"></div>
          <p>Đã xác nhận đi làm</p>
        </div>
      </div>

      <div>
        <div class="block2__quote">
          <div class="block2__quote--nghi"></div>
          <p>Nghỉ</p>
        </div>
      </div>

      <div>
        <div class="block2__quote">
          <div class="block2__quote--nghicophep"></div>
          <p>Nghỉ có phép</p>
        </div>
      </div>

      <div>
        <div class="block2__quote">
          <div class="block2__quote--xinxacnhan"></div>
          <p>Xin xác nhận</p>
        </div>
      </div>
    </div>

    <div class="block3">
      <b-table-simple bordered hover small caption-top responsive>
        <b-thead>
          <b-tr>
            <b-th>Stt</b-th>
            <b-th>Họ tên</b-th>
            <b-th>Ngày</b-th>
            <b-th>Ca</b-th>
            <b-th>Chấm công</b-th>
          </b-tr>
        </b-thead>
        <b-tbody class="block3__bodytb">
          <b-tr>
            <b-td rowspan="3">1</b-td>
            <b-td rowspan="3">Nguyễn Hồng</b-td>
            <b-td rowspan="3" class="text-center">12-04-2021</b-td>
            <b-td>Sáng</b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Chiều</b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Tối</b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
          </b-tr>

          <b-tr>
            <b-td rowspan="3">2</b-td>
            <b-td rowspan="3">Nguyễn Hồng</b-td>
            <b-td rowspan="3" class="text-center">12-04-2021</b-td>
            <b-td>Sáng</b-td>
            <b-td class="block3__bodytb--nghicophep"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Chiều</b-td>
            <b-td class="block3__bodytb--xinxacnhan"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Tối</b-td>
            <b-td class="block3__bodytb--xinxacnhan" ></b-td>
          </b-tr>

                  <b-tr>
            <b-td rowspan="3">3</b-td>
            <b-td rowspan="3">Nguyễn Hồng</b-td>
            <b-td rowspan="3" class="text-center">12-04-2021</b-td>
            <b-td>Sáng</b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Chiều</b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Tối</b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
          </b-tr>

                  <b-tr>
            <b-td rowspan="3">4</b-td>
            <b-td rowspan="3">Nguyễn Hồng</b-td>
            <b-td rowspan="3" class="text-center">12-04-2021</b-td>
            <b-td>Sáng</b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Chiều</b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Tối</b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-chamcongcanhan{
  margin-right: 15px;
  margin-left: 15px;
}
.block3{
  background-color: #fff;
}
.block3__bodytb--dachamcong {
  background-color: #6658dd;
}
.block3__bodytb--daxacnhan {
  background-color: #7fff00;
}
.block3__bodytb--nghi {
  background-color: #f1556c;
}
.block3__bodytb--nghicophep {
  background-color: #f7b84b;
}
.block3__bodytb--xinxacnhan {
  background-color: #19c491;
}
.b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.block1 {
  display: flex;
  justify-content: space-between;
}
.block2 {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.block2__quote--dachamcong {
  height: 20px;
  width: 80px;
  background-color: #6658dd;
  margin-right: 5px;
}
.block2__quote--daxacnhan {
  height: 20px;
  width: 80px;
  background-color: chartreuse;
  margin-right: 5px;
}
.block2__quote--nghi {
  height: 20px;
  width: 80px;
  background-color: #f1556c;
  margin-right: 5px;
}
.block2__quote--nghicophep {
  height: 20px;
  width: 80px;
  background-color: #f7b84b;
  margin-right: 5px;
}
.block2__quote--xinxacnhan {
  height: 20px;
  width: 80px;
  background-color: #19c491;
  margin-right: 5px;
}
.block2__quote {
  display: flex;
}
</style>