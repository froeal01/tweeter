$(document).ready(function() {

	console.log("document ready")
  $("#myForm").on('submit',function(event){
  	console.log("i'm here");
  		event.preventDefault();
  		console.log("hey");
  		console.log(this)
  		var url = $(this).attr("action")
  		// var tweet = $("limitedtextarea").val()};
  		var data =$(this).serialize();
  		
  	if ($("#tweet_area").val() ===  "")
  	{
  		alert("tweet field is empty");
  		return
  	}
  	else
  	{
  		$('.waiting').show();
  	}
  		console.log("so here")
  	$.post(url, tweet, function(data){
  			$('.waiting').hide();
  			$(".success").html(data + ' posted!');
  			$("#myform").unbind('click');

  	});

  });

});

