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
import { useRouter } from 'next/router'
import Footer from './Footer'

export default function Layout({
  title,
  children,
  activeNav,
}: {
  title: string
  children: any
  activeNav: string
}) {
  return (
    <Grommet theme={grommet}>
      <Head>
        <title>{`远川 ${title ? `| ${title}` : ''}`}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="no-referrer" />
      </Head>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'

          return (
            <Header
              background="#121212"
              height="80px"
              width="100%"
              style={{ position: 'fixed', left: 0, top: 0 }}
              pad={{ horizontal: 'large' }}
            >
              <Anchor icon={<Image src="/logo.svg" alt="logo" />} href="/" />

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
            </Header>
          )
        }}
      </ResponsiveContext.Consumer>
      <Main pad={{ top: '80px' }}>
        <ResponsiveContext.Consumer>
          {(size) => {
            const isMobile = size === 'small'
            return <Box>{children}</Box>
          }}
        </ResponsiveContext.Consumer>
      </Main>
      <Footer />
    </Grommet>
  )
}
