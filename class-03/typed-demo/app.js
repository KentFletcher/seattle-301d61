'use strict';

const template = $('#image-template').html();
const values = [
  { name: 'Jacob' },
  { name: 'someone new' }
];


values.forEach(value => {
  const renderedTemplate = Mustache.render(template, value);
  $('#root').append(renderedTemplate);
});