let totalReturns;

while (true) {
  totalReturns = +prompt("Hôm nay có bao nhiêu lượt trả sách?");
  if (totalReturns > 0 && Number.isInteger(totalReturns)) break;
  alert("Số lượt trả không hợp lệ, vui lòng nhập lại!");
}

let lateReturns = 0;

for (let i = 1; i <= totalReturns; i++) {
  alert("Lượt trả thứ " + i);

  let readerName = prompt("Tên người trả:");
  let bookName = prompt("Tên sách:");

  let borrowedDays;

  while (true) {
    borrowedDays = +prompt("Nhập số ngày đã mượn:");
    if (borrowedDays >= 1 && Number.isInteger(borrowedDays)) break;
    alert("Số ngày đã mượn không hợp lệ, vui lòng nhập lại!");
  }

  if (borrowedDays <= 14) {
    alert("Trả đúng hạn");
  } else if (borrowedDays <= 21) {
    alert("Trả muộn nhẹ - Phạt nhắc nhở");
    lateReturns++;
  } else {
    alert("Quá hạn nghiêm trọng - Cần ghi biên bản");
    lateReturns++;
  }
}

alert("Tổng lượt trả: " + totalReturns);
alert("Số lượt trả muộn: " + lateReturns);
