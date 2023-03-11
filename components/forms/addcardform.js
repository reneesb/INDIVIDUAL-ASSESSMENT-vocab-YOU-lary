import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `edit-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="term">Tek Term</label>
        <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter Term" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="define">Define</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" placeholder="Enter Category" value="${obj.category || ''}" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="fu" ${obj.fu ? 'checked' : ''}>
        <label class="form-check-label" for="sale">Follow Up?</label>
      </div>
      <button type="submit" class="btn btn-primary" id="submit-card">Submit Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
