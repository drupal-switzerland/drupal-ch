import { storiesOf } from '@storybook/html';
import Wrapper from '../utils/storybook/decorators/Wrapper';

storiesOf('Shared styles|Element styles', module)
  .addDecorator(Wrapper)
  .add(
    'List',
    () => `
      <div class="two-columns wysiwyg">
        <div class="two-columns__column">
          <div>
            <h4><u>Ordered lists</u></h4>
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
          <div>
            <h4><u>Unordered lists</u></h4>
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
    'Blockquote',
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
        <h4><u>Bold and italics</u></h4>
        <p>The following snippets of text are <strong>rendered</strong> as <b>bold text</b>. Bold text nested inside <i>italic text <b>should</b></i> <em>still be <strong>bold</strong></em>.</p>
        <p>The following snippets of text are <em>rendered</em> as <i>italic text</i>. Italic text nested inside <b>bold text <i>should</i></b> <strong>still be <em>italic</em></strong>.</p>

        <h4><u>Abbreviations and definitions</u></h4>
        <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>. And <abbr title="HyperText Markup Language">HTML</abbr> is an acroynm.</p>
        <p>The <dfn id="gdo"><abbr title="Garage Door Opener">GDO</abbr></dfn> is a device that allows off-world teams to open the iris.</p>
        <p>Teal'c activated his <a href="#gdo"><abbr title="Garage Door Opener">GDO</abbr></a> and so Hammond ordered the iris to be opened.</p>

        <h4><u>Citations</u></h4>
        <p>Who is your favorite doctor (in <cite>Doctor Who</cite>)?</p>
        <p>Comment by <cite><a href="#">Oli Walberg</a></cite></p>

        <h4><u>Code, variables, samples and user input</u></h4>
        <p>The <code>code</code> element represents a fragment of computer code.</p>
        <p>There are <var>n</var> flavors of ice cream to be available for purchase!</p>
        <p>The computer said <samp>Too much cheese in tray two</samp> but I didn't know what that meant.</p>
        <p>To make George eat an apple, select <kbd>File | Eat Apple…</kbd></p>

        <h4><u>Insertions, deletions and strike-throughs</u></h4>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>

        <h4><u>Inline quote</u></h4>
        <p>The HTML spec says, <q cite="http://www.w3.org/TR/html5/text-level-semantics.html#the-q-element">The <code>q</code> element represents some phrasing content quoted from another source.</q></p>

        <h4><u>Subscript and superscipt</u></h4>
        <p><abbr>M<sup>lle</sup></abbr> Gwendoline wrote the equation <code>f(x, n) = log<sub>4</sub>x<sup>n</sup></code>.</p>

        <h4><u>Miscellaneous styles</u></h4>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p>You can use the mark tag to <mark>highlight</mark> text like this. <mark>New!</mark></p>
        <p><u>This line of text will render as underlined</u></p>

        <h4><u>Preformatted text blocks</u></h4>
        <p>The following text is preformatted:</p>
        <pre>(ノ゜Д゜)ノ ︵ ┻━┻</pre>
      </div>
    `,
  )
  .add(
    'Table',
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
