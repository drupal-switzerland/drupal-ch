import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

const defaultFormStyles = () => `
  <div class="two-columns wysiwyg forms">
    <div class="two-columns__column story-wrapper">
      <h2><u>Standard form elements</u></h2>
      <h3>Buttons</h3>
      <p>
        <button type="button">Standard button</button>
      </p>
      <p>
        <button type="submit">Submit button</button>
      </p>
      <p>
        <button type="reset">Reset button</button>
      </p>
      <p>
        <input type="button" value="Input button">
      </p>
      <p>
        <input type="submit" value="Input submit button">
      </p>
      <p>
        <input type="reset" value="Input reset button">
      </p>
    </div>
    <div class="two-columns__column story-wrapper">
      <h2><u>Disabled form elements</u></h2>
      <h3>Buttons</h3>
      <p>
        <button type="button" disabled>Disabled button</button>
      </p>
      <p>
        <button type="submit" disabled>Disabled submit button</button>
      </p>
      <p>
        <button type="reset" disabled>Disabled reset button</button>
      </p>
      <p>
        <input type="button" value="Disabled input button" disabled>
      </p>
      <p>
        <input type="submit" value="Disabled input submit button" disabled>
      </p>
      <p>
        <input type="reset" value="Disabled input reset button" disabled>
      </p>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Inputs</h3>
      <p>
        <label for="inputText">Text</label>
        <input type="text" id="inputText" placeholder="Enter some text">
      </p>
      <p>
        <label for="inputSearch">Search</label>
        <input type="search" id="inputSearch" placeholder="Search">
      </p>
      <p>
        <label for="inputTel">Telephone</label>
        <input type="text" id="inputTel" placeholder="Enter some text">
      </p>
      <p>
        <label for="inputURL">URL</label>
        <input type="url" id="inputURL" placeholder="Enter a URL">
      </p>
      <p>
        <label for="inputEmail">Email address</label>
        <input type="email" id="inputEmail" placeholder="Enter email">
      </p>
      <p>
        <label for="inputPassword">Password</label>
        <input type="password" id="inputPassword" placeholder="Password">
      </p>
      <p>
        <label for="inputDate">Date</label>
        <input type="date" id="inputDate" placeholder="Enter a date">
      </p>
      <p>
        <label for="inputTime">Time</label>
        <input type="time" id="inputTime" placeholder="Enter a time">
      </p>
      <p>
        <label for="inputNumber">Number</label>
        <input type="number" id="inputNumber" placeholder="Enter a number">
      </p>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Inputs</h3>
      <p>
        <label for="inputText2">Disabled text</label>
        <input type="text" disabled id="inputText2" placeholder="Disabled text">
      </p>
      <p>
        <label for="inputSearch2">Disabled search</label>
        <input type="search" disabled id="inputSearch2" placeholder="Disabled search">
      </p>
      <p>
        <label for="inputTel2">Disabled telephone</label>
        <input type="text" disabled id="inputTel2" placeholder="Disabled telephone">
      </p>
      <p>
        <label for="inputURL2">Disabled URL</label>
        <input type="url" disabled id="inputURL2" placeholder="Disabled URL">
      </p>
      <p>
        <label for="inputEmail2">Disabled email address</label>
        <input type="email" disabled id="inputEmail2" placeholder="Disabled email">
      </p>
      <p>
        <label for="inputPassword2">Disabled password</label>
        <input type="password" disabled id="inputPassword2" placeholder="Disabled password">
      </p>
      <p>
        <label for="inputDate2">Disabled date</label>
        <input type="date" disabled id="inputDate2" placeholder="Disabled date">
      </p>
      <p>
        <label for="inputTime2">Disabled time</label>
        <input type="time" disabled id="inputTime2" placeholder="Disabled time">
      </p>
      <p>
        <label for="inputNumber2">Disabled number</label>
        <input type="number" disabled id="inputNumber2" placeholder="Disabled number">
      </p>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Checkboxes and Radios</h3>
      <fieldset>
        <legend>Checkboxes</legend>
        <p>
          <input type="checkbox" name="inputCheckbox" id="inputCheckbox1">
          <label for="inputCheckbox1">I am not checked</label>
        </p>
        <p>
          <input type="checkbox" name="inputCheckbox" id="inputCheckbox2" checked>
          <label for="inputCheckbox2">I am checked</label>
        </p>
        <p>
          <input type="checkbox" name="inputCheckbox" id="inputCheckbox3">
          <label for="inputCheckbox3">I am not checked and I have a very long label that will go over two or more lines depending on the size of the screen</label>
        </p>
      </fieldset>
      <fieldset id="example-radio">
        <legend>Radio buttons</legend>
        <p>
          <input type="radio" value="option1" name="example-radio" id="inputRadio1">
          <label for="inputRadio1">Option one</label>
        </p>
        <p>
          <input type="radio" value="option2" name="example-radio" id="inputRadio2" checked>
          <label for="inputRadio2">Option two</label>
        </label>
        <p>
          <input type="radio" value="option3" name="example-radio" id="inputRadio3">
          <label for="inputRadio3">Option three and I have a very long label that will go over two or more lines depending on the size of the screen</label>
        </p>
      </fieldset>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Checkboxes and Radios</h3>
      <fieldset>
        <legend>Checkboxes</legend>
        <p>
          <input type="checkbox" name="inputCheckbox2" id="inputCheckbox21" disabled>
          <label for="inputCheckbox21">I am not checked and disabled</label>
        </p>
        <p>
          <input type="checkbox" name="inputCheckbox2" id="inputCheckbox22" checked disabled>
          <label for="inputCheckbox22">I am checked and disabled</label>
        </p>
        <p>
          <input type="checkbox" name="inputCheckbox2" id="inputCheckbox23" disabled>
          <label for="inputCheckbox23">I am not checked and I have a very long label that will go over two or more lines depending on the size of the screen</label>
        </p>
      </fieldset>
      <fieldset id="example-radio1a">
        <legend>Radio buttons</legend>
        <p>
          <input type="radio" value="option1" name="example-radio1" id="inputRadio21" disabled>
          <label for="inputRadio21">Option one is disabled</label>
        </p>
        <p>
          <input type="radio" value="option2" name="example-radio1" id="inputRadio22" checked disabled>
          <label for="inputRadio22">Option two is disabled</label>
        </p>
        <p>
          <input type="radio" value="option3" name="example-radio1" id="inputRadio23" disabled>
          <label for="inputRadio23">Option three and I have a very long label that will go over two or more lines depending on the size of the screen</label>
        </p>
      </fieldset>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Labels</h3>
      <p>
        <label for="labelInputText">A label for a text input</label>
        <input type="text" id="labelInputText" placeholder="Enter some text">
      </p>
      <p>
        <input type="checkbox" id="labelInputCheckbox">
        <label for="labelInputCheckbox">A label after a checkbox</label>
      </p>
    </div>
    <div class="two-columns__column">
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Drop-down menus</h3>
      <p>
        <label for="selectDropdown">A standard drop-down</label>
        <select id="selectDropdown">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <optgroup label="More options">
            <option>Option 4</option>
            <option>Option 5</option>
          </optgroup>
        </select>
      </p>
      <p>
        <label for="selectMultiItem">A multi-item select field</label>
        <select id="selectMultiItem" multiple>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <optgroup label="More options">
            <option>Option 4</option>
            <option>Option 5</option>
          </optgroup>
        </select>
      </p>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Drop-down menus</h3>
      <p>
        <label for="selectDisabled">A disabled drop-down</label>
        <select id="selectDisabled" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <optgroup label="More options">
            <option>Option 4</option>
            <option>Option 5</option>
          </optgroup>
        </select>
      </p>
      <p>
        <label for="selectMultiItemDisabled">A multi-item select field</label>
        <select id="selectMultiItemDisabled" multiple disabled>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <optgroup label="More options">
            <option>Option 4</option>
            <option>Option 5</option>
          </optgroup>
        </select>
      </p>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Text area</h3>
      <p>
        <label for="exampleTextarea">Text area</label>
        <textarea rows="3" id="exampleTextarea"></textarea>
      </p>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Text area</h3>
      <p>
        <label for="exampleTextareaDisabled">Disabled text area</label>
        <textarea rows="3" id="exampleTextareaDisabled" disabled></textarea>
      </p>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Fieldsets</h3>
      <fieldset>
        <legend>A fieldset</legend>
        <p>
          <label for="fieldsetText">Text input</label>
          <input type="text" id="fieldsetText" placeholder="Text input">
        </p>
        <p>
          <label for="fieldsetSelect">A select menu</label>
          <select id="fieldsetSelect">
            <option>A select option</option>
          </select>
        </p>
      </fieldset>
    </div>
    <div class="two-columns__column story-wrapper">
      <h3>Fieldsets</h3>
      <fieldset disabled>
        <legend>A disabled fieldset</legend>
        <p>
          <label for="fieldsetText2">Disabled text input</label>
          <input type="text" id="fieldsetText2" placeholder="Disabled input">
        </p>
        <p>
          <label for="fieldsetSelect2">Disabled select menu</label>
          <select id="fieldsetSelect2">
            <option>Disabled select</option>
          </select>
        </p>
      </fieldset>
    </div>
  </div>
`;

storiesOf('Default styles', module)
  .addDecorator(Wrapper)
  .add('Forms', defaultFormStyles);

storiesOf('Forms', module)
  .addDecorator(Wrapper)
  .add('Default styles', defaultFormStyles);
