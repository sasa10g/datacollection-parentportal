'use client'
import './globals.css'
import { AuthProvider, ContentProvider, ThemeProvider, TimerProvider, useContent } from '@/context'
import { PublicClientApplication } from '@azure/msal-browser'
import { MSAL_CONFIG_PARENT_PORTAL } from '@/utils/azureAuthenticationConfigParentPortal'

export const msalInstance = new PublicClientApplication(MSAL_CONFIG_PARENT_PORTAL)

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <AuthProvider
        currentUser={{ LoginName: 'sgvozdenovic', Email: 'sgvozdenovic@teampbs.com', FullName: 'Sasa Gvozdenovic' }}
      >
        <TimerProvider>
          <ContentProvider>
            <html lang='en'>
              <body>{children}</body>
            </html>
          </ContentProvider>
        </TimerProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
