arrayNome = [];
function enviar(){
var nome_1=document.getElementById("n1").value;

var nome_2=document.getElementById("n2").value;

var nome_3=document.getElementById("n3").value;

var nome_4=document.getElementById("n4").value;

arrayNome.push(nome_1);
arrayNome.push(nome_2);
arrayNome.push(nome_3);
arrayNome.push(nome_4);

console.log(arrayNome)

document.getElementById("nome").innerHTML = arrayNome;
document.getElementById("btnEnviar").style.display = "none";
document.getElementById("btnOrganizar").style.display = "inline-block"
}

function Organizar(){
arrayNome.sort();
console.log(arrayNome);
document.getElementById("nome").innerHTML = arrayNome


}
