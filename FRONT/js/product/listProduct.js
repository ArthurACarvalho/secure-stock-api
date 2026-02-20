const tbody = document.getElementById("produtotbody");

function carregarProdutos() {
    apiFetch("/products")
        .then(response => response.json())
        .then(produtos => {
            tbody.innerHTML = "";

            const role = typeof getRole === 'function' ? getRole() : null;

            produtos.forEach(produto => {
                const tr = document.createElement("tr");

                const total = produto.preco * produto.quantidade;

                let actionButtons = '';
                if (role === 'ADMIN' || role === 'ROLE_ADMIN') {
                    actionButtons = `
                        <button class="acao-btn editar" onclick="irParaEdicao(${produto.id})">
                            Editar
                        </button>
                        <button class="acao-btn excluir" onclick="excluirProduto(${produto.id})">
                            Excluir
                        </button>
                    `;
                } else {
                    actionButtons = '<span class="no-actions">Sem ações</span>';
                }

                tr.innerHTML = `
                    <td>${produto.id}</td>
                    <td>${produto.nome}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.quantidade}</td>
                    <td>R$ ${produto.preco.toFixed(2)}</td>
                    <td><strong>R$ ${total.toFixed(2)}</strong></td>
                    <td>${actionButtons}</td>
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

    apiFetch(`/products/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        carregarProdutos();
    })
    .catch(error => {
        console.error(error);
        alert("Erro ao excluir produto");
    });
}

function irParaEdicao(id) {
    window.location.href = `/pages/product/update-product.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", carregarProdutos);
