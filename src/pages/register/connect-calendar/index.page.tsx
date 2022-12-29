import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
// import { api } from '../../lib/axios'
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  // async function handleRegister(data: RegisterFormData) {}

  return (
    <Container>
      <Header>
        <Heading as="strong" size="2xl">
          Connect your calendar!!
        </Heading>
        <Text>
          Connect your calendar to automatically check busy hours and new events
          as they are scheduled.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>

          <Button variant="secondary">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit" disabled={true}>
          Next Step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
