// import { SET_TODO_INPUT, ADD_TODO } from "./Constains";

const host = "http://localhost:3000/";

const initState = {
  menuData: [
    { id: 1, label: "Trang chủ", path: host + "" },
    { id: 2, label: "Giới thiệu", path: host + "gioithieu" },
    {
      id: 3,
      label: "Sản phẩm",
      path: host + "sanpham",
      children: [
        {
          id: 8,
          idParent: 3,
          label: "Kho sách",
          path: host + "sanpham/khosach",
          children: [
            {
              id: 9,
              idParent: 8,
              label: "Sách văn học",
              path: host + "sanpham/khosach/sachvanhoc",
              children: [
                { id: 234, idParent: 9, label: "Sach nam cao", path: "asfdf" },
              ],
            },
            {
              id: 10,
              idParent: 8,
              label: "Truyện thiếu nhi",
              path: host + "sanpham/khosach/truyenthieunhi",
            },
            {
              id: 11,
              idParent: 8,
              label: "Sách khoa học",
              path: host + "sanpham/khosach/sachkhoahoc",
            },
          ],
        },
        {
          id: 12,
          idParent: 3,
          label: "Sách tham khảo",
          path: host + "sanpham/sachthamkhao",
        },
        {
          id: 13,
          idParent: 3,
          label: "Sách giáo khoa",
          path: host + "sanpham/sachgiaokhoa",
        },
      ],
    },
    {
      id: 4,
      label: "Dịch vụ khu vui chơi",
      path: host + "dvkhuvuichoi",
      children: [
        {
          id: 14,
          idParent: 4,
          label: "Review sách",
          path: host + "dvkhuvuichoi/reviewsach",
        },
      ],
    },
    {
      id: 5,
      label: "Tư vấn mua sắm",
      path: host + "tuvanmuasam",
    },
    { id: 6, label: "Tuyển dụng", path: host + "tuyendung" },
    { id: 7, label: "Liên hệ", path: host + "lienhe" },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    // case SET_TODO_INPUT:
    //   return {
    //     ...state,
    //     todo: action.payload,
    //   };

    default:
      throw new Error("Invalid actions");
  }
}

export { initState };
export default reducer;
