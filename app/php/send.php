<?php
  if(isset($_POST)) {

     include('smtp-func.php');  // Подключаем smtp-mail

    $to = '89109867353@mail.ru'; // Укажите почтовый ящик получателя письм

    // Принимаем переменные из масива $_POST
    $fioModal = $_POST['fioModal'];
    if(empty($_POST['mailModal'])){
      $mailModal = 'Почту не указали!';
    }
    else{
      $mailModal = $_POST['mailModal'];
    }
    $phoneModal = $_POST['phoneModal'];
    $setDate = $_POST['setDate'];
    $subject = 'Заявка на КУН с сайта ПалехАгромаш';
    
   
// Формируем сообщение етло письма
    $message = "Заказчик: Ф.И.О: ".$fioModal.
               "\n\rEmail: ".$mailModal.
               "\n\rТелефон: ".$phoneModal.
               "\n\r".$setDate;
          
    $headers = 'Content-type: text/plain; charset=UTF-8' . "\r\n";
    $headers .= 'MIME-Version: 1.0' . "\r\n"; 

// Отправляем письмо
    smtpmail($to, $subject, $message, $headers);

 }

?>

