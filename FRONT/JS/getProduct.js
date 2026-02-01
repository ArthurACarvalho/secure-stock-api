const tbody = document.getElementById("produtotbody");

const API_URL = "http://localhost:8080/products";

function carregarProdutos() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar produtos");
            }
            return response.json();
        })
        .then(produtos => {
            tbody.innerHTML = "";

            produtos.forEach(produto => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>${produto.id}</td>
                    <td>${produto.nome}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.quantidade}</td>
                    <td>R$ ${produto.preco.toFixed(2)}</td>
                    <td>
                        <button class="acao-btn excluir" onclick="excluirProduto(${produto.id})">
                            Excluir
                        </button>
                    </td>
                    `;

                tbody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao carregar produtos");
        });
}

function excluirProduto(id) {
    const confirmacao = confirm("Tem certeza que deseja excluir este produto?");
    if (!confirmacao) return;

    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (response.status !== 204) {
            throw new Error("Erro ao excluir produto");
        }
        carregarProdutos(); // atualiza a tabela
    })
    .catch(error => {
        console.error(error);
        alert("Erro ao excluir produto");
    });
}


document.addEventListener("DOMContentLoaded", carregarProdutos);
