import TablerFileTypeBMP from '$lib/icons/files/TablerFileTypeBMP.svelte';
import TablerFileTypeCSS from '$lib/icons/files/TablerFileTypeCSS.svelte';
import TablerFileTypeCSV from '$lib/icons/files/TablerFileTypeCSV.svelte';
import TablerFileTypeDOC from '$lib/icons/files/TablerFileTypeDOC.svelte';
import TablerFileTypeDOCX from '$lib/icons/files/TablerFileTypeDOCX.svelte';
import TablerFileTypeHTML from '$lib/icons/files/TablerFileTypeHTML.svelte';
import TablerFileTypeJPG from '$lib/icons/files/TablerFileTypeJPG.svelte';
import TablerFileTypeJS from '$lib/icons/files/TablerFileTypeJS.svelte';
import TablerFileTypeJSX from '$lib/icons/files/TablerFileTypeJSX.svelte';
import TablerFileTypePDF from '$lib/icons/files/TablerFileTypePDF.svelte';
import TablerFileTypePHP from '$lib/icons/files/TablerFileTypePHP.svelte';
import TablerFileTypePNG from '$lib/icons/files/TablerFileTypePNG.svelte';
import TablerFileTypePPT from '$lib/icons/files/TablerFileTypePPT.svelte';
import TablerFileTypeRS from '$lib/icons/files/TablerFileTypeRS.svelte';
import TablerFileTypeSQL from '$lib/icons/files/TablerFileTypeSQL.svelte';
import TablerFileTypeSVG from '$lib/icons/files/TablerFileTypeSVG.svelte';
import TablerFileTypeTS from '$lib/icons/files/TablerFileTypeTS.svelte';
import TablerFileTypeTSX from '$lib/icons/files/TablerFileTypeTSX.svelte';
import TablerFileTypeTXT from '$lib/icons/files/TablerFileTypeTXT.svelte';
import TablerFileTypeTypography from '$lib/icons/files/TablerFileTypeTypography.svelte';
import TablerFileTypeVUE from '$lib/icons/files/TablerFileTypeVUE.svelte';
import TablerFileTypeXLS from '$lib/icons/files/TablerFileTypeXLS.svelte';
import TablerFileTypeXML from '$lib/icons/files/TablerFileTypeXML.svelte';
import TablerFileTypeZIP from '$lib/icons/files/TablerFileTypeZIP.svelte';
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
	typography: TablerFileTypeTypography,
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
