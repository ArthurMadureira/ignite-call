import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import { ClaimUserNameForm } from './components/ClaimUserNameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Make your schedule uncomplicated | Schedulio"
        description="Connect your calendar and let people book appointments in their
        spare time."
      />
      <Container>
        <Hero>
          <Heading size="4xl">Hassle-free scheduling</Heading>
          <Text size="xl">
            Connect your calendar and let people book appointments in their
            spare time.
          </Text>
          <ClaimUserNameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="App preview image"
          />
        </Preview>
      </Container>
    </>
  )
}
