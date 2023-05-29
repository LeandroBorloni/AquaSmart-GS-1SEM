var valor_total_mensal = cadastrarDespesa.valor_total
var media_total = document.querySelector("#media")

function media (valor_total_mensal, media) {
    if ((valor_total) && (media)) {
        let soma = 0
        let valores_totais = [valor_total]

        for (var i in valores_totais) {
            soma += valores_totais[i]
        }

        var media = soma / valores_totais.length

        media_total.innerHTML = media
        console.log(media_total)
    }
    
}