<?php

require_once __DIR__ . '/vendor/autoload.php';

$rootDir = __DIR__;
$appDir = $rootDir . '/app';
$tempDir = $rootDir . '/temp';

(new Zax\Bootstraps\ZaxBootstrap($appDir, $rootDir, $tempDir))
	->enableConfigAutoload()
	->setDebuggers(['10.0.0.1', '::1', '127.0.0.1'], ['some@email.abc'])
	->enableDebugger(TRUE)
	->boot();
