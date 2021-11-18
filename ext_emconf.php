<?php
/*
 * This file is part of the package nitsan/site-default.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

// Provide detailed information and depenencies of EXT:ns_theme_cleanblog
$EM_CONF['ns_theme_cleanblog'] = array(
	'title' => '[NITSAN] Clean Blog TYPO3 Template',
	'description' => 'The clean blog is a premium TYPO3 template for personal or company blog with minimal & clean design, super easy settings and ultra fast page speed. Live-Demo: https://demo.t3terminal.com/?theme=t3t-cleanblog PRO version: https://t3terminal.com/t3-clean-blog-free-typo3-template',
	'category' => 'templates',
	'author' => 'NITSAN Technologies Pvt Ltd',
	'author_email' => 'info@nitsan.in',
	'author_company' => 'NITSAN Technologies Pvt Ltd',
	'state' => 'stable',
	'version' => '2.1.8',
	'constraints' => array(
		'depends' => array(
			'typo3' => '9.0.0-10.99.99',
			'news' => '9.0.0-10.99.99',
			'ns_basetheme' => '9.0.0-11.9.99',
			'gridelements' => '9.0.0-10.9.99',
			'ns_news_comments' => '1.0.0-10.9.99',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
	//'autoload' => array(
	//	'classmap' => array('Classes/'),
	//),
);
?>
