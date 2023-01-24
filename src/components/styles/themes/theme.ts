import { DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
    title: 'dark',
    colors: {
        backgroundColor:    '#16161D',
        disabledColor:      '#31313D',
        detailsColor:       '#BD93F9',
        textColor:          '#F8F8F2'
    },

    font: {
        h1: {
            fontFamily: 'MontSerrat',
            fontWeight: 'Black',
            fontSize:   '96px'
        },

        h2: {
            fontFamily: 'MontSerrat',
            fontWeight: 'Black',
            fontSize:   '96px'
        },

        li: {
            fontFamily: 'Fira Code',
            fontWeight: 'regular',
            fontSize:   '24px'
        },

        p: {
            fontFamily: 'Fira Code',
            fontWeight: 'regular',
            fontSize:   '16px'
        }
    }
}
