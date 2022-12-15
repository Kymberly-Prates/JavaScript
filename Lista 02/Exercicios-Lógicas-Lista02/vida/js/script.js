function calcular(){
    var anos = parseInt(document.getElementById("anos").value);
    var meses = parseInt(document.getElementById("meses").value);
    var dias = parseInt(document.getElementById("dias").value);
    calculo.value =((anos*360)+(meses*30)+dias);   
}