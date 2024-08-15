const smallCups = document.querySelectorAll('.cup-small');

const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    (idx === smallCups.length - 1 &&
      smallCups[idx].classList.contains('full')) ||
    (smallCups[idx].classList.contains('full') &&
      !smallCups[idx].nextElementSibling.classList.contains('full'))
  ) {
    idx--;
  }
  smallCups.forEach((cup, idxItem) => {
    if (idxItem <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 130}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  listers.innerText = `${2 - (250 * fullCups) / 1000}L`;
}
