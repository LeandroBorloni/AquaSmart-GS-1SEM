document.querySelector("#save").addEventListener("click", cadastrarDespesa)

let despesas = []

/* -------> Local Storage <--------*/
/* Para carregar os pedidos do Local Storage */
window.addEventListener("load", () => {
    despesas = JSON.parse(localStorage.getItem("ListaDeDespesas")) || []
    atualizar()
})

/* Função para atualizar as despesas */
function atualizar () {
    document.querySelector("#despesas").innerHTML = ""
    localStorage.setItem("ListaDeDespesas", JSON.stringify(despesas))
    despesas.forEach((Despesa) => {
        document.querySelector("#despesas").innerHTML += createCard(Despesa)
    })
}
/* -------><-------- -------><-------- */

/* Função de validação */
function validar(valor, campo) {
    if(valor == "") {
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }

    campo.classList.remove("is-invalid")
    campo.classList.add("is-valid")
    return true
}

/* Função para utilizar como filtro */
function filtrar (despesas) {
    document.querySelector("#despesas").innerHTML = ""
    despesas.forEach((Despesa) => {
        document.querySelector("#despesas").innerHTML += createCard(Despesa)
    })
}

/* Função de buscar na barra de pesquisa */
document.querySelector("#busca").addEventListener("keyup", () => {
    let busca = document.querySelector("#busca").value
    let despesasFiltradas = despesas.filter((Despesa) => {
        return Despesa.nome.includes(busca) || Despesa.regiao.includes(busca)
    })
    filtrar(despesasFiltradas)
})

/* Filtar por Zona Sul */
document.querySelector("#zona-sul").addEventListener("click", () => {
    let despesasZonaSul = despesas.filter((Despesa) => {
        return Despesa.regiao == 'Zona Sul'
    })
    filtrar(despesasZonaSul)
})

/* Filtar por Zona Norte */
document.querySelector("#zona-norte").addEventListener("click", () => {
    let despesasZonaNorte = despesas.filter((Despesa) => {
        return Despesa.regiao == 'Zona Norte'
    })
    filtrar(despesasZonaNorte)
})

/* Filtar por Zona Leste */
document.querySelector("#zona-leste").addEventListener("click", () => {
    let despesasZonaLeste = despesas.filter((Despesa) => {
        return Despesa.regiao == 'Zona Leste'
    })
    filtrar(despesasZonaLeste)
})

/* Filtar por Zona Oeste */
document.querySelector("#zona-oeste").addEventListener("click", () => {
    let despesasZonaOeste = despesas.filter((Despesa) => {
        return Despesa.regiao == 'Zona Oeste'
    })
    filtrar(despesasZonaOeste)
})

/* Função para cadastrar uma Despesa */
function cadastrarDespesa() {
    const nome = document.querySelector("#nome").value
    const regiao = document.querySelector("#regiao").value
    const consumo_atual = document.querySelector("#consumo").value
    const valor_taxa = document.querySelector("#valor-taxa").value
    const valor_total = document.querySelector("#valor-total").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const Despesa = {
        id: Date.now(),
        nome: nome,
        regiao: regiao,
        consumo_atual: consumo_atual,
        valor_taxa: valor_taxa,
        valor_total: valor_total

    }

    if(!validar(Despesa.nome, document.querySelector("#nome")))return
    if(!validar(Despesa.consumo_atual, document.querySelector("#consumo")))return
    if(!validar(Despesa.valor_taxa, document.querySelector("#valor-taxa")))return
    if(!validar(Despesa.valor_total, document.querySelector("#valor-total")))return

    despesas.push(Despesa)

    atualizar()

    modal.hide()
}

/* Função para criar um Card na tela */
function createCard(Despesa) {
    return `
        <div class="col-lg-3 col-md-6 col-12">
            <div class="card text-bg-secondary mt-3">
                <div class="card-body">
                    <h5 class="card-title text-center">${Despesa.regiao}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary text-center">${Despesa.nome}</h6>
                    <p class="card-text">- Consumo atual: ${Despesa.consumo_atual} m3</p>
                    <p class="card-text">- Valor da taxa: R$ ${Despesa.valor_taxa}</p>
                    <p class="card-text">- Valor total da conta: R$ ${Despesa.valor_total}</p>
                </div>
                <div class="card-footer text-body-secondary text-center">
                    <a onClick="apagar(${Despesa.id})" href="#" class="btn btn-danger fs-3" title="Excluir despesa">
                        <i class="bi bi-trash"></i>
                    </a>
                </div>
            </div> <!-- Card -->
        </div> <!-- Coluna -->`
}

/* Função para apagar despesa */
function apagar(id) {
    despesas = despesas.filter((Despesa) => {
        return Despesa.id != id
    })

    atualizar()
}