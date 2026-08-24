const frm = document.querySelector("form")
const resp = document.querySelector("h3")



frm.addEventListener("submit", (e)=>{
    const Remedios = frm.inRemedios.value
    const Preco= Number(frm.inPreco.value)
    const desconto = Preco * 0.20
    resp.innerText = `Promoçao ${Remedios}
    Leve 2 por apenas: R$: ${desconto.toFixed(2)}`
      e.preventDefault()
    })