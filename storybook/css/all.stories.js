import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

storiesOf('Shared styles|Element styles', module)
  .addDecorator(Wrapper)
  .add(
    'List',
    () => `
      <div class="two-columns">
        <div class="two-columns__column">
          <div class="wysiwyg">
            <h1 class="h4"><u>Ordered lists:</u></h1>
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
          </div>
        </div>
        <div class="two-columns__column">
          <div class="wysiwyg">
            <h1 class="h4"><u>Unordered lists:</u></h1>
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
        </div>
      </div>
    `,
  )
  .add(
    'Block quotes',
    () => `
      <blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.</p>
        <footer>J. Smith in <cite title="Source Title, 2nd Edition">Source
        Title</cite></footer>
      </blockquote>
    `,
  )
  .add(
    'Text',
    () => `
      <div class="wysiwyg">
        <p>The following snippets of text are <strong>rendered</strong> as <b>bold text</b>. Bold text nested inside <i>italic text <b>should</b></i> <em>still be <strong>bold</strong></em>.</p>
        <p>The following snippets of text are <em>rendered</em> with a <a href="#">link</a>.</p>
      </div>
    `,
  )
  .add(
    'Tables',
    () => `
      <div class="wysiwyg">
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
