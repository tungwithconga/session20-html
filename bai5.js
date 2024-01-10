var diemVatLy = +prompt("Hay nhap diem vat li:");
var diemHoaHoc = +prompt("Hay nhap diem hoa hoc:");
var diemSinhHoc = +prompt("Hay nhap diem sinh hoc:");
var tongDiem = diemVatLy + diemHoaHoc + diemSinhHoc;
 var diemTrungBinh = tongDiem / 3;
 console.log("Tổng điểm: " + tongDiem);
 console.log("Điểm trung bình: " + diemTrungBinh);