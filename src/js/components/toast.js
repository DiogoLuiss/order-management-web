function showToast(message, type = 'info', duration = 3000) {
    const toastId = `toast-${Date.now()}`;
    const zIndex = 'z-index: 9999;';

    const toast = $(`
        <div id="${toastId}" 
             class="toast align-items-center text-bg-${type} border-0 position-fixed top-0 end-0 mt-5 me-3" 
             role="alert" aria-live="assertive" aria-atomic="true"
             style="${zIndex}">
            <div class="d-flex">
                <div class="toast-body">${message}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" 
                        data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `);

    $('body').append(toast);

    const bsToast = new bootstrap.Toast(toast[0], { delay: duration });
    bsToast.show();

    toast.on('hidden.bs.toast', function () {
        $(this).remove();
    });
}
