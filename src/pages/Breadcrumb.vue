<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
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