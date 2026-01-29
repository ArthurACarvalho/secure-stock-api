const btnCadastrar = document.querySelector('input[value="Cadastrar"]');

btnCadastrar.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;

    if (!nome || !descricao || !quantidade || !preco) {
        alert("Preencha todos os campos!");
        return;
    }

    const produto = {
        nome: nome,
        descricao: descricao,
        quantidade: Number(quantidade),
        preco: Number(preco)
    };

    fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao cadastrar produto");
        }
        return response.json();
    })
    .then(data => {
        alert("Produto cadastrado com sucesso!");
        console.log("Produto salvo:", data);

        // limpa o formulário
        document.getElementById('nome').value = "";
        document.getElementById('descricao').value = "";
        document.getElementById('quantidade').value = "";
        document.getElementById('preco').value = "";
    })
    .catch(error => {
        console.error(error);
        alert("Erro ao cadastrar produto");
    });
});
