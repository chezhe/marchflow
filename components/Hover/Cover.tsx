import { Box, Image } from 'grommet'

export default function HoverCover({
  idx,
  isActive,
  setActive,
  isMobile,
}: {
  idx: number
  isActive: boolean
  setActive: (idx: number) => void
  isMobile: boolean
}) {
  return (
    <Box width={isMobile ? '100%' : '33%'} style={{ position: 'relative' }}>
      <Image
        src={`/case/${idx}.jpg`}
        alt=""
        height="100%"
        onMouseEnter={() => setActive(idx)}
      />
      {isActive && (
        <Box
          background="white"
          style={{
            position: 'absolute',
            background: 'white',
            opacity: 0.55,
            width: '100%',
            height: '100%',
          }}
        ></Box>
      )}
    </Box>
  )
}
