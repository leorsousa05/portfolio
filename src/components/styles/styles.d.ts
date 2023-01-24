import 'styled-components'
import React from 'react'

type textConfig = {
    fontFamily: string
    fontWeight: string
    fontSize: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            backgroundColor: string
            disabledColor:   string
            detailsColor:    string
            textColor:       string
        }

        font: {
            h1: textConfig
            h2: textConfig
            li: textConfig
            p:  textConfig
        }
    }
}


