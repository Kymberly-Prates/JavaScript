function salario(){
    var mensal = parseInt(document.getElementById("mensal").value);
    var reajuste = parseInt(document.getElementById("reajuste").value);
    calculoreajuste.value=((reajuste*10)+mensal);
}
