<?php
    $name = $_POST['name'];
	$phone = $_POST['tel'];
    $email = $_POST['mail'];
    $company = $_POST['company'];

	$to = "veronikabegunova42@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Quote";
	
	$msg="
    Name: $name
    Phone: $phone
    Email: $email
    Company: $company";
	mail($to, $subject, $msg, "From: $from ");
?>
