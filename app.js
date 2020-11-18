const form = document.querySelector('form');

const creditCard = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const cards = document.querySelector('#cards');
const formData = {};
for (let input of [creditCard, termsCheckbox, cards]) {
  input.addEventListener('input', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
  });
}
// form.addEventListener('submit', function (e) {
//   console.log(creditCard.value);
//   console.log(termsCheckbox.checked);
//   console.log(cards.value);
//   e.preventDefault();
// });

// creditCard.addEventListener('input', (e) => {
//   console.log('cc changed', e);
//   formData['cc'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//   console.log('checkbox changed', e);
//   formData['terms'] = e.target.checked;
// });
// cards.addEventListener('input', (e) => {
//   console.log('cards changed', e);
//   formData['cards'] = e.target.value;
// });
