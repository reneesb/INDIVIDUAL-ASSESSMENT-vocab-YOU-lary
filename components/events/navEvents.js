import { getCards } from '../../api/cardsData';
import { showCards } from '../../pages/cards';
import addCardForm from '../forms/addcardform';

const navEvent = (user) => {
  document.querySelector('#create-card').addEventListener('click', () => {
    addCardForm(user);
  });

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards().then(showCards);
  });
};
export default navEvent;
