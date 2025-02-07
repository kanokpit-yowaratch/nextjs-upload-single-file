export const imageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

export const wordTypes = [
	'application/msword',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const excelTypes = [
	'application/vnd.ms-excel',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

export const pptTypes = [
	'application/vnd.ms-powerpoint',
	'application/vnd.openxmlformats-officedocument.presentationml.presentation',
];

export const pdfTypes = ['application/pdf'];

export const allowedTypes = [...imageTypes, ...pdfTypes, ...wordTypes, ...excelTypes, ...pptTypes];

export const acceptTypes = {
	'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
	'application/pdf': ['.pdf'],
	'application/msword': ['.doc'],
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
	'application/vnd.ms-excel': ['.xls'],
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
	'application/vnd.ms-powerpoint': ['.ppt'],
	'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
};

export const maxSize = 5 * 1024 * 1024; // 5MB
