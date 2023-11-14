const refs = {
  questionList: document.querySelector('.question-list'),
  questionHiddenText: document.querySelectorAll('.question-list-answer'),
  questionIcons: document.querySelectorAll('.question-icon'),
};

refs.questionList.addEventListener('click', clickOnList);

refs.questionHiddenText.forEach(el => {
  el.classList.add('hidden');
});

function clickOnList(e) {
  if (e.target.className === 'question-list') {
    return;
  }

  if (
    refs.questionHiddenText[
      e.target.closest('li').dataset.id
    ].classList.contains('visible')
  ) {
    refs.questionHiddenText[
      e.target.closest('li').dataset.id
    ].classList.replace('visible', 'hidden');
    refs.questionIcons[e.target.closest('li').dataset.id].style.transform =
      'rotate(0)';
    return;
  }

  refs.questionHiddenText[e.target.closest('li').dataset.id].classList.replace(
    'hidden',
    'visible'
  );
  refs.questionIcons[e.target.closest('li').dataset.id].style.transform =
    'rotate(180deg)';
}
