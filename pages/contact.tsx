import Hat from 'components/Hat'
import Layout from 'components/Layout'
import Location from 'components/Location'
import CONTACT from 'config/contact.json'
import {
  Box,
  Button,
  Heading,
  Image,
  ResponsiveContext,
  Text,
  TextArea,
  TextInput,
} from 'grommet'

export default function Contact() {
  const borderRadius = { borderRadius: 0 }
  return (
    <Layout title={CONTACT.title} activeNav={CONTACT.title}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'
          return (
            <Box align="center" pad={{ bottom: 'large' }}>
              <Hat title={CONTACT.subtitle} url="/contact/bg.jpg" />

              <Location
                isMobile={isMobile}
                image={CONTACT.jiangsu.image}
                address={CONTACT.jiangsu.address}
                tel={CONTACT.jiangsu.tel}
                wechat={CONTACT.jiangsu.weixin}
                province={CONTACT.jiangsu.province}
                company={CONTACT.jiangsu.company}
              />

              <Location
                isMobile={isMobile}
                image={CONTACT.zhejiang.image}
                address={CONTACT.zhejiang.address}
                tel={CONTACT.zhejiang.tel}
                wechat={CONTACT.zhejiang.weixin}
                province={CONTACT.zhejiang.province}
                company={CONTACT.zhejiang.company}
              />

              <Box
                width={isMobile ? '90%' : '1000px'}
                height="1px"
                background="#D2D2D2"
              />

              <Box
                width={isMobile ? '90%' : '1000px'}
                gap="small"
                margin={{ vertical: 'large' }}
              >
                <Box
                  direction={isMobile ? 'column' : 'row'}
                  align="center"
                  justify="between"
                  gap="small"
                >
                  <TextInput placeholder="姓名" style={borderRadius} />
                  <TextInput placeholder="电话" style={borderRadius} />
                  <TextInput placeholder="邮箱" style={borderRadius} />
                </Box>
                <TextArea
                  rows={5}
                  placeholder="内容"
                  style={borderRadius}
                  resize={false}
                />
                <Box direction="row" flex>
                  <Button
                    color="#0C0D10"
                    label="提交"
                    primary
                    style={{
                      ...borderRadius,
                      padding: isMobile ? '15px' : '5px 50px',
                      width: isMobile ? '100%' : '',
                      fontWeight: 400,
                    }}
                  />
                </Box>
              </Box>

              <Box
                width={isMobile ? '90%' : '1000px'}
                direction={isMobile ? 'column-reverse' : 'row'}
                align={isMobile ? 'start' : 'center'}
                justify="between"
                pad={isMobile ? 'small' : 'none'}
              >
                <Box gap="small">
                  <Text color="#666" size={isMobile ? '12px' : '16px'}>
                    {CONTACT.apply.mail}
                  </Text>
                  <Text color="#666" size={isMobile ? '12px' : '16px'}>
                    {CONTACT.apply.mail_title}
                  </Text>
                </Box>
                <Text
                  size={isMobile ? '20px' : '32px'}
                  style={{ marginBottom: isMobile ? 20 : 0 }}
                >
                  {CONTACT.apply.title}
                </Text>
              </Box>
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
