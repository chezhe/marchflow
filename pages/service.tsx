import Layout from 'components/Layout'
import SERVICE from 'config/service.json'
import { Box, Button, Heading, Image, Text } from 'grommet'

export default function Service() {
  return (
    <Layout title={SERVICE.title} activeNav={SERVICE.title}>
      <Box align="center">
        <Heading level={3}>{SERVICE.subtitle}</Heading>

        <Box direction="row" justify="center" align="center" wrap gap="small">
          {SERVICE.items.map((item) => {
            return (
              <Box
                key={item.title}
                width="400px"
                height="550px"
                align="center"
                justify="between"
                pad={{ vertical: 'large' }}
              >
                <Box align="center" gap="small">
                  <Image width="400px" src={item.image} alt={item.title} />
                  <Text size="large" weight={600}>
                    {item.title}
                  </Text>
                  <Text color="#999">{item.title_en}</Text>
                  <Text size="small">{item.desc}</Text>
                </Box>

                <Button label="+MORE" />
              </Box>
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
}
