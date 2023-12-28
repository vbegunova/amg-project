<?php
    $name = $_POST['name'];
	$phone = $_POST['tel'];
    $email = $_POST['mail'];
    $company = $_POST['company'];
    $question1 = $_POST['question1'];
    $question2 = $_POST['question2'];
    $question3 = $_POST['question3'];
    $question4 = $_POST['question4'];
    $question5 = $_POST['question5'];
    $question6 = $_POST['question6'];
    $question7 = $_POST['question7'];

	$to = "veronikabegunova42@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Quiz answers";
	
	$msg="
    Name: $name
    Phone: $phone
    Email: $email
    Organization/company: $company
    1. What type of property do you need security services for?: $question1
    2. What is the primary reason you are seeking security services?: $question2
    3. How would you describe the size of the area you wish to secure?: $question3
    4. Are you interested in technology-based security solutions (like CCTV, alarms, access control) or physical security services (like manned guarding, patrolling)?: $question4
    5. How soon do you need the security services to be implemented?: $question5
    6. Do you have any existing security measures in place?: $question6
    7. What is your estimated budget for security services?: $question7";
	mail($to, $subject, $msg, "From: $from ");
?>
