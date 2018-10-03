$(function() {

	// заказать звонок

	$('#getFormOrder').click(function(){
		// получаем данные из формы
		let fioModal = $('#fioModal').val();
		let mailModal = $('#mailModal').val();
		let phoneModal = $('#phoneModal').val();
		// текущая дата
		// var d = new Date();
		// var curr_date = d.getDate();
		// var curr_month = d.getMonth() + 1;
		// var curr_year = d.getFullYear();


		console.log('Имя: '+ fioModal + 'Почта: ' + mailModal + 'Телефон: ' + phoneModal);


		// Закрывам модалку
		$('#modalHeader, .modal-backdrop').fadeOut(500);
		$('#modalHeaderStatus').show(1000);	

		
	});
	// Открываеться модалка успешной заявки
	$('#close, .close').click(function(){
		$('#modalHeaderStatus').hide(500);
		// location.reload(1000);

	});	


	// заказать товар

	$('#btnPhone').click(function(){
		console.log('заказать товар');
	});
	// $('#inputPhone').

});