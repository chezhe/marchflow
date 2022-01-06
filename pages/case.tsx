import Layout from 'components/Layout'
import CASE from 'config/case.json'
import { Box, Heading, Text } from 'grommet'
import { useState } from 'react'

export default function Case() {
  const [active, setActive] = useState('ALL')
  return (
    <Layout title={CASE.title} activeNav={CASE.title}>
      <Box align="center">
        <Heading level={3}>{CASE.subtitle}</Heading>
        <Box direction="row" width="1000px" align="center" justify="between">
          <Text weight={600} size="large">
            CASES
          </Text>

          <Box direction="row" align="center" gap="small">
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
                  }}
                >
                  {item}
                </Text>
              )
            })}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
