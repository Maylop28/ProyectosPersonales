
function cotizacionDolar() {

$.ajax({
    url: 'https://api.bluelytics.com.ar/v2/latest',
    type: 'GET',
    dataType: 'json',
    success: function(data){
    console.log(data);
    var blue = data.blue.value_avg;
    var precio = blue * 50;
    $('#pesos').html(precio);
    $('#blue').html(blue);
  
    }
});

}