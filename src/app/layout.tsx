import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import {Theme, ThemePanel} from "@radix-ui/themes";
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
          {children}
          <ThemePanel />
        </Theme>
      </body>
    </html>
  )
}
