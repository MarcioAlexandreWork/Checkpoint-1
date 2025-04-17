






/*Lógica da página*/

var user = prompt('Informe o nome do usuário ')



if (!user == " "){
    var senha = prompt('Agora informe a senha do usuário.')   

}

else {
    alert('Usuário não informado, por favor, tente novamente. (Reinicie a página)') 
    
}


if (!senha == " ") {
 alert("Cadastro realizado! Iremos prosseguir com o cadastro da informação do vinho!")

}
else {
    alert('Senha não informada, por favor, tente novamente. (Reinicie a página)')
}

if ((!user==" ") && (!senha==" ")){
    alert('Informe as informações do estoque a ser adicionado no sistema.')
    var nome = prompt('Insira no nome do vinho.')


    alert('Nome do vinho: '+ nome)


    var tipo = prompt('Insira o tipo do vinho (Tinto, Branco e Rosé).')
    alert('Tipo do vinho: '+ tipo)


    var safra = (prompt('Insira a safra do vinho em número (Caso não insira um número, será considerado antigo.)'))
    if (safra == " "){
        safra=safra + 2025
    }
    alert("Safra do vinho: "+ safra)



    var est = (prompt('Insira a quantidade em estoque do vinho (Caso não colocado nada, será considerado nulo e com estoque baixo)'))


    alert('Quantidade em estoque: '+ est)

}


if ((!user==" ") || (!senha==" ")){

    alert("Ok, tudo pronto, para ver as informações listadas, use Ctrl+Shift+C ou clique com botão direito na página, clique em inspecionar e vá em console.")
}




/*criação de variaáveis em certas ocasiôes*/
    if (safra == " "){
        var safra1 = " Indefinida"
}
    else if (safra>=2015){
        var safra1 = "  -  Amadurecido"
}
     else if (safra<=2015){
        var safra1 = "  -  Antigo"
}

    else if(safra>=2020){
        var safra1 = "  -  Jovem"
}


     if (est >5){
        var est1 = " "
}
    else if (est <=5) {
        var est1 = " (ESTOQUE BAIXO)"
}


/*Não consegui fazer com que quando fique nulo ou algo assim fique como indefinino, diferente disso, no programa fica "undefied", então dei uma mexida*/











/*Replicação no console (Ficar longe)*/

if ((!user==" ") || (!senha==" ")){

    console.log("Vinho: "+nome)
    console.log("Tipo: "+tipo)
    console.log("Safra: "+safra+safra1)
    console.log("Estoque: "+est + est1)


}
else{
    console.log("Cadastro não realizado, sem informações.")
}







/*       
    var senha = prompt('Agora informe a senha do usuário')
    alert('Usuário não informado, por favor, tente novamente')   

*/