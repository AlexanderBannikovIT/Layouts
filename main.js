const modals = document.querySelectorAll('dialog')

modals.forEach(modal => {
  const modalBox = modal.querySelector('#modal-box')
  const showModalBtn = modal.nextElementSibling // Кнопка открывающая модальное окно следующий элемент после модального окна
  const closeModalBtn = modal.querySelector('#close-modal-btn')
  let isModalOpen = false

  showModalBtn.addEventListener('click', (e) => {
    modal.showModal()
    isModalOpen = true
    e.stopPropagation()
  })

  closeModalBtn.addEventListener('click', () => {
    modal.close()
    isModalOpen = false
  })

  document.addEventListener('click', (e) => {
    if (isModalOpen && !modalBox.contains(e.target) && e.target !== showModalBtn) {
      modal.close()
    }
  })
})

const MySlider = new Splide('#mySlider',{
  perPage:3,
  gap: '25px',
})
MySlider.mount()


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
