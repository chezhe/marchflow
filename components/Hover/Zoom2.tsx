import { Box, Text, Image } from 'grommet'

export default function HoverZoom2({
  item,
}: {
  item: { title: string; image: string }
}) {
  return (
    <Box
      align="center"
      justify="end"
      width="244px"
      height="524px"
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
        <Text color="white" size="large" weight={700}>
          {item.title}
        </Text>
      </Box>
    </Box>
  )
}
