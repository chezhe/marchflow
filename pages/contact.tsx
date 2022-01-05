import Layout from 'components/Layout'
import CONTACT from 'config/contact.json'
import { Box } from 'grommet'

export default function Contact() {
  return (
    <Layout title={CONTACT.title} activeNav={CONTACT.title}>
      <Box></Box>
    </Layout>
  )
}
