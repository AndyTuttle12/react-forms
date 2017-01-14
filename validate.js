
$(document).ready(function(){

	// 2 new methods - submit and Val
	$('.sign-up-form').submit(function(){
		// stop form from leaving page
		event.preventDefault();
		// check name input field

		$('input').each(function(){
			var currentTagClass = $(this).attr('class');
			var errorClass = '.' + currentTagClass + '-error';
			if($(this).val() == ''){
				$(errorClass).html('Fields cannot be empty.');
				$(errorClass).show();
			}else{
				$(errorClass).hide();
			}
		});
		var fullName = $('.fullName').val();
		if(fullName.length < 3){
		
			$('.full-name-error').show();
		}else{
			$('.full-name-error').hide();
		}

		var password = $('.password').val();
		var password2 = $('.password2').val();
		var numberFound = false;
		for(let i = 0; i < password.length; i++){
			if(!isNaN(Number(password[i]))){
				numberFound = true;
			}
		}
		if (password !== password2){
			$('.password-error').html('Your passwords must match.');
			$('.password-error').show();
		}else if(password.length < 6){
			$('.password-error').html('Your password must be at least 6 characters long.');
			$('.password-error').show();
		}else if(!numberFound){
			$('.password-error').html('Your password is weak. Consider adding a number.');
			$('.password-error').removeClass('error');
			$('.password-error').addClass('caution');
			$('.password-error').show();
		}else{
			$('.password-error').hide();
			$('.password-error').removeClass('caution');
		}
	})
});