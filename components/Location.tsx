import { Box, Image, Text } from 'grommet'

export default function Location({
  isMobile,
  image,
  address,
  tel,
  wechat,
  province,
  company,
}) {
  const fsize = isMobile ? '12px' : '16px'
  return (
    <Box
      gap="medium"
      direction="column"
      align="center"
      margin={{ bottom: '50px' }}
    >
      <Image src={image} width={isMobile ? '90%' : '1000px'} alt="" />
      <Box
        direction={isMobile ? 'column-reverse' : 'row'}
        justify={isMobile ? 'start' : 'between'}
        align="start"
        width={isMobile ? '90%' : '100%'}
      >
        <Box
          gap={isMobile ? '10px' : 'small'}
          margin={{ top: isMobile ? '15px' : '0px' }}
        >
          <Text color="#666" size={fsize}>
            {address}
          </Text>
          <Text color="#666" size={fsize}>
            {tel}
          </Text>
          <Text color="#666" size={fsize}>
            {wechat}
          </Text>
        </Box>
        <Box direction="column" align={isMobile ? 'start' : 'end'} gap="medium">
          <Text size={isMobile ? '20px' : '32px'}>{province}</Text>
          <Text color="#666" size={isMobile ? '14px' : '16px'}>
            {company}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
