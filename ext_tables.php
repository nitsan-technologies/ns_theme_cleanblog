<?php
// TYPO3 Security Check
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// Add default include static TypoScript (for root page)
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('ns_theme_cleanblog', 'Configuration/TypoScript', '[NITSAN] Clean Blog Theme & Templates');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:ns_theme_cleanblog/Configuration/PageTSconfig/setup.ts">');