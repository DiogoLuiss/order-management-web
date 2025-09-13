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
            alert(data.message.join("\n"));
        }
        else if (typeof data.message === "string") {
            alert(data.message);
        }
        else {
            alert("Ocorreu um erro inesperado ao processar a requisição.");
        }

    } else {
        alert("Erro de conexão com o servidor.");
    }

    console.error("Erro detalhado:", error);
}