//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500
function atividade02(){
    let somadora=0;
    let contadora=1;
    do{
        if(contadora % 2== 0){
            somadora += contadora;
        }
        contadora++
    }while(contadora<501);
    alert(somadora);
}