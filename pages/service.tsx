import Layout from 'components/Layout'
import SERVICE from 'config/service.json'
import { Box } from 'grommet'

export default function Service() {
  return (
    <Layout title={SERVICE.title} activeNav={SERVICE.title}>
      <Box></Box>
    </Layout>
  )
}
