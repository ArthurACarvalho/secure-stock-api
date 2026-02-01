const API_URL = "http://localhost:8080/products";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    alert("ID do produto não informado");
    window.location.href = "get.html";
}

const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const quantidade = document.getElementById("quantidade");
const preco = document.getElementById("preco");
const btnSalvar = document.getElementById("btnSalvar");

fetch(`${API_URL}/id/${id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Produto não encontrado");
        }
        return response.json();
    })
    .then(produto => {
        nome.value = produto.nome;
        descricao.value = produto.descricao;
        quantidade.value = produto.quantidade;
        preco.value = produto.preco;
    })
    .catch(() => {
        alert("Erro ao carregar produto");
        window.location.href = "get.html";
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

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produtoAtualizado)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error();
        }
        alert("Produto atualizado com sucesso!");
        window.location.href = "get.html";
    })
    .catch(() => {
        alert("Erro ao atualizar produto");
    });
});
