function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function criaLinha(cliente){
    linha = document.createElement("tr");

    tdIdCliente = document.createElement("td");
    tdNome = document.createElement("td");
    tdCpfOuCnpj = document.createElement("td");
    tdTipo = document.createElement("td");
    tdEmail = document.createElement("td");

    tdIdCliente.innerHTML = cliente.tdIdCliente
    tdNome.innerHTML = cliente.nome
    tdCpfOuCnpj.innerHTML = cliente.cpfOuCnpj
    td.Tipo.innerHTML = cliente.tipo
    tdEmail.innerHTML = cliente.email

    linha.appendChild(tdIdCliente);
    linha.appendChild(tdNome);
    linha.appendChild(tdCpfOuCnpj);
    linha.appendChild(td.Tipo);
    linha.appendChild(tdIdCliente);
    linha.appendChild(tdEmail);

    return linha;
}






    function main(){
        data = fazGet("http://localhost:8080/clientes/")
        clientes = JSON.parse(data); 
        console.log(clientes);
        let tabela = document.getElementById("tabela")
        clientes.forEach(element =>{
        let linha = criaLinha(element);
        tabela.appendChild(linha);
        })
    }
    main()
