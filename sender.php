<?php
		$name = $_POST["Name"];
		$inst = $_POST["Inst"];
		$mail = $_POST["Mail"];
		$phone = $_POST["Phone"];
		
		$to = "dolin.maxim@mail.ru";
		$date = date ("d.m.y");
		$from = $mail;
		$subgect = "Заявка в лагерь";
		
		$msg=$"
		Имя: $name 
		Телефон: $phone 
		Instagram: $inst 
		E-mail: $mail"
		mail($to, $subgect, $msg, "From: $from ");
	?>