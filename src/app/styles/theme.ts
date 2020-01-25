const theme = {
    spacing: { normal: '8px' },
    colors: {
        blue: 'blue',
        red: 'red',
    },
};

type ThemeType = typeof theme;
export interface IThemeInterface extends ThemeType {}

export default theme;
