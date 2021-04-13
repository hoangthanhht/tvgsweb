<template>
<div class="brc-comp">
 <b-breadcrumb :items="items"></b-breadcrumb>
</div>
 
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Trang chủ',  
            href: '#'
          },
          {
            text: 'Báo cáo hoạt động công trường',
            href: '#'
          },
          {
            text: 'Giám sát thí nghiệm vật liệu',
            active: true
          }
        ]
      }
    }
  }
</script>
<style scoped>
.brc-comp{
}

</style>