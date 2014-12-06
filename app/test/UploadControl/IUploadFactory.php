<?php

namespace ZaxCMS\Components\Upload;

interface IUploadFactory {

	/** @return UploadControl */
	public function create();

}