import Layout from 'components/Layout'
import ABOUT from 'config/about.json'
import { Box } from 'grommet'

export default function About() {
  return (
    <Layout title={ABOUT.title} activeNav={ABOUT.title}>
      <Box></Box>
    </Layout>
  )
}
