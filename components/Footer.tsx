import { Anchor, Box, Image, Text, Tip } from 'grommet'
import NAV from 'config/nav.json'
import FOOTER from 'config/footer.json'

export default function Footer() {
  return (
    <Box
      background="url(/footer.jpg)"
      pad={{ top: '500px', bottom: '300px', horizontal: '160px' }}
      direction="row"
      style={{ position: 'relative' }}
    >
      <Box
        background="linear-gradient(41.18deg, #0E0E0E 30.43%, rgba(6, 6, 6, 0.79) 67.49%, rgba(0, 0, 0, 0) 100%)"
        width="100%"
        height="100%"
        direction="column"
        pad={{ horizontal: '160px', top: '300px' }}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Box direction="row" width="100%" justify="between">
          <Box direction="row" gap="large">
            <Box gap="small">
              <Text color="white" weight={700}>
                NAV
              </Text>
              {NAV.menu.map((item) => {
                return (
                  <Anchor
                    key={item.title}
                    label={item.title}
                    href={item.link}
                    color="#999"
                  />
                )
              })}
            </Box>

            <Box gap="small">
              <Text color="white" weight={700}>
                SOCIAL
              </Text>
              {FOOTER.social.map((item) => {
                return (
                  <Tip
                    key={item.title}
                    plain
                    dropProps={{
                      align: {
                        left: 'right',
                      },
                    }}
                    content={
                      <Box direction="row" align="center">
                        <svg
                          viewBox="0 0 22 22"
                          version="1.1"
                          width="22px"
                          height="22px"
                        >
                          <polygon
                            fill="white"
                            points="6 2 18 12 6 22"
                            transform="matrix(-1 0 0 1 30 0)"
                          />
                        </svg>
                        <Box
                          background="white"
                          direction="column"
                          pad="small"
                          round="xsmall"
                        >
                          <Image src={item.hover} alt="" />
                          <Text size="small">{item.hover_text}</Text>
                        </Box>
                      </Box>
                    }
                  >
                    <Image width="48px" src={item.image} alt={item.title} />
                  </Tip>
                )
              })}
            </Box>
          </Box>

          <Box gap="large">
            <Box gap="small" align="start">
              <Image src="/footer/qrcode.svg" alt="" />
              <Text color="white" weight={600} size="large">
                {FOOTER.consult.wecht}
              </Text>
            </Box>
            <Box gap="small">
              <Text color="white" weight={600} size="xxlarge">
                18768199698
              </Text>
              <Text color="white" weight={600} size="large">
                {FOOTER.consult.tel}
              </Text>
            </Box>
          </Box>

          <Box direction="row" gap="small">
            <Box align="end" gap="xsmall" pad={{ vertical: 'xsmall' }}>
              <Text color="white" weight={600} style={{ marginBottom: 0 }}>
                {FOOTER.business.title}
              </Text>
              {FOOTER.business.items.map((item) => {
                return (
                  <Text key={item} color="#999" size="small">
                    {item}
                  </Text>
                )
              })}
              <Text color="white" weight={600} style={{ marginTop: 20 }}>
                {FOOTER.contact.title}
              </Text>
              <Text color="#999" size="small">
                {FOOTER.contact.compnay}
              </Text>
              <Text color="#999" size="small">
                {FOOTER.contact.address}
              </Text>
            </Box>
            <Image src="/footer/logo.svg" alt="" width="110px" />
          </Box>
        </Box>

        <Box margin={{ top: '50px' }}>
          <Text size="small" color="white">
            {FOOTER.copyright}
          </Text>
          <Text size="small" color="white">
            {FOOTER.record}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
