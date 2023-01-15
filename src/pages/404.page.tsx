import { Heading, Text } from '@ignite-ui/react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { Container } from './register/styles'

export default function custom404() {
  return (
    <>
      <NextSeo title="404 Error" noindex />
      <Container css={{ marginTop: '20rem', textAlign: 'center' }}>
        <Heading size="3xl">Oops! 🥲</Heading>

        <Text size="md" css={{ marginTop: '1rem' }}>
          The page you're looking for doesn't exist
        </Text>

        <Text css={{ marginTop: '2rem' }}>
          Back to the{' '}
          <Link href="/" style={{ color: '#00B37E' }}>
            home page
          </Link>
        </Text>
      </Container>
    </>
  )
}
