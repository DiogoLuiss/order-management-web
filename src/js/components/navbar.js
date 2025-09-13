$(() => {
    $("#navbar").load("../../components/navbar/index.html", function () {
        const currentPath = window.location.pathname;

        const routeMap = {
            "/clientes/": "#navCustomers",
            "/produtos/": "#navProducts",
            "/pedidos/": "#navOrders",
            "/pedidos/cadastrar/": "#navNewOrder"
        };

        if (routeMap[currentPath]) {
            const $link = $(routeMap[currentPath]);
            $link.addClass("active").css("pointer-events", "none").attr("aria-current", "page");
        }

        const $brandLink = $(".navbar-brand");
        $brandLink.css("pointer-events", currentPath === "/" ? "none" : "auto")
                  .attr("aria-current", currentPath === "/" ? "page" : null);
    });
});
