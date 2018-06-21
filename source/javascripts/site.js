// This is where it all goes :)
//= require materialize
//= require materialize-tags

function setMaterialize() {
  $('select').material_select();
  $('.tooltipped').tooltip();

  $(".button-collapse").sideNav();
  $('.modal').modal();
  $('.tabs').tabs();


  $( document ).ajaxStart(function() {
    $("#global-progress").show();
  });

  $( document ).ajaxComplete(function() {
    $("#global-progress").hide();
  });
  $('.dropdown-button').dropdown();


  Materialize.updateTextFields();
  setupDatePickers();
  setupAutoPrompts();
}

$(document).on('ready', function() {
  setMaterialize();
});

$(document).on("fields_added.nested_form_fields", function(event, param) {
  setMaterialize();
});
