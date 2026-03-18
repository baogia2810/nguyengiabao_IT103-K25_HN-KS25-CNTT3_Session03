let successCount = 0;
let failCount = 0;

while (true) {
  let choice = prompt("Có yêu cầu gia hạn mới không? (có/không)");
  if (choice === "không") break;

  let readerName = prompt("Tên bạn đọc:");
  let bookName = prompt("Tên sách:");

  let currentDays;
  while (true) {
    currentDays = +prompt("Số ngày đã mượn:");
    if (currentDays >= 1 && Number.isInteger(currentDays)) break;
    alert("Số ngày đã mượn không hợp lệ!");
  }

  let extendDays;
  while (true) {
    extendDays = +prompt("Số ngày muốn gia hạn:");
    if (extendDays >= 1 && Number.isInteger(extendDays)) break;
    alert("Số ngày gia hạn không hợp lệ!");
  }

  if (currentDays + extendDays > 60) {
    alert("Không được gia hạn: Vượt quá 60 ngày");
    failCount++;
  } else if (currentDays > 45) {
    alert("Không được gia hạn: Đã mượn quá lâu");
    failCount++;
  } else {
    alert("Gia hạn thành công");
    successCount++;
  }
}

alert("Gia hạn thành công: " + successCount);
alert("Gia hạn thất bại: " + failCount);
