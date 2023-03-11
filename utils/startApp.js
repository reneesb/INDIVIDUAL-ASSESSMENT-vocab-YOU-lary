import { getCards } from '../api/cardsData';
import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import navEvent from '../components/events/navEvents';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
import { showCards } from '../pages/cards';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  navEvent(user);
  logoutButton();
  formEvents(user);
  domEvents(user);
  getCards(user.uid).then((vocabulary) => showCards(vocabulary));
};

export default startApp;
