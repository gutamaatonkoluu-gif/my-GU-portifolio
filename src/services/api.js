const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export async function submitContactForm(data) {
  const response = await fetch(`${API_BASE}/api/contact/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
