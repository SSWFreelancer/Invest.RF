
$(document).ready(function (event) {
   $(window).trigger('resize');
   $('.header__burger').click(function (event) {
     $('.header, .header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });     
   $('.filter__all').click(function (event) {
     $('.filter__burger, .filter-menu').addClass('active');
     $('body').addClass('lock');
   });
   $('.filter__burger').click(function (event) {
     $('.filter__burger, .filter-menu').removeClass('active');
     $('body').removeClass('lock');
   });   
   $('.menu__link').click(function (event) {
      event.preventDefault();
      $(this).parent().toggleClass('active').find('ul').toggleClass('show');
   });  
   $('.filter-menu__link').click(function (event) {
      event.preventDefault();
      $(this).parent().toggleClass('active').find('ul').toggleClass('show');
   });   
   
   $('.maybe__bottom > button').click(function (event) {
      if($(window).width() > 991){
         let maybebottominputval = $(this).prev().find('input').val().replace(/,/g, '');
         if(maybebottominputval < parseFloat($(this).prev().find('input').attr('data-minval'))){
            event.preventDefault();
            $(this).prev().addClass('active');
            $(this).prev().find('b').html( $(this).prev().find('b').attr('data-min'));
         }
         else if(maybebottominputval > parseFloat($(this).prev().find('input').attr('data-maxval'))){
            event.preventDefault();
            $(this).prev().addClass('active');
            $(this).prev().find('b').html( $(this).prev().find('b').attr('data-max'));
         }
         else{
            $(this).prev().removeClass('active');
         }
      }
   });     
   

   $('.maybe__inputvalue input').keyup(function (event) {
      this.value = Number(this.value.replace(/\D/g,'')).toLocaleString('en-US');
   });  
   $('.maybe__inputvalue').click(function (event) {
      $(this).removeClass('active');
   });     

   $('.tab__buttons > button').click(function (event) {
      let tabbuttonsleftval = $(this).prev().find('input').val().replace(/,/g, '');
      if(tabbuttonsleftval < parseFloat($(this).prev().find('input').attr('data-minval'))){
         event.preventDefault();
         $(this).prev().addClass('active');
         $(this).prev().find('b').html( $(this).prev().find('b').attr('data-min'));
      }
      else if(tabbuttonsleftval > parseFloat($(this).prev().find('input').attr('data-maxval'))){
         event.preventDefault();
         $(this).prev().addClass('active');
         $(this).prev().find('b').html( $(this).prev().find('b').attr('data-max'));
      }
      else{
         $(this).prev().removeClass('active');
      }
   });     
   $('.tab__buttons-left div input').keyup(function (event) {
      this.value = Number(this.value.replace(/\D/g,'')).toLocaleString('en-US');
   });  
   $('.tab__buttons input').click(function (event) {
      $(this).parent().parent().removeClass('active');
   });   

   $('.header__user p').click(function (event) {
     $(this).closest('.header__user').find('ul').toggleClass('active');
     $(this).toggleClass('active');
   });

   $('.header__notifications img').click(function (event) {
     $(this).next().toggleClass('active');
   });
   $('.filter__search input').focus(function (event) {
     $(this).parent().addClass('active');
   });  
   $('.filter__search input').blur(function (event) {
     $(this).parent().removeClass('active');
   });   
   height();

   $('.login__input>svg').click(function (event) {
     if ($(this).prev().attr('type') == "password") {
       $(this).prev().attr('type', 'text');
       $(this).addClass('active');
     } else {
      $(this).prev().attr('type', 'password');
      $(this).removeClass('active');
     }
   });   



   $('.login__bottom input[type="checkbox"]').on("invalid", function(event) {
     $(this).addClass('red');
   });  
   $('.maybe__navwrap>img:last-child').click(function (event) {  
      var navsliderpos = $(this).parent().find('.maybe__navslider').scrollLeft();
      $(this).parent().find('.maybe__navslider').scrollLeft(navsliderpos + $(this).parent().find('.maybe__navslider>img').width() + 12);
      if($(this).parent().find('.maybe__navslider').scrollLeft() + $(this).parent().find('.maybe__navslider>img').width() + 12 < 10){
         $(this).prev().prev().addClass('hide');
      }else{
         $(this).prev().prev().removeClass('hide');
      }
   });  
   $('.maybe__navwrap>img:first-child').click(function (event) {  
      var navsliderpos = $(this).parent().find('.maybe__navslider').scrollLeft();
      $(this).parent().find('.maybe__navslider').scrollLeft(navsliderpos - $(this).parent().find('.maybe__navslider>img').width() - 12);
      if($(this).parent().find('.maybe__navslider').scrollLeft() - $(this).parent().find('.maybe__navslider>img').width() - 12 < 10){
         $(this).addClass('hide');
      }else{
         $(this).removeClass('hide');
      }
   });  
   $('.maybe__navslider>img').click(function (event) {  
      $('.maybe__navslider>img').removeClass('current');
      $(this).addClass('current');
      $('.maybe__slider').slick('slickGoTo', $(this).index());
      var forslider = $(window).width() - $('.maybe__container').width();
      if($(this).offset().left - forslider/2>500){
         $('.maybe__navslider').scrollLeft($(this).offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() - $('.maybe__navslider').width()/2 + 70);
         if($(this).offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() < 10){
            $('.maybe__navwrap>img:first-child').addClass('hide');
         }else{
            $('.maybe__navwrap>img:first-child').removeClass('hide');
         }
      }else if($(this).offset().left - forslider/2<100){
         $('.maybe__navslider').scrollLeft($(this).offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() - $('.maybe__navslider').width()/2 + 70 );
         if($(this).offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() < 10){
            $('.maybe__navwrap>img:first-child').addClass('hide');
         }else{
            $('.maybe__navwrap>img:first-child').removeClass('hide');
         }
         
      }
   });  
   $('.maybe__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      var numberslide = currentSlide + 1;
      $('.maybe__navslider>img.current').removeClass('current');
      $('.maybe__navslider>img:nth-child('+numberslide+')').addClass('current');

      var forslider = $(window).width() - $('.maybe__container').width();
      if( $('.maybe__navslider>img.current').offset().left - forslider/2>500){
         $('.maybe__navslider').scrollLeft( $('.maybe__navslider>img.current').offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() - $('.maybe__navslider').width()/2 + 70);
         if( $('.maybe__navslider>img.current').offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() < 10){
            $('.maybe__navwrap>img:first-child').addClass('hide');
         }else{
            $('.maybe__navwrap>img:first-child').removeClass('hide');
         }
      }else if( $('.maybe__navslider>img.current').offset().left - forslider/2<100){
         $('.maybe__navslider').scrollLeft( $('.maybe__navslider>img.current').offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() - $('.maybe__navslider').width()/2 + 70 );
         if( $('.maybe__navslider>img.current').offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() < 10){
            $('.maybe__navwrap>img:first-child').addClass('hide');
         }else{
            $('.maybe__navwrap>img:first-child').removeClass('hide');
         }
         
      }
   });   
   $('.maybe-nav__mobile').click(function (event) {
     $(this).parent().next().addClass('active');
     $(this).parent().prev().addClass('active');
     $('body').addClass('lock');
   });   
   $('.maybe-nav>p').click(function (event) {
     $(this).parent().find('ul').removeClass('active');
     $(this).removeClass('active');
     $('body').removeClass('lock');
   });   
   $('.maybe-nav li').click(function (event) {
      $('.maybe-nav li').removeClass('active');
      $(this).addClass('active');
      $(this).parent().prev().find('p').text($(this).find('p>b').text());
      if($(this).find('p>span').text().length>0){
         $(this).parent().prev().find('p').append('<span>'+$(this).find('p>span').text()+'</span>')
      }
      if($(this).find('p>svg').text().length>0){
         $(this).parent().prev().find('p').prepend('<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">'+$(this).find('p>svg').html()+'</svg>')
      }
      $('.tab').removeClass('target');
      $('#'+$(this).attr('data-tab')+'').addClass('target');
      $(this).parent().removeClass('active');
      $(this).parent().parent().find('>p').removeClass('active');
      $('body').removeClass('lock');

      if($('.maybe__bigwrapper').length > 0){
         $(window).scrollTop($('.maybe__bigwrapper').offset().top + 1);
         if(!$('#Pitch').hasClass('target')){
            $('.tab__aside').addClass('hide');
         }else{
            $('.tab__aside').removeClass('hide');
         }
      }

   });   
   if($(window).width()>=1056){
      $('.faq__row>p').click(function (event) {
         $('.faq__row').removeClass('active');
         $(this).parent().addClass('active');
         $('.faq__content p').text($(this).text());
         $('.faq__content span').html($(this).next().html());
      });   
   }else{
      $('.faq__row').removeClass('active');
      $(this).parent().removeClass('active');  
      $('.faq__row>p').click(function (event) {
         $(this).parent().toggleClass('active');
         $(this).next().slideToggle();
      });  
   }
   if($(window).width()>=1056){
      $('.risks__row>p').click(function (event) {
         $('.risks__row').removeClass('active');
         $(this).parent().addClass('active');
         $('.risks__content span').html($(this).next().html());
      });  
   }else{
      $('.risks__row').removeClass('active');
      $(this).parent().removeClass('active');  
      $('.risks__row>p').click(function (event) {
         $(this).parent().toggleClass('active');
         $(this).next().slideToggle();
      });  
      $('.risks__row>img').click(function (event) {
         $(this).parent().toggleClass('active');
         $(this).prev().slideToggle();
      });  

   }


    $('.maybe__video>video').click(function(event){
		if ($(this).get(0).paused) {
			$(this).get(0).play();
         $(this).next().addClass('remove');
		} else {
			$(this).get(0).pause();
         $(this).next().removeClass('remove');
		}
    });
   $('.maybe__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      if($('.maybe__video').length > 0){
         if(!$('.maybe__video').hasClass('slick-current')){
            $('.maybe__video').find('video').get(0).pause();
            $('.maybe__video').find('video').next().removeClass('remove');
         }
      }

   });


   $('.coffee__more').click(function (event) {
      event.preventDefault();
      $(this).remove();
      $('.coffee__item').addClass('show');
      $('.coffee__cards').addClass('show');
   });   
   $('.updates__like input').click(function (event) {
      var likecount = parseFloat($(this).parent().find('span').text());
      if($(this).is(':checked')){
         $(this).parent().find('span').text(likecount + 1);
      }else{
         $(this).parent().find('span').text(likecount - 1);
      }
   });   
   $('.dataroom__row>.dataroom__files .dataroom__foldername').click(function (event) {
      $(this).toggleClass('active');
      $(this).parent().next(".dataroom__documents").slideToggle();
   });   

   $('.discuss__like input').click(function (event) {
      var likecount1 = parseFloat($(this).parent().find('span').text());
      if($(this).is(':checked')){
         $(this).parent().find('span').text(likecount1 + 1);
      }else{
         $(this).parent().find('span').text(likecount1 - 1);
      }
   });  
   $('.marcet__sublist li a').click(function (event) {
      event.preventDefault();
      $(this).parent().parent().prev().find('span').text($(this).text());
   });  

   $('.aptera__item input').keyup(function (event) {
      var apterainput = $(this).val().replace(/,/g, '');
      console.log(apterainput);
      console.log($(this).attr('data-minval'))
      if(apterainput >= parseFloat($(this).attr('data-minval')) && apterainput < parseFloat($('.secondcost').attr('data-cost'))){
         $('.aptera-perkscard').removeClass('active');
         $('.aptera-perkscard.firstcost').addClass('active');
         $(this).parent().removeClass('error').addClass('success');
      }
      else if(apterainput >=  parseFloat($('.secondcost').attr('data-cost')) && apterainput <  parseFloat($('.thirthcost').attr('data-cost'))){
         $('.aptera-perkscard').removeClass('active');
         $('.aptera-perkscard.secondcost').addClass('active');
         $(this).parent().removeClass('error').addClass('success');
      }
      else if(apterainput >=  parseFloat($('.thirthcost').attr('data-cost')) && apterainput <= parseFloat($(this).attr('data-maxval'))){
         $('.aptera-perkscard').removeClass('active');
         $('.aptera-perkscard.thirthcost').addClass('active');
         $(this).parent().removeClass('error').addClass('success');
      }

      if(apterainput < parseFloat($(this).attr('data-minval'))){
         $('.aptera-perkscard').removeClass('active');
         $(this).parent().addClass('error').removeClass('success');
         $(this).next().html($(this).next().attr('data-min'));
      }    
      else if(apterainput > parseFloat($(this).attr('data-maxval'))){
         $('.aptera-perkscard').removeClass('active');
         $(this).parent().addClass('error').removeClass('success');
         $(this).next().html($(this).next().attr('data-max'));
      }else{
         $(this).parent().removeClass('error').addClass('success');
      }    
   });  
   $('.aptera__item input').keyup(function (event) {
      this.value = Number(this.value.replace(/\D/g,'')).toLocaleString('en-US');
   });  
   $('.aptera__accept input').change(function (event) {
      if($(this).is(':checked')){
         $('.aptera__btn').prop('disabled', false);
      }else{
         $('.aptera__btn').prop('disabled', true);
      }
   });   

   $('.aptera__btn').click(function (event) {
      if($(this).closest('.aptera__content').find('.aptera__item-input').hasClass('error')){
         event.preventDefault();
      }
   });   
   $('.liquidity-features__tabs p').click(function (event) {
      $(this).parent().find('p').removeClass('active');
      $(this).addClass('active');
      $(this).parent().parent().find('[data-liquid]').removeClass('active');
      $(this).parent().parent().find('[data-liquid="'+$(this).attr('data-liquidity')+'"]').addClass('active');
   });   
   $('.curated__row input').keyup(function (event) {
      if($(this).val().length > 0){
         $(this).next().prop('disabled', false);
      }else{
         $(this).next().prop('disabled', true);
      }
   });   
   $('.apply__company-pitch input').change(function (event) {
      if($(this).is(':checked')){
         $(this).closest('.apply__company-column').find('[data-applyid]').removeClass('active');
         $(this).closest('.apply__company-column').find('[data-applyid='+$(this).attr('id')+']').addClass('active');
      }else{
         $(this).next().prop('disabled', true);
      }
   });  
   $('.refer-friend__btn, .refer-scout').click(function (event) {
      event.preventDefault();
      $('.refer-popup').addClass('open');
      $('body').addClass('popuplock');
   });   
   $('.refer-popup>p').click(function (event) {
      $('.refer-popup').removeClass('open');
      $('body').removeClass('popuplock');
   });   
   $('.investors__learn').click(function (event) {
      $('.investors__side, .investors').addClass('active');
      $('body').addClass('investorslock');
   });   

   $('.investors>p, .investors__side>a').click(function (event) {
      $('.investors__side, .investors').removeClass('active');
      $('body').removeClass('investorslock');
   });   
   $('.tab-invite__link').click(function (event) {
      event.preventDefault();
        $('.tab-invite__link input').select();
        document.execCommand("copy");
        $(this).find('>p').addClass('active');
         setTimeout(function(){
             $('.tab-invite__link>p').removeClass('active');
         },500);        
    });     
   $('.tab-investment__body-btn').click(function (event) {
      event.preventDefault();
      $('.addinvestment').addClass('open');
      $('body').addClass('popuplock');      
    });        
   $('.addinvestment>p, .addinvestment__close').click(function (event) {
      event.preventDefault();
      $('.addinvestment').removeClass('open');
      $('body').removeClass('popuplock');      
    });   
   $('.tab-invites__btn').click(function (event) {
      event.preventDefault();
      $('.syndicatepopup').addClass('open');
      $('body').addClass('popuplock');      
    });        
   $('.syndicatepopup>p, .syndicatepopup__close').click(function (event) {
      event.preventDefault();
      $('.syndicatepopup').removeClass('open');
      $('body').removeClass('popuplock');      
    });   




});    
$(document).click(function() {
   var container = $(".header__user");
   if($(window).width() > 1023){
      if (!container.is(event.target) && !container.has(event.target).length) {
         $('.header__user ul').removeClass('active');
     }
   }

   var container = $(".header__notifications");
    if (!container.is(event.target) && !container.has(event.target).length) {
        $('.header__notifications>div').removeClass('active');
    }

});

function height(){
   $('.filter__cards .cards__subtitle').each(function (event) {
      var filtersubtitle = $('.filter__cards .cards__subtitle');
      for (var i = 0; i <= filtersubtitle.length - 1; i++) {
         var filtersubtitleheight = filtersubtitle[i];
         var max = 0;
         if($(filtersubtitleheight).height() > max){
            max = $(filtersubtitleheight).height();
            $('.filter__cards .cards__subtitle').css('min-height', max);
         }
      }
   });  
   $('.open__cards .cards__subtitle').each(function (event) {
      var filtersubtitle1 = $('.filter__cards .cards__subtitle');
      for (var i = 0; i <= filtersubtitle1.length - 1; i++) {
         var filtersubtitleheight1 = filtersubtitle1[i];
         var max = 0;
         if($(filtersubtitleheight1).height() > max){
            max = $(filtersubtitleheight1).height();
            $('.open__cards .cards__subtitle').css('min-height', max);
         }
      }
   });     
}
$(window).resize(function (event) {
   if ($('.header__user').length > 0) {
      if($(window).width()<=1023){
         $('.header__user p, .header__user ul').addClass('active');
      }else{
         $('.header__user p, .header__user ul').removeClass('active');
      }
   }
   if ($('.startinvest').length > 0) {
      $('.startinvest').css('margin-top', -$('.startinvest').outerHeight());
   }
   
    
});

$('.login').scroll(function (event) {
     if($('.login').scrollTop()>1){
         $('.header').addClass('show');
         $('.toup').addClass('show');
     }else{
         $('.header').removeClass('show');
         $('.toup').removeClass('show');
     }
});  
$(window).scroll(function (event) {
 var scrolltotop = $(window).scrollTop();
     if(scrolltotop>1){
         $('.header').addClass('show');
         $('.toup').addClass('show');
     }else{
         $('.header').removeClass('show');
         $('.toup').removeClass('show');
     }

      var s_top = $(window).scrollTop() + $(window).height(); 
      if ($('.maybe__bigwrapper').length > 0) {
           var tpx = $('.maybe__bigwrapper').offset().top + $(window).height();
           if(s_top > tpx){
              // $('.header').addClass('fixed');
              $(".maybe__bigwrapper").addClass('fixed');  
           } 
           else{
             // $('.header').removeClass('fixed');
             $(".maybe__bigwrapper").removeClass('fixed');  
           } 
       } 
 });      

$(window).scroll(function () {
   var s_top1 = $(window).scrollTop() + $(window).height(); 
   for (var i = 1; i < $('.investors__side>a').length + 1; i++) {
      var href = $('.investors__side>a:nth-child('+ i +')').attr('href');
      if($(href).length){
         var tpx2 = $(href).offset().top + $(window).height() - 250; 
         if(s_top1 > tpx2){
            $(".investors__side>a").removeClass('active');  
            $('.investors__side>a:nth-child('+ i +')').addClass('active');  
         }
         if(s_top1<=$(window).height()){
            $(".investors__side>a").removeClass('active'); 
         }
      }        
   }
});

$(window).scroll(function () {
   var s_top = $(window).scrollTop() + $(window).height(); 
   for (var i = 1; i < $('.aside__item').length + 1; i++) {
      var href = $('.aside__item:nth-child('+ i +')').attr('href');
      if($(href).length){
         var tpx1 = $(href).offset().top + $(window).height() - 250; 
         if(s_top > tpx1){
            $(".aside__item").removeClass('active');  
            $('.aside__item:nth-child('+ i +')').addClass('active');  
         }
         if(s_top<=$(window).height()){
            $(".aside__item").removeClass('active'); 
         }
      }        
   }
});

function readURL(input) {
       var reader = new FileReader();
       reader.onload = function (e) {
           $('#filename').text(input.files.item(0).name);
       };
       reader.readAsDataURL(input.files[0]);
   
};
function readU(input1) {
       var reader1 = new FileReader();
       reader1.onload = function (e) {
           $('#file').text(input1.files.item(0).name);
       };
       reader1.readAsDataURL(input1.files[0]);
   
};


$(document).ready(function (event) {
   if($('select').length>0){
      $('select').niceSelect();
   }
   if($('.maybe__slider').length>0){
      $('.maybe__slider').slick({
         arrows: true,
         fade:true,
         slidesToShow: 1,
         infinite:false,
         responsive: [
            {
            breakpoint: 992,
               settings: {
                  infinite:true,
               }
            },
         ]         
      });
   }
   $('.maybe__image').addClass('ready');
   if($('.press__content').length>0 && $('.press__column').length>3){
      $('.press__content').slick({
         arrows: true,
         dots: false,
         fade:false,
         slidesToShow: 3,
         responsive: [
            {
            breakpoint: 901,
               settings: {
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 551,
                  settings: {
                     slidesToShow: 1,
                  }
               },            
         ]         
      });      
   }else{
      $('.press__content').addClass('notslider');
   }
   if($('.ultimate__cards').length>0){
      $('.ultimate__cards').slick({
         arrows: false,
         slidesToShow: 2.5,
         infinite:false,
         touchThreshold:100,
         responsive: [
            {
            breakpoint: 1024,
               settings: 'unslick',
            },
         ]         
      });
   }

}); 



$(window).resize(function (event) {
   if($('.tab-portfolio__cards').length>0){
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
         var data = google.visualization.arrayToDataTable([
            ['', 'Invested', 'Realized', 'Unrealized'],
            ['JAN 01, 2017', 5000, 44400, 26200],
            ['JAN 01, 2018', 11170, 32460, 10250],
            ['JAN 01, 2019', 40660, 19120, 10300],
            ['JAN 01, 2020', 40300, 52540, 16350],
            ['JAN 01, 2021', 41030, 50540, 58350]
         ]);

         var options = {
            chart: {

            }
         };

         var chart = new google.charts.Bar(document.getElementById('tab-portfolio__chart'));

         chart.draw(data, google.charts.Bar.convertOptions(options));
      }
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart1);
      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
         ['Task', 'Hours per Day'],
         ['Work',     11],
         ['Commute',  2],
         ['Other',    7]
        ]);

        var options = {
         title: '',
         pieHole: 0.4,
         chartArea:{left:5, top:15, right:0,bottom:15, width:'100%'},
        };

        var chart = new google.visualization.PieChart(document.getElementById('tab-portfolio__card-graph'));
        chart.draw(data, options);
      }
   }

}); 