import { Box, Image, Text } from 'grommet'

export default function FixedContact() {
  const style = {
    background: 'rgba(0,0,0,0.6)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: '20px',
    outline: 'none',
    boxShadow: 'unset',
  }
  return (
    <Box
      direction="column"
      style={{ position: 'fixed', top: '30%' }}
      gap="2px"
      className="fixed-contact"
    >
      <Box
        direction="row"
        align="center"
        gap="20px"
        style={style}
        onClick={() => {
          document.getElementById('nb_icon_wrap')?.click()
        }}
      >
        <Image src="/consult/consult.svg" width="28px" alt="consult" />
        <Text color="white" size="20px">
          在线咨询
        </Text>
      </Box>

      <Box direction="row" align="center" gap="20px" style={style}>
        <Image src="/consult/phone.svg" width="28px" alt="consult" />
        <Text color="white" size="20px">
          18768199698
        </Text>
      </Box>

      <Box direction="row" align="center" gap="20px" style={style}>
        <Image src="/consult/qq.svg" width="28px" alt="consult" />
        <Text color="white" size="20px">
          565401796
        </Text>
      </Box>

      <Box direction="row" align="start" gap="20px" style={style}>
        <Image src="/consult/wechat.svg" width="28px" alt="consult" />
        <Box>
          <Text color="white" size="20px">
            marchflow01
          </Text>
          <Image
            className="consult-qrcode"
            src="/footer/qrcode.svg"
            width="110px"
            alt="qrcode"
          />
        </Box>
      </Box>
    </Box>
  )
}
