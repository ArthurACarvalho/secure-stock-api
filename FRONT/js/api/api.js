const API_URL = "http://localhost:8080";

function getToken() {
  return localStorage.getItem("token");
}

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

function getRole() {
  const token = getToken();
  if (!token) return null;
  const payload = parseJwt(token);
  if (!payload) return null;

  if (payload.role) return payload.role;

  if (payload.roles) {
    if (Array.isArray(payload.roles)) {
      const first = payload.roles[0];
      if (!first) return null;
      if (typeof first === 'string') return first;
      if (first.authority) return first.authority.replace(/^ROLE_/, '');
      return first;
    }
    if (typeof payload.roles === 'string') return payload.roles;
  }

  if (payload.authorities && Array.isArray(payload.authorities)) {
    const first = payload.authorities[0];
    if (!first) return null;
    if (typeof first === 'string') return first;
    if (first.authority) return first.authority.replace(/^ROLE_/, '');
  }

  return null;
}

async function apiFetch(endpoint, options = {}) {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers
  });

  if (response.status === 401 || response.status === 403) {
    alert("[ERRO] Não autorizado a fazer essa ação!");
    localStorage.removeItem("token");
    window.location.href = "/pages/product/actions.html";
  }

  return response;
}