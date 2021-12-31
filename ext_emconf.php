<?php
/*
 * This file is part of the package nitsan/site-default.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

// Provide detailed information and depenencies of EXT:ns_theme_cleanblog
$EM_CONF['ns_theme_cleanblog'] = array(
	'title' => '[NITSAN] T3 Clean Blog | Free TYPO3 Template',
	'description' => 'T3 Clean Blog Free TYPO3 Template is a premium TYPO3 theme for personal or company blog with minimal & clean design, super easy settings, light, and ultra-fast page speed.',
	'category' => 'templates',
	'author' => 'NITSAN Technologies Pvt Ltd',
	'author_email' => 'info@nitsan.in',
	'author_company' => 'NITSAN Technologies Pvt Ltd',
	'state' => 'stable',
	'version' => '3.0.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '10.0.0-11.5.99',
			'news' => '9.0.0-9.99.99',
			'ns_basetheme' => '10.0.0-11.5.99',
			'ns_news_comments' => '4.0.0-5.5.99',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
);
?>
