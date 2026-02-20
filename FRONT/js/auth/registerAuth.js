const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const login = document.getElementById("nome").value;
  const password = document.getElementById("senha").value;

  const user = {
    login: login,
    password: password,
    role: "USER"
  };

  try {
    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "index.html";
    } else {
      alert("Usuário já existe ou erro no cadastro.");
    }
  } catch (error) {
    console.error(error);
    alert("Erro ao conectar com o servidor.");
  }
});
