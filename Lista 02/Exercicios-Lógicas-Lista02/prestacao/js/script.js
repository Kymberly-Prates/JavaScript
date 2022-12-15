

function calcularprestacao(){
    var valor = parseInt(document.getElementById("valor").value);
    var taxa = parseInt(document.getElementById("taxa").value);
    var tempo = parseInt(document.getElementById("taxa").value);
    calculo.value =(valor+(valor*taxa/100)*tempo)
}

