// ModalService.js - Módulo reutilizable
const ModalService = (function() {
  // Elementos del DOM
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const modalConfirmBtn = document.getElementById('modal-confirm-btn');
  
  // Configuración por defecto
  const defaultConfig = {
    title: 'Título del Modal',
    content: '<p>Contenido del modal</p>',
    showCancel: true,
    cancelText: 'Cancelar',
    confirmText: 'Confirmar',
    onConfirm: () => closeModal(),
    onCancel: () => closeModal(),
    onClose: () => closeModal()
  };
  
  // Abrir modal
  function openModal(config = {}) {
    // Combinar configuración con valores por defecto
    const mergedConfig = { ...defaultConfig, ...config };
    
    // Actualizar elementos del modal
    modalTitle.textContent = mergedConfig.title;
    modalContent.innerHTML = mergedConfig.content;
    
    // Configurar botones
    modalCancelBtn.textContent = mergedConfig.cancelText;
    modalConfirmBtn.textContent = mergedConfig.confirmText;
    
    if (!mergedConfig.showCancel) {
      modalCancelBtn.style.display = 'none';
    } else {
      modalCancelBtn.style.display = 'block';
    }
    
    // Asignar eventos
    modalConfirmBtn.onclick = mergedConfig.onConfirm;
    modalCancelBtn.onclick = mergedConfig.onCancel;
    modalCloseBtn.onclick = mergedConfig.onClose;
    
    // Mostrar modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // Cerrar modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  
  // Cerrar al hacer clic fuera del contenido
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  // Exponer métodos públicos
  return {
    open: openModal,
    close: closeModal
  };
})();