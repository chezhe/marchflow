import Layout from 'components/Layout'
import CONTACT from 'config/contact.json'
import { Box, Button, Heading, Image, Text, TextArea, TextInput } from 'grommet'

export default function Contact() {
  const borderRadius = { borderRadius: 0 }
  return (
    <Layout title={CONTACT.title} activeNav={CONTACT.title}>
      <Box align="center" gap="large" pad={{ bottom: 'large' }}>
        <Heading level={3}>{CONTACT.subtitle}</Heading>

        <Box gap="medium">
          <Image src={CONTACT.jiangsu.image} width="1000px" alt="" />
          <Box direction="row" justify="between">
            <Box gap="small">
              <Text color="#666" size="small">
                {CONTACT.jiangsu.address}
              </Text>
              <Text color="#666" size="small">
                {CONTACT.jiangsu.tel}
              </Text>
              <Text color="#666" size="small">
                {CONTACT.jiangsu.weixin}
              </Text>
            </Box>
            <Box align="end" gap="medium">
              <Text weight={600} size="large">
                {CONTACT.jiangsu.province}
              </Text>
              <Text color="#666" size="small">
                {CONTACT.jiangsu.company}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box gap="medium">
          <Image src={CONTACT.zhejiang.image} width="1000px" alt="" />
          <Box direction="row" justify="between">
            <Box gap="small">
              <Text color="#666" size="small">
                {CONTACT.zhejiang.address}
              </Text>
              <Text color="#666" size="small">
                {CONTACT.zhejiang.tel}
              </Text>
              <Text color="#666" size="small">
                {CONTACT.zhejiang.weixin}
              </Text>
            </Box>
            <Box align="end" gap="medium">
              <Text weight={600} size="large">
                {CONTACT.zhejiang.province}
              </Text>
              <Text color="#666" size="small">
                {CONTACT.zhejiang.company}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box width="1000px" height="1px" background="#D2D2D2" />

        <Box width="1000px" gap="small">
          <Box direction="row" align="center" justify="between" gap="small">
            <TextInput placeholder="姓名" style={borderRadius} />
            <TextInput placeholder="电话" style={borderRadius} />
            <TextInput placeholder="邮箱" style={borderRadius} />
          </Box>
          <TextArea rows={5} placeholder="内容" style={borderRadius} />
          <Box direction="row">
            <Button
              color="#0C0D10"
              label="提交"
              primary
              style={{ ...borderRadius, padding: '5px 50px' }}
            />
          </Box>
        </Box>

        <Box width="1000px" direction="row" align="center" justify="between">
          <Box gap="small">
            <Text color="#666" size="small">
              {CONTACT.apply.mail}
            </Text>
            <Text color="#666" size="small">
              {CONTACT.apply.mail_title}
            </Text>
          </Box>
          <Text size="large">{CONTACT.apply.title}</Text>
        </Box>
      </Box>
    </Layout>
  )
}
