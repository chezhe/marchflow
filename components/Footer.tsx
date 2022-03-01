import {
  Anchor,
  Box,
  Button,
  Image,
  ResponsiveContext,
  Text,
  Tip,
} from 'grommet'
import NAV from 'config/nav.json'
import FOOTER from 'config/footer.json'

export default function Footer() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        const isMobile = size === 'small'
        if (isMobile) {
          return <Mobile />
        }
        return <Desktop />
      }}
    </ResponsiveContext.Consumer>
  )
}

const Mobile = () => {
  return (
    <Box background="url(/footer.jpg)" direction="column" width="100%">
      <Box
        style={{
          background:
            'linear-gradient(41.18deg, #0E0E0E 30.43%, rgba(6, 6, 6, 0.79) 67.49%, rgba(0, 0, 0, 0) 100%',
          
        }}
        pad={{ bottom:  '100px' }}
      >
        <Box
          direction="column"
          align="center"
          gap="8px"
          margin={{ top: '30px' }}
        >
          <Text size="18px" weight="bold" color="white">
            18768199698
          </Text>
          <Text size="10px" weight="bold" color="white">
            {FOOTER.consult.tel}
          </Text>

          <Image src={FOOTER.social[0].hover} width="100px" alt="" />
          <Text size="10px" weight="bold" color="white">
            {FOOTER.consult.wecht}
          </Text>
        </Box>

        <Box
          direction="column"
          align="center"
          gap="8px"
          margin={{ top: '24px' }}
        >
          <Text size="12px" weight="bold" color="white">
            {FOOTER.contact.title}
          </Text>
          <Text size="10px" color="#999" style={{ whiteSpace: 'nowrap' }}>
            {FOOTER.contact.compnay}
          </Text>
          <Text size="10px" color="#999" style={{ whiteSpace: 'nowrap' }}>
            {FOOTER.contact.address}
          </Text>
        </Box>

        <Box
          direction="column"
          align="center"
          gap="8px"
          margin={{ top: '34px' }}
        >
          <Text size="10px" color="white" style={{ whiteSpace: 'nowrap' }}>
            {FOOTER.copyright}
          </Text>
          <Text size="10px" color="white" style={{ whiteSpace: 'nowrap' }}>
            {FOOTER.record}
          </Text>
        </Box>

        <Box
          direction="row"
          width="100%"
          margin={{ top: '30px' }}
          style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 10 }}
        >
          <Button
            icon={<Image src="/message.svg" alt="" />}
            primary
            color="rgba(122, 151, 254, 1)"
            style={{
              borderRadius: 0,
              flex: 1,
              textAlign: 'center',
              padding: '15px 0',
            }}
          />
          <Button
            icon={<Image src="/phone.svg" alt="" />}
            primary
            color="rgba(122, 254, 246, 1)"
            style={{
              borderRadius: 0,
              flex: 1,
              textAlign: 'center',
              padding: '15px 0',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

const Desktop = () => {
  return (
    <Box
      background="url(/footer.jpg)"
      pad={{
        top: '500px', bottom: '300px', horizontal: '160px'
      }}
      direction="row"
      style={{
        position: 'relative',
        backgroundAttachment: 'fixed',
        height: '100vh',
        minHeight: '800px'
      }}
    >
      <Box
        background="linear-gradient(41.18deg, #0E0E0E 30.43%, rgba(6, 6, 6, 0.79) 67.49%, rgba(0, 0, 0, 0) 100%)"
        width="100%"
        height="100%"
        direction="column"
        pad={{ horizontal: '160px', top: '200px' }}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Box direction="row" width="100%" justify="between">
          <Box direction="row" gap="120px">
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
                    size="small"
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
              <Text
                color="white"
                weight={600}
                style={{ marginBottom: 0 }}
                size="16px"
              >
                {FOOTER.business.title}
              </Text>
              {FOOTER.business.items.map((item) => {
                return (
                  <Text key={item} color="#999" size="small">
                    {item}
                  </Text>
                )
              })}
              <Text
                color="white"
                weight={600}
                style={{ marginTop: 20 }}
                size="16px"
              >
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

        <Box margin={{ top: '50px' }} gap="small">
          <Text size="16px" color="white">
            {FOOTER.copyright}
          </Text>
          <Text size="16px" color="white">
            {FOOTER.record}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
