import { Box, Button, Heading, Image, ResponsiveContext, Text } from 'grommet'
import Layout from 'components/Layout'
import HOME from 'config/home.json'
import CASE from 'config/case.json'
import { useContext, useState } from 'react'
import _ from 'lodash'
import HoverCover from 'components/Hover/Cover'
import HoverZoom from 'components/Hover/Zoom'
import HoverZoom2 from 'components/Hover/Zoom2'

export default function Home() {
  const [active, setActive] = useState(1)

  return (
    <Layout title={HOME.title} activeNav={HOME.title}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobile = size === 'small'

          return (
            <Box>
              <Box
                pad={{ top: isMobile ? '44px' : '170px' }}
                height={isMobile ? '450px' : '900px'}
                background={`url(${HOME.banner.backgroundImage})`}
                align="center"
                gap="xlarge"
                width={isMobile ? '100%' : ''}
              >
                <Heading
                  color="white"
                  margin="none"
                  size={isMobile ? '23px' : '72px'}
                >
                  {HOME.banner.title}
                </Heading>
                <Image
                  src={HOME.banner.companyImage}
                  alt="company"
                  width={isMobile ? '50%' : ''}
                />
                <Box
                  direction="row"
                  justify="center"
                  gap="medium"
                  wrap
                  pad={isMobile ? 'medium' : ''}
                >
                  {HOME.banner.keywords.map((keyword) => {
                    return (
                      <Text
                        key={keyword}
                        color="white"
                        style={{ lineHeight: 2 }}
                        size={isMobile ? '16px' : '24px'}
                      >
                        {keyword}
                      </Text>
                    )
                  })}
                </Box>
              </Box>

              <Box
                align="center"
                pad={{
                  top: isMobile ? '25px' : '150px',
                  bottom: isMobile ? '20px' : '90px',
                }}
                gap="large"
                className="logo-bg"
              >
                <Box gap="medium" align="center">
                  <Box align="center">
                    <Heading level={3} margin="none">
                      {HOME.service.title}
                    </Heading>
                    <Text color="#999">{HOME.service.title_en}</Text>
                  </Box>
                  <Text size={isMobile ? 'small' : 'medium'}>
                    {HOME.service.subtitle}
                  </Text>
                </Box>
                <Box
                  direction={isMobile ? 'column' : 'row'}
                  align="center"
                  justify="center"
                  gap="small"
                >
                  <Box
                    direction="row"
                    gap="small"
                    width={isMobile ? '90%' : ''}
                  >
                    {HOME.service.items.slice(0, 3).map((item) => {
                      return (
                        <HoverZoom2
                          key={item.title}
                          item={item}
                          isMobile={isMobile}
                        />
                      )
                    })}
                  </Box>
                  <Box
                    direction="column"
                    gap="small"
                    width={isMobile ? '90%' : ''}
                  >
                    {_.chunk(HOME.service.items.slice(3), 2).map(
                      (items, idx) => {
                        return (
                          <Box direction="row" gap="small" key={idx}>
                            {items.map((item) => {
                              return (
                                <HoverZoom
                                  key={item.title}
                                  item={item}
                                  isMobile={isMobile}
                                />
                              )
                            })}
                          </Box>
                        )
                      }
                    )}
                  </Box>
                </Box>

                <Button
                  primary
                  color="#EF3254"
                  label="探索更多"
                  href="/service"
                  size={isMobile ? 'small' : 'medium'}
                  style={{ fontWeight: 400, padding: '5px 40px' }}
                />
              </Box>

              <Box
                background="url(/home/core.jpg)"
                pad={{ top: '100px', bottom: '100px' }}
                align="center"
                gap="large"
              >
                <Box
                  align="center"
                  margin={{ top: '50px' }}
                  gap={isMobile ? '13px' : ''}
                >
                  <Text
                    color="white"
                    size={isMobile ? '28px' : '86px'}
                    weight={700}
                  >
                    {HOME.core.subtitle1}
                  </Text>
                  <Image
                    src={HOME.core.x}
                    width={isMobile ? '80px' : '180px'}
                    alt="core"
                  />
                  <Text
                    color="white"
                    size={isMobile ? '28px' : '86px'}
                    weight={700}
                  >
                    {HOME.core.subtitle2}
                  </Text>
                </Box>

                <Box
                  direction="row"
                  gap={isMobile ? 'medium' : 'xlarge'}
                  margin={{ top: isMobile ? '0px' : '' }}
                >
                  {HOME.core.items.map((item, idx) => {
                    return (
                      <Box key={idx} align="center" gap="small">
                        <Box direction="row" align="end" gap="small">
                          <Text
                            color="white"
                            size={isMobile ? '20px' : '64px'}
                            style={{ lineHeight: isMobile ? '20px' : '64px' }}
                            weight={700}
                          >
                            {item.number}
                          </Text>
                          <Text color="white" size={isMobile ? '8px' : 'small'}>
                            {item.quantifier}
                          </Text>
                        </Box>
                        <Text color="white" size={isMobile ? '8px' : 'medium'}>
                          {item.desc}
                        </Text>
                      </Box>
                    )
                  })}
                </Box>
              </Box>

              <Box
                background="#17181A"
                pad={{
                  top: isMobile ? '25px' : '120px',
                  bottom: isMobile ? '20px' : '70px',
                }}
                gap="large"
                align="center"
              >
                <Box align="center">
                  <Text size={isMobile ? '14px' : 'xlarge'} weight={800}>
                    {HOME.case.title}
                  </Text>
                  <Text color="#999" size={isMobile ? '10px' : 'medium'}>
                    {HOME.case.title_en}
                  </Text>
                </Box>

                <Box direction="row" wrap={false}>
                  {!isMobile && (
                    <Box width="50%">
                      <Image
                        src={`/case/${active}.jpg`}
                        width="100%"
                        style={{ objectFit: 'contain' }}
                        alt=""
                      />
                    </Box>
                  )}
                  <Box direction="row" width="50%" wrap>
                    {_.chunk(CASE.items.slice(0, 9), isMobile ? 1 : 3).map(
                      (items, idx) => {
                        return (
                          <Box key={idx} direction="row" wrap={false}>
                            {items.map((item, index) => {
                              const _idx = idx * (isMobile ? 1 : 3) + index + 1

                              return (
                                <HoverCover
                                  key={_idx}
                                  idx={_idx}
                                  setActive={setActive}
                                  isActive={!isMobile && _idx === active}
                                  isMobile={isMobile}
                                />
                              )
                            })}
                          </Box>
                        )
                      }
                    )}
                  </Box>
                </Box>
                <Button
                  primary
                  color="white"
                  label="探索更多"
                  href="/case"
                  size={isMobile ? 'small' : 'medium'}
                  style={{ fontWeight: 400, padding: '5px 40px' }}
                />
              </Box>

              <Box
                pad={{ top: isMobile ? '30px' : '120px', bottom: '70px' }}
                gap="large"
                align="center"
                className="logo-bg"
              >
                <Box align="center" gap="medium">
                  <Box align="center" gap="small">
                    <Text weight="bolder" size={isMobile ? '12px' : '28px'}>
                      {HOME.partner.title}
                    </Text>
                    <Text color="#999" size={isMobile ? '10px' : 'medium'}>
                      {HOME.partner.title_en}
                    </Text>
                  </Box>
                  <Text size={isMobile ? '10px' : 'medium'}>
                    {HOME.partner.subtitle}
                  </Text>
                </Box>
                <Box
                  direction="row"
                  align="center"
                  justify="center"
                  gap="small"
                  wrap
                  width="100%"
                >
                  <Image
                    width={isMobile ? '90%' : '1000px'}
                    src="/home/partner.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
