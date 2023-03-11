import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
      <p class="card-text">${item.definition}</p>
      <button type="button" class="btn btn-primary" id="edit-btn">Edit</button>
      <button type="button" class="btn btn-danger" id="delete-btn">Delete</button>
    </div>
  </div>`;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
