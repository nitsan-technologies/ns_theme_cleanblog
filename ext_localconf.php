<?php
// TYPO3 Security Check
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// Let's configuration of this extension from "Extension Manager"
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF'][$_EXTKEY] = unserialize($_EXTCONF);