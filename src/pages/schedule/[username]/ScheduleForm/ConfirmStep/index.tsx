import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { ConfirmForm, FormActions, FormHeader } from './styles'

export function ConfirmStep() {
  function handleConfirmScheduling(data: any) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          January 9, 2023
        </Text>

        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Full name</Text>
        <TextInput placeholder="Your name" />
      </label>

      <label>
        <Text>Email address</Text>
        <TextInput type="email" placeholder="johndoe@example.com" />
      </label>

      <label>
        <Text>Observations</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </FormActions>
    </ConfirmForm>
  )
}
