<?php

namespace Drupal\dnl_layouts\Plugin\Layout;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Layout\LayoutDefault;

/**
 * Configurable base layout plugin class.
 *
 * @internal
 *   Plugin classes are internal.
 */
class BaseLayout extends LayoutDefault {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'padding' => 'default',
      'size' => 'default',
      'valign' => 'top',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $configuration = $this->getConfiguration();

    $form['padding'] = [
      '#type' => 'select',
      '#title' => $this->t('Layout Padding (space between sections)'),
      '#options' => [
        'default' => 'Default',
        'none' => 'None',
      ],
      '#default_value' => $configuration['padding'],
    ];

    $form['valign'] = [
      '#type' => 'select',
      '#title' => $this->t('Layout Vertical alignment (alignment inner blocks)'),
      '#options' => [
        'top' => 'Top',
        'middle' => 'Middle',
        'bottom' => 'Bottom',
      ],
      '#default_value' => $configuration['valign'],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    $this->configuration['padding'] = $form_state->getValue('padding');
    $this->configuration['valign'] = $form_state->getValue('valign');
  }

}
