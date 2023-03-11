import { deleteCard, getCards, getSingleCard } from '../../api/cardsData';
import { showCards } from '../../pages/cards';
import addCardForm from '../forms/addcardform';

const domEvents = (user) => {
  document.querySelector('#store').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }

    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then(() => addCardForm(user));
    }
  });
};

export default domEvents;
