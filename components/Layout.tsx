import {
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

export default function Layout({
  title,
  children,
  activeNav,
}: {
  title: string
  children: any
  activeNav: string
}) {
  const router = useRouter()
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
              pad={{ horizontal: 'large' }}
            >
              <Image src="/logo.svg" alt="logo" />

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
                          }}
                          weight={700}
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
      <Main>
        <ResponsiveContext.Consumer>
          {(size) => {
            const isMobile = size === 'small'
            return <Box>{children}</Box>
          }}
        </ResponsiveContext.Consumer>
      </Main>
    </Grommet>
  )
}
