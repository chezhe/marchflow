import { Box, Text, Image } from 'grommet'

export default function HoverZoom({
  item,
  isMobile,
}: {
  item: { title: string; image: string }
  isMobile: boolean
}) {
  return (
    <Box
      align="center"
      justify="end"
      width="214px"
      height="168px"
      className="hover-zoom"
    >
      <Box className="zoom-img" background={`url(${item.image})`}></Box>
      <Box
        style={{
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
          background: 'transparent',
        }}
        justify="end"
        pad={{ bottom: 'small' }}
      >
        <Text color="white" size={isMobile ? '13px' : 'large'} weight={700}>
          {item.title}
        </Text>
      </Box>
    </Box>
  )
}
