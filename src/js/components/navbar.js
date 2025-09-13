$(() => {
    $("#navbar").load("../../components/navbar/index.html", function () {
        const currentPath = window.location.pathname;

        const routeMap = {
            "/pedidos/": "navOrders",
            "/clientes/": "navCustomers",
            "/produtos/": "navProducts",
            "/pedidos/cadastrar/": "navNewOrder"
        };

        const activeId = routeMap[currentPath];
        if (activeId) {
            const link = document.getElementById(activeId);
            link.classList.add("active");
            link.style.pointerEvents = "none";
            link.setAttribute("aria-current", "page");
        }
    });
});
