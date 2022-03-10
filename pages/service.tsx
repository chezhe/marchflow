import Hat from 'components/Hat'
import Layout from 'components/Layout'
import SERVICE from 'config/service.json'
import { Box, Button, Heading, Image, ResponsiveContext, Text } from 'grommet'
import _ from 'lodash'

export default function Service() {
  console.log(SERVICE.items)
  console.log(_.chunk(SERVICE.items, 3))
  return (
    <Layout title={SERVICE.title} activeNav={SERVICE.title}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'
          return (
            <Box align="center">
              <Hat title={SERVICE.subtitle} url="/service/bg.jpg" />

              <Box
                direction="column"
                justify="center"
                align="center"
                style={{ position: 'relative', top: isMobile ? -10 : -100 }}
                pad={{ top: '30px' }}
              >
                {_.chunk(SERVICE.items, isMobile ? 1 : 3).map(
                  (items, index) => {
                    return (
                      <Box
                        key={index}
                        direction="row"
                        align="center"
                        justify={isMobile ? 'center' : 'start'}
                        gap="small"
                      >
                        {items.map((item, idx) => {
                          return (
                            <Box
                              key={item.title}
                              width={isMobile ? '94%' : '400px'}
                              height={isMobile ? '' : '520px'}
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
                                <Text color="#999">
                                  {item.title_en.toUpperCase()}
                                </Text>
                                <Text
                                  size="xsmall"
                                  textAlign="center"
                                  style={{ width: 320, lineHeight: 2 }}
                                >
                                  {item.desc}
                                </Text>
                              </Box>
                            </Box>
                          )
                        })}
                      </Box>
                    )
                  }
                )}
              </Box>
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
