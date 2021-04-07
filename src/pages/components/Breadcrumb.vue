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
            text: 'Quản lý nhân sự',
            href: '#'
          },
          {
            text: 'Cập nhật thông tin nhân sự',
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