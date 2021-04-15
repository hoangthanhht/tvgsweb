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

			<div class="theodoi-thicong">
				<v-select
				placeholder="Theo nhân sự"
					class="select-duan"
					:options="['Nguyễn Văn B', 'Bùi Văn A']"
				></v-select>
			</div>

			<div class="theodoi-thicong">
				<v-select 
				placeholder="Theo dự án"
				class="select-duan"
				:options="['Dự án B', 'Dự án A']"
				v-model="selectedBank"></v-select>
			</div>
			<!-- <div>
				<button v-on:click="directToBank">dfdksfk</button>
			</div> -->
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
			selectedBank: null,//giá trị đc binding với select
			options: ["Canada", "United States", "VietNam"],
			fields: [
				"Tên_vật_liệu",
				"Lấy_mẫu",
				"TS_Kỹ_thuật",
				"Thí_nghiệm",
				"Đánh_giá",
				"Kết_quả",
				"Người_thực_hiện",
				"Ghi_chú",
				" ",
			],
			items: [
				{
					Tên_vật_liệu:
						"Xi măng ,Thép sàn tầng mái",
					Lấy_mẫu: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					TS_Kỹ_thuật: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Thí_nghiệm: "Nguyễn Như Hưng",
					Đánh_giá: "Phạm Văn Nghĩa, Vũ Văn Đại",
					Kết_quả: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Người_thực_hiện: "Nguyễn Như Hưng",
					Ghi_chú: "Trần Văn Quang Hoàng Văn Thịnh",
				},
						{
					Tên_vật_liệu:
						"Xika , Sơn ngoài nhà, Gioăng chống thấm bể",
					Lấy_mẫu: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					TS_Kỹ_thuật: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Thí_nghiệm: "Nguyễn Như Hưng",
					Đánh_giá: "Phạm Văn Nghĩa, Vũ Văn Đại",
					Kết_quả: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Người_thực_hiện: "Nguyễn Như Hưng",
					Ghi_chú: "Trần Văn Quang Hoàng Văn Thịnh",
				},
				{
					Tên_vật_liệu:
						"Gạch xây, gạch ốp lát tầng 4,5",
					Lấy_mẫu: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					TS_Kỹ_thuật: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Thí_nghiệm: "Nguyễn Như Hưng",
					Đánh_giá: "Phạm Văn Nghĩa, Vũ Văn Đại",
					Kết_quả: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Người_thực_hiện: "Nguyễn Như Hưng",
					Ghi_chú: "Trần Văn Quang Hoàng Văn Thịnh",
				},
						{
					Tên_vật_liệu:
						"Gạch xây, gạch ốp lát tầng 4,5",
					Lấy_mẫu: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					TS_Kỹ_thuật: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Thí_nghiệm: "Nguyễn Như Hưng",
					Đánh_giá: "Phạm Văn Nghĩa, Vũ Văn Đại",
					Kết_quả: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Người_thực_hiện: "Nguyễn Như Hưng",
					Ghi_chú: "Trần Văn Quang Hoàng Văn Thịnh",
				},
			],
		 
		};
	},
	components: {
		MucBC,
	},
	 methods: {// lấy ra giá trị đã chọn 
		directToBank() {
				alert(this.selectedBank)
				console.log(this.selectedBank)
		}
	},
};
</script>

<style scoped>
/* .clear{
	clear: both;
} */
.select-duan {
	width: 200px;
	background-color: #fff;
}
#vs1__combobox {
	background-color: cyan;
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
.table-theodoitc{
	background-color: #fff;
}
</style>