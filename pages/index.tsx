import { Box, Button, Heading, Image, Text } from 'grommet'
import Layout from 'components/Layout'
import HOME from 'config/home.json'
import CASE from 'config/case.json'
import { useState } from 'react'
import _ from 'lodash'
import HoverCover from 'components/Hover/Cover'
import HoverZoom from 'components/Hover/Zoom'
import HoverZoom2 from 'components/Hover/Zoom2'

export default function Home() {
  const [active, setActive] = useState(1)
  return (
    <Layout title={HOME.title} activeNav={HOME.title}>
      <Box
        pad={{ top: '170px' }}
        height="900px"
        background={`url(${HOME.banner.backgroundImage})`}
        align="center"
        gap="xlarge"
      >
        <Heading color="white" margin="none" size="72px">
          {HOME.banner.title}
        </Heading>
        <Image src={HOME.banner.companyImage} alt="company" />
        <Box direction="row" gap="medium" wrap>
          {HOME.banner.keywords.map((keyword) => {
            return (
              <Text key={keyword} color="white" size="24px">
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
          <Text size="medium">{HOME.service.subtitle}</Text>
        </Box>
        <Box direction="row" align="center" justify="center" gap="small">
          {HOME.service.items.slice(0, 3).map((item) => {
            return <HoverZoom2 key={item.title} item={item} />
          })}
          <Box direction="column" gap="small">
            {_.chunk(HOME.service.items.slice(3), 2).map((items, idx) => {
              return (
                <Box direction="row" gap="small" key={idx}>
                  {items.map((item) => {
                    return <HoverZoom key={item.title} item={item} />
                  })}
                </Box>
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
                  <Text
                    color="white"
                    size="64px"
                    style={{ lineHeight: '64px' }}
                    weight={700}
                  >
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

        <Box direction="row" wrap={false}>
          <Image
            src={`/case/${active}.jpg`}
            width="50%"
            style={{ objectFit: 'contain' }}
            alt=""
          />
          <Box direction="row" wrap>
            {_.chunk(CASE.items.slice(0, 9), 3).map((items, idx) => {
              return (
                <Box key={idx} direction="row" wrap={false}>
                  {items.map((item, index) => {
                    const _idx = idx * 3 + index + 1
                    console.log(active, _idx)
                    return (
                      <HoverCover
                        key={_idx}
                        idx={_idx}
                        setActive={setActive}
                        isActive={_idx === active}
                      />
                    )
                  })}
                </Box>
              )
            })}
          </Box>
        </Box>
        <Button primary color="white" label="探索更多" href="/case" />
      </Box>

      <Box pad={{ top: '120px', bottom: '70px' }} gap="large" align="center">
        <Box align="center" gap="medium">
          <Box align="center">
            <Heading level={3} margin="none">
              {HOME.partner.title}
            </Heading>
            <Text color="#999">{HOME.partner.title_en}</Text>
          </Box>
          <Text size="medium">{HOME.partner.subtitle}</Text>
        </Box>
        <Box direction="row" align="center" justify="center" gap="small" wrap>
          <Image src="/home/partner/index.png" alt="" />
        </Box>
      </Box>
    </Layout>
  )
}
