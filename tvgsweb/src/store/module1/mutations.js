export default {
    // increment (state) {
    //     state.count++
    // }
    SET_LIST_POSTS(state, data) {
        state.listReport = data;
    }
}

// TH nếu current = 1 -> Thay thế array gốc 
// TH nếu current = 2, 3, 4 -> Đẩy thêm dữ liệu vào ( nối 2 array lại với nhau )