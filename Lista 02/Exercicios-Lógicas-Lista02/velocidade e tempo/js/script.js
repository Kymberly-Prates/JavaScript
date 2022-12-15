function distancia(){
    var tempog = parseInt(document.getElementById("tempog").value);
    var velocidade = parseInt(document.getElementById("velocidade").value);
    calculodistancia.value =(tempog*velocidade);   
}

function litros(){
    var tempog = parseInt(document.getElementById("tempog").value);
    var velocidade = parseInt(document.getElementById("velocidade").value);
    calculodistancia.value =(tempog*velocidade); 
    calculolitros.value =(calculodistancia/12);   
}



