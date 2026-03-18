let totalBooks = 0;
let lostBooks = 0;
let outOfStock = 0;

let continueCheck = prompt(
  "Tiếp tục kiểm kê sách tiếp theo? (có/không)",
).toLowerCase();

while (continueCheck === "có") {
  let bookId = "";
  while (bookId === "") {
    bookId = prompt("Nhập mã sách:");
    if (bookId === "") {
      alert("Mã sách không hợp lệ!");
    }
  }

  let bookName = prompt("Tên sách:");

  let quantity = -1;
  while (quantity < 0 || !Number.isInteger(quantity)) {
    quantity = +prompt("Số lượng trong kho:");
    if (quantity < 0 || !Number.isInteger(quantity)) {
      alert("Số lượng không hợp lệ!");
    }
  }

  let status = +prompt("Tình trạng (1-Bình thường | 2-Mất)");

  totalBooks++;

  if (status === 2) {
    lostBooks++;
  } else if (status === 1 && quantity === 0) {
    outOfStock++;
  }

  continueCheck = prompt(
    "Tiếp tục kiểm kê sách tiếp theo? (có/không)",
  ).toLowerCase();
}

alert(`Tổng số sách đã kiểm kê: ${totalBooks}`);
alert(`Số sách mất: ${lostBooks}`);
alert(`Số sách hết hàng: ${outOfStock}`);
