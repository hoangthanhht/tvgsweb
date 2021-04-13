<template>
	<div class="baoc-theodoi">
		<!-- block1 -->
		<div>
			<MucBC />
		</div>
		<!-- block 2 -->
		<div class="gr-card">
			<div class="card-tvgs">
				<b-card title="Title">
					<b-card-text> This is a wider card </b-card-text>
				</b-card>
			</div>
			<div class="card-tvgs">
				<b-card title="Title">
					<b-card-text> This is a wider card </b-card-text>
				</b-card>
			</div>
			<div class="card-tvgs">
				<b-card title="Title">
					<b-card-text> This is a wider card </b-card-text>
				</b-card>
			</div>
			<div class="card-tvgs">
				<b-card title="Title">
					<b-card-text> This is a wider card </b-card-text>
				</b-card>
			</div>
			<div class="card-tvgs">
				<b-card title="Title">
					<b-card-text> This is a wider card </b-card-text>
				</b-card>
			</div>
			<div class="card-tvgs">
				<b-card title="Title">
					<b-card-text> This is a wider card </b-card-text>
				</b-card>
			</div>
		</div>
		<!-- block 3 -->
		<div class="block-select">
			<div class="btn-add-cv theodoi-thicong">
				<b-button size="sm" class="mb-2 icon-tvgs">
					<b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
				</b-button>
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
					class="select-duan"
					:options="['Canada', 'United States']"
				></v-select>
			</div>

		 <div class="theodoi-thicong">
				<v-select
					class="select-duan"
					:options="['Canada', 'United States']"
				></v-select>
			</div>

		 <div class="theodoi-thicong">
				<v-select
					class="select-duan"
					:options="['Canada', 'United States']"
				></v-select>
			</div>

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
			fields: [
				"Nội_dung_công_việc",
				"Ảnh",
				"Thời_điểm_thực_hiện",
				"Đánh_giá",
				"Thời_gian_làm_việc",
				"Người_thực_hiện",
				" ",
			],
			items: [
				{
					isActive: false,
					Nội_dung_công_việc: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
					Ảnh: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Thời_điểm_thực_hiện:
						"Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Đánh_giá: "Nguyễn Như Tùng",
					Thời_gian_làm_việc: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
					Người_thực_hiện: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
				},
				{
					isActive: false,
					Nội_dung_công_việc: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
					Ảnh: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Thời_điểm_thực_hiện:
						"Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Đánh_giá: "Nguyễn Như Tùng",
					Thời_gian_làm_việc: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
					Người_thực_hiện: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
				},
				{
					isActive: false,
					Nội_dung_công_việc: "Hồ sơ thanh toán đợt 8- MeLinh Plaza",
					Ảnh: "Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Thời_điểm_thực_hiện:
						"Bắt đầu: 10:30 04/11/2019,Kết thúc: 17:00 05/11/2019",
					Đánh_giá: "Nguyễn Như Tùng",
					Thời_gian_làm_việc: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
					Người_thực_hiện: "Vũ Đức Tuân Nguyễn Hồng Quang Trịnh Thị Tuyến",
				},
			],
			selected: ["b"], // Array reference
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
	components: {
		MucBC,
	},
};
</script>

<style scoped>
/* .clear{
	clear: both;
} */

.gr-card {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.card-tvgs {
	overflow: hidden;
	margin-bottom: 10px;
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
.select-duan {
	width: 200px;
	background-color: #fff;
}
</style>