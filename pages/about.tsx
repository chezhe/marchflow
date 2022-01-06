import Layout from 'components/Layout'
import ABOUT from 'config/about.json'
import HOME from 'config/home.json'
import { Box, Heading, Text, Image } from 'grommet'

export default function About() {
  return (
    <Layout title={ABOUT.title} activeNav={ABOUT.title}>
      <Box align="center" gap="large">
        <Heading level={3}>{ABOUT.subtitle}</Heading>

        <Image width="1480px" src="/about/header.png" alt="" />
        <Box direction="row" gap="xlarge">
          {HOME.core.items.map((item, idx) => {
            return (
              <Box key={idx} align="center" gap="small">
                <Box direction="row" align="end" gap="small">
                  <Text size="xxlarge" weight={700}>
                    {item.number}
                  </Text>
                  <Text size="small">{item.quantifier}</Text>
                </Box>
                <Text>{item.desc}</Text>
              </Box>
            )
          })}
        </Box>

        <Box align="center" width="800px" gap="small">
          <Text size="small">{ABOUT.desc1}</Text>
          <Text size="small">{ABOUT.desc2}</Text>
          <Text size="small">{ABOUT.desc3}</Text>
        </Box>

        <Box
          background="url(/about/background.jpg)"
          pad={{ vertical: '100px' }}
          width="100%"
          align="center"
          gap="small"
        >
          <Text weight={700} color="white" size="large">
            {ABOUT.value.title}
          </Text>
          <Text color="#e3e3e3" size="small">
            {ABOUT.value.title_en.toUpperCase()}
          </Text>
          <Text color="white">{ABOUT.value.subtitle1}</Text>
          <Text color="white">{ABOUT.value.subtitle2}</Text>
        </Box>

        <Box align="center" gap="large" pad={{ bottom: '70px' }}>
          <Box>
            <Heading level={3} margin="none">
              {ABOUT.customers.title}
            </Heading>
            <Text color="#999">{ABOUT.customers.title_en}</Text>
          </Box>
          <Image width="1000px" src={ABOUT.customers.image} alt="" />
        </Box>
      </Box>
    </Layout>
  )
}
