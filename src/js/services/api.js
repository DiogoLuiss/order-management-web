const api = axios.create({
  baseURL: "http://localhost:5168",
  headers: {
    "Content-Type": "application/json"
 }
});

function handleApiError(error) {
    if (error.response && error.response.data) {
        let data = error.response.data;

        if (Array.isArray(data.message)) {
            showToast(data.message.join("\n"), 'danger', 5000);
        }
        else if (typeof data.message === "string") {
            showToast(data.message, 'danger', 5000);
        }
        else {
            showToast("Ocorreu um erro inesperado ao processar a requisição.", 'danger', 5000);
        }

    } else {
        showToast("Erro de conexão com o servidor.", 'danger', 5000);
    }

    console.error("Erro detalhado:", error);
}
