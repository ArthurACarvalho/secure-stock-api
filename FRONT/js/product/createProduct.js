const btnCadastrar = document.querySelector('input[value="Cadastrar"]');

btnCadastrar.addEventListener('click', async () => {
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

    try {
        const response = await apiFetch("/products", {
            method: "POST",
            body: JSON.stringify(produto)
        });

        const data = await response.json();

        alert("Produto cadastrado com sucesso!");
        console.log("Produto salvo:", data);

        document.getElementById('nome').value = "";
        document.getElementById('descricao').value = "";
        document.getElementById('quantidade').value = "";
        document.getElementById('preco').value = "";

    } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar produto");
    }
});
