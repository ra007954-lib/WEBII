const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const valor = Number(frm.inValor.value)
    const Tempo= Number(frm.inTempo.value)
    const Pagamento = (valor * Tempo) / 15
    resp.innerText = `Valor a pagar R$: ${Pagamento.toFixed(2)}`
    e.preventDefault()
    })