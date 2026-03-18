let totalRequests = 0;
let success = 0;
let rejected = 0;
let pending = 0;

while (true) {
  let choice = prompt("Có yêu cầu đặt trước không? (có/không)");
  if (choice === "không") break;

  let readerName = prompt("Tên bạn đọc:");
  let bookId = prompt("Mã sách:");
  let bookName = prompt("Tên sách:");

  let waitDays;
  while (true) {
    waitDays = +prompt("Số ngày chờ:");
    if (waitDays >= 1 && Number.isInteger(waitDays)) break;
    alert("Số ngày chờ không hợp lệ!");
  }

  let priority = +prompt("1-SV | 2-Giảng viên | 3-Đặc cách");

  totalRequests++;

  if (waitDays > 45) {
    alert("Từ chối: Thời gian chờ quá lâu");
    rejected++;
  } else if (priority === 3) {
    alert("Đặt trước thành công - Ưu tiên cao nhất");
    success++;
  } else if (priority === 2 && waitDays <= 30) {
    alert("Đặt trước thành công - Giảng viên");
    success++;
  } else if (priority === 1 && waitDays <= 21) {
    alert("Đặt trước thành công");
    success++;
  } else {
    alert("Chờ xét duyệt thêm");
    pending++;
  }
}

alert("Tổng yêu cầu: " + totalRequests);
alert("Thành công: " + success);
alert("Từ chối: " + rejected);
alert("Chờ xét: " + pending);
