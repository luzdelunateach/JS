$(() => {
  /*$('#switcher-large').on('click', ()=> {
    $('body').addClass('large');
    $('#switcher button').removeClass('selected');
   
  });

  $('#switcher-default').addClass('selected').on('click', ()=> {
    $('body').removeClass('narrow').removeClass();
    $('#switcher button').removeClass('selected');
   
  });
  $('#switcher-narrow').on('click', ()=> {
    $('body').addClass('narrow').removeClass();
    $('#switcher button').removeClass('selected');
  
  });*/
/*
$('#switcher-default')
    .addClass('selected')
    .on('click', () => {
    $('body').removeClass();
});
$('#switcher-narrow')
.on('click', () => {
  $('body')
  .removeClass()
  .addClass('narrow');
});
$('#switcher-large')
  .on('click', () => {
  $('body').removeClass()
  .addClass('large');
});

  $('#switcher button').on('click', function() {
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected'); //<--- Por la culpa del this la function no puede ser arrow
  });

  $('#switcher-default').addClass('selected');
  $('#switcher button').on('click', function(evento) {
    const bodyClass = this.id.split('-')[1];
    console.log(bodyClass);
    $('body').removeClass().addClass(bodyClass);
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
    $$(evento.target).addClass('selected').removeClass('selected');
    evento.stopPropagation();
  });*/

  const triggers = {
    d: 'default',
    n: 'narrow',
    l: 'large'
    };

  $(document).keyup((e) => {
    const key = String.fromCharCode(e.which).toLowerCase();
    if (key in triggers) {
      $(`#switcher-${triggers[key]}`).click();
    }
  });

  $('.author:contains(Charles Dickens)').click((e)=>{
    $('.author').addClass('selected');
  });

  $('.chapter-title').dblclick(function(){
    $(this).nextAll('p').toggleClass('hidden');
  });

  //CHECARLO EJERCIO PAGINA 90
  let setClass = function(){
    let body=$('body');
    if(body.hasClass('narrow')){
      body.removeClass().addClass('large');
    }else if(body.hasClass('large')){
      body.removeClass();
    }else{
      body.removeClass().addClass('narrow');
    }
  }

  $(document).keyup(function(event){
    if(event.which==39){
      setClass();
    }
  });

  $('#switcher-default').addClass('selected');

    $('#switcher button').click((e) => {
      console.log(e.target.id);
      const bodyClass = e.target.id.split('-')[1];
      $('body').removeClass().addClass(bodyClass);
      $('#switcher button').removeClass();
      $(e.target).addClass('selected');

      e.stopPropagation();
  });

  $('#switcher-narrow, #switcher-large').click(() => {
    $('#switcher').off('click.collapse');
  });

  //se le puede poner la etiqueta despues del punto
  
  $('#switcher').on('click.collapse', (e)=>{
    $(e.currentTarget)
    .children('button').toggleClass('hidden');
  });

  /*$('#switcher').on('click', (e)=>{
    console.log('Click');
  });

    $('#switcher').click((e)=>{
    //if(event.target==this){
      //$(this).children('button').toggleClass('hidden');
    //}
    $(e.currentTarget).children('button').toggleClass('hidden');
  });*/

  //Propagacion de eventos

  $('#switcher h3').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });

  $('#switcher').trigger('click.collapse');
});
