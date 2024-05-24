//Viết các hàm sử lý chức năng


/*
    Bài tập 1: Quản lý tuyển sinh
*/

export function kiemTraDauRot(diemChuan, khuVuc, doiTuong, diemMon1, diemMon2, diemMon3) {
    //output:
    let tongDiem = 0;
    
    //process:
    // Kiểm tra nếu có môn bị điểm 0 thì rớt
    if(diemMon1 === 0 || diemMon2 === 0|| diemMon3 === 0) {
        document.getElementById('ketQua').innerHTML = 'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';
        alert('Vui lòng nhập số diểm hợp lệ');
        return;  
    } 

    // Tính điểm ưu tiên theo khu vực
    let diemKhuVuc = 0;
    if(khuVuc === 'A') {
        diemKhuVuc = 2;
    } else if(khuVuc === 'B') {
        diemKhuVuc = 1;
    } else if(khuVuc === 'C') {
        diemKhuVuc = 0.5;
    } else{
        diemKhuVuc = 0;
    }


    // Tính điểm ưu tiên theo đối tượng 
    let diemDoiTuong = 0;
    if(doiTuong === 1) {
        diemDoiTuong = 2.5;
    } else if(doiTuong === 2) {
        diemDoiTuong = 1.5;
    } else if(doiTuong === 3) {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0;
    }
   
    tongDiem = diemKhuVuc + diemDoiTuong + diemMon1 + diemMon2 + diemMon3 ;

    // Kiểm tra kết quả
    if(tongDiem >= diemChuan) {
        document.getElementById('ketQua').innerHTML = `Bạn đã đậu. Tổng điểm: ${tongDiem} `;
    } else{
        document.getElementById('ketQua').innerHTML = `Bạn đã rớt. Tổng điểm: ${tongDiem} `;
    }

    //lệnh xuất output
    return tongDiem; //Lệnh kết thúc hàm và trả ra return
}

/*
    Bài tập 2: Viết hàm tính tiền điện từ số KW
*/

export function tinhTienDien(soKW) {
    let tongTien = 0;

    // Kiểm tra nếu giá trị không phải là số hoặc nhỏ hơn 0
    if (isNaN(soKW) < 0) {
        document.getElementById('ketQuaBai2').innerHTML = 'Họ tên: ; Tiền điện: 0';
        alert("Số kw không hợp lệ, vui lòng nhập lại !");
        return;
    }

    if(soKW <= 50) {
        tongTien = soKW * 500;
    } else if(soKW > 50 && soKW <= 100){
        tongTien = 50 * 500 + (soKW - 50) * 650;
    } else if(soKW > 100 && soKW <= 200) {
        tongTien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else if(soKW > 200 && soKW <= 350) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 150) * 1100;
    } else {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }
    return tongTien; // dừng và trả ra output
}


/*
    BÀI TẬP 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
*/  

export function tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc) { //input: number

    //output:
    let giamTruBanThan = 4000000;
    let giamTruThuNhapPhuThuoc = soNguoiPhuThuoc * 1600000;
    // Bước 1: Tính thu nhập chịu thuế
    let thuNhapTinhThue = tongThuNhapNam - giamTruBanThan - giamTruThuNhapPhuThuoc;


    // Bước 2: Tính thuế thu nhập cá nhân dựa trên thu nhập chịu thuế
    let thueTNCN = 0;
    if (thuNhapTinhThue <= 60000000) {
        thueTNCN = thuNhapTinhThue * 0.05;
    } else if (thuNhapTinhThue > 60000000 && thuNhapTinhThue <= 120000000) {
        thueTNCN = (60000000 * 0.05) + ((thuNhapTinhThue - 60000000) * 0.1);
    } else if (thuNhapTinhThue > 120000000 && thuNhapTinhThue <= 210000000) {
        thueTNCN = (60000000 * 0.05) + (60000000 * 0.1) + ((thuNhapTinhThue - 120000000) * 0.15);
    } else if (thuNhapTinhThue > 210000000 && thuNhapTinhThue <= 384000000) {
        thueTNCN = (60000000 * 0.05) + (60000000 * 0.1) + (90000000 * 0.15) + ((thuNhapTinhThue - 210000000) * 0.2);
    } else if (thuNhapTinhThue > 384000000 && thuNhapTinhThue <= 624000000) {
        thueTNCN = (60000000 * 0.05) + (60000000 * 0.1) + (90000000 * 0.15) + (174000000 * 0.2) + ((thuNhapTinhThue - 384000000) * 0.25);
    } else if (thuNhapTinhThue > 624000000 && thuNhapTinhThue <= 960000000) {
        thueTNCN = (60000000 * 0.05) + (60000000 * 0.1) + (90000000 * 0.15) + (174000000 * 0.2) + (240000000 * 0.25) + ((thuNhapTinhThue - 624000000) * 0.3);
    } else {
        thueTNCN = (60000000 * 0.05) + (60000000 * 0.1) + (90000000 * 0.15) + (174000000 * 0.2) + (240000000 * 0.25) + (336000000 * 0.3) + ((thuNhapTinhThue - 960000000) * 0.35);
    }

    return thueTNCN;
}


/*
    BÀI TẬP 4: TÍNH TIỀN CÁP
*/
// Hàm dùng để xử lý ẩn hiện cho ô nhập số kết nối khi chọn loại khách hàng
export function chuyenDoiKetNoi() {
    let loaiKhachHang = document.getElementById('loaiKhachHang').value;
    let phanKetNoi = document.getElementById('phanKetNoi');
    
    if (loaiKhachHang === 'Doanh nghiệp') {
      phanKetNoi.classList.remove('hidden');
    } else {
      phanKetNoi.classList.add('hidden');
    }
}

// export function tinhHoaDonTienCap(loaiKhachHang, soKenhCaoCap, soKetNoi) { // input: string, number

//     //output: number
//     let tongTienCap = 0;

//     // Phí xử lý hóa đơn
//     let phiXuLyHoaDon = 0;
//     if (loaiKhachHang === "Nhà dân") {
//         phiXuLyHoaDon = 4.5;
//     } else if (loaiKhachHang === "Doanh nghiệp") {
//         phiXuLyHoaDon = 15;
//     }

//     // Phí dịch vụ cơ bản
//     let phiDichVuCoBan = 0;
//     if (loaiKhachHang === "Nhà dân") {
//         phiDichVuCoBan = 20.5;
//     } else if (loaiKhachHang === "Doanh nghiệp") {
//         phiDichVuCoBan = 75;
//         if (soKetNoi > 10) {
//             let soKetNoiThem = soKetNoi - 10;
//             tongTienCap += soKetNoiThem * 5;
//         }
//         tongTienCap += phiDichVuCoBan; // Always add the base fee for business
//     }

//     // Phí thuê kênh cao cấp
//     let phiThueKenhCaoCap = 0;
//     if (loaiKhachHang === "Nhà dân") {
//         phiThueKenhCaoCap = 7.5;
//     } else if (loaiKhachHang === "Doanh nghiệp") {
//         phiThueKenhCaoCap = 50;
//     }

//     // Tính tổng tiền cáp
//     tongTienCap += phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap * soKenhCaoCap;

//     return tongTienCap;
// }

export function tinhHoaDonTienCap(loaiKhachHang, soKenhCaoCap, soKetNoi) {
    // input: string, number, number
    // output: number
    let tongTienCap = 0;

    // Phí xử lý hóa đơn
    let phiXuLyHoaDon = 0;
    if (loaiKhachHang === "Nhà dân") {
        phiXuLyHoaDon = 4.5;
    } else if (loaiKhachHang === "Doanh nghiệp") {
        phiXuLyHoaDon = 15;
    }

    // Phí dịch vụ cơ bản
    let phiDichVuCoBan = 0;
    if (loaiKhachHang === "Nhà dân") {
        phiDichVuCoBan = 20.5;
    } else if (loaiKhachHang === "Doanh nghiệp") {
        phiDichVuCoBan = 75;
        tongTienCap += phiDichVuCoBan; // Always add the base fee for business
        if (soKetNoi > 10) {
            let soKetNoiThem = soKetNoi - 10;
            tongTienCap += soKetNoiThem * 5;
        }
    }

    // Phí thuê kênh cao cấp
    let phiThueKenhCaoCap = 0;
    if (loaiKhachHang === "Nhà dân") {
        phiThueKenhCaoCap = 7.5;
    } else if (loaiKhachHang === "Doanh nghiệp") {
        phiThueKenhCaoCap = 50;
    }

    // Tính tổng tiền cáp
    tongTienCap += phiXuLyHoaDon + phiThueKenhCaoCap * soKenhCaoCap;

    return tongTienCap;
}
