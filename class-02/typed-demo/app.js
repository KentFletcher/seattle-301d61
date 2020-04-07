'use strict';

// selecting all divs, and adding text;

$('#main-div').on('mouseenter', function () {
  $(this).toggleClass('expanded');
});

function Person(data) {
  this.name = data.name;
  this.description = data.description;
}

Person.prototype.render = () => {
  $('#main-div').append(`
    <h2>${this.name}</h2>
    <p>${this.description}</p>
  `);
}

console.log($.ajax('data.json'));

const AddValuesToMainDiv = (item) => {
  $('#main-div').append(`
      <h2>${item.name}</h2>
      <p>${item.description}</p>
    `);
}

$.ajax('data.json').then(data => {
  data.forEach(AddValuesToMainDiv);
});