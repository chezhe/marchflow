import Layout from 'components/Layout'
import SERVICE from 'config/service.json'
import { Box, Button, Heading, Image, Text } from 'grommet'

export default function Service() {
  return (
    <Layout title={SERVICE.title} activeNav={SERVICE.title}>
      <Box align="center">
        <Box
          background="url(/service/bg.jpg)"
          width="100%"
          height="280px"
          align="center"
          justify="end"
          pad={{ bottom: '80px' }}
        >
          <Heading level={3}>{SERVICE.subtitle}</Heading>
        </Box>

        <Box
          direction="row"
          justify="center"
          align="center"
          wrap
          gap="small"
          style={{ position: 'relative', top: -100 }}
        >
          {SERVICE.items.map((item) => {
            return (
              <Box
                key={item.title}
                width="400px"
                height="600px"
                align="center"
                justify="between"
                pad={{ vertical: 'large' }}
              >
                <Box align="center" gap="small">
                  <Image
                    width="400px"
                    src={item.image}
                    alt={item.title}
                    style={{ marginBottom: 30 }}
                  />
                  <Text size="large">{item.title}</Text>
                  <Text color="#999">{item.title_en}</Text>
                  <Text size="xsmall" style={{ width: 300, lineHeight: 2 }}>
                    {item.desc}
                  </Text>
                </Box>

                <Button
                  color="#999"
                  label="MORE+"
                  style={{
                    fontWeight: 400,
                    borderWidth: 1,
                    padding: '5px 50px',
                  }}
                />
              </Box>
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
}
