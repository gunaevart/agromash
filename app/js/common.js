$(function() {

	// заказать звонок

	$('#getFormOrder').click(function(){
		// получаем данные из формы

		let fioModal = $('#fioModal').val();
		let mailModal = $('#mailModal').val();
		let phoneModal = $('#phoneModal').val();
		// текущая дата

		let d = new Date();
		let curr_date = d.getDate();
		let curr_month = d.getMonth() + 1;
		let curr_year = d.getFullYear();
		let setDate = 'Дата ' + curr_date + ', ' + curr_month;

		if(fioModal != '' && phoneModal != ''){

			// открываем POST

			$.ajax({
				url: '../app/php/send.php', // куда посылаем запрос
				type: "POST",
				data: {fioModal:fioModal,
					   mailModal:mailModal,
					   phoneModal:phoneModal,
					   setDate:setDate
					  },
				success: function(data){ // что делаем в случае успеха, в data лежит ответ от сервера
				  alert(data); // выводим ответ
				  if(data == 'okey'){
				   alert("Hello =)");
				  }else{
				   alert("Неправильный логин или пароль =(");
				  }
				}
			  });

			// Закрывам модалку
			$('#modalHeader, .modal-backdrop').fadeOut(500);
			$('#modalHeaderStatus').show(1000);
			$('#close, .close').click(function(){
			$('#modalHeaderStatus').hide(500);
			// location.reload(1000);
			});


			

		}
		else{
			alert('вы нечего не ввели!');
		}
		
		
	});
	

	// заказать товар

	$('#btnPhone').click(function(){
		console.log('заказать товар');
	});
	// $('#inputPhone').

});