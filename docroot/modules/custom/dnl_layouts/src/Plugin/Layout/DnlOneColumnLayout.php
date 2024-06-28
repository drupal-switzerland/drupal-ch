<?php

namespace Drupal\dnl_layouts\Plugin\Layout;

use Drupal\Core\Form\FormStateInterface;

/**
 * Configurable one column layout plugin class.
 *
 * @internal
 *   Plugin classes are internal.
 */
class DnlOneColumnLayout extends BaseLayout {

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $parentForm = parent::buildConfigurationForm($form, $form_state);
    $parentForm['valign']['#access'] = FALSE;
    return $parentForm;
  }

}
