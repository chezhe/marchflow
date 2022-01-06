import { Box, Button, Heading, Image, Text } from 'grommet'
import Layout from 'components/Layout'
import HOME from 'config/home.json'

export default function Home() {
  return (
    <Layout title={HOME.title} activeNav={HOME.title}>
      <Box
        pad={{ top: '170px' }}
        height="900px"
        background={`url(${HOME.banner.backgroundImage})`}
        align="center"
        gap="xlarge"
      >
        <Heading color="white" margin="none">
          {HOME.banner.title}
        </Heading>
        <Image src={HOME.banner.companyImage} alt="company" />
        <Box direction="row" gap="medium" wrap>
          {HOME.banner.keywords.map((keyword) => {
            return (
              <Text key={keyword} color="white">
                {keyword}
              </Text>
            )
          })}
        </Box>
      </Box>

      <Box align="center" pad={{ top: '150px', bottom: '90px' }} gap="large">
        <Box gap="medium" align="center">
          <Box align="center">
            <Heading level={3} margin="none">
              {HOME.service.title}
            </Heading>
            <Text color="#999">{HOME.service.title_en}</Text>
          </Box>
          <Text size="small">{HOME.service.subtitle}</Text>
        </Box>
        <Box direction="row" gap="small">
          {HOME.service.items.slice(0, 3).map((item) => {
            return (
              <Image
                key={item.title}
                src={item.image}
                alt={item.title}
                width="244px"
                height="524px"
              />
            )
          })}
          <Box direction="row" width="448px" align="center" wrap>
            {HOME.service.items.slice(3).map((item, idx) => {
              return (
                <Image
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  width="214px"
                  height="168px"
                  margin={{
                    right: idx % 2 === 0 ? '10px' : 'auto',
                    bottom: '10px',
                  }}
                />
              )
            })}
          </Box>
        </Box>

        <Button primary color="#EF3254" label="探索更多" href="/service" />
      </Box>

      <Box
        background="url(/home/core.jpg)"
        pad={{ vertical: '120px' }}
        align="center"
        gap="large"
      >
        <Box align="center">
          <Heading level={2} margin="none" color="white">
            {HOME.core.title}
          </Heading>
          <Text color="#999">{HOME.core.title_en}</Text>
        </Box>

        <Box align="center" margin={{ vertical: 'large' }}>
          <Text color="white" size="86px" weight={700}>
            {HOME.core.subtitle1}
          </Text>
          <Image src={HOME.core.x} width="180px" alt="core" />
          <Text color="white" size="86px" weight={700}>
            {HOME.core.subtitle2}
          </Text>
        </Box>

        <Box direction="row" gap="xlarge">
          {HOME.core.items.map((item, idx) => {
            return (
              <Box key={idx} align="center" gap="small">
                <Box direction="row" align="end" gap="small">
                  <Text color="white" size="xxlarge" weight={700}>
                    {item.number}
                  </Text>
                  <Text color="white" size="small">
                    {item.quantifier}
                  </Text>
                </Box>
                <Text color="white">{item.desc}</Text>
              </Box>
            )
          })}
        </Box>
      </Box>

      <Box
        background="#17181A"
        pad={{ top: '120px', bottom: '70px' }}
        gap="large"
        align="center"
      >
        <Box align="center">
          <Heading level={3} margin="none">
            {HOME.case.title}
          </Heading>
          <Text color="#999">{HOME.case.title_en}</Text>
        </Box>

        <Button primary color="white" label="探索更多" href="/case" />
      </Box>

      <Box pad={{ top: '120px', bottom: '70px' }} gap="large" align="center">
        <Box align="center">
          <Heading level={3} margin="none">
            {HOME.partner.title}
          </Heading>
          <Text color="#999">{HOME.partner.title_en}</Text>
          <Text size="small">{HOME.partner.subtitle}</Text>
        </Box>
        <Box direction="row" align="center" justify="center" gap="small" wrap>
          {HOME.partner.items.map((item) => {
            return (
              <Image
                key={item.title}
                src={item.image}
                alt={item.title}
                width="392px"
              />
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
}
