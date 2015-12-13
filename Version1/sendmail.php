<?php
require 'PHPMailerAutoload.php';
	

if(!isset($_GET['useremail']) OR !isset($_GET['usermsg'])){
	echo '0';
	exit();
	}
$useremail = $_GET['useremail'];
$usermsg = $_GET['usermsg'] . ' - By - '.$useremail;


	

$mail = new PHPMailer;
//$mail->SMTPDebug = 2;
//$mail->Debugoutput = 'html';
$mail->isSMTP();   		// Set mailer to use SMTP                             
$mail->Host = 'smtp.iamjassim.com';  // Specify main and backup server
//$mail->Port = 587;
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'me@iamjassim.com';                            // SMTP username
$mail->Password = '123Idontneedthis1';                           // SMTP password
$mail->SMTPSecure = 'tsl';                            // Enable encryption, 'ssl' also accepted

$mail->From = 'me@iamjassim.com';
$mail->FromName = 'Admin';
$mail->addAddress('jassimabdullatheef@gmail.com', 'Jassim');  // Add a recipient
$mail->addReplyTo($useremail);


$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Email From Website';
$mail->Body    = $usermsg;
$mail->AltBody = $usermsg; 

if(!$mail->send()) {
   echo '0';
   exit;
}

echo '1';
?>