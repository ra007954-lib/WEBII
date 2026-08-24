const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e)=>{
    const produto = (frm.inProduto.value)
    const preco = Number(frm.inPreco.value)
    const desconto = preco / 2
    const promocao = (preco * 2) + desconto
    resp.innerText = `${produto} Promoção: Leve 3 por R$ ${promocao.toFixed(2)}
    O 3° produto custa apenas R$ ${desconto.toFixed(2)}`
      e.preventDefault()
    })