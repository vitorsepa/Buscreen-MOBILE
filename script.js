
function iniciarMapa() {
    var coordenadas = { lat: -23.550520, lng: -46.633308 }; // Exemplo: São Paulo, Brasil
    var mapa = new google.maps.Map(document.getElementById("mapa"), {
      center: coordenadas,
      zoom: 12
    });

    var marcador = new google.maps.Marker({
      position: coordenadas,
      map: mapa,
      title: "Minha localização"
    });
  }


function obterLocalizacao() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(posicao) {
        var coordenadasUsuario = {
          lat: posicao.coords.latitude,
          lng: posicao.coords.longitude
        };

        var mapa = new google.maps.Map(document.getElementById("mapa"), {
          center: coordenadasUsuario,
          zoom: 15
        });

        var marcador = new google.maps.Marker({
          position: coordenadasUsuario,
          map: mapa,
          title: "Você está aqui"
        });
      });
    } else {
      alert("Geolocalização não suportada pelo seu navegador.");
    }
  }

obterLocalizacao();
