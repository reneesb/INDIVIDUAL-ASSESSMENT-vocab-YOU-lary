import addCardForm from '../forms/addcardform';

const navEvent = (user) => {
  document.querySelector('#create-card').addEventListener('click', () => {
    addCardForm(user);
  });
};
export default navEvent;
