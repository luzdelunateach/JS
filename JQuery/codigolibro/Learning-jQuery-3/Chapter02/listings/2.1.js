$(() => {
  $('#selected-plays > li').addClass('horizontal');
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');
  $('#selected-plays li:not(.sub-level)').addClass('big-letter');
  $('a[href^="mailto:"]').addClass('mailto'); //atributo ^empieze
  $('a[href$=".pdf"]').addClass('pdflink'); //$termina 
  $('a[href^="http"][href*="henry"]').addClass('henrylink'); //que empiecen con http y tengan en el texto henry -- SE INTERPRETA COMO UN && AND --*quE EN ALGUN LADO TENGA LA PLABRA HENRY
 // $('a[href^="http"],[href*="henry"]').addClass('henrylink'); //cuando tiene la coma se interpreta como || OR
 //Circunflejo ^ inicia con
 // $ termina con
 //* tiene 
 //$('tr:even').addClass('alt');
 $('tr:nth-child(odd)').addClass('alt'); //para el enecimo hijo
 //$('tr:contains(Henry)').addClass('highlight');
 $('tr').filter(':even').addClass('alt');

 $('a').filter((i, a) =>
a.hostname && a.hostname !== location.hostname
).addClass('external');
// i daria el indice aun que no se use es parte de la sintaxis

//$('td:contains(Henry)').next().addClass('highlight'); //a la siguiente celda que encuentre la concidencia aplicale la clase
//$('td:contains(1606)').prev().prev().addClass('highlight'); //previus
//$('td:contains(Henry)').nextAll().addClass('highlight'); //todas las siguientes despues de la que encuentra
//$('td:contains(Henry)').nextAll().addBack().addClass('highlight'); //todas las siguientes y la primera

//$('td:contains(Henry)').parent().children().addClass('highlight'); //es el mismo que el de arriba alteramos al tr (padre) y hijos tds donde contengas henry
$('td:contains(Henry)') // Find every cell containing "Henry"
.parent() // Select its parent
  .find('td:eq(1)') // Find the 2nd descendant cell
  .addClass('highlight') // Add the "highlight" class
.end() // Return to the parent of the cell containing "Henry"
  .find('td:eq(2)') // Find the 3rd descendant cell
  .addClass('highlight'); // Add the "highlight" class

  const eachText = [];
  $('td')
    .each((i, td) => {
    if (td.textContent.startsWith('A')) {
      eachText.push(`${i}-${td.textContent}`);
  }
  });
console.log('each', eachText);

$('ul > li:not(.horizontal)').addClass('special');
$('tr').find('td:eq(2)').addClass('year');
//$('tr').find('td:contains(Tragedy)').addClass('special');
$('td:contains(Tragedy)').parent().addClass('special');
$('li:has(a)').next().addClass("afterlink");
$('a[href$=".pdf"]').closest("ul").addClass("Tragedy");

});

//Ejercicio 1
