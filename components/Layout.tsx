/* eslint-disable @next/next/no-sync-scripts */
import {
  Anchor,
  Box,
  Grommet,
  grommet,
  Header,
  Image,
  Main,
  ResponsiveContext,
  Text,
} from 'grommet'
import Head from 'next/head'
import Link from 'next/link'
import NAV from 'config/nav.json'
import Footer from './Footer'
import { useState } from 'react'
import Drawer from './Drawer'
import FixedContact from './FixedContact'

export default function Layout({
  title,
  children,
  activeNav,
}: {
  title: string
  children: any
  activeNav: string
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Grommet theme={grommet}>
      <Head>
        <title>{`远川 ${title ? `| ${title}` : ''}`}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script type="application/javascript" src="/baidu.js" />
      </Head>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'

          return (
            <Header
              background="#121212"
              height={isMobile ? '44px' : '80px'}
              width="100%"
              style={{ position: 'fixed', left: 0, top: 0, zIndex: 100 }}
              pad={{ horizontal: isMobile ? 'medium' : 'large' }}
            >
              <Link href="/" passHref>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  height={isMobile ? '20px' : ''}
                  style={{ cursor: 'pointer' }}
                />
              </Link>

              {isMenuOpen && (
                <Drawer
                  onClose={() => setIsMenuOpen(false)}
                  activeNav={activeNav}
                />
              )}

              {isMobile ? (
                <Image
                  src={isMenuOpen ? '/x.svg' : '/menu.svg'}
                  width="30px"
                  alt=""
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              ) : (
                <Box direction="row" gap="large">
                  {NAV.menu.map((item) => {
                    const isActive = activeNav === item.title
                    return (
                      <Box
                        key={item.title}
                        border={{
                          side: 'bottom',
                          size: '4px',
                          color: isActive ? '#F0183F' : 'transparent',
                        }}
                        style={{
                          cursor: 'pointer',
                        }}
                      >
                        <Link href={item.link} passHref>
                          <Text
                            style={{
                              lineHeight: '80px',
                              fontFamily: 'Microsoft YaHei',
                            }}
                            weight={700}
                            size="small"
                            color={isActive ? '#F0183F' : 'white'}
                          >
                            {item.title}
                          </Text>
                        </Link>
                      </Box>
                    )
                  })}
                </Box>
              )}
            </Header>
          )
        }}
      </ResponsiveContext.Consumer>

      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'
          return (
            <Main pad={{ top: isMobile ? '44px' : '80px' }}>
              <Box>{children}</Box>
              {!isMobile && <FixedContact />}
            </Main>
          )
        }}
      </ResponsiveContext.Consumer>
      <Footer />
    </Grommet>
  )
}
