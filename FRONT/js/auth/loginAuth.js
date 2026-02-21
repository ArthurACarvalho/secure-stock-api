const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const login = document.getElementById("usuario").value;
  const password = document.getElementById("senha").value;

  const credentials = {
    login: login,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      alert("Usuário ou senha inválidos.");
      return;
    }

    const data = await response.json();

    localStorage.setItem("token", data.token);

    // sincroniza a role no localStorage a partir do payload do token (se existir)
    try {
      const t = data.token;
      const base64Url = t.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(""),
      );
      const payload = JSON.parse(jsonPayload);

      let roleValue = null;
      if (payload.role) roleValue = payload.role;
      else if (payload.roles) {
        if (Array.isArray(payload.roles)) {
          const first = payload.roles[0];
          if (typeof first === "string") roleValue = first;
          else if (first && first.authority)
            roleValue = first.authority.replace(/^ROLE_/, "");
        } else if (typeof payload.roles === "string") roleValue = payload.roles;
      } else if (payload.authorities && Array.isArray(payload.authorities)) {
        const first = payload.authorities[0];
        if (typeof first === "string") roleValue = first;
        else if (first && first.authority)
          roleValue = first.authority.replace(/^ROLE_/, "");
      }

      if (roleValue) localStorage.setItem("role", roleValue);
      else localStorage.removeItem("role");
    } catch (err) {
      localStorage.removeItem("role");
    }

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
