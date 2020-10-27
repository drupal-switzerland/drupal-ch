import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

storiesOf('Shared styles/Element styles/Forms', module)
  .addDecorator(Wrapper)
  .add(
    'Standard',
    () => `
      <div class="wysiwyg form">
        <div class="form__item">
          <h4><u>Fieldsets</u></h4>
          <fieldset>
            <legend>A fieldset</legend>
            <div>
              <label for="fieldsetText">Text input</label>
              <input type="text" id="fieldsetText" placeholder="Text input">
            </div>
            <div>
              <label for="fieldsetSelect">A select menu</label>
              <select id="fieldsetSelect">
                <option>A select option</option>
              </select>
            </div>
          </fieldset>
        </div>
        <div class="form__item">
          <h4><u>Inputs</u></h4>
          <div>
            <label for="inputText">Text</label>
            <input type="text" id="inputText" placeholder="Enter some text">
          </div>
          <div>
            <label for="inputSearch">Search</label>
            <input type="search" id="inputSearch" placeholder="Search">
          </div>
          <div>
            <label for="inputTel">Telephone</label>
            <input type="text" id="inputTel" placeholder="Enter some text">
          </div>
          <div>
            <label for="inputURL">URL</label>
            <input type="url" id="inputURL" placeholder="Enter a URL">
          </div>
          <div>
            <label for="inputEmail">Email address</label>
            <input type="email" id="inputEmail" placeholder="Enter email">
          </div>
          <div>
            <label for="inputPassword">Password</label>
            <input type="password" id="inputPassword" placeholder="Password">
          </div>
          <div>
            <label for="inputDate">Date</label>
            <input type="date" id="inputDate" placeholder="Enter a date">
          </div>
          <div>
            <label for="inputTime">Time</label>
            <input type="time" id="inputTime" placeholder="Enter a time">
          </div>
          <div>
            <label for="inputNumber">Number</label>
            <input type="number" id="inputNumber" placeholder="Enter a number">
          </div>
        </div>
        <div class="form__item">
          <h4><u>Checkbox</u></h4>
          <p>
            <label>
              <input type="checkbox">
              <span>I am not checked</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" checked="">
              <span>I am checked</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox">
              <span>I am not checked and I have a very long label that will go over two or more lines depending on the size of the screen</span>
            </label>
          </p>
        </div>
        <div class="form__item">
          <h4><u>Radio buttons</u></h4>
          <fieldset id="example-radio">
            <legend class="visually-hidden">Radio buttons</legend>
            <label for="option1">
              <input type="radio" value="option1" name="example-radio" id="option1">
              <span>Option one</span>
            </label>
            <label for="option2">
              <input type="radio" value="option2" name="example-radio" id="option2">
              <span>Option two</span>
            </label>
            <label for="option3">
              <input type="radio" value="option3" name="example-radio" id="option3">
              <span>Option three and I have a very long label that will go over two or more lines depending on the size of the screen</span>
            </label>
          </fieldset>
        </div>
        <div class="form__item">
          <h4><u>Labels</u></h4>
          <p>
            <label for="lableInputText">A label for a text input</label>
            <input type="text" id="lableInputText" placeholder="Enter some text">
          </p>
          <p>
            <label>
              <input type="checkbox">
              <span>A label wrapped around a checkbox</span>
            </label>
          </p>
        </div>
        <div class="form__item">
          <h4><u>Drop-down menus</u></h4>
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
            <select id="selectMultiItem" multiple="">
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
        <div class="form__item">
          <h4><u>Text area</u></h4>
          <div>
            <label for="exampleTextarea">Text area</label>
            <textarea rows="3" id="exampleTextarea"></textarea>
          </div>
        </div>
      </div>
    `,
  )
  .add(
    'Disabled',
    () => `
      <div class="wysiwyg form">
        <div class="form__item">
          <h4><u>Fieldsets</u></h4>
          <fieldset disabled="">
            <legend>A disabled fieldset</legend>
            <div>
              <label for="fieldsetText2">Disabled text input</label>
              <input type="text" id="fieldsetText2" placeholder="Disabled input">
            </div>
            <div>
              <label for="fieldsetSelect2">Disabled select menu</label>
              <select id="fieldsetSelect2">
                <option>Disabled select</option>
              </select>
            </div>
            <div>
            </div>
          </fieldset>
        </div>
        <div class="form__item">
          <h4><u>Inputs</u></h4>
          <div>
            <label for="inputText1">Disabled text</label>
            <input type="text" disabled="" id="inputText1" placeholder="Disabled text">
          </div>
          <div>
            <label for="inputSearch1">Disabled search</label>
            <input type="search" disabled="" id="inputSearch1" placeholder="Disabled search">
          </div>
          <div>
            <label for="inputTel1">Disabled telephone</label>
            <input type="text" disabled="" id="inputTel1" placeholder="Disabled telephone">
          </div>
          <div>
            <label for="inputURL1">Disabled URL</label>
            <input type="url" disabled="" id="inputURL1" placeholder="Disabled URL">
          </div>
          <div>
            <label for="inputEmail1">Disabled email address</label>
            <input type="email" disabled="" id="inputEmail1" placeholder="Disabled email">
          </div>
          <div>
            <label for="inputPassword1">Disabled password</label>
            <input type="password" disabled="" id="inputPassword1" placeholder="Disabled password">
          </div>
          <div>
            <label for="inputDate1">Disabled date</label>
            <input type="date" disabled="" id="inputDate1" placeholder="Disabled date">
          </div>
          <div>
            <label for="inputTime1">Disabled time</label>
            <input type="time" disabled="" id="inputTime1" placeholder="Disabled time">
          </div>
          <div>
            <label for="inputNumber1">Disabled number</label>
            <input type="number" disabled="" id="inputNumber1" placeholder="Disabled number">
          </div>
        </div>
        <div class="form__item">
          <h4><u>Checkbox</u></h4>
          <p>
            <label>
              <input type="checkbox" disabled="">
              <span>I am not checked and disabled</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" checked="" disabled="">
              <span>I am checked and disabled</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" disabled="">
              <span>I am not checked and I have a very long label that will go over two or more lines depending on the size of the screen</span>
            </label>
          </p>
        </div>
        <div class="form__item">
          <h4><u>Radio buttons</u></h4>
          <fieldset id="example-radio1a">
            <legend class="visually-hidden">Radio buttons</legend>
            <label for="option1a">
              <input type="radio" value="option1" name="example-radio1" id="option1a" disabled="">
              <span>Option one is disabled</span>
            </label>
            <label for="option2a">
              <input type="radio" value="option2" name="example-radio1" id="option2a" disabled="">
              <span>Option two is disabled</span>
            </label>
            <label for="option3a">
              <input type="radio" value="option3" name="example-radio1" id="option3a" disabled="">
              <span>Option three and I have a very long label that will go over two or more lines depending on the size of the screen</span>
            </label>
          </fieldset>
        </div>
        <div class="form__item">
        </div>
        <div class="form__item">
          <h4><u>Drop-down menus</u></h4>
          <p>
            <label for="selectDisabled">A disabled drop-down</label>
            <select id="selectDisabled" disabled="">
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
            <select id="selectMultiItemDisabled" multiple="" disabled="">
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
        <div class="form__item">
          <h4><u>Text area</u></h4>
          <div>
            <label for="exampleTextareaDisabled">Disabled text area</label>
            <textarea rows="3" id="exampleTextareaDisabled" disabled=""></textarea>
          </div>
        </div>
      </div>
    `,
  );
