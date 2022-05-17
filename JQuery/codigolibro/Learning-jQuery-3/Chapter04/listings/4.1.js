$(() => {

  $('#container').ready((e)=>{
    const $container = $('#container');
    $container
    .fadeTo(2500, 1.0)
    .css('display', 'inline');
  });

  $('p').mouseover(function(e) {
    $(e.target).css('background-color','yellow');
  });

  $('h2').click((e)=>{
    const $title=$(e.target);
    const $speech = $('.speech');
    $title.animate({
      opacity: '25%',
      marginLeft: '20px'
      }, 'slow')
    .queue((next) => { //si queiro hacer el fecto en css en un punto en especifico uso queue
      $speech.animate({opacity: '50%'}, 'slow');
      next();
    }).slideDown(2500);
  });

  $(document).keyup(function(e){
    if(e.which==3){
      $('#switcher').animate({
        'margin-left': `${parseInt($('#switcher').css('margin-left'))-20}px`
      });
    }
    if(e.which==38){
      $('#switcher').animate({
        'margin-top': `${parseInt($('#switcher').css('margin-top'))-20}px`
      });
    }
    if(e.which==39){
      $('#switcher').animate({
        'margin-left': `${parseInt($('#switcher').css('margin-left'))+20}px`
      });
    }
    if(e.which==40){
      $('#switcher').animate({
        'margin-top': `${parseInt($('#switcher').css('margin-top'))+20}px`
      });
    }
  });

  const sizeMap = {
    'switcher-default': n=> 14.2,
    'switcher-small': n => n / 1.4,
    'switcher-large': n => n * 1.4
    };

  const $speech = $('div.speech');

  $('#switcher button')
    .click((e) => {
      const num = parseFloat($speech.css('fontSize'));
      $speech.animate({fontSize: `${sizeMap[e.target.id](num)}px`});
    });

    /*$('p')
    .eq(1)
    .hide();

    $('a.more')
      .click((e) => {
      e.preventDefault(); //evitar que actue como liga - cancela el comportamiento default de la liga ya no se va a google.com
      $('p').eq(1).slideDown(5000);
      $(e.target).hide(); //osea la hiperliga a la que dimos clic debe ocultar
    });*/

    const $firstPara = $('p').eq(1).hide();
    $('a.more').click((e) => {
      e.preventDefault();

      $firstPara.animate({
        opacity: 'toggle',
        height: 'toggle'
        }, 'slow');
       

      $(e.target).text(
        $(e.target).text() === 'read more' ? 'read less' : 'read more');
    });

    $('div.label').click((e) => {
      const $switcher = $(e.target).parent();
      const paraWidth = $('div.speech p').outerWidth();
      const switcherWidth = $switcher.outerWidth();

      $switcher
      .css('position', 'relative')
      .fadeTo('fast', 0.5)
      .animate(
      { left: paraWidth - switcherWidth },
      { duration: 'slow', queue: false }
      )
      .fadeTo('slow', 1.0)
      .slideUp('slow')
      .queue((next) => { //si queiro hacer el fecto en css en un punto en especifico uso queue
        $switcher.css('background-color', '#f00');
        next();
      }).slideDown('slow');

 });

 $('p').eq(2).css('border', '1px solid #333').click((e) => {
      $(e.target).next()
      .slideDown(2500, () => {
        $(e.target).slideUp(2500);
      });
  });

  $('p').eq(3).css('background-color', '#ccc').hide();

  


});
