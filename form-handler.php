<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];


	
    require 'class.phpmailer.php';
    $thm = "Вам отправлено сообщение с " . $_SERVER['SERVER_NAME'];
    $msg = "<strong>Имя:</strong> $name <br/>";
    if(isset($phone)){$msg .= "<strong>Телефон:</strong> $phone <br/>";}
    if(isset($address)){$msg .= "<strong>Адрес:</strong> $address <br/>";}


    $mail = new PHPMailer();
    $mail->From = 'noreply@'. $_SERVER['SERVER_NAME']; // от кого
    $mail->FromName = $_SERVER['SERVER_NAME']; // от кого
    $mail->AddAddress('factorymebel@yandex.ru', 'ф-мебель.рф'); // кому - адрес, Имя

    $mail->IsHTML(true); // выставляем формат письма HTML
    $mail->Subject = $thm; // тема письма
    $mail->Body = $msg;

    if (!$mail->Send()) die('Mailer Error: ' . $mail->ErrorInfo);

    header("Location: " . $_SERVER["PHP_SELF"]);
    exit;
}
?>
