<?php

namespace ZaxCMS;

use Zax\Application\UI\Presenter;
use ZaxCMS\Modules\ModuleFactory;

class CMSPresenter extends Presenter {

	protected $moduleFactory;

	protected $requestedModule;

	public function __construct(ModuleFactory $moduleFactory) {
		$this->moduleFactory = $moduleFactory;
	}

	public function actionDefault($CMSModule) {
		$this->requestedModule = $CMSModule;
	}

	protected function createComponentCms() {
		return $this->moduleFactory->create($this->requestedModule);
	}

}
