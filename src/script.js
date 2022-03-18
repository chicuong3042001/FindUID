
function showFindUID(_this){
    var contentMain = document.getElementById('content__main');
    contentMain.innerHTML = htmlFindUID;
    setColor();
    _this.style.backgroundColor = "rgb(58, 89, 170)";
    _this.style.color = "white";
}

function showFindFBfromEmail(_this){
    var contentMain = document.getElementById('content__main');
    contentMain.innerHTML = htmlFindFBfromEmail;
    setColor();
    _this.style.backgroundColor = "rgb(58, 89, 170)";
    _this.style.color = "white";
}

function showFindFBfromPhone(_this){
    var contentMain = document.getElementById('content__main');
    contentMain.innerHTML = htmlFindFBfromPhone;
    setColor();
    _this.style.backgroundColor = "rgb(58, 89, 170)";
    _this.style.color = "white";
}

function setColor(){
    var allBtnColor = document.getElementsByClassName('btn');
    for(let btnColor of allBtnColor){
        btnColor.style.backgroundColor = "#e5e5e5";
        btnColor.style.color = "black"
    }
}

window.onload = function(){ 
    setColor();
    let btnFindUID = document.getElementById('btnFindUID');
    btnFindUID.style.backgroundColor = "rgb(58, 89, 170)";
    btnFindUID.style.color = "white";
}

let htmlFindUID = `
<h3>Tìm UID Facebook từ link Facebook</h3>
<p class="P_desktop">Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý
                            với <a style="text-decoration: none;color: rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/dieu-khoan-su-dung.html">Điều khoản sử dụng</a>
                            và <a style="text-decoration: none;color:rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/chinh-sach-bao-mat.html">Chính sách bảo mật</a>
                            của chúng tôi.</p>
<p class="P_mobile" style="font-weight: 600;">Nhập link facebook bạn muốn tra cứu UID vào đây:</p>
<form>
    <input type="text" placeholder="https://www.facebook.com/username">
    <button class="btnSubmit"><img style="width:20px;margin-right: 5px;"src="https://img.icons8.com/external-colours-bomsymbols-/91/000000/external-find-digital-design-colors-set-1-colours-bomsymbols--2.png"/>Tìm UID Facebook</button>
    <p class="P_mobile">Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý
                            với <a style="text-decoration: none;color: rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/dieu-khoan-su-dung.html">Điều khoản sử dụng</a>
                            và <a style="text-decoration: none;color:rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/chinh-sach-bao-mat.html">Chính sách bảo mật</a>
                            của chúng tôi.</p>
    <p class="message">Kết quả sẽ xuất hiện tại đây!</p>
</form>
<b style="font-size: 18px">Định dạng link Facebook được hệ thống chấp nhận</b>
<ul>
    <li>&#8226; https://www.facebook.com/daibuiatp</li>
    <li>&#8226; https://m.facebook.com/daibuiatp</li>
    <li>&#8226; https://www.facebook.com/profile.php?id=1000000025812613</li>
</ul>
`

let htmlFindFBfromPhone = `
<h3>Tìm Facebook từ số điện thoại</h3>
<p class="P_desktop">Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý
                            với <a style="text-decoration: none;color: rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/dieu-khoan-su-dung.html">Điều khoản sử dụng</a>
                            và <a style="text-decoration: none;color:rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/chinh-sach-bao-mat.html">Chính sách bảo mật</a>
                            của chúng tôi.</p>
<p class="P_mobile" style="font-weight: 600;">Nhập số điện thoại bạn muốn tìm Facebook vào đây:</p>
<form>
    <input type="text" placeholder="+84888888888 hoặc 0888888888">
    <button class="btnSubmit"><img style="width:20px;margin-right: 5px;"
    src="https://img.icons8.com/external-colours-bomsymbols-/91/000000/external-find-digital-design-colors-set-1-colours-bomsymbols--2.png" />Tìm
    Facebook</button>
    <p class="P_mobile">Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý
                            với <a style="text-decoration: none;color: rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/dieu-khoan-su-dung.html">Điều khoản sử dụng</a>
                            và <a style="text-decoration: none;color:rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/chinh-sach-bao-mat.html">Chính sách bảo mật</a>
                            của chúng tôi.</p>
<p class="message">Kết quả sẽ xuất hiện tại đây!</p>
</form>
<p class="CountCheck">Số lượt check còn lại trong ngày:  <strong style="color:red">30</strong></p>
<div class="content__four-ways">
<hr>
<h3 style="text-decoration:underline; margin-top:35px">*Mẹo khai thác số điện thoại hiệu quả</h3>
<div class="four_ways">
    <a href="https://atpsoftware.vn/cach-tim-facebook-nhanh-bang-sdt-va-lay-id-facebook-nhanh-chong-tai-finduid-com.html">1. Cách tìm Facebook nhanh bằng SĐT và lấy ID Facebook nhanh chóng tại finduid.com</a>
    <a href="https://atpsoftware.vn/huong-dan-ket-ban-full-2k-ban-zalo-khong-can-sdt.html">2. Hướng dẫn kết bạn full 2k bạn không cần SĐT</a>
    <a href="https://atpsoftware.vn/vi-sao-nen-ban-hang-tren-zalo-lam-the-nao-de-full-2000-ban-zalo.html">3. Vì sao nên bán hàng trên ZALO? Làm thế nào để full 2k bạn ZALO?</a>
    <a href="https://atpsoftware.vn/vi-sao-nen-ban-hang-tren-zalo-lam-the-nao-de-full-2000-ban-zalo.html">4. Kinh nghiệm bán TRĂM ĐƠN HÀNG online trên ZALO cá nhân - Bí mật chưa được tiết lộ</a>
</div>
</div>
`
let htmlFindFBfromEmail = `
<h3>Tìm Facebook từ Email</h3>
<p class="P_desktop">Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý
                            với <a style="text-decoration: none;color: rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/dieu-khoan-su-dung.html">Điều khoản sử dụng</a>
                            và <a style="text-decoration: none;color:rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/chinh-sach-bao-mat.html">Chính sách bảo mật</a>
                            của chúng tôi.</p>
<p class="P_mobile" style="font-weight: 600;">Nhập Email bạn muốn tìm Facebook vào đây:</p>
<form>
    <input type="text" placeholder="atpsoftware@gmail.com">
    <button class="btnSubmit"><img style="width:20px;margin-right: 5px;"src="https://img.icons8.com/external-colours-bomsymbols-/91/000000/external-find-digital-design-colors-set-1-colours-bomsymbols--2.png"/>Tìm Facebook</button>
    <p class="P_mobile">Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý
                            với <a style="text-decoration: none;color: rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/dieu-khoan-su-dung.html">Điều khoản sử dụng</a>
                            và <a style="text-decoration: none;color:rgb(32, 32, 250);"
                                href="https://atpsoftware.vn/chinh-sach-bao-mat.html">Chính sách bảo mật</a>
                            của chúng tôi.</p>
    <p class="message">Kết quả sẽ xuất hiện tại đây!</p>
</form>
<p class="CountCheck">Số lượt check còn lại trong ngày: <strong style="color:red">30</strong></p>
`