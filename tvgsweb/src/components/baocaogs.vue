<template>
  <div>
    <div class="col-md-3">
      <input
        v-on:change="handleChange"
        class="form-control"
        type="file"
        id="input"
        accept=".xls,.xlsx"
      />
    </div>
    <div class="col-md-2">
      <button v-on:click="handleClick" class="" id="button">
        TaoBaoCao
      </button>
      <button v-on:click="handleClickPost" class="" id="buttonp">
        test
      </button>
      <button v-on:click="handleClickGet" class="" id="buttong">
        GetAPI
      </button>
    </div>

    <table

      border="0"
      cellpadding="0"
      cellspacing="0"
      width="889"
      class="xl6831113"
      style="border-collapse: collapse; table-layout: fixed; width: 668pt"
    >
      <colgroup>
        <col
          class="xl6931113"
          width="44"
          style="mso-width-source: userset; mso-width-alt: 1609; width: 33pt"
        />
        <col
          class="xl6931113"
          width="99"
          style="mso-width-source: userset; mso-width-alt: 3620; width: 74pt"
        />
        <col
          class="xl6931113"
          width="61"
          style="mso-width-source: userset; mso-width-alt: 2230; width: 46pt"
        />
        <col
          class="xl6931113"
          width="89"
          style="mso-width-source: userset; mso-width-alt: 3254; width: 67pt"
        />
        <col
          class="xl6931113"
          width="92"
          style="mso-width-source: userset; mso-width-alt: 3364; width: 69pt"
        />
        <col
          class="xl6931113"
          width="101"
          style="mso-width-source: userset; mso-width-alt: 3693; width: 76pt"
        />
        <col
          class="xl6931113"
          width="44"
          style="mso-width-source: userset; mso-width-alt: 1609; width: 33pt"
        />
        <col
          class="xl6931113"
          width="66"
          style="mso-width-source: userset; mso-width-alt: 2413; width: 50pt"
        />
        <col
          class="xl6931113"
          width="59"
          style="mso-width-source: userset; mso-width-alt: 2157; width: 44pt"
        />
        <col
          class="xl6931113"
          width="32"
          style="mso-width-source: userset; mso-width-alt: 1170; width: 24pt"
        />
        <col
          class="xl6931113"
          width="65"
          span="2"
          style="mso-width-source: userset; mso-width-alt: 2377; width: 49pt"
        />
        <col
          class="xl6931113"
          width="72"
          style="mso-width-source: userset; mso-width-alt: 2633; width: 54pt"
        />
      </colgroup>
      <tbody>
        <tr height="51" style="mso-height-source: userset; height: 38.45pt">
          <td
            colspan="13"
            height="51"
            class="xl13431113"
            width="889"
            style="
              border-right: 0.5pt solid black;
              height: 38.45pt;
              width: 668pt;
            "
          >
            <a name="RANGE!A1:M54">BÁO CÁO NGÀY TƯ VẤN GIÁM SÁT</a>
          </td>
        </tr>
        <tr height="35" class="rowDay" style="mso-height-source: userset; height: 26.45pt">

            <a name="RANGE!M2">Ngày 08 tháng 04 năm 2020</a>

        </tr>
        <tr height="29" style="mso-height-source: userset; height: 21.95pt">
          <td
            height="29"
            class="xl7331113"
            colspan="2"
            style="height: 21.95pt; border-right: 0.5pt solid black"
          >
            Dự án:
          </td>
          <td class="xl7531113" colspan="6">
            XÂY DỰNG TÒA NHÀ CÔNG TY CP GIÁ XÂY DỰNG
          </td>
          <td class="xl7631113">&nbsp;</td>
          <td class="xl7631113">&nbsp;</td>
          <td class="xl7631113">&nbsp;</td>
          <td class="xl7631113">&nbsp;</td>
          <td class="xl7731113">&nbsp;</td>
        </tr>
        <tr height="32" style="mso-height-source: userset; height: 24pt">
          <td
            height="32"
            class="xl7331113"
            colspan="2"
            style="height: 24pt; border-right: 0.5pt solid black"
          >
            Địa điểm:
          </td>
          <td class="xl7531113" colspan="4">
            Số 124, Nguyễn Ngọc Nại, Thanh Xuân, Hà Nội
          </td>
          <td class="xl7631113" style="border-top: none">&nbsp;</td>
          <td class="xl7631113" style="border-top: none">&nbsp;</td>
          <td class="xl7631113" style="border-top: none">&nbsp;</td>
          <td class="xl7631113" style="border-top: none">&nbsp;</td>
          <td class="xl7631113" style="border-top: none">&nbsp;</td>
          <td class="xl7631113" style="border-top: none">&nbsp;</td>
          <td class="xl7731113" style="border-top: none">&nbsp;</td>
        </tr>
        <tr height="84" style="mso-height-source: userset; height: 63.6pt">
          <td
            height="84"
            class="xl7331113"
            colspan="2"
            style="height: 63.6pt; border-right: 0.5pt solid black"
          >
            Nơi nhận:
          </td>
          <td
            colspan="11"
            class="xl13731113"
            width="746"
            style="border-right: 0.5pt solid black; width: 561pt"
          >
            - Chủ đầu tư<br />
            - Ban quản lý dự án<br />
            - Đồng gửi Văn phòng Công ty TVGS
          </td>
        </tr>
        <tr height="32" style="mso-height-source: userset; height: 24pt">
          <td height="32" class="xl7831113" colspan="6" style="height: 24pt">
            <a name="RANGE!A6">{{ mucArr[0]}}</a>
          </td>
          <td class="xl8031113" style="border-top: none">&nbsp;</td>
          <td class="xl8031113" style="border-top: none">&nbsp;</td>
          <td class="xl8031113" style="border-top: none">&nbsp;</td>
          <td class="xl8031113" style="border-top: none">&nbsp;</td>
          <td class="xl8031113" style="border-top: none">&nbsp;</td>
          <td class="xl8031113" style="border-top: none">&nbsp;</td>
          <td class="xl8131113" style="border-top: none">&nbsp;</td>
        </tr>
        <tr height="32" style="mso-height-source: userset; height: 24pt">
          <td
            height="32"
            class="xl8231113"
            style="height: 24pt; border-top: none"
          >
            &nbsp;
          </td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8331113" style="border-top: none">&nbsp;</td>
          <td class="xl8431113" style="border-top: none">&nbsp;</td>
        </tr>
        <tr height="32" style="mso-height-source: userset; height: 24pt">
          <td height="32" class="xl8531113" colspan="6" style="height: 24pt">
            <a name="RANGE!A8">{{ mucArr[1]}}</a>
          </td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8731113" style="border-top: none">&nbsp;</td>
        </tr>
		<template
		 v-for="(itemArr, index) in tenNT"      
		>
        <tr
		  :key="index"
          class="xl8831113"
          height="22"
          style="height: 16.5pt"
        >
          <td height="22" class="xl8931113" colspan="2" style="height: 16.5pt">
			      {{ itemArr}}
          </td>
          <td class="xl9131113">&nbsp;</td>
		 
        </tr>
		<template
		  v-for="(itemArr1, index1) in getTencvNthu(itemArr)"
		>
		<tr 
		
		:key="'A' + index1 + index"
          class="mucngthu"
          height="22"
          style="height: 16.5pt"
		>
		<td height="22" class="tdcontent" colspan="2" style="height: 16.5pt">
			  {{ itemArr1}}
          </td>
	
		</tr>

		<tr
		v-for="(itemArr2, index2) in getNdcvNthu(itemArr,itemArr1)"
		:key="'B' + index1 + index + index2"
          class="noidung"
          height="22"
          style="height: 16.5pt"
			>
			<td height="22" class="tdcontent" colspan="2" style="height: 16.5pt">
			  {{ itemArr2}}
          </td>
        </tr>
	

		</template>
		</template>
		  <tr height="32" style="mso-height-source: userset; height: 24pt">
          <td height="32" class="xl8531113" colspan="6" style="height: 24pt">
            <a name="RANGE!A8">{{ mucArr[2]}}</a>
          </td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8731113" style="border-top: none">&nbsp;</td>
        </tr>
        <tr

          class="xl8831113"
          height="22"
          style="height: 16.5pt"
        >
          <td height="22" class="xl8931113" colspan="2" style="height: 16.5pt">
       
          </td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9131113">&nbsp;</td>
        </tr>

			  <tr height="32" style="mso-height-source: userset; height: 24pt">
          <td height="32" class="xl8531113" colspan="6" style="height: 24pt">
            <a name="RANGE!A8">{{ mucArr[3]}}</a>
          </td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8631113" style="border-top: none">&nbsp;</td>
          <td class="xl8731113" style="border-top: none">&nbsp;</td>
        </tr>
        <tr

          class="xl8831113"
          height="22"
          style="height: 16.5pt"
        >
          <td height="22" class="xl8931113" colspan="2" style="height: 16.5pt">
       
          </td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9031113">&nbsp;</td>
          <td class="xl9131113">&nbsp;</td>
        </tr>


        <tr
          class="xl11031113"
          height="32"
          style="mso-height-source: userset; height: 24pt"
        >
          <td height="32" class="xl7831113" colspan="4" style="height: 24pt">
            <a name="RANGE!A40">{{ mucArr[4]}}</a>
          </td>
          <td class="xl7931113" style="border-top: none">&nbsp;</td>
          <td class="xl7931113" style="border-top: none">&nbsp;</td>
          <td
            class="xl10831113"
            width="44"
            style="border-top: none; width: 33pt"
          >
            &nbsp;
          </td>
          <td class="xl7931113" style="border-top: none">&nbsp;</td>
          <td class="xl7931113" style="border-top: none">&nbsp;</td>
          <td class="xl7931113" style="border-top: none">&nbsp;</td>
          <td class="xl7931113" style="border-top: none">&nbsp;</td>
          <td class="xl7931113" style="border-top: none">&nbsp;</td>
          <td class="xl10931113" style="border-top: none">&nbsp;</td>
        </tr>
		<tr class="image_report">
			<img 
			v-for="(item,index) in imgArr"
			:key="index"
			class="image_item" 
			v-bind:src="getStringUrl(index)" 
			alt="">
		</tr>


        <tr height="22" style="height: 16.5pt">
          <td height="22" class="xl12231113" style="height: 16.5pt">&nbsp;</td>
          <td class="xl12331113"></td>
          <td class="xl12331113"></td>
          <td class="xl12331113"></td>
          <td class="xl12331113"></td>
          <td class="xl12331113"></td>
          <td class="xl12331113"></td>
          <td
            colspan="6"
            class="xl12331113"
            align="center"
            style="border-right: 0.5pt solid black"
          >
            THAY MẶT ĐOÀN TƯ VẤN GIÁM SÁT
          </td>
        </tr>
        <tr height="32" style="mso-height-source: userset; height: 24pt">
          <td height="32" class="xl12531113" style="height: 24pt">&nbsp;</td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td
            colspan="6"
            class="xl12331113"
            align="center"
            style="border-right: 0.5pt solid black"
          >
            Trưởng đoàn tư vấn giám sát
          </td>
        </tr>
        <tr height="22" style="height: 16.5pt">
          <td height="22" class="xl12531113" style="height: 16.5pt">&nbsp;</td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl11831113"></td>
          <td class="xl12631113">&nbsp;</td>
        </tr>


        <!--[if supportMisalignedColumns]-->
        <!--[endif]-->
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  
  name: "tvgs-header",
  data() {
    return {
      url: "http://127.0.0.1:8000/api/v1/products",
      indexMuc: [],
      selectedFile: null,
      rowObject:[], //JSON.parse(this.$store.state.listReport[0].contentJson.replace(/\\/g,"")),
      mucArr: [],
      ndcvArr: [],
	  tenNT:[],
	  tenCvNthu:[],
	  imgArr :[],
    };
  },
  mounted(){
 
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
	   ...mapGetters([
            'getListPost'
        ])
  },
//   async created() {
//     const response = await fetch(this.url);
//     const data = await response.json();
//     this.rowObject = data[1].contentjson;
//   },
  methods: {
     ...mapActions([
            'getListPostHasPaging',
        ]),
	// getStringUrl(index) {
	// 	  return this.imgArr[index]
	//   },
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
      this.getListPostHasPaging
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
		console.log("key",key)
		return Object.keys(this.rowObject[this.mucArr[1]][key])
	},
	getNdcvNthu(key1,key2) {
		console.log("key1",key1)
		console.log("key2",key2)
		return this.rowObject[this.mucArr[1]][key1][key2]
	},
	handleArr() {
     
      this.mucArr = Object.keys(this.rowObject)
	  this.tenNT = Object.keys(this.rowObject[this.mucArr[1]])
	  this.tenCvNthu= Object.keys(this.rowObject[this.mucArr[1]][this.tenNT[1]])
	  console.log("mang",this.rowObject[this.mucArr[1]][this.tenNT[1]][this.tenCvNthu[2]])
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
	  this.parseExcelFile(this.selectedFile)
    },
    handleClick(event) {
       this.rowObject = JSON.parse(this.getListPost.data[0].contentJson.replace(/\\/g,""));
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


<style >
table {
  border: 1px solid black;
}
.rowDay {
	position: relative;
}
.rowDay a {
	position: absolute;
	top: 160px;
	right: 420px;
}
.tdcontent {
	padding-left: 10px;
}
.mucngthu {
	color: #000;
	font-weight: 700;
	font-size: 14px;
}

.noidung {
	 font-size: 13.5px;
	 font-style: italic;
	 padding-left: 4px;
}

.image_report {
	display: flex;
	width: 889px;
	height: 300px;
	flex-wrap: wrap;

}
.image_item {
	width: 50%;
	height: 100%;
  padding: 10px;
}
.font531113 {
  color: black;
  font-size: 9pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: Tahoma, sans-serif;
  mso-font-charset: 0;
}
.xl6831113 {
  border: 1px solid;
  padding: 0px;
  mso-ignore: padding;
  color: black;
  font-size: 11pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl6931113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl7031113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl7131113 {
  color: blue;
  font-size: 13pt;
  font-weight: 400;
  font-style: italic;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: right;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-right: 9px;
  mso-char-indent-count: 1;
}
.xl7231113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl7331113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl7431113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl7531113 {
  padding: 0px;
  mso-ignore: padding;
  color: blue;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl7631113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl7731113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: italic;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: right;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-right: 9px;
  mso-char-indent-count: 1;
}
.xl7831113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl7931113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl8031113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl8131113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl8231113 {
  color: black;
  font-size: 11pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl8331113 {
  padding: 0px;
  mso-ignore: padding;
  color: black;
  font-size: 11pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: bottom;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl8431113 {
  padding: 0px;
  mso-ignore: padding;
  color: black;
  font-size: 11pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: bottom;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl8531113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: none;
  border-left: 0.5pt solid windowtext;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl8631113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: none;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl8731113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl8831113 {
  padding: 0px;
  mso-ignore: padding;
  color: black;
  font-size: 11pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl8931113 {
  color: red;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: none;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9031113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9131113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9231113 {
  color: black;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9331113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9431113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9531113 {
  color: black;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9631113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9731113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9831113 {
  color: black;
  font-size: 11pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl9931113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl10031113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl10131113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: normal;
}
.xl10231113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl10331113 {
  color: black;
  font-size: 11pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: Fixed;
  text-align: left;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl10431113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: Fixed;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl10531113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: Fixed;
  text-align: general;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl10631113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: Fixed;
  text-align: general;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: normal;
}
.xl10731113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: Fixed;
  text-align: general;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl10831113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: normal;
}
.xl10931113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl11031113 {
  color: black;
  font-size: 11pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl11131113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: none;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl11231113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl11331113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl11431113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center-across;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl11531113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl11631113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl11731113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: italic;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  background: #b7dee8;
  mso-pattern: black none;
  white-space: normal;
}
.xl11831113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center-across;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl11931113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center-across;
  vertical-align: middle;
  background: #b7dee8;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl12031113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  background: #b7dee8;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl12131113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl12231113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center-across;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl12331113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center-across;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl12431113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center-across;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl12531113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center-across;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl12631113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center-across;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl12731113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl12831113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl12931113 {
  padding: 0px;
  mso-ignore: padding;
  color: blue;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl13031113 {
  padding: 0px;
  mso-ignore: padding;
  color: blue;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: general;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: none;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl13131113 {
  color: red;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl13231113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
}
.xl13331113 {
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl13431113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 18pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl13531113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 18pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl13631113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 18pt;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: center;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  background: #99ff99;
  mso-pattern: black none;
  white-space: nowrap;
}
.xl13731113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: "\@";
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: 0.5pt solid windowtext;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: normal;
}
.xl13831113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: "\@";
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: normal;
}
.xl13931113 {
  padding: 0px;
  mso-ignore: padding;
  color: windowtext;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: "\@";
  text-align: left;
  vertical-align: middle;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: normal;
}
.xl14031113 {
  color: blue;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: General;
  text-align: left;
  vertical-align: middle;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl14131113 {
  color: blue;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: "Short Date";
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
.xl14231113 {
  color: blue;
  font-size: 13pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "Times New Roman", serif;
  mso-font-charset: 0;
  mso-number-format: "Short Date";
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
  border-left: none;
  mso-background-source: auto;
  mso-pattern: auto;
  white-space: nowrap;
  padding-left: 9px;
  mso-char-indent-count: 1;
}
</style>