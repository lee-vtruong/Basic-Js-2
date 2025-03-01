function bai1() {
    document.getElementById('tinhBai1').onclick = function () {
        let diemChuan = 1 * document.getElementById('diemChuan').value;
        let diemMon1 = 1 * document.getElementById('diemMon1').value;
        let diemMon2 = 1 * document.getElementById('diemMon2').value;
        let diemMon3 = 1 * document.getElementById('diemMon3').value;
        let khuVuc = document.getElementById('khuVuc').value;
        let doiTuong = document.getElementById('doiTuong').value;
        let diemCong = 0;

        diemCong += (khuVuc == 'A') ? 2 : (khuVuc == 'B') ? 1 : 0.5;
        diemCong += (doiTuong == '1') ? 2.5 : (doiTuong == '2') ? 1.5 : 1;

        let diemTong = diemMon1 + diemMon2 + diemMon3 + diemCong;
        let kq = (diemTong >= diemChuan) ? 'Đậu' : 'Rớt';
        document.getElementById('tongDiem').innerHTML = 'Sinh viên đã ' + kq + ' với tổng điểm là: ' + diemTong;
    }
}

function bai2() {
    document.getElementById('tinhBai2').onclick = function () {
        let hoVaTen = document.getElementById('hoVaTenBai2').value;
        let soDien = 1 * document.getElementById('soDien').value;
        let tienDien = 0;

        if (soDien <= 50) {
            tienDien = soDien * 500;
        } else if (soDien <= 100) {
            tienDien = 50 * 500 + (soDien - 50) * 650;
        } else if (soDien <= 200) {
            tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
        } else if (soDien <= 350) {
            tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
        }
        else {
            tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
        }

        document.getElementById('tienDien').innerHTML = 'Họ và tên: ' + hoVaTen + '<br>' + 'Số tiền điện phải trả: ' + tienDien;
    }
}

function bai3() {
    document.getElementById('tinhBai3').onclick = function () {
        let hoVanTen = document.getElementById('hoVaTenBai3').value;
        let thuNhapTheoNam = 1 * document.getElementById('thuNhapTheoNam').value;
        let soNguoiPhuThuoc = 1 * document.getElementById('soNguoiPhuThuoc').value;
        let thuNhapChiuThue = thuNhapTheoNam - 4 - soNguoiPhuThuoc * 1.6;
        let thue = 0;

        // Đơn vị: triệu đồng
        // => quy đổi thuNhapChiuThue từ đồng sang triệu
        thuNhapChiuThue = thuNhapChiuThue / 1000000;

        if (thuNhapChiuThue <= 60) {
            thue = thuNhapChiuThue * 0.05;
        } else if (thuNhapChiuThue <= 120) {
            thue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
        } else if (thuNhapChiuThue <= 210) {
            thue = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
        } else if (thuNhapChiuThue <= 384) {
            thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
        } else if (thuNhapChiuThue <= 624) {
            thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thuNhapChiuThue - 384) * 0.25;
        } else if (thuNhapChiuThue <= 960) {
            thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.3;
        } else {
            thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thuNhapChiuThue - 960) * 0.35;
        }

        let formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // quy đổi thue từ triệu đồng sang đồng
        thue = thue * 1000000;

        document.getElementById('thue').innerHTML = 'Họ và tên: ' + hoVanTen + '<br>' + 'Số tiền thuế phải trả: ' + formatter.format(thue);
    }
}

function bai4() {
    document.getElementById('loaiKhachHang').onchange = function () {
        if (document.getElementById('loaiKhachHang').value === 'doanhNghiep') {
            document.getElementById('soKetNoiGroup').style.display = 'block';
        } else {
            document.getElementById('soKetNoiGroup').style.display = 'none';
        }
    };

    document.getElementById('tinhBai4').onclick = function () {
        let maKhachHang = document.getElementById('maKhachHang').value;
        let loaiKhachHang = document.getElementById('loaiKhachHang').value;
        let soKenhCaoCap = Number(document.getElementById('soKenhCaoCap').value) || 0;
        let soKetNoiGroup = Number(document.getElementById('soKetNoi').value) || 0;

        let giaTien = 0;

        if (loaiKhachHang === 'nhaDan') {
            giaTien = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
        } else if (loaiKhachHang === 'doanhNghiep') {
            let tienKetNoiGroup = soKetNoiGroup <= 10 ? 75 : 75 + (soKetNoiGroup - 10) * 5;
            giaTien = 15 + tienKetNoiGroup + 50 * soKenhCaoCap;
        }

        // format tiền USD
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        document.getElementById('tienCap').innerHTML =
            'Mã khách hàng: ' + maKhachHang + '<br>' + 'Số tiền phải trả: ' + formatter.format(giaTien);
    };
}

// Khi chưa click vào bài nào thì mặc định bài 1
bai1();

const tabs = document.querySelectorAll('.tab-link'); // Lấy tất cả các tab
const contents = document.querySelectorAll('.tab-content'); // Lấy tất cả các nội dung của tab

tabs.forEach((tab, index) => { // Duyệt qua từng tab
    tab.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

        // Ẩn tất cả các tab
        tabs.forEach(t => t.classList.remove('active'));

        // Hiện tab hiện tại
        this.classList.add('active');

        // Ẩn tất cả các nội dung của tab
        contents.forEach(c => c.classList.remove('active-content'));

        // Hiện nội dung của tab hiện tại
        const tabID = this.getAttribute('data-tab');
        document.getElementById(tabID).classList.add('active-content');

        // Gọi hàm tương ứng với tab
        if (tabID === 'bai1') {
            bai1();
        } else if (tabID === 'bai2') {
            bai2();
        } else if (tabID === 'bai3') {
            bai3();
        } else if (tabID === 'bai4') {
            bai4();
        }
    })
});