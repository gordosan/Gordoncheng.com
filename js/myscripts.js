// JavaScript Document

function quotesSelect() {
  $( "#quotes" ).addClass("active");
  $( "#about").removeClass("active");
  $( "#contact" ).removeClass("active");
  $( "#data").remove();
  $('#data_placeholder').append("<div id = 'data' class = 'animated fadeIn'></div>");
  $( "#data" ).load( "content/Quotes.html" );
}

function aboutSelect() {
	$( "#about" ).addClass("active");
    $( "#quotes").removeClass("active");
	$( "#contact" ).removeClass("active");
	$( "#data").remove();
    $('#data_placeholder').append("<div id = 'data' class = 'animated fadeIn'></div>");
    $( "#data" ).load( "content/home.html" );
}

function contactSelect() {
	$( "#contact" ).addClass("active");
    $( "#quotes").removeClass("active");
	$( "#about").removeClass("active");
	$( "#data").remove();
    $('#data_placeholder').append("<div id = 'data' class = 'animated fadeIn'></div>");
    $( "#data" ).load( "content/contact.html" );
}

