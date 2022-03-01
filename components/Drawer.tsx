import { Box, Layer, Text } from 'grommet'
import NAV from 'config/nav.json'
import Link from 'next/link'

export default function Drawer({ onClose, activeNav }) {
  return (
    <Layer
      animate
      animation="slide"
      full
      modal
      onClickOutside={onClose}
      style={{ zIndex: 1000 }}
      position="left"
      background="#121212"
    >
      <Box direction="column" gap="small" pad={{ left: '38px', top: '50px' }}>
        {NAV.menu.map((item) => {
          const isActive = activeNav === item.title
          
          return (
            <Box
              key={item.title}
              border={{
                side: 'bottom',
                size: '1px',
                color: 'rgba(255, 255, 255, 0.16)',
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              <Link href={item.link} passHref>
                <Text
                  style={{
                    lineHeight: '42px',
                    fontFamily: 'Microsoft YaHei',
                  }}
                  weight={700}
                  size="small"
                  color={isActive ? '#F0183F' : 'white'}
                >
                  {item.title}
                </Text>
              </Link>
            </Box>
          )
        })}
      </Box>
    </Layer>
  )
}
