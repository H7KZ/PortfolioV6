import TablerFileTypeBMP from '~icons/tabler/file-type-bmp';
import TablerFileTypeCSS from '~icons/tabler/file-type-css';
import TablerFileTypeCSV from '~icons/tabler/file-type-csv';
import TablerFileTypeDOC from '~icons/tabler/file-type-doc';
import TablerFileTypeDOCX from '~icons/tabler/file-type-docx';
import TablerFileTypeHTML from '~icons/tabler/file-type-html';
import TablerFileTypeJPG from '~icons/tabler/file-type-jpg';
import TablerFileTypeJS from '~icons/tabler/file-type-js';
import TablerFileTypeJSX from '~icons/tabler/file-type-jsx';
import TablerFileTypePDF from '~icons/tabler/file-type-pdf';
import TablerFileTypePHP from '~icons/tabler/file-type-php';
import TablerFileTypePNG from '~icons/tabler/file-type-png';
import TablerFileTypePPT from '~icons/tabler/file-type-ppt';
import TablerFileTypeRS from '~icons/tabler/file-type-rs';
import TablerFileTypeSQL from '~icons/tabler/file-type-sql';
import TablerFileTypeSVG from '~icons/tabler/file-type-svg';
import TablerFileTypeTS from '~icons/tabler/file-type-ts';
import TablerFileTypeTSX from '~icons/tabler/file-type-tsx';
import TablerFileTypeTXT from '~icons/tabler/file-type-txt';
import TablerFileTypeVUE from '~icons/tabler/file-type-vue';
import TablerFileTypeXLS from '~icons/tabler/file-type-xls';
import TablerFileTypeXML from '~icons/tabler/file-type-xml';
import TablerFileTypeZIP from '~icons/tabler/file-type-zip';
import type { Component } from 'svelte';

const filesIconsComponents: Record<string, Component> = {
	bmp: TablerFileTypeBMP,
	css: TablerFileTypeCSS,
	csv: TablerFileTypeCSV,
	doc: TablerFileTypeDOC,
	docx: TablerFileTypeDOCX,
	html: TablerFileTypeHTML,
	htm: TablerFileTypeHTML,
	jpg: TablerFileTypeJPG,
	jpeg: TablerFileTypeJPG,
	js: TablerFileTypeJS,
	mjs: TablerFileTypeJS,
	cjs: TablerFileTypeJS,
	jsx: TablerFileTypeJSX,
	json: TablerFileTypeJS,
	jsonc: TablerFileTypeJS,
	pdf: TablerFileTypePDF,
	php: TablerFileTypePHP,
	png: TablerFileTypePNG,
	gif: TablerFileTypePNG,
	webp: TablerFileTypePNG,
	ppt: TablerFileTypePPT,
	pptx: TablerFileTypePPT,
	rs: TablerFileTypeRS,
	sql: TablerFileTypeSQL,
	sqlite: TablerFileTypeSQL,
	db: TablerFileTypeSQL,
	sqlite3: TablerFileTypeSQL,
	svg: TablerFileTypeSVG,
	ts: TablerFileTypeTS,
	tsx: TablerFileTypeTSX,
	txt: TablerFileTypeTXT,
	md: TablerFileTypeTXT,
	log: TablerFileTypeTXT,
	ini: TablerFileTypeTXT,
	config: TablerFileTypeTXT,
	env: TablerFileTypeTXT,
	vue: TablerFileTypeVUE,
	xls: TablerFileTypeXLS,
	xlsx: TablerFileTypeXLS,
	xml: TablerFileTypeXML,
	xsd: TablerFileTypeXML,
	xslt: TablerFileTypeXML,
	zip: TablerFileTypeZIP,
	rar: TablerFileTypeZIP,
	tar: TablerFileTypeZIP,
	gz: TablerFileTypeZIP,
	tgz: TablerFileTypeZIP,
	'7z': TablerFileTypeZIP
};

export default filesIconsComponents;
