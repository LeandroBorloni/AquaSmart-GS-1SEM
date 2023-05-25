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

    if(!validar(Despesa.nome, document.querySelector("#nome")))return
    if(!validar(Despesa.consumo_atual, document.querySelector("#consumo")))return
    if(!validar(Despesa.valor_taxa, document.querySelector("#valor-taxa")))return
    if(!validar(Despesa.valor_total, document.querySelector("#valor-total")))return

    despesas.push(Despesa)

    atualizar()

    modal.hide()
}