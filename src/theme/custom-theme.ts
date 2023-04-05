import 'styled-components';

export const colors = {
	blue: {
		hue: '#0083FF',
	},
    white: '#FFFFFF',
	scalesGrey: {
		gris_80MB: '#4F4F4F',
		gris_70MB: '#676767',
		gris_60MB: '#828282',
		gris_50MB: '#BDBDBD',
		gris_40MB: '#E0E0E0',
		gris_30MB: '#F8F8F8',
		gris_20MB: '#F2F2F2',
		gris_10MB: '#FAFAFA',
	},
};

const fontSize = {
	h1: 28,
	h2: 24,
	h3: 20,
	subtitle: 18,
	subtitleLink: 16,
	body2: 14,
	caption2: 12,
	overline: 10,
};

const lineSpacing = {
	h1: 36,
	h3: 30,
	subtitle: 27,
	subtitleLink: 24,
	body2: 21,
	caption2: 18,
	overline: 15,
};


const fontFamily = {
	regular: 'DINNextLTPro-Regular',
	bold: 'DINNextLTPro-Bold',
	medium: 'DINNextLTPro-Medium',
	italic: 'DINNextLTPro-Italic',
};

const theme = {
	colors,
	fontSize,
	lineSpacing,
	fontFamily,
};

export default theme;
