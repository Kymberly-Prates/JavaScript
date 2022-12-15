function areaTrapezio(){

    var baseMaior = parseFloat(document.getElementById("bmaior").value);
    var baseMenor = parseFloat(document.getElementById("bmenor").value);
    var altura = parseFloat(document.getElementById("altura").value);

    area.value = (baseMaior+baseMenor)*altura/2
}