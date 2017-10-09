<?php
    // 引入其他文件
    include 'peizhi.php';

    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $email = isset($_GET['email']) ? $_GET['email'] : '';

    //查看用户名是否已经存在
    $sql = "select username from dl where username='$username'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        echo "fail";
    }
?>