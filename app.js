$.getJSON("http://ip-api.com/json/?callback=?", function(data) {

	//console.log(data);
  	$.getJSON("api.openweathermap.org/data/2.5/weather?lat={"+data.lat+"}&lon={"+data.lon+"}", function(weather){

    	//console.log(weather);
    	$("#demo").html(weather);
    
  	});

});


