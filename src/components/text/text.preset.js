
import { typography } from "../../theme/typography";
import { colors } from './../../theme/colors';



const BASE = {
    fontFamily: typography.regular,
    fontSize: 36,
    color: colors.white
}
const BASE_BOLD = {
    fontFamily: typography.semiBold,
    color: colors.white
}
const BOLD = {
    fontFamily: typography.bold,
    color: colors.white
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE.BOLD,
        fontSize: 24,
    },
    h4: {
        ...BASE.BOLD,
        fontSize: 14,
    },
    small: {
        ...BASE,
        fontSize: 12,
    },


}