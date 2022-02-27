import Hat from 'components/Hat'
import Layout from 'components/Layout'
import SERVICE from 'config/service.json'
import { Box, Button, Heading, Image, ResponsiveContext, Text } from 'grommet'

export default function Service() {
  return (
    <Layout title={SERVICE.title} activeNav={SERVICE.title}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'
          return (
            <Box align="center">
              <Hat title={SERVICE.subtitle} url="/service/bg.jpg" />

              <Box
                direction="row"
                justify="center"
                align="center"
                wrap
                gap="small"
                style={{ position: 'relative', top: isMobile ? -10 : -100 }}
                pad={{ top: '30px' }}
              >
                {SERVICE.items.map((item) => {
                  return (
                    <Box
                      key={item.title}
                      width={isMobile ? '94%' : '400px'}
                      height={isMobile ? '' : '600px'}
                      align="center"
                      justify="between"
                      pad={{ vertical: 'large' }}
                    >
                      <Box align="center" gap="small">
                        <Image
                          width={isMobile ? '100%' : '400px'}
                          src={item.image}
                          alt={item.title}
                          style={{ marginBottom: 30 }}
                        />
                        <Text size="large">{item.title}</Text>
                        <Text color="#999">{item.title_en}</Text>
                        <Text
                          size="xsmall"
                          style={{ width: 300, lineHeight: 2 }}
                        >
                          {item.desc}
                        </Text>
                      </Box>

                      <Button
                        color="#999"
                        label="MORE+"
                        size={isMobile ? 'small' : 'medium'}
                        style={{
                          fontWeight: 400,
                          borderWidth: 1,
                          padding: '5px 50px',
                        }}
                        margin={{ top: isMobile ? '18px' : '0px' }}
                      />
                    </Box>
                  )
                })}
              </Box>
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
