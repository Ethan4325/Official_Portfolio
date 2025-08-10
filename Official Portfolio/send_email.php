<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message_body = $_POST["message"];

    // Set up email
    $to = "ethanethan23347@gmail.com"; // Your email address
    $subject = "Message from Portfolio Contact Form";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Message: $message_body\n";

    // Send email
    if (mail($to, $subject, $message)) {
        echo "Message sent successfully!";
    } else {
        echo "Error: Unable to send message.";
    }
}
?>