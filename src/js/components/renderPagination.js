function renderPagination({ containerId, currentPage, totalPages, onPageChange }) {
    $(`#${containerId} .pagination-container`).remove();

    if (totalPages <= 1) return;

    const $pagination = $('<div class="d-flex justify-content-center my-3 pagination-container"></div>');

    const $prev = $('<button class="btn btn-primary me-2">Anterior</button>');
    if (currentPage === 1) $prev.prop('disabled', true);
    $prev.on('click', () => onPageChange(null, currentPage - 1));

    const $next = $('<button class="btn btn-primary ms-2">Próximo</button>');
    if (currentPage === totalPages) $next.prop('disabled', true);
    $next.on('click', () => onPageChange(null, currentPage + 1));

    const $text = $(`<span class="align-self-center mx-2">Página ${currentPage} de ${totalPages}</span>`);

    $pagination.append($prev).append($text).append($next);

    $(`#${containerId}`).append($pagination);
}
