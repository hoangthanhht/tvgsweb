<template>
  <div class="header-page-giaocv">
    <div class="btn-add-cv">
      <b-button size="sm" class="mb-2 add-cv">
        <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
      </b-button>
    </div>

    <div class="select-name">
      <div>
        <b-dropdown id="dropdown-form" text="Dropdown" ref="dropdown">
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

	 <div class="select-mucdo">
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </div>


  	 <div class="select-tinhtrang">
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </div>
  	 <div class="select-ketqua">
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </div>

    <div class="search-congv">
    <b-input-group size="sm" class="mb-2 add-cv">
      
      <b-form-input type="search" placeholder="Search terms"></b-form-input>
	  <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>

	    <b-input-group-prepend is-text>
        <b-icon icon="arrow-repeat"></b-icon>
      </b-input-group-prepend>
    </b-input-group>
  </div>

   <div class="table-cv">
    <b-table striped hover bordered :items="items" :fields="fields"></b-table>
  </div>
  </div>
  
</template>

<script>
export default {
	 data() {
      return {
		   fields: ['Tên', 'Kế_hoạch', 'Thực_hiện', 'Người_đề_xuất', 'Người_phối_hợp'
		   , 'Yêu_cầu_công_việc', 'Uu_tiên', 'Kết_quả', 'Tình_trạng', 'Lưu_ý'],
        items: [
          { isActive: false, Tên: 'Hồ sơ thanh toán đợt 8- MeLinh Plaza', Kế_hoạch: 'Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019', Thực_hiện: 'Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019',
		  Người_đề_xuất: 'Nguyễn Như Tùng', Người_phối_hợp: 'Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến', Yêu_cầu_công_việc: 'trình ký Mr.Tuân, nộp hồ sơ lên Euro',
		  Uu_tiên: 'Quan trọng và khẩn cấp', Kết_quả: 'Đã hoàn thành', Tình_trạng: 'Quá hạn',Lưu_ý: 'Chưa cập nhật' },
		   { isActive: false, Tên: 'Hồ sơ thanh toán đợt 8- MeLinh Plaza', Kế_hoạch: 'Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019', Thực_hiện: 'Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019',
		  Người_đề_xuất: 'Nguyễn Như Tùng', Người_phối_hợp: 'Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến', Yêu_cầu_công_việc: 'trình ký Mr.Tuân, nộp hồ sơ lên Euro',
		  Uu_tiên: 'Quan trọng và khẩn cấp', Kết_quả: 'Đã hoàn thành', Tình_trạng: 'Quá hạn',Lưu_ý: 'Chưa cập nhật' },
		   { isActive: false, Tên: 'Hồ sơ thanh toán đợt 8- MeLinh Plaza', Kế_hoạch: 'Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019', Thực_hiện: 'Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019',
		  Người_đề_xuất: 'Nguyễn Như Tùng', Người_phối_hợp: 'Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến', Yêu_cầu_công_việc: 'trình ký Mr.Tuân, nộp hồ sơ lên Euro',
		  Uu_tiên: 'Quan trọng và khẩn cấp', Kết_quả: 'Đã hoàn thành', Tình_trạng: 'Quá hạn',Lưu_ý: 'Chưa cập nhật' }

        ],
        selected: ['b'], // Array reference
        options: [
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          { value: 'd', text: 'This one is disabled', disabled: true },
          { value: 'e', text: 'This is option e' },
          { value: 'f', text: 'This is option f' },
          { value: 'g', text: 'This is option g' }
        ]
      }
    }
};
</script>

<style scoped>
.btn-secondary:hover {
  color: #fff;
  background-color: red;
  border-color: #6c757d;
}
.add-cv .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.header-page-giaocv{
	position: relative;
  margin-left: 20px;
  margin-right: 20px;
}
.btn-add-cv{
	position: absolute;
	left: 10px;
}
.select-name .btn-secondary{
	background-color: #fff;
	color: #000;
}
.select-name{
	position:absolute;
	left: 10%;
}
.select-mucdo{
	position:absolute;
	left: 25%;
}
.select-tinhtrang{
	position:absolute;
	left: 45%;
}
.select-ketqua{
	position:absolute;
	left: 65%;
}
.search-congv{
	position:absolute;
	right: 0;
}
.table-cv{
	position: absolute;
	top: 60px;
	width: 100%;
}
</style>