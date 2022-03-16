
function showFindUID(_this){
    var contentMain = document.getElementById('content__main');
    contentMain.innerHTML = htmlFindUID;
    setColor();
    _this.style.backgroundColor = "rgb(211, 206, 206)";
}

function showFindFBfromEmail(_this){
    var contentMain = document.getElementById('content__main');
    contentMain.innerHTML = htmlFindFBfromEmail;
    setColor();
    _this.style.backgroundColor = "rgb(211, 206, 206)";
    
}

function showFindFBfromPhone(_this){
    var contentMain = document.getElementById('content__main');
    contentMain.innerHTML = htmlFindFBfromPhone;
    setColor();
    _this.style.backgroundColor = "rgb(211, 206, 206)";
}

function setColor(){
    var allBtnColor = document.getElementsByClassName('btn');
    for(let btnColor of allBtnColor){
        btnColor.style.backgroundColor = "white";
    }
}

window.onload = function(){ 
    setColor();
    let btnFindUID = document.getElementById('btnFindUID');
    btnFindUID.style.backgroundColor = "rgb(211, 206, 206)";
}

let htmlFindUID = `
<h3>Tìm UID Facebook từ link Facebook</h3>
<p>Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý với <a style="text-decoration: none;color: rgb(32, 32, 250);" href="#">Điều khoản sử dụng</a> và <a style="text-decoration: none;color:rgb(32, 32, 250);" href="#">Chính sách bảo mật</a> của chúng tôi.</p>
<form>
    <input type="text" placeholder="Nhập link Facebook...">
    <button class="btnSubmit"><img style="width:20px;margin-right: 5px;"src="https://img.icons8.com/external-colours-bomsymbols-/91/000000/external-find-digital-design-colors-set-1-colours-bomsymbols--2.png"/>Tìm UID Facebook</button>
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
<p>Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý với <a style="text-decoration: none;color: rgb(32, 32, 250);" href="#">Điều khoản sử dụng</a> và <a style="text-decoration: none;color:rgb(32, 32, 250);" href="#">Chính sách bảo mật</a> của chúng tôi.</p>
<form>
    <input type="text" placeholder="Nhập số điện thoại vào đây...">
    <button class="btnSubmit"><img style="width:20px;margin-right: 5px;"src="https://img.icons8.com/external-colours-bomsymbols-/91/000000/external-find-digital-design-colors-set-1-colours-bomsymbols--2.png"/>Tìm Facebook</button>
    <p class="message">Kết quả sẽ xuất hiện tại đây!</p>
</form>
<p class="CountCheck">Số lượt check còn lại trong ngày: 30</p>
`
let htmlFindFBfromEmail = `
<h3>Tìm Facebook từ Email</h3>
<p>Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý với <a style="text-decoration: none;color: rgb(32, 32, 250);" href="#">Điều khoản sử dụng</a> và <a style="text-decoration: none;color:rgb(32, 32, 250);" href="#">Chính sách bảo mật</a> của chúng tôi.</p>
<form>
    <input type="text" placeholder="Nhập Email vào đây...">
    <button class="btnSubmit"><img style="width:20px;margin-right: 5px;"src="https://img.icons8.com/external-colours-bomsymbols-/91/000000/external-find-digital-design-colors-set-1-colours-bomsymbols--2.png"/>Tìm Facebook</button>
    <p class="message">Kết quả sẽ xuất hiện tại đây!</p>
</form>
<p class="CountCheck">Số lượt check còn lại trong ngày: 30</p>
`