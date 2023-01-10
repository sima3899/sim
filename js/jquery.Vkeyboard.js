(function($){

	$.fn.Vkeyboard = function(options){


		//default options

		var settings = $.extend({

		},options);


		
		$('#Vkeyboard_wrapper').css('display','none');
		$('#Vkeyboard_wrapper').append('<div id="Vkeyboard_lines"></div><div id="Vkeyboard_close" >X</div>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_lines').append('<div id="Vkeyboard_first_line"></div><div id="Vkeyboard_second_line"></div><div id="Vkeyboard_third_line"></div><div id="Vkeyboard_fourth_line"></div><div id="Vkeyboard_fifth_line"></div><form id="Vkeyboard_form"></form>');

	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_form').append('<input type="checkbox" id="Vkeyboard_checkbox" value="Vkeyboard_checkbox" /><label>Special characters</label>&nbsp;&nbsp;&nbsp;');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_form').append('<label>B<input type="checkbox" class="Vkeyboard_text_decoration" value="Vkeyboard_bold" /></label>');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_form').append('<label>I<input type="checkbox" class="Vkeyboard_text_decoration" value="Vkeyboard_italic" /></label></label>');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_form').append('<label>U<input type="checkbox" class="Vkeyboard_text_decoration" value="Vkeyboard_underline" /></label></label>');

		//data for first line
	//	var array_first = ['!',1,'@',2,'#',3,'$',4,'%',5,'^',6,'&',7,'*',8,'(',9,')',0,'-','_','+','='];
	//	for(var k = 0 ; k < array_first.length ; k+=2){
	//		$('#Vkeyboard_wrapper').find('#Vkeyboard_first_line').append('<div class="Vkeyboard_btns"><span class="Vkeyboard_first">'+array_first[k]+'</span>&nbsp;<span>'+array_first[k+1]+'</span></div> ');
	//	}
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_first_line').find('.Vkeyboard_btns').eq(0).after('<span class="Vkeyboard_div_extras"><span>¼</span><span>½</span><span>⅓</span><span>¡</span></span>');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_first_line').find('.Vkeyboard_btns').eq(1).after('<span class="Vkeyboard_div_extras"><span>⅔</span></span>');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_first_line').find('.Vkeyboard_btns').eq(2).after('<span class="Vkeyboard_div_extras"><span>¾</span></span>');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_first_line').find('.Vkeyboard_btns').eq(3).after('<span class="Vkeyboard_div_extras"><span>¢</span><span>£</span><span>€</span><span>¥</span></span>');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_first_line').find('.Vkeyboard_btns').eq(4).after('<span class="Vkeyboard_div_extras"><span>‰</span></span>');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_first_line').find('.Vkeyboard_btns').eq(9).after('<span class="Vkeyboard_div_extras"><span>°</span></span>');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_first_line').find('.Vkeyboard_btns').eq(10).after('<span class="Vkeyboard_div_extras"><span>•</span><span>¬</span><span>~</span></span>');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_first_line').append('<div id="bksp_btn" class="Vkeyboard_btns">BkSp</div>');





		//data for second line
		var array_second = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ'];
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').append('<div id="tab_btn" class="Vkeyboard_btns">Tab</div> ');
		for(var m=0 ; m < array_second.length ; m++){
			$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').append('<div class="Vkeyboard_alpha">'+array_second[m]+'</div> ');
		}
		
		
		//extra data for second line
		$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').find('.Vkeyboard_alpha').eq(2).after('<span class="Vkeyboard_div_extras"><span>è</span><span>é</span><span>ê</span><span>ë</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').find('.Vkeyboard_alpha').eq(3).after('<span class="Vkeyboard_div_extras"><span>®</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').find('.Vkeyboard_alpha').eq(4).after('<span class="Vkeyboard_div_extras"><span>™</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').find('.Vkeyboard_alpha').eq(5).after('<span class="Vkeyboard_div_extras"><span>ý</span><span>ÿ</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').find('.Vkeyboard_alpha').eq(6).after('<span class="Vkeyboard_div_extras"><span>ù</span><span>ú</span><span>û</span><span>ü</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').find('.Vkeyboard_alpha').eq(7).after('<span class="Vkeyboard_div_extras"><span>ì</span><span>í</span><span>î</span><span>ï</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').find('.Vkeyboard_alpha').eq(8).after('<span id="Vkeyboard_div_extras_o" class="Vkeyboard_div_extras"><span>ò</span><span>ó</span><span>ô</span><span>õ</span><span>ö</span><span>o</span><span>ø</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').find('.Vkeyboard_alpha').eq(9).after('<span class="Vkeyboard_div_extras"><span>þ</span></span>');
		



		//data for third line
		var array_third = ['ф','ы','в','а','п','р','о','л','д','ж','э'];
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_third_line').append('<div id="caps_btn" class="Vkeyboard_btns">Caps</div> ');
		for(var m=0 ; m < array_third.length ; m++){
			$('#Vkeyboard_wrapper').find('#Vkeyboard_third_line').append('<div class="Vkeyboard_alpha">'+array_third[m]+'</div> ');
		}

	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_third_line').append('<div class="Vkeyboard_btns"><span class="Vkeyboard_first">:</span>&nbsp;<span>;</span></div> ');


		//extra data for third line
		$('#Vkeyboard_wrapper').find('#Vkeyboard_third_line').find('.Vkeyboard_alpha').eq(0).after('<span class="Vkeyboard_div_extras"><span>à</span><span>á</span><span>â</span><span>ã</span><span>ä</span><span>å</span><span>æ</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_third_line').find('.Vkeyboard_alpha').eq(1).after('<span class="Vkeyboard_div_extras"><span>§</span><span>š</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_third_line').find('.Vkeyboard_alpha').eq(2).after('<span class="Vkeyboard_div_extras"><span>ð</span></span>');




		//data for fourth line
		var array_fourth = ['я','ч','с','м','и','т','ь','б','ю'];
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').append('<div id="shift_btn" class="Vkeyboard_btns">Shift</div> //');
	
		for(var m=0 ; m < array_fourth.length ; m++){
			$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').append('<div class="Vkeyboard_alpha">'+array_fourth[m]+'</div> ');
		}
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').append('<div class="Vkeyboard_btns"><span class="Vkeyboard_first"><</span>&nbsp;<span>,</span></div> ');
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').append("<div class='Vkeyboard_btns'><span class='Vkeyboard_first'>></span>&nbsp;<span>.</span></div> ");
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').append('<div class="Vkeyboard_btns"><span class="Vkeyboard_first">?</span>&nbsp;<span>/</span></div> ');


		//extra data for third line
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_alpha').eq(0).after('<span class="Vkeyboard_div_extras"><span>я</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_alpha').eq(2).after('<span class="Vkeyboard_div_extras"><span>ç</span><span>©</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_alpha').eq(4).after('<span class="Vkeyboard_div_extras"><span>ß</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_alpha').eq(5).after('<span class="Vkeyboard_div_extras"><span>ñ</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_alpha').eq(6).after('<span class="Vkeyboard_div_extras"><span>µ</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_btns').eq(1).after('<span class="Vkeyboard_div_extras"><span>«</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_btns').eq(2).after('<span class="Vkeyboard_div_extras"><span>»</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_btns').eq(3).after('<span class="Vkeyboard_div_extras"><span>¿</span></span>');
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').append('<div id="bksp_btn" class="Vkeyboard_btns"> 	&#8656;</div>');

		



		//data for fifth line
		

		//add class to all extras
		$('#Vkeyboard_wrapper').find(".Vkeyboard_div_extras").children('span').addClass('Vkeyboard_extra');


		
		//color options
		for(var i = 1 ; i < 7 ; i++){
			var option = $('#Vkeyboard_color_option').find('option').eq(i);
			$('#Vkeyboard_color_option').find('option').eq(i).css('background-color',option.attr('id'));
		}


		//code starts
			
		$('input').focus(function(){
			$input = $(this);
			var $active = $(document.activeElement);
			var $decor = $('.Vkeyboard_text_decoration');

			if($input.attr('data-keyboard') == 'virtual' && $(document).width() > 1200 ){

				if($('#Vkeyboard_wrapper').css('display') == 'none'){		
					$('#Vkeyboard_wrapper').fadeIn();
				}

			}
			else if($input.attr('type') != 'checkbox') {
				$('#Vkeyboard_wrapper').fadeOut();
			}

			//text decoration


				if($decor.eq(0).prop('checked') == true){
					$active.css('font-weight','bold');
				}else{
					$active.css('font-weight','normal');
				}
				if($decor.eq(1).prop('checked') == true){
					$active.css('font-style','italic');
				}else{
					$active.css('font-style','normal');
				}
				if($decor.eq(2).prop('checked') == true){
					$active.css('text-decoration','underline');
				}else{
					$active.css('text-decoration','none');
				}
				
				
			


		});
		


		//add letters

		$('#Vkeyboard_wrapper').find('.Vkeyboard_alpha').click(function(){

			if($(this).next('.Vkeyboard_div_extras').css('display') == 'none' && $('#Vkeyboard_checkbox').prop('checked') == true){
				$(this).next('.Vkeyboard_div_extras').fadeIn(100);
			}
			else{
				$input.val($input.val() + $(this).text());
			}
			
		});

		//add extra
		$('#Vkeyboard_wrapper').find('.Vkeyboard_extra').click(function(){
			$input.val($input.val() + $(this).text());
		});

		
		//show extra buttons while hovering btns
		$('#Vkeyboard_wrapper').find('.Vkeyboard_btns').hover(function(){

			$('#Vkeyboard_wrapper').find('.Vkeyboard_div_extras').not($(this).next('.Vkeyboard_div_extras')).fadeOut(100);

		});

		//show extra buttons while hovering alpha
		$('#Vkeyboard_wrapper').find('.Vkeyboard_alpha').hover(function(){
			$('#Vkeyboard_wrapper').find('.Vkeyboard_div_extras').not($(this).next('.Vkeyboard_div_extras')).fadeOut(100);
		});


		//add signs

		$('#Vkeyboard_wrapper').find('.Vkeyboard_btns').click(function(){

			if($(this).next('.Vkeyboard_div_extras').css('display') == 'none'&& $('#Vkeyboard_checkbox').prop('checked') == true){
				$(this).next('.Vkeyboard_div_extras').fadeIn(100);
			}

			else{
				$input.val($input.val() + $(this).find('span').not('.Vkeyboard_first').text());
			}

		})


		//add space

		$('#Vkeyboard_wrapper').find('#Vkeyboard_fifth_line').find('.Vkeyboard_btns').eq(0).click(function(){
		$input.val($input.val() + " ");
		});

		//clear field

	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_btns:last-child').click(function(){
	//		$input.val('');
	//	});

		//Bksp
		$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_btns').click(function(){
			var text = $input.val();
			var new_text = text.slice(0,-1);
			$input.val(new_text);
		});

		//tab
		$('#Vkeyboard_wrapper').find('#Vkeyboard_second_line').find('.Vkeyboard_btns').eq(0).click(function(){
			$input.val($input.val() + " "+ " "+ " "+ " "+ " "+ " "+ " "+ " ");
		});



		//caps lock
		special_lower = ['è','é','ê','ë','ý','ÿ','ù','ú','û','ü','ì','í','î','ï','ò','ó','ô','õ','ö','o','ø','þ','à','á','â','ã','ä','å','æ','š','ð','ž','ç','ñ'];
		special_upper = ['È','É','Ê','Ë','Ý','Ÿ','Ù','Ú','Û','Ü','Ì','Í','Î','Ï','Ò','Ó','Ô','Õ','Ö','O','Ø','Þ','À','Á','Â','Ã','Ä','Å','Æ','Š','Ð','Ž','Ç','Ñ'];



		$('#Vkeyboard_wrapper').find('#Vkeyboard_third_line').find('.Vkeyboard_btns').eq(0).click(function(){
			if($(this).attr('class') != 'Vkeyboard_btn_activated'){
				$(this).attr('class','Vkeyboard_btn_activated');

				for(var i =0 ; i < $('#Vkeyboard_wrapper').find('.Vkeyboard_alpha').length ; i++){

					var new_alpha = $('#Vkeyboard_wrapper').find('.Vkeyboard_alpha').eq(i).text().toUpperCase();
					 $('#Vkeyboard_wrapper').find('.Vkeyboard_alpha').eq(i).text(new_alpha);

				}

				//turn special characters in caps
				for(var j =0 ; j < $('#Vkeyboard_wrapper').find('.Vkeyboard_extra').length ; j++){

					for(var k =0 ; k < special_lower.length ; k++){
							if($('#Vkeyboard_wrapper').find('.Vkeyboard_extra').eq(j).text() == special_lower[k]){
								$('#Vkeyboard_wrapper').find('.Vkeyboard_extra').eq(j).text(special_upper[k]);
							}
					}

				}
				
			}
			else if($(this).attr('class') == 'Vkeyboard_btn_activated'){
				$(this).attr('class','Vkeyboard_btns');

				for(var i =0 ; i < $('#Vkeyboard_wrapper').find('.Vkeyboard_alpha').length ; i++){

					var new_alpha = $('#Vkeyboard_wrapper').find('.Vkeyboard_alpha').eq(i).text().toLowerCase();
					 $('#Vkeyboard_wrapper').find('.Vkeyboard_alpha').eq(i).text(new_alpha);

				}

				//turn special characters in caps down
				for(var j =0 ; j < $('#Vkeyboard_wrapper').find('.Vkeyboard_extra').length ; j++){

					for(var k =0 ; k < special_lower.length ; k++){
							if($('#Vkeyboard_wrapper').find('.Vkeyboard_extra').eq(j).text() == special_upper[k]){
								$('#Vkeyboard_wrapper').find('.Vkeyboard_extra').eq(j).text(special_lower[k]);
							}
					}

				}

			}
		});


		//shift key function

		var shift_key = function(){

			if($('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('div').eq(0).attr('class') != 'Vkeyboard_btn_activated' ){

				$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('div').eq(0).attr('class','Vkeyboard_btn_activated');
				$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('div').eq(11).attr('class','Vkeyboard_btn_activated');

				for(var k= 0 ; k < $('#Vkeyboard_wrapper').find('span').length ; k++){

					if($('#Vkeyboard_wrapper').find('.Vkeyboard_btns').find('span').eq(k).attr('class') != 'Vkeyboard_first'){

						$('#Vkeyboard_wrapper').find('.Vkeyboard_btns').find('span').eq(k).attr('class','Vkeyboard_first');

					}
					else if($('#Vkeyboard_wrapper').find('.Vkeyboard_btns').find('span').eq(k).attr('class') == 'Vkeyboard_first'){

						$('#Vkeyboard_wrapper').find('.Vkeyboard_btns').find('span').eq(k).attr('class','');
					}
				}
			

			}
			else if($('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('div').eq(0).attr('class') == 'Vkeyboard_btn_activated'){
				$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('div').eq(0).attr('class','Vkeyboard_btns');
$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('div').eq(11).attr('class','Vkeyboard_btns');

				for(var k= 0 ; k < $('#Vkeyboard_wrapper').find('span').length ; k++){

					if($('#Vkeyboard_wrapper').find('.Vkeyboard_btns').find('span').eq(k).attr('class') != 'Vkeyboard_first'){

						$('#Vkeyboard_wrapper').find('.Vkeyboard_btns').find('span').eq(k).attr('class','Vkeyboard_first');

					}
					else if($('#Vkeyboard_wrapper').find('.Vkeyboard_btns').find('span').eq(k).attr('class') == 'Vkeyboard_first'){

						$('#Vkeyboard_wrapper').find('.Vkeyboard_btns').find('span').eq(k).attr('class','');
					}
				}
			}
			


		}






	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_btns:first-child').click(function(){
	//		shift_key();
	//	});
	//	$('#Vkeyboard_wrapper').find('#Vkeyboard_fourth_line').find('.Vkeyboard_btns:last-child').click(function(){
	//		shift_key();
	//	});


		//close Virtual keyboard
		$('#Vkeyboard_wrapper').find('#Vkeyboard_close').click(function(){

			$('#Vkeyboard_wrapper').fadeOut();
		});


	};
})(jQuery);