<?php

// Add default include static TypoScript (for root page)
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('ns_theme_cleanblog', 'Configuration/TypoScript', '[NITSAN] T3 Clean Blog | Free TYPO3 Template');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig("@import 'EXT:ns_theme_cleanblog/Configuration/PageTSconfig/setup.typoscript'");