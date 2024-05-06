  function initMap() {
    var ubicacion = {lat: -33.04122688, lng: -71.50145};
  
    var opcionesMapa = {
      center: ubicacion,
      zoom: 17 
    };
  
    // Crear un nuevo mapa en el elemento con id 'map'
    var mapa = new google.maps.Map(document.getElementById('map'), opcionesMapa);
  
    // Crear un marcador en la ubicación especificada
    var marcador = new google.maps.Marker({
      position: ubicacion,
      map: mapa,
      title: '' 
    });
  }
  
