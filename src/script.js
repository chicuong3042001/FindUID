
function showFindUID(){
    var contentMain = document.getElementById('content__main');
    contentMain.innerHTML = htmlFindUID;
}

function showFindFBfromEmail(){
    var contentMain = document.getElementById('content__main');
    contentMain.innerHTML = htmlFindFBfromEmail;
}

function showFindFBfromPhone(){
    var contentMain = document.getElementById('content__main');
    contentMain.innerHTML = htmlFindFBfromPhone;
}

let htmlFindUID = `
<h3>Tìm UID Facebook từ link Facebook</h3>
<p>Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý với <a style="text-decoration: none;color: rgb(32, 32, 250);" href="#">Điều khoản sử dụng</a> và <a style="text-decoration: none;color:rgb(32, 32, 250);" href="#">Chính sách bảo mật</a> của chúng tôi.</p>
<form>
    <input type="text" placeholder="Nhập link Facebook...">
    <button class="btnSubmit">Tìm UID Facebook</button>
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
    <button class="btnSubmit">Tìm Facebook</button>
    <p class="message">Kết quả sẽ xuất hiện tại đây!</p>
</form>
<p class="CountCheck">Số lượt check còn lại trong ngày: 30</p>
`
let htmlFindFBfromEmail = `
<h3>Tìm Facebook từ email</h3>
<p>Bằng cách nhập dữ liệu trên hệ thống tìm kiếm của chúng tôi, bạn đã đồng ý với <a style="text-decoration: none;color: rgb(32, 32, 250);" href="#">Điều khoản sử dụng</a> và <a style="text-decoration: none;color:rgb(32, 32, 250);" href="#">Chính sách bảo mật</a> của chúng tôi.</p>
<form>
    <input type="text" placeholder="Nhập Email vào đây...">
    <button class="btnSubmit">Tìm Facebook</button>
    <p class="message">Kết quả sẽ xuất hiện tại đây!</p>
</form>
<p class="CountCheck">Số lượt check còn lại trong ngày: 30</p>
`