let number = +prompt(`Moi nhap so luong muon sach:`);
let total = 0;
for (let i = 1; i <= number; i++) {
  let author = prompt(`Moi nhap ten nguoi muon:`);
  let bookName = prompt(`Moi nhap ten sach:`);
  let days = +prompt(`Moi nhap so ngay muon:`);
  if (days > 14) {
    console.log(`Canh bao:Thoi gian vuot muc quy dinh(toi da 14 ngay)`);
  } else {
    console.log(`Muon thanh cong`);
  }
  total++;
}
console.log(`Tong so luot muon:${total}`);
