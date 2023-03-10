import { getCards } from '../api/cardsData';
import logoutButton from '../components/buttons/logoutButton';
import navEvent from '../components/events/navEvents';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
import { showCards } from '../pages/cards';

const startApp = (user) => {
  domBuilder();
  navBar();
  navEvent(user.id);
  logoutButton();
  getCards(user.uid).then((vocabulary) => showCards(vocabulary));
};

export default startApp;
