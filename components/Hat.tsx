import { Box, Heading, ResponsiveContext, Text } from 'grommet'

export default function Hat({ title, url }) {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        const isMobile = size === 'small'
        return (
          <Box
            background={`url(${url})`}
            width="100%"
            height={isMobile ? '60px' : '180px'}
            align="center"
            justify="end"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            pad={{ bottom: isMobile ? '10px' : '65px' }}
          >
            <Text weight="bolder" size={isMobile ? '18px' : '28px'}>
              {title}
            </Text>
          </Box>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}
