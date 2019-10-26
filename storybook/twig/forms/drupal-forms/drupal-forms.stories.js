import { storiesOf } from '@storybook/html';
import Wrapper from '../../../utils/storybook/decorators/Wrapper';

storiesOf('Shared styles|Forms', module)
  .addDecorator(Wrapper)
  .add(
    'Drupal forms',
    () => `
      <form>
        <div class="form-item">
          <label for="edit-first-name" class="form-required">First name</label>
          <input type="text" id="edit-first-name" name="first_name" value="" size="60" maxlength="255" class="form-text required" required="required" aria-required="true">
        </div>
        <div class="form-item">
          <label for="edit-last-name" class="form-required">Last name</label>
          <input type="text" id="edit-last-name" name="last_name" value="" size="60" maxlength="255" class="form-text required" required="required" aria-required="true">
        </div>
        <div class="form-item">
          <label for="edit-email" class="js-form-required form-required">Email</label>
          <input type="email" id="edit-email" name="email" value="example@example.com" size="60" maxlength="254" class="form-email required" required="required" aria-required="true">
        </div>
        <div class="form-item">
          <label for="edit-message" class="form-required">Your Message</label>
          <div>
            <textarea id="edit-message" name="message" rows="5" cols="60" class="form-textarea required" required="required" aria-required="true"></textarea>
          </div>
        </div>
        <div class="form-item">
          <div>
            <div id="edit-privacy-policy--description" class="webform-element-description">
              <p>To help with your request and to comply with data protection legislation we will need to confirm that you agree for us to collect and use your personal data:</p>
              <p><a href="https://example.com">Read our privacy policy</a> for details of the data that we hold on our customers and what we do with it. If you have any questions please contact <a href="mailto:privacy@example.com">privacy@example.com</a>.</p>
            </div>
          </div>
          <input aria-describedby="edit-privacy-policy--description" type="checkbox" id="edit-privacy-policy" name="privacy_policy" value="1" class="form-checkbox required" required="required" aria-required="true">
          <label for="edit-privacy-policy" class="option js-form-required form-required">I agree for "Drupal Switzerland" to collect and use my personal data</label>
        </div>
        <div class="form-actions form-wrapper" id="edit-actions">
          <input class="button button--primary form-submit" type="submit" id="edit-actions-submit" name="op" value="Send">
        </div>
      </form>
    `,
  );
