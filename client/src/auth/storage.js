export const saveAuth = (data) => {
  localStorage.setItem("auth", JSON.stringify(data));
};

export const getAuth = () => {
  const raw = localStorage.getItem("auth");
  return raw ? JSON.parse(raw) : null;
};

// ✅ Add this
export const getToken = () => {
  const auth = getAuth();
  return auth?.token || null;
};

export const clearAuth = () => {
  localStorage.removeItem("auth");
};
