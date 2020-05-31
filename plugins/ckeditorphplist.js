/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *
 * define a set of styles that will appear in the Styles drop-down
 * The 
 */
CKEDITOR.stylesSet.add( 'phpList', [
    // Block-level styles
    { name: 'Title',  element: 'h2',
    styles: { 'margin-bottom': '0.5em', 'font-size': '1.6em', 'color': '#333', 'font-family': 'Arial,sans-serif'}
    },
    { name: 'Article Title',  element: 'h3',
    styles: { 'margin-bottom': '0.5em', 'font-size': '1.4em', 'color': '#333', 'font-family': 'Arial,sans-serif'}
    },
    { name: 'Article Subtitle',  element: 'h4',
    styles: { 'margin-bottom': '0.5em', 'font-size': '1.2em', 'color': '#333', 'font-family': 'Arial,sans-serif'}
    },
    { name: 'Paragraph',  element: 'p',
    styles: { 'margin-bottom': '0.5em', 'font-size': '1.1em', 'color': 'rgb(102, 102, 102)', 'font-family': 'Arial,sans-serif'}
    },
    { name: 'Paragraph Small',  element: 'p',
    styles: { 'margin-bottom': '0.5em', 'font-size': '1em', 'color': 'rgb(102, 102, 102)', 'font-family': 'Arial,sans-serif'}
    },
    // Inline styles
    { name: 'CSS Style', element: 'span', attributes: { 'class': 'my_style' } },
    { name: 'Marker: Yellow', element: 'span', styles: { 'background-color': 'Yellow' } }
]);


CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'mode','clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'links' },
		{ name: 'insert' },
//		{ name: 'tools' },
//		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ] },
		{ name: 'styles' },
		{ name: 'colors' },
//		{ name: 'about' }
	];
    // Remove some buttons, provided by the standard plugins, which we don't
	// need to have in the Standard(s) toolbar.
    config.removePlugins = 'elementspath,save,iframe,flash';
	config.removeButtons = 'Subscript,Superscript,About';
    
	// Se the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Make dialogs simpler.
//	config.removeDialogTabs = 'image:advanced;link:advanced';
//  enable custom styles
    config.stylesSet = 'phpList';
    config.filebrowserWindowWidth = '600';
    config.filebrowserWindowHeight = '600';
    config.image_previewText = CKEDITOR.tools.repeat( '___ ', 100 );
    config.resize_enabled = true;
    config.resize_minWidth = 500;
    config.resize_dir = 'both';
    config.allowedContent = true;
    config.skin = 'bootstrapck';

};
