<?php
  if(isset($_POST)) {

     include('smtp-func.php');  // Подключаем smtp-mail

    $to = '89109867353@mail.ru'; // Укажите почтовый ящик получателя письм

    // Принимаем переменные из масива $_POST
    
    if(empty($_POST['inputPhone'])){
      $inputPhone = 'Этот телефон не указали!';
    }
    else{
        $inputPhone = $_POST['inputPhone'];
    }
    if(empty($_POST['inputPhone2'])){
        $inputPhone2 = 'Этот телефон не указали!';
      }
      else{
        $inputPhone2 = $_POST['inputPhone2'];
      }

    $setDate = $_POST['setDate'];
    $subject = 'Перезвонить клиенту с сайта ПалехАгромаш';
    
   
// Формируем сообщение етло письма
    $message = "Заказали перезвонить: ".$setDate.
               "\n\rС ыормы №-1: ".$inputPhone.
               "\n\rС формы №-2: ".$inputPhone2;
          
    $headers = 'Content-type: text/plain; charset=UTF-8' . "\r\n";
    $headers .= 'MIME-Version: 1.0' . "\r\n"; 

// Отправляем письмо
    smtpmail($to, $subject, $message, $headers);

 }

?>

