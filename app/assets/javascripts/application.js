// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery3
//= require jquery_ujs
//= require_tree ./sitewide

function showDaysValue(newValue)
{
  if (newValue > 24) {
  	document.getElementById("daysrange").innerHTML= (newValue - 23) + ' Days';
  } else if (newValue == 24)  {
  	document.getElementById("daysrange").innerHTML=(newValue - 23) + ' Day';
  } else if (newValue == 1) {
    document.getElementById("daysrange").innerHTML=newValue + ' Hour';
  } else {
    document.getElementById("daysrange").innerHTML=newValue + ' Hours';
  }
}

function showViewsValue(newValue)
{
  if (newValue > 1) {
  	document.getElementById("viewsrange").innerHTML=newValue + ' Views';
  } else {
  	document.getElementById("viewsrange").innerHTML=newValue + ' View';
  }
}


msg = "Enter the Password to be Shared"
function prepareTextField(e) {
  if (e) {
    if (e.value == msg) {
      e.value = '';
    }
  }
}

function revertTextField(e) {
  if (e)
    if (e.value == '') {
      e.value = msg;
    }
}

function setCopied() {
	$('#clip_tip').text('copied!');
}

$('spoiler, .spoiler').spoilerAlert({max: 13, partial: 10})

