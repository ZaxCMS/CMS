<?php

namespace ZaxCMS\Components\Upload;

use Nette\Forms\Form;
use Zax\Application\UI\Control;
use Zax\Application\UI\IFormFactory;

class UploadControl extends Control {

	protected $formFactory;

	public function __construct(IFormFactory $formFactory) {
		$this->formFactory = $formFactory;
	}

	public function viewDefault() {}

	public function beforeRender() {}

	protected function createComponentUploadForm() {
	    $form = $this->formFactory->create();

		$form->addFileUpload($_f = 'files', $_f, TRUE);

		$form->addButtonSubmit($_u = 'upload', $_u, $_u);

		$form->onSuccess[] = $this->formSubmitted;

		return $form;
	}

	public function formSubmitted(Form $form, $values) {
		$uploaded = [];
		foreach($values->files as $file) {
			if($file->isOk()) {
				$uploaded[] = $file;
			}
		}
		$this->template->uploaded = $uploaded;
	}

}
