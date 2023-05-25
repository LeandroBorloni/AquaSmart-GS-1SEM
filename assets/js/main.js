document.querySelector("#save").addEventListener("click", cadastrarDespesa)

let despesas = []

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
        valor_total: valor_total,

    }

    /*if(!validar(Despesa.nome, document.querySelector("#nome")))return
    if(!validar(Despesa.consumo_atual, document.querySelector("#consumo")))return
    if(!validar(Despesa.valor_taxa, document.querySelector("#valor-taxa")))return
    if(!validar(Despesa.valor_total, document.querySelector("#valor-total")))return*/

    despesas.push(Despesa)

    /*atualizar()*/

    modal.hide()
}

function createCard(Despesa) {
    let disable = Despesa.concluida ? "disabled" : ""
    return `
        <div class="col-lg-3 col-md-6 col-12">
            <div class="card text-center bg-gradient text-light" data-bs-theme="dark">
                <div class="card-header">
                    Pedido ${Despesa.nome}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${Despesa.regiao}</h5>
                    <p class="card-text">Pagamento em ${Despesa.consumo_atual}</p>
                    <a href="#" class="btn btn-primary">Estoque</a>
                    <a href="#" class="btn btn-primary">Informações</a>
                </div>
                <div class="card-footer text-body-secondary">
                    <a onClick="concluir(${Pedido.id})" href="#" class="btn btn-success ${disable}" title="Pedido Concluido">
                        <i class="bi bi-check-lg"></i>
                    </a>
                    <a onClick="apagar(${Pedido.id})" href="#" class="btn btn-danger" title="Excluir pedido">
                        <i class="bi bi-trash"></i>
                    </a>
                </div>
            </div> <!-- Card -->
        </div> <!-- Coluna -->`
}