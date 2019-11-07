import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

storiesOf('Shared styles|Default styles', module)
  .addDecorator(Wrapper)
  .add(
    'Links',
    () => `
      <div class="wysiwyg">
        <h2>Links</h2>
        <p>This is a <a href="#">link to another web page</a>.</p>
      </div>
    `,
  )
  .add(
    'Grouping',
    () => `
      <div class="wysiwyg">
        <h2>Block quotes</h2>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
          erat a ante.</p>
          <footer>J. Smith in <cite title="Source Title, 2nd Edition">Source
          Title</cite></footer>
        </blockquote>

        <h2>Ordered lists</h2>
        <ol>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>Nulla volutpat aliquam velit
            <ol>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at
                <ol>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ol>

        <h2>Unordered lists</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>
      </div>
    `,
  )
  .add(
    'Text',
    () => `
      <div class="wysiwyg">
        <h2>Bold and italic text</h2>
        <p>The following snippets of text are <strong>rendered</strong> as <b>bold text</b>. Bold text nested inside <i>italic text <b>should</b></i> <em>still be <strong>bold</strong></em>.</p>
        <p>The following snippets of text are <em>rendered</em> as <i>italic text</i>. Italic text nested inside <b>bold text <i>should</i></b> <strong>still be <em>italic</em></strong>.</p>
      </div>
    `,
  )
  .add(
    'Tables',
    () => `
      <div class="wysiwyg">
        <h2>Tables</h2>
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jane</td>
                <td>Doe</td>
                <td>jdoe</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jamie</td>
                <td>Morgan</td>
                <td>jmorgan</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Smith</td>
                <td>jsmith</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    `,
  );
