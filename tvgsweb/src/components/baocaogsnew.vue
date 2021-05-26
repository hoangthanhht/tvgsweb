<template>
  <div>
    <div class="col-md-2">
      <button v-on:click="handleClick" class="" id="button">Xem Bao Cao</button>
      <!-- <button v-on:click="handleClickPost" class="" id="buttonp">
        test
      </button>
      <button v-on:click="handleClickGet" class="" id="buttong">
        GetAPI
      </button> -->
    </div>
    <div class="bccontainer">
      <div contenteditable="true" class="baocao">
        <p class="kindBC">BÁO CÁO NGÀY TƯ VẤN GIÁM SÁT</p>
        <p class="dateBC">Ngày 08 tháng 04 năm 2020</p>
        <div class="project">
          <p class="project_title">Dự án:</p>
          <p>XÂY DỰNG TÒA NHÀ CÔNG TY CP GIÁ XÂY DỰNG</p>
        </div>
        <div class="address">
          <p class="project_title">Địa điểm:</p>
          <p>Số 124, Nguyễn Ngọc Nại, Thanh Xuân, Hà Nội</p>
        </div>
        <div class="reccept">
          <p class="project_title">Nơi nhận:</p>
          <div class="name_reccept">
            <p>- Chủ đầu tư</p>
            <p>- Ban quản lý dự án</p>
            <p>- Đồng gửi Văn phòng Công ty TVGS</p>
          </div>
        </div>
        <p class="baocao_muc">I. CÔNG TÁC VĂN PHÒNG, HỒ SƠ, VĂN BẢN CỦA TVGS</p>
        <div class="baocao_hosongthu"></div>
        <p class="baocao_muc">II. CÔNG TÁC GIÁM SÁT THI CÔNG XÂY DỰNG</p>
        <div class="baocao_contentcvngthu">
          <template v-for="(itemArr, index) in tenNT">
            <div :key="index" class="baocao_contentcvngthu-nament">
              {{ itemArr }}
            </div>
            <template v-for="(itemArr1, index1) in getTencvNthu(itemArr)">
              <div
                :key="'A' + index1 + index"
                class="baocao_contentcvngthu-mucngthu"
              >
                {{ itemArr1 }}
              </div>

              <p
                v-for="(itemArr2, index2) in getNdcvNthu(itemArr, itemArr1)"
                :key="'B' + index1 + index + index2"
                class="baocao_contentcvngthu-noidung"
              >
                {{ itemArr2 }}
              </p>
            </template>
          </template>
        </div>
        <p class="baocao_muc">III. KIẾN NGHỊ, KHUYẾN CÁO CỦA TƯ VẤN GIÁM SÁT</p>
        <div class="baocao_kiennghi"></div>
        <p class="baocao_muc">
          IV. CÔNG TÁC AN TOÀN LAO ĐỘNG, VỆ SINH MÔI TRƯỜNG, PHÒNG CHÁY CHỮA
          CHÁY
        </p>
        <div class="baocao_antoan"></div>
        <p class="baocao_muc">V. HÌNH ẢNH ĐÍNH KÈM (NẾU CÓ)</p>
        <div class="img_list">
          <div
            v-for="(item, index) in imgArr"
            :key="index"
            class="img_list-item"
          >
          <!-- <div class="img_list-contentimg"></div> -->
            <img class="img_list-contentimg" v-bind:src="getStringUrl(index)" />
          </div>
        </div>
        <div class="baocao_footbc">
          <h5>THAY MẶT ĐOÀN TƯ VẤN GIÁM SÁT</h5>
          <p>Trưởng đoàn tư vấn giám sát</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "tvgs-header",
  data() {
    return {
      url: "http://127.0.0.1:8000/api/v1/products",
      indexMuc: [],
      selectedFile: null,
      rowObject: [], //JSON.parse(this.$store.state.listReport[0].contentJson.replace(/\\/g,"")),
      mucArr: [],
      ndcvArr: [],
      tenNT: [],
      tenCvNthu: [],
      imgArr: [],
    };
  },
  created() {
    this.getListReport(this.getTokenStorage);
  },
  watch: {
    // mucArr: function (val, oldVal) {
    //   console.log('watchmucArr',val)
    // },
    // ndcvArr:function (val, oldVal) {
    //   console.log('ndcvArr',val)
    // },
  },
  computed: {
    ...mapGetters(["getListPost","getTokenStorage"]),
  },
  //   async created() {
  //     const response = await fetch(this.url);
  //     const data = await response.json();
  //     this.rowObject = data[1].contentjson;
  //   },
  methods: {
    ...mapActions(["getListReport"]),
    getStringUrl(index) {
      return this.imgArr[index];
    },
    // arrayBufferToBase64(buffer) {
    //   var binary = "";
    //   var bytes = [].slice.call(new Uint8Array(buffer));
    //   bytes.forEach((b) => (binary += String.fromCharCode(b)));
    //   return window.btoa(binary);
    // },
    // parseExcelFile(inputElement) {
    //   const wb = new Excel.Workbook();
    //   const reader = new FileReader();
    //   var arrImg = [];
    //   reader.readAsArrayBuffer(inputElement);
    //   reader.onload = () => {
    //     const buffer = reader.result;
    //     // console.log("buffer", buffer);
    //     wb.xlsx.load(buffer)
    // 	.then((workbook) => {
    //       var worksheet = wb.getWorksheet("BaoCaoNgay");
    //       for (const image of worksheet.getImages()) {
    //         const img = workbook.model.media.find(
    //           (m) => m.index === image.imageId
    //         );
    //         // console.log("img.buffer", img.buffer);
    //         var bf = img.buffer;
    //         var rs = `data:image/jpg;base64,${this.arrayBufferToBase64(bf)}`;
    // 		this.imgArr.push(rs)

    //       }

    //     });
    //   };

    // },
    handleClickGet() {
      //var _this = this
      //   fetch(this.url)
      //     .then(function (response) {
      //       return response.json();
      //     })
      //     .then((data) => {
      // 	console.log((data[1].contentJson))
      // 	this.rowObject = JSON.parse(data[1].contentJson);
      // 	//console.log(this.rowObject)
      // 	//this.imgArr = data[1].imageUrl;
      // });
      // cái này dùng ơ row funtion thì mới gán vào biến của vue đc
      // nếu dùng hàm bình thường thì this chính là cái hàm đó.nên sẽ không gán đc. còn dùng hàm arrow funtion thì nó
      // không có đối tượng this nên sẽ gán đc. nếu không muốn dùng ơ rao function thì phải đặt 1 biến trong hàm handleClickGet()
      //rồi gán biến this cho biến đó sau đó mới dùng đc bỉnh thường trong hàm callback của hàm then. khi khai báo như var _this = this
      //trên thì ta sẽ dùng được biến _this như bình thường trong then. có thể tách hàm gọi api ra như này cũng đc hoặc đưa nó vào
      // lifecycle create cũng đc
    },
    getTencvNthu(key) {
      return Object.keys(this.rowObject[this.mucArr[1]][key]);
    },
    getNdcvNthu(key1, key2) {
      return this.rowObject[this.mucArr[1]][key1][key2];
    },
    handleArr() {
      this.mucArr = Object.keys(this.rowObject);
      this.tenNT = Object.keys(this.rowObject[this.mucArr[1]]);
      this.tenCvNthu = Object.keys(
        this.rowObject[this.mucArr[1]][this.tenNT[1]]
      );
      //   var indexMuc1 = indexMuc.forEach(function (rowob,index,arr) {

      //   })
    },

    handleClickPost() {
      this.handleArr();
    },

    handlePostMethod(data, callBack) {
      var option = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(this.url, option); // cái này đẩy dữ
      // .then(function (response) {
      // 	//    console.log('response', response.json())
      // 	 response
      // 	// console.log('response.json()',response.json())
      // })
      // .then(function(data) {
      // 	console.log('data',data)
      // })
    },
    handleChange(event) {
      this.selectedFile = event.target.files[0];
      this.parseExcelFile(this.selectedFile);
    },
    handleClick(event) {
      this.rowObject = JSON.parse(
        this.getListPost.data[1].contentJson.replace(/\\/g, "")
      );
      this.imgArr = JSON.parse(
        this.getListPost.data[1].imgBase64.replace(/\\/g, "")
      );
      this.handleArr();
      //this.getNdCvArr
    },
    //  getNdCvArr() {

    // 	this.ndcvArr = this.rowObject.filter(function (rowob,index,arr) {
    // 	if(index> 6 && index < 34)
    // 	{
    // 		return index
    // 	}
    //   		})
    // 	 console.log('ndcvArr',this.ndcvArr)
    //    },
  },
};
</script>


<style scoped>
.img_list-contentimg {
  width: 100%;
  height: 100%;
}
.img_list {
  display: flex;
  flex-wrap: wrap;
}
.img_list-item {
  width: 50%;
  padding: 10px;
}
.bccontainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.baocao {
  width: 60%;
  border: 1px solid;
}
.kindBC {
  border-bottom: 1px solid;
  text-align: center;
  margin: 0;
  line-height: 60px;
  background-color: #99ff99;
  font-size: 1.6rem;
}
.dateBC {
  border-bottom: 1px solid;
  text-align: right;
  margin: 0;
  line-height: 25px;
  font-size: 1rem;
  padding-right: 5px;
}
.project {
  display: flex;
  border-bottom: 1px solid;
}
.address {
  display: flex;
  border-bottom: 1px solid;
}
.reccept {
  display: flex;
  border-bottom: 1px solid;
  align-items: center;
}
.project_title {
  width: 15%;
  padding-left: 5px;
}
p {
  margin: 0;
  line-height: 30px;
}
.project_title ~ p,
.name_reccept {
  padding-left: 5px;
  border-left: 1px solid;
}
.baocao_muc {
  background-color: #99ff99;
  border-bottom: 1px solid;
  padding-left: 5px;
}

.baocao_footbc {
  text-align: right;
  padding-right: 10px;
}
.baocao_footbc p {
  margin-right: 70px;
}
.baocao_contentcvngthu {
  padding-left: 10px;
}
.baocao_contentcvngthu-noidung {
  font-size: 13.5px;
  font-style: italic;
  padding-left: 4px;
}
.baocao_contentcvngthu-mucngthu {
  color: #000;
  font-weight: 600;
  font-size: 14px;
}
.baocao_contentcvngthu-nament {
  color: red;
  font-weight: 800;
  font-size: 14px;
}
</style>