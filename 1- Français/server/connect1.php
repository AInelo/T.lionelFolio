<?php
  $to = "totonlionel@gmail.com";
  $subject = "Nouveau message de formulaire";
  $name = $_POST['name'];
    $email = $_POST['email'];
    $countryCode = $_POST['countryCode'];
    $tel = $_POST['tel'];
    $msgobject = $_POST['msgobject'];
    $message = $_POST['message'];
  $headers = "From: " . $email . "\r\n" .
             "Reply-To: " . $email . "\r\n" .
             "X-Mailer: PHP/" . phpversion();
  $message_body = "Nom : " . $name . "\n" .
                  "E-mail : " . $email . "\n" .
                  "countryCode : " . $countryCode . "\n" .
                  "tel : " . $tel . "\n" .
                  "Message : " . $message;
  if (mail($to, $subject, $message_body, $headers)) {
    echo "E-mail envoyé avec succès.";
  } else {
    echo "Erreur lors de l'envoi de l'e-mail.";
  }
?>
