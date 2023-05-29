let totalConta = 0
let totalConsumo = 0
let totalTaxa = 0
contas = JSON.parse(localStorage.getItem("ListaDeDespesas"))
table = document.querySelector("#createTable")

/* Função para adicionar linhas na tabela */
function createTable (contas) {
    return `<tr>  
        <td>${contas[i].regiao}</td>
        <td>${contas[i].consumo_atual}</td>
        <td>${contas[i].valor_taxa}</td>
        <td>${contas[i].valor_total}</td>
    </tr>` 
}

/* FOR para percorrer todos os itens do Local Storage */
for(i = 0; i < contas.length; i++) {
    table.innerHTML += createTable(contas)
}

/* FOR para realizar a soma total para cada item */
for (i = 1; i < table.rows.length; i++) {
    consumo = parseFloat(table.rows[i].cells[1].textContent)
    taxa = parseFloat(table.rows[i].cells[2].textContent)
    conta = parseFloat(table.rows[i].cells[3].textContent)

    totalConsumo += consumo
    totalTaxa += taxa
    totalConta += conta
}

/* Media dos itens */
avgConsumo = totalConsumo / (table.rows.length - 1)
avgTaxa = totalTaxa / (table.rows.length - 1)
avgConta = totalConta / (table.rows.length - 1)

/* Exibicão dos itens com a media calculada */
document.querySelector("#avgConsumo").textContent = avgConsumo.toFixed(2)
document.querySelector("#avgTaxa").textContent = avgTaxa.toFixed(2)
document.querySelector("#avgConta").textContent = avgConta.toFixed(2)