<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $form = $_POST['form'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];


	
    require 'class.phpmailer.php';
    $thm = "Вам отправлено сообщение с " . $_SERVER['SERVER_NAME'];
    $msg = "<strong>Заголовок формы:</strong> $form<br/>";
    if(isset($name)){$msg .= "<strong>Имя:</strong> $name <br/>";}
    if(isset($phone)){$msg .= "<strong>Телефон:</strong> $phone <br/>";}
    if(isset($message)){$msg .= "<strong>Вопрос:</strong> $message <br/>";}


    $mail = new PHPMailer();
    $mail->From = 'noreply@'. $_SERVER['SERVER_NAME']; // от кого
    $mail->FromName = $_SERVER['SERVER_NAME']; // от кого
    $mail->AddAddress('a-mebel134@yandex.ru', ''); // кому - адрес, Имя

    $mail->IsHTML(true); // выставляем формат письма HTML
    $mail->Subject = $thm; // тема письма
    $mail->Body = $msg;

    if (!$mail->Send()) die('Mailer Error: ' . $mail->ErrorInfo);

    header("Location: " . $_SERVER["PHP_SELF"]);
    exit;
}
?>
