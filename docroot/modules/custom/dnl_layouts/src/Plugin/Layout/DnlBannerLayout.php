<?php

namespace Drupal\dnl_layouts\Plugin\Layout;

use Drupal\Core\Form\FormStateInterface;

/**
 * Configurable banner layout plugin class.
 *
 * @internal
 *   Plugin classes are internal.
 */
class DnlBannerLayout extends BaseLayout {

  /**
   * {@inheritdoc}
   */
  public function build(array $regions) {
    $build = parent::build($regions);
    $build['#attributes']['class'] = [
      'layout',
      $this->getPluginDefinition()->getTemplate(),
    ];
    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $parentForm = parent::buildConfigurationForm($form, $form_state);
    $parentForm['padding']['#access'] = FALSE;
    $parentForm['valign']['#access'] = FALSE;
    return $parentForm;
  }

}
