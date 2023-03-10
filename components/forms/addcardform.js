import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addCardForm = () => {
  clearDom();
  const domString = `
  <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label"></label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Title">
</div>
<label for="exampleDataList" class="form-label"></label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Category">
<datalist id="datalistOptions">
<option value="HTML">
<option value="CSS">
<option value="JavaScript">
</datalist>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Enter Definition</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
<button type="button" class="btn btn-primary">Submit</button>
</div>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
