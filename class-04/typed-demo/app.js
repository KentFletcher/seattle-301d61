$('#click').on('click', 'div', function () {
  var counter = 0;
  $('p').on('click', counter++);
})