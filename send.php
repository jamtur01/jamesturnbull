<?php
if(isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['message'])) {
	require("class.phpmailer.php"); //you have to download this plugin from github.com - link is in documentation

	$firstname = 	$_POST['firstname'];
	$lastname = 	$_POST['lastname'];
	$email = 		$_POST['email'];
	$message = 		$_POST['message'];

	$mail = new PHPMailer();

  $mail->isSendmail();

	$mail->From = $email;
	$mail->CharSet = "UTF-8";
	$mail->FromName = $email;
	$mail->addAddress("info@jamesturnbull.net");

	$mail->IsHTML(true);
	$mail->Subject = $firstname." ".$lastname." sent you an email";

	$mail->Body = $message."<br><br>".$firstname." ".$lastname."<br>".$email."<br>"."<br>";

  if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
  } else {
    echo 'Message has been sent';
  }
}
?>
