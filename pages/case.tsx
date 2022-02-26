import Layout from 'components/Layout'
import CASE from 'config/case.json'
import { Box, Heading, Text, Image, ResponsiveContext } from 'grommet'
import { useState } from 'react'
import _ from 'lodash'

export default function Case() {
  const [active, setActive] = useState('ALL')
  return (
    <Layout title={CASE.title} activeNav={CASE.title}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'
          return (
            <Box align="center">
              <Box
                background="url(/case/bg.jpg)"
                width="100%"
                height="280px"
                align="center"
                justify="end"
                pad={{ bottom: '120px' }}
              >
                <Heading level={3} margin="none">
                  {CASE.subtitle}
                </Heading>
              </Box>
              <Box
                direction="row"
                width="91%"
                align="center"
                justify="between"
                pad={{ vertical: 'medium' }}
                style={{ position: 'relative', top: -10 }}
              >
                {!isMobile && (
                  <Text weight={600} size="large">
                    CASES
                  </Text>
                )}

                <Box
                  direction="row"
                  align="center"
                  gap="medium"
                  style={{ overflowX: 'scroll' }}
                >
                  {CASE.categories.map((item, idx) => {
                    const isActive = active === item
                    return (
                      <Text
                        key={item}
                        color={isActive ? '#000' : '#999'}
                        weight={isActive ? 700 : 500}
                        size="small"
                        style={{
                          borderBottom: isActive ? '2px solid #000' : 'none',
                          lineHeight: 2,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                        onClick={() => setActive(item)}
                      >
                        {item}
                      </Text>
                    )
                  })}
                </Box>
              </Box>

              <Box
                align="center"
                justify="center"
                gap={isMobile ? 'none' : 'medium'}
                pad={{ bottom: isMobile ? 'none' : 'large' }}
              >
                {_.chunk(CASE.items, isMobile ? 1 : 2).map((items, idx) => {
                  return (
                    <Box
                      key={idx}
                      align="center"
                      justify="center"
                      direction="row"
                      gap={isMobile ? 'none' : 'medium'}
                    >
                      {items
                        .filter((t) => {
                          if (active === 'ALL') {
                            return true
                          } else {
                            return active === t.category
                          }
                        })
                        .map((item, index) => {
                          const key = idx * 2 + index + 1
                          return (
                            <Image
                              width={isMobile ? '100%' : '45%'}
                              key={key}
                              src={`/case/${key}.jpg`}
                              alt=""
                            />
                          )
                        })}
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
