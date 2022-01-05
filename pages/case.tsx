import Layout from 'components/Layout'
import CASE from 'config/case.json'
import { Box } from 'grommet'

export default function Case() {
  return (
    <Layout title={CASE.title} activeNav={CASE.title}>
      <Box></Box>
    </Layout>
  )
}
