/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Underline,
	Strikethrough,
	CKFinder, // Image
	Superscript,
	Clipboard,
	RemoveFormat,
	SpecialCharacters,
	SourceEditing,
	Essentials,
	Heading,
	Bold,
	Italic,
	Link,
	List,
	Alignment,
	Paragraph
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'alignment',
			'|',
			'undo',
			'redo'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
