<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "ridonor517@ksyhtc.com";  // Замените на ваш электронный адрес
    $subject = "Новая заявка из конструктора";

    $message = "";
    foreach ($_POST as $key => $value) {
        if (!empty($value)) {
            $message .= ucfirst($key) . ": " . htmlspecialchars($value) . "\n";
        }
    }

    if (empty($message)) {
        exit;
    }

    // Дополнительные заголовки
    $headers = "From: ridonor517@ksyhtc.com\r\n";  // Замените на ваш email или email вашего веб-сайта
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Отправляем почту
    if (mail($to, $subject, $message, $headers)) {
    } else {
    }
    exit;
}

?>