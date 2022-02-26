import Layout from 'components/Layout'
import ABOUT from 'config/about.json'
import HOME from 'config/home.json'
import { Box, Heading, Text, Image, ResponsiveContext } from 'grommet'

export default function About() {
  return (
    <Layout title={ABOUT.title} activeNav={ABOUT.title}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'
          const numSize = isMobile ? '20px' : '64px'
          const quantSize = isMobile ? '8px' : '20px'
          const subSize = isMobile ? '8px' : '24px'
          const descSize = isMobile ? '12px' : '19px'
          return (
            <Box align="center">
              <Box
                background="url(/about/bg.jpg)"
                width="100%"
                height="280px"
                align="center"
                justify="end"
                pad={{ bottom: '80px' }}
              >
                <Heading level={3}>{ABOUT.subtitle}</Heading>
              </Box>

              <Image
                width={isMobile ? '100%' : '1480px'}
                src="/about/header.png"
                alt=""
                style={{ position: 'relative', top: -50 }}
              />

              <Box direction="row" gap={isMobile ? 'medium' : 'xlarge'}>
                {HOME.core.items.map((item, idx) => {
                  return (
                    <Box key={idx} align="center" gap="small">
                      <Box direction="row" align="end" gap="small">
                        <Text
                          size={numSize}
                          style={{ lineHeight: numSize }}
                          weight={700}
                        >
                          {item.number}
                        </Text>
                        <Text size={quantSize}>{item.quantifier}</Text>
                      </Box>
                      <Text size={subSize}>{item.desc}</Text>
                    </Box>
                  )
                })}
              </Box>

              <Box
                align="center"
                width="1000px"
                gap="small"
                margin={{ vertical: 'large' }}
                pad={isMobile ? 'medium' : 'none'}
              >
                <Text size={descSize}>{ABOUT.desc1}</Text>
                <Text size={descSize} style={{ lineHeight: 2 }}>
                  {ABOUT.desc2}
                </Text>
                <Text size={descSize} style={{ lineHeight: 2 }}>
                  {ABOUT.desc3}
                </Text>
              </Box>

              <Box
                background="url(/about/background.jpg)"
                pad={{ vertical: '100px' }}
                width="100%"
                align="center"
                gap="40px"
                style={{
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover',
                }}
              >
                <Box align="center" gap="20px">
                  <Text
                    weight={700}
                    color="white"
                    size={isMobile ? '18px' : 'large'}
                  >
                    {ABOUT.value.title}
                  </Text>
                  <Text color="#e3e3e3" size={isMobile ? '12px' : 'small'}>
                    {ABOUT.value.title_en.toUpperCase()}
                  </Text>
                </Box>

                <Box align="center" gap="20px">
                  <Text color="white" size={isMobile ? '12px' : 'medium'}>
                    {ABOUT.value.subtitle1}
                  </Text>
                  <Text color="white" size={isMobile ? '12px' : 'medium'}>
                    {ABOUT.value.subtitle2}
                  </Text>
                </Box>
              </Box>

              <Box
                align="center"
                gap="large"
                margin={{ vertical: 'large' }}
                pad={{ bottom: '70px' }}
              >
                <Box align="center">
                  <Heading level={3} margin="none">
                    {ABOUT.customers.title}
                  </Heading>
                  <Text color="#999">{ABOUT.customers.title_en}</Text>
                </Box>
                <Image
                  width={isMobile ? '90%' : '1000px'}
                  src={ABOUT.customers.image}
                  alt=""
                />
              </Box>
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
