//import là lệnh nhúng giá trị file khác vào file
import { tinhTienDien, kiemTraDauRot, tinhThueThuNhap, chuyenDoiKetNoi, tinhHoaDonTienCap } from './method.js'


/*
    Bài tập 1: Quản lý tuyển sinh
*/

document.getElementById('btnKetQua').onclick = function(e) {
    //input:
    let diemChuan = +document.getElementById('diemChuan').value;
    let khuVuc = document.getElementById('khuVuc').value;
    let doiTuong = +document.getElementById('doiTuong').value;
    let diemMon1 = +document.getElementById('diemMon1').value;
    let diemMon2 = +document.getElementById('diemMon2').value;
    let diemMon3 = +document.getElementById('diemMon3').value;

    
    //output: 
    // let tongDiem = 0;

    //process:
    let tongDiem = kiemTraDauRot(diemChuan,khuVuc,doiTuong,diemMon1,diemMon2,diemMon3);

    // document.getElementById('ketQua').innerHTML = tongDiem;
};



/*
    Bài tập 2: Viết hàm tính tiền điện từ số KW
*/

document.getElementById('btnTinhTien').onclick = function (e) {
    
    //input: soKW
    let nhapHoVaTen = document.getElementById('nhapHoVaTen').value;
    let soKW = +document.getElementById('soKW').value;
    // output: tongTien
    if(isNaN(soKW) || soKW <= 0) {
        alert('Số kw không hợp lệ! Vui lòng nhập lại');
        // return;
    }

    let tongTienDien = 0;
    // process 
    tongTienDien = tinhTienDien(soKW); 

    document.getElementById('ketQuaBai2').innerHTML = `Họ tên: ${nhapHoVaTen} ; Tiền điện cần phải trả ${tongTienDien.toLocaleString()} VND`;
}


/*
    BÀI TẬP 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
*/

document.getElementById('btnTinhTienThue').onclick = function (e) {
    //input: 
    let nhapHoTen = document.getElementById('nhapHoTen').value;
    let tongThuNhapNam = +document.getElementById('tongThuNhapNam').value
    let soNguoiPhuThuoc = +document.getElementById('soNguoiPhuThuoc').value;


    //output:
    let thueThuNhap = tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc);

    // Kiểm tra xem số tiền thu nhập có hợp lệ hay không
    if (isNaN(tongThuNhapNam) || tongThuNhapNam <= 0) {
        document.getElementById('ketQua3').innerHTML = 'Họ tên: ; Tiền thuế thu nhập cá nhân: 0 VND';
        alert('Số tiền thu nhập không hợp lệ');
        return tongThuNhapNam; // Dừng lại để người dùng nhập lại
    }

    // Định dạng số tiền
    let formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    document.getElementById('ketQua3').innerHTML = `Họ tên: ${nhapHoTen}; Tiền thuế thu nhập cá nhân: ${formatter.format(thueThuNhap)} `;
}


/*
    BÀI TẬP 4: TÍNH TIỀN CÁP
*/
// DOM tới id của thẻ loaiKhachHang để sử dụng hàm chuyenDoiKetNoi
document.addEventListener("DOMContentLoaded", function() {
    let loaiKhachHangSelect = document.getElementById("loaiKhachHang");

    // Gán sự kiện onchange cho phần tử <select>
    loaiKhachHangSelect.addEventListener("change", function() {
        chuyenDoiKetNoi();
    });
});

document.getElementById('btnTinhTienCap').onclick = function (e) {
    // input: string , number 
    let loaiKhachHang = document.getElementById('loaiKhachHang').value;
    let nhapMaKhachHang = document.getElementById('nhapMaKhachHang').value;
    let soKenhCaoCap = +document.getElementById('soKenhCaoCap').value;
    let soKetNoi = +document.getElementById('soKetNoi').value

    // Kiểm tra xem người dùng đã chọn loại khách hàng hay chưa
    if (loaiKhachHang === 'Loại khách hàng' || loaiKhachHang === '') {
        document.getElementById('ketQua4').innerHTML = 'Mã khách hàng: ; Tiền cáp: $0.00';
        alert('Hãy chọn loại khách hàng');
        return; // Dừng lại để người dùng chọn loại khách hàng
    }

    // output: number
    let tienCap = tinhHoaDonTienCap (loaiKhachHang, soKenhCaoCap, soKetNoi);

    document.getElementById('ketQua4').innerHTML = `Mã khách hàng: ${nhapMaKhachHang}; Tiền cáp: $${tienCap.toLocaleString()}`;
    
}