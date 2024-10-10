'use client'

import React, { createContext, useContext, FC, ReactNode, useState, useEffect } from 'react'
import { ConfigProvider, theme } from 'antd'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

interface ThemeProviderProps {
  children: ReactNode
}

interface IUseThemeProps {
  theme: {
    mode: string
    background: string
    color: string
    textSender: string
    headerBackground: string
    controlBackground: string
    controlHoverBackground: string
    panelBackground: string
    dropcallBackground: string
    dropcallHoverBackground: string
    inputBorderColor: string
    inputBackground: string
    inputColor: string
    dcCardBackground: string
    dcCardColor: string
    dcCardSubtitleColor: string
    dcCardButtonBackground: string
    dcCardButtonHoverBackground: string
    dcCardButtonColor: string
    dcIntervalHistoryBackground: string
  }
  setTheme: (theme: string) => void
}

const themes = {
  dark: {
    mode: 'dark',
    background: '#1f1f1f',
    color: '#fff',
    textSender: '#3a3a3a',
    headerBackground: '#2a2a2a',
    controlBackground: '#3a3a3a',
    controlHoverBackground: '#4a4a4a',
    dropcallBackground: '#e94436',
    dropcallHoverBackground: '#9c1a0f',
    panelBackground: '#464646',
    scrollbarTrack: '#222',
    scrollbarThumb: '#555',
    scrollbarThumbHover: '#444',
    videoContainer: '#000',
    inputBorderColor: '#424242',
    inputBackground: '#141414',
    inputColor: '#fff',
    dcCardBackground: '#333',
    dcCardColor: '#fff',
    dcCardSubtitleColor: '#ccc',
    dcCardButtonBackground: '#444',
    dcCardButtonHoverBackground: '#555',
    dcCardButtonColor: '#fff',
    dcIntervalHistoryBackground: '#262626'
  },
  light: {
    mode: 'light',
    background: '#f6f8fa',
    color: '#000',
    textSender: '#1d1d1d',
    headerBackground: '#fff',
    controlBackground: '#ccc',
    controlHoverBackground: '#bbb',
    dropcallBackground: '#e94436',
    dropcallHoverBackground: '#9c1a0f',
    panelBackground: '#f6f8fa',
    scrollbarTrack: '#f0f0f0',
    scrollbarThumb: '#c1c1c1',
    scrollbarThumbHover: '#a8a8a8',
    videoContainer: '#fff',
    inputBorderColor: '#d9d9d9',
    inputBackground: '#0000000a',
    inputColor: '#00000040',
    dcCardBackground: '#f6f8fa',
    dcCardColor: '#444',
    dcCardSubtitleColor: '#000',
    dcCardButtonBackground: '#ccc',
    dcCardButtonHoverBackground: '#bbb',
    dcCardButtonColor: '#1f1f1f',
    dcIntervalHistoryBackground: '#dcdcdc'
  }
}

const ThemeContext = createContext<IUseThemeProps>({
  theme: themes.dark, // Default theme
  setTheme: () => {}
})

export const useTheme = (): IUseThemeProps => useContext(ThemeContext)

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  // Determine the initial theme based on system preference or localStorage
  const getInitialTheme = () => {
    const savedTheme = 'dark'
    if (savedTheme) {
      return savedTheme === 'dark' ? themes.dark : themes.light
    }
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    return systemPreference === 'dark' ? themes.dark : themes.light
  }

  const [currentTheme, setCurrentTheme] = useState(getInitialTheme)

  useEffect(() => {
    // Update theme preference in localStorage
  }, [currentTheme])

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === themes.dark ? themes.light : themes.dark))
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm: currentTheme === themes.dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          components: {
            Typography: {
              titleMarginTop: 0
            },
            Tree: {
              colorBgContainer: 'transparent'
            }
          }
        }}
      >
        <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}
