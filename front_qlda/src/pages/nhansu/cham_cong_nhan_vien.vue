<template>
  <div class="container-chamcongcanhan">
    <div class="block1">
      <h4>Bảng chấm công</h4>
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

      <div class="block1__select">
        <v-select
          placeholder="Theo dự án"
          class="block1__select--bg"
          :options="['Dự án A', 'Dự án B']"
        ></v-select>
      </div>

      <div class="block1__select">
        <v-select
          placeholder="Theo nhân sự"
          class="block1__select--bg"
          :options="['Nguyễn Văn A', 'Nguyễn Văn B']"
        ></v-select>
      </div>

      <div class="block1__search">
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
            <b-th rowspan="2">Stt</b-th>
            <b-th rowspan="2">Họ tên</b-th>
            <b-th>Ngày</b-th>
            <b-th rowspan="2">Tổng</b-th>
            <b-th>13-04</b-th>
            <b-th>14-04</b-th>
            <b-th>15-04</b-th>
            <b-th>16-04</b-th>
            <b-th>17-04</b-th>
            <b-th>18-04</b-th>
            <b-th>19-04</b-th>
            <b-th>20-04</b-th>
          </b-tr>
           <b-tr>
            <b-th>Buổi</b-th>
            <b-th>Thứ 3</b-th>
            <b-th>Thứ 4</b-th>
            <b-th>Thứ 5</b-th>
            <b-th>Thứ 6</b-th>
            <b-th>Thứ 7</b-th>
            <b-th>Chủ nhật</b-th>
            <b-th>Thứ 2</b-th>
            <b-th>Thứ 3</b-th>
          </b-tr>
        </b-thead>
        <b-tbody class="block3__bodytb">
          <b-tr>
            <b-td rowspan="3">1</b-td>
            <b-td rowspan="3">Nguyễn Hồng</b-td>
            <b-td rowspan="3" class="text-center">12-04-2021</b-td>
            <b-td>Sáng</b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Chiều</b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Tối</b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
          </b-tr>

          <b-tr>
            <b-td rowspan="3">1</b-td>
            <b-td rowspan="3">Nguyễn Hồng</b-td>
            <b-td rowspan="3" class="text-center">12-04-2021</b-td>
            <b-td>Sáng</b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Chiều</b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Tối</b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
          </b-tr><b-tr>
            <b-td rowspan="3">1</b-td>
            <b-td rowspan="3">Nguyễn Hồng</b-td>
            <b-td rowspan="3" class="text-center">12-04-2021</b-td>
            <b-td>Sáng</b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Chiều</b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Tối</b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
          </b-tr>

          <b-tr>
            <b-td rowspan="3">1</b-td>
            <b-td rowspan="3">Nguyễn Hồng</b-td>
            <b-td rowspan="3" class="text-center">12-04-2021</b-td>
            <b-td>Sáng</b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
            <b-td class="block3__bodytb--dachamcong"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Chiều</b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
            <b-td class="block3__bodytb--daxacnhan"></b-td>
          </b-tr>
          <b-tr>
            <b-td>Tối</b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
            <b-td class="block3__bodytb--nghi"></b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
export default {
 

};
</script>

<style scoped>
.block1__select--bg{
  background-color: #fff;
}
.block1__search input[type="search"]{
  height: 34px;

}
.block1__select{
  width: 200px;
}
.container-chamcongcanhan {
  margin-right: 15px;
  margin-left: 15px;
}
.block3 {
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