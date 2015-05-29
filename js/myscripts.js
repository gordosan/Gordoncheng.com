// JavaScript Document

function quotesSelect() {
  $( "#quotes" ).addClass("active");
  $( "#about").removeClass("active");
  $( "#contact" ).removeClass("active");
  $( "#data").remove();
  $('#data_placeholder').append("<div id = 'data' class = 'animated zoomIn'></div>");
  $( "#data" ).load( "content/Quotes.html" );
}

function aboutSelect() {
	$( "#about" ).addClass("active");
    $( "#quotes").removeClass("active");
	$( "#contact" ).removeClass("active");
	$( "#data").remove();
    $('#data_placeholder').append("<div id = 'data' class = 'animated zoomIn'></div>");
    $( "#data" ).load( "content/home.html" );
}

function contactSelect() {
	$( "#contact" ).addClass("active");
    $( "#quotes").removeClass("active");
	$( "#about").removeClass("active");
	$( "#data").remove();
    $('#data_placeholder').append("<div id = 'data' class = 'animated flipInX'></div>");
    $( "#data" ).load( "content/contact.html" );
}

function gethash(){
	  if(window.location.hash) {
		  var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
		  loadpage(hash);	  
		  // ---hash found above ---  if not then just load default
	  } else {
		  $( "#data" ).load( "content/home.html" );
	  }	
}


function loadpage(hash){ 
	  if(hash.toLowerCase() == "about"){
		 aboutSelect();
	  }
	  else if(hash.toLowerCase() == "quotes"){
		  quotesSelect();
	  }
	  else if(hash.toLowerCase() == "contact"){
		  contactSelect();
	  }	    
	  
	  else {
    $( "#contact" ).removeClass("active");
    $( "#quotes").removeClass("active");
	$( "#about").removeClass("active");
    $( "#data" ).load( "content/error.html" );
	  }
  
}

function footer(){
     var dteNow = new Date();
     var intYear = dteNow.getFullYear();
     document.write("<p>© " + intYear +  " Gordon Cheng</p>");	
}