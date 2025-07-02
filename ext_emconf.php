<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "ns_theme_cleanblog".
 *
 * Auto generated 03-05-2023 15:14
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF['ns_theme_cleanblog'] = array (
  'title' => 'T3 Clean Blog – TYPO3 Blog Template',
  'description' => 'A modern and minimalist TYPO3 blog template perfect for personal and business blogs. Easy to configure, SEO-optimized, and performance-focused for TYPO3 v12 & v13.',
  'category' => 'templates',
  'version' => '13.0.1',
  'state' => 'stable',
  'uploadfolder' => false,
  'author' => 'Team T3Planet',
  'author_email' => 'info@t3planet.de',
  'author_company' => 'T3Planet',
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '12.0.0-13.5.99',
      'news' => '12.0.0-12.9.99',
      'ns_basetheme' => '13.0.0-13.5.99',
      'ns_news_comments' => '13.0.0-13.5.99',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
    ),
  ),
);

