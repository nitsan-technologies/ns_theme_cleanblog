<?php
// TYPO3 Security Check
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// Provide detailed information and depenencies of EXT:ns_theme_cleanblog
$EM_CONF[$_EXTKEY] = array(
	'title' => '[NITSAN] Clean Blog Theme',
	'description' => 'The clean blog is a premium TYPO3 theme for personal or company blog with minimal & clean design, super easy settings and ultra fast page speed. Demo: https://demo.t3terminal.com/t3t-cleanblog/ PRO version: https://t3terminal.com/t3-clean-blog-free/',
	'category' => 'templates',
	'author' => 'T3:Sonal Chauhan, QA:Vandna Kalivada',
	'author_email' => 'info@nitsan.in',
	'author_company' => 'NITSAN Technologies Pvt Ltd',
	'state' => 'stable',
	'version' => '1.0.0',
	'constraints' => array(
		'depends' => array(
			'ns_basetheme' => '1.0.0-9.9.99',
			'ns_news_comments' => '1.0.0-9.9.99'
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
);
?>
