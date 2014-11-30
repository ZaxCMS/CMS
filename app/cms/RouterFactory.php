<?php

namespace ZaxCMS;

use ZaxCMS;
use Nette;
use Nette\Object;
use Zax\Application\Routers\IRouterFactory;
use Zax\Application\Routers\Route;
use Zax\Application\Routers\RouteList;

class RouterFactory extends Object implements IRouterFactory {

	public function create() {
		$r = new RouteList;

		$r[] = new Route('[<CMSModule>]', [
			'presenter' => 'CMS',
			'action' => 'Default',
			'CMSModule' => 'default'
		]);

		return $r;
	}

}
