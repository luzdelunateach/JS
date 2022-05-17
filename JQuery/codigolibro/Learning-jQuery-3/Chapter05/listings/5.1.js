$(() => {
  $('div.chapter a')
    .attr({ rel: 'external',
    title: function() {
    return `Learn more about ${$(this).text()} at Wikipedia.`;
    },
    id: index => `wikilink-${index}`
  });

  $('#hide-read')
  .change((e) => {
  if ($(e.target).is(':checked')) {
    $('.chapter p').filter((i, p) => $(p).data('read')).hide();
  } else {
    $('.chapter p').show();
  }
  });

  $('.chapter p').click((e) => {
 const $elm = $(e.target);
 $elm
 .css(
 'textDecoration',
 $elm.data('read') ? 'none' : 'line-through' 
 ) //para cada data read le esta 
 .data('read', !$(e.target).data('read'));
 });

 $('<a id="backTop" href="#top">back to top</a>')
 .insertAfter('div.chapter p:eq(3)');
 $('<a id="top"></a>').prependTo('body');


 $('#backTop').click((e)=>{
  $("<p><b>You were here</b></p>").insertAfter('#backTop');
 });

 $('#f-author').click((e)=>{
  $(e.target).wrap("<b></b>");
 });
 /*$('span.footnote')
 .insertBefore('#footer') //envolver el contenido
 .wrapAll('<ol id="notes"></ol>') //envuelve todo en listas
 .wrap('<li></li>'); //metodos de envoltura*/

 const $notes = $('<ol id="notes"></ol>')
 .insertBefore('#footer');

 $('span.footnote').each((i, span) => {
  $(`<sup>${i + 1}</sup>`).insertBefore(span);
  $(span)
  .clone() //clona el elemento y lo agrega en otro ado del documento
 .before(`<sup>${i + 1}</sup>`)
 .appendTo($notes)
 .wrap('<li></li>');
 });



});
