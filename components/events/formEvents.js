import { createCard, getCards, updateCard } from '../../api/cardsData';
import { showCards } from '../../pages/cards';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      console.warn(e);
      const payLoad = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        define: document.querySelector('#definition').value,
        uid: user.uid,
        timeStamp: new Date().toLocaleString(),
      };
      createCard(payLoad).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }
  });
};

export default formEvents;
