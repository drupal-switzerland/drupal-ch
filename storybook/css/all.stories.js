import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

storiesOf('Default styles', module)
  .addDecorator(Wrapper)
  .add(
    'About',
    () => `
      <h2>About default styles</h2>
      <p>These are the default styles applied to HTML elements.</p>
      <p>Component classes can override these styles, but if no class applies a
       style to an HTML element, these styles will be the ones displayed.</p>
    `,
  )
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
        <h2>Grouping</h2>
        <h3>Block quotes</h3>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
          erat a ante.</p>
          <footer>J. Smith in <cite title="Source Title, 2nd Edition">Source
          Title</cite></footer>
        </blockquote>

        <!--
        <h3>Description lists</h3>
        <dl>
          <dt>Description lists</dt>
          <dd>A description list is perfect for defining terms.</dd>
          <dt>Euismod</dt>
          <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
          <dd>Donec id elit non mi porta gravida at eget metus.</dd>
          <dt>Malesuada porta</dt>
          <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
        </dl>

        <h3>Figures</h3>
        <figure>
          An illustration, diagram, photo, code listing, etc.
        </figure>
        <figure>
          An illustration, diagram, photo, code listing, etc.
          <figcaption>Figure 1</figcaption>
        </figure>
        -->

        <h3>Hard rules</h3>
        <hr />

        <h3>Ordered lists</h3>
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
              <li>Ac tristique libero volutpat at</li>
            </ol>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ol>

        <h3>Unordered lists</h3>
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
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>

        <h3>Paragraphs</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
        elit. Donec ullamcorper nulla non metus auctor fringilla.</p>

        <h3>Preformatted text blocks</h3>
        The following text is preformatted:
        <pre>
        (ノ゜Д゜)ノ ︵ ┻━┻
        </pre>
      </div>
    `,
  )
  .add(
    'Text',
    () => `
      <div class="wysiwyg">
        <h2>Text</h2>
        <h3>Bold and italics</h3>
        <p>The following snippets of text are <strong>rendered</strong> as <b>bold text</b>. Bold text nested inside <i>italic text <b>should</b></i> <em>still be <strong>bold</strong></em>.</p>
        <p>The following snippets of text are <em>rendered</em> as <i>italic text</i>. Italic text nested inside <b>bold text <i>should</i></b> <strong>still be <em>italic</em></strong>.</p>

        <h3>Abbreviations and definitions</h3>
        <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>. And <abbr title="HyperText Markup Language">HTML</abbr> is an acroynm.</p>
        <p>The <dfn id="gdo"><abbr title="Garage Door Opener">GDO</abbr></dfn> is a device that allows off-world teams to open the iris.</p>
        <p>Teal'c activated his <a href="#gdo"><abbr title="Garage Door Opener">GDO</abbr></a> and so Hammond ordered the iris to be opened.</p>

        <h3>Citations</h3>
        <p>Who is your favorite doctor (in <cite>Doctor Who</cite>)?</p>
        <p>Comment by <cite><a href="#">Oli Walberg</a></cite></p>

        <h3>Code, variables, samples and user input</h3>
        <p>The <code>code</code> element represents a fragment of computer code.</p>
        <p>There are <var>n</var> flavors of ice cream to be available for purchase!</p>
        <p>The computer said <samp>Too much cheese in tray two</samp> but I didn't know what that meant.</p>
        <p>To make George eat an apple, select <kbd>File | Eat Apple…</kbd></p>

        <h3>Insertions, deletions and strike-throughs</h3>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>

        <h3>Inline quote</h3>
        <p>The HTML spec says, <q cite="http://www.w3.org/TR/html5/text-level-semantics.html#the-q-element">The <code>q</code> element represents some phrasing content quoted from another source.</q></p>

        <h3>Subscript and superscipt</h3>
        <p><abbr>M<sup>lle</sup></abbr> Gwendoline wrote the equation <code>f(x, n) = log<sub>4</sub>x<sup>n</sup></code>.</p>

        <h3>Miscellaneous styles</h3>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p>You can use the mark tag to <mark>highlight</mark> text like this. <mark>New!</mark></p>
        <p><u>This line of text will render as underlined</u></p>
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
