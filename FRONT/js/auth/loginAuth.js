const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const login = document.getElementById("usuario").value;
  const password = document.getElementById("senha").value;

  const credentials = {
    login: login,
    password: password
  };

  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      alert("Usuário ou senha inválidos.");
      return;
    }

    const data = await response.json();

    localStorage.setItem("token", data.token);

    if (localStorage.getItem("token")) {
      alert("Login realizado com sucesso!");
      window.location.href = "/pages/product/actions.html";
    } else {
      alert("Erro ao salvar token.");
    }

  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao conectar com o servidor.");
  }
});