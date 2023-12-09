const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Seleccionar la respuesta correspondiente
    const answer = document.querySelector(question.dataset.target);
    // Cambiar la altura de la respuesta
    if (answer.style.height) {
      answer.style.height = null;
    } else {
      answer.style.height = answer.scrollHeight + 'px';
      answer.style.marginTop = '24px '
    }
    // Cambiar el estilo de fondo del icono
    const icon = question.querySelector('.slice-icon');
    if (answer.style.height) {
      icon.style.backgroundImage = 'url(/FAQ-accordion/assets/images/icon-minus.svg)';
    } else {
      icon.style.backgroundImage = 'url(../assets/images/icon-plus.svg)';
    }
  });
});

