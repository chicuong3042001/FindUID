<?php

// Tạo mới một CURL
$ch = curl_init();
if(isset($_GET['link'])) {
    $link = $_GET['link'];
} else {
    die("loi khong co link");
}
// Cấu hình cho CURL
curl_setopt($ch, CURLOPT_URL, "http://id.atpsoftware.com.vn/getOld.php?pass=18237123&app=idatp&link=".$link);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 0);

// Thực thi CURL
curl_exec($ch);

// Ngắt CURL, giải phóng
$result = curl_close($ch);

// In kết quả ra màn hình
echo $result;
?>