const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    alert("ID do produto não informado");
    window.location.href = "/pages/product/list-product.html";
}

const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const quantidade = document.getElementById("quantidade");
const preco = document.getElementById("preco");
const btnSalvar = document.getElementById("btnSalvar");

apiFetch(`/products/id/${id}`)
    .then(response => response.json())
    .then(produto => {
        nome.value = produto.nome;
        descricao.value = produto.descricao;
        quantidade.value = produto.quantidade;
        preco.value = produto.preco;
    })
    .catch(error => {
        console.error(error);
        alert("Erro ao carregar produto");
        window.location.href = "/pages/product/list-product.html";
    });

btnSalvar.addEventListener("click", () => {
    if (!nome.value || !descricao.value || !quantidade.value || !preco.value) {
        alert("Preencha todos os campos!");
        return;
    }

    const produtoAtualizado = {
        nome: nome.value,
        descricao: descricao.value,
        quantidade: Number(quantidade.value),
        preco: Number(preco.value)
    };

    apiFetch(`/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(produtoAtualizado)
    })
    .then(() => {
        alert("Produto atualizado com sucesso!");
        window.location.href = "/pages/product/list-product.html";
    })
    .catch(error => {
        console.error(error);
        alert("Erro ao atualizar produto");
    });
});
