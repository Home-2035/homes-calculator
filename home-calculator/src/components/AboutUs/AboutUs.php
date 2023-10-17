<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['msg'];

    if (!empty($name) && !empty($mail) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $receiver = 'vladoperation@bk.ru';
            $subject = "From: $name <$email>";
            $body = "Name: $name\nEmail: $email\nMessage: $message";
            $sender = "From $email";

            if (mail($receiver, $subject, $body, $sender)) {
                echo 'You message send!';
            } else {
                echo "error to sent msg";
            }
        } else {
            echo "Enter a valid mail adress";
        }
    } else {
        echo "Email, message, name field is required";
    }
?>