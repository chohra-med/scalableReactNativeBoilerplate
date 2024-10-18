import { configureFonts } from 'react-native-paper';
import { MD3Typescale } from 'react-native-paper/lib/typescript/types';
import { verticalScale, moderateScale } from 'react-native-size-matters';

const allFonts = {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
};

// language either from Right To Left ( arabic) §or Left to Right
type LanguagesWithFonts = 'rtl' | 'ltr';

const ltrFonts: MD3Typescale = {
    displayLarge: {
        fontFamily: allFonts.bold,
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: verticalScale(64),
        fontSize: moderateScale(57),
    },
    displayMedium: {
        fontFamily: allFonts.regular,
        letterSpacing: 0,
        fontWeight: '500',
        lineHeight: verticalScale(52),
        fontSize: moderateScale(45),
    },
    displaySmall: {
        fontFamily: allFonts.regular,
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: verticalScale(44),
        fontSize: moderateScale(36),
    },
    headlineLarge: {
        fontFamily: allFonts.bold,
        letterSpacing: 0,
        fontWeight: '700',
        lineHeight: verticalScale(50),
        fontSize: moderateScale(32),
    },
    headlineMedium: {
        fontFamily: allFonts.regular,
        letterSpacing: 0,
        fontWeight: '700',
        lineHeight: verticalScale(36),
        fontSize: moderateScale(28),
    },
    headlineSmall: {
        fontFamily: allFonts.regular,
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: verticalScale(32),
        fontSize: moderateScale(24),
    },
    titleLarge: {
        fontFamily: allFonts.bold,
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: verticalScale(28),
        fontSize: moderateScale(24),
    },
    titleMedium: {
        fontFamily: allFonts.regular,
        letterSpacing: 0,
        fontWeight: '700',
        lineHeight: verticalScale(24),
        fontSize: moderateScale(16),
    },
    titleSmall: {
        fontFamily: allFonts.regular,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: verticalScale(20),
        fontSize: moderateScale(14),
    },

    labelLarge: {
        fontFamily: allFonts.bold,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: verticalScale(20),
        fontSize: moderateScale(14),
    },
    labelMedium: {
        fontFamily: allFonts.regular,
        fontWeight: 'normal',
        letterSpacing: 0,
        lineHeight: verticalScale(24),
        fontSize: moderateScale(16),
    },
    labelSmall: {
        fontFamily: allFonts.regular,
        fontWeight: 'normal',
        letterSpacing: 0,
        lineHeight: verticalScale(16),
        fontSize: moderateScale(12),
    },

    bodyLarge: {
        fontFamily: allFonts.bold,
        letterSpacing: 0,
        fontWeight: '400',
        lineHeight: verticalScale(24),
        fontSize: moderateScale(16),
    },
    bodyMedium: {
        fontFamily: allFonts.regular,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: verticalScale(20),
        fontSize: moderateScale(14),
    },
    bodySmall: {
        fontFamily: allFonts.regular,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: verticalScale(16),
        fontSize: moderateScale(12),
    },

    default: {
        fontFamily: allFonts.regular,
        letterSpacing: 0,
        fontWeight: '400',
    },
};

const m3dArabicType = configureFonts({
    config: {
        fontFamily: allFonts.regular,
        letterSpacing: 0,
    },
});

export const fontsMap: Record<LanguagesWithFonts, MD3Typescale> = {
    ltr: ltrFonts,
    rtl: m3dArabicType,
};




