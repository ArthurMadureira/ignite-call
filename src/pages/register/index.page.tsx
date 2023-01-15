import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { AxiosError } from 'axios'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '../../lib/axios'
import { Container, Form, FormError, Header } from './styles'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'The username must be at least 3 letters' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Username can only contain letters and hyphens',
    })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'The name must be at least 3 letters' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      await router.push('/register/connect-calendar')
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        alert(error.response.data.message)
        return
      }

      console.error(error)
    }
  }

  return (
    <>
      <NextSeo title="Create an account | Schedulio" />

      <Container>
        <Header>
          <Heading as="strong" size="2xl">
            Welcome to Schedulio!
          </Heading>
          <Text>
            We need some information to create your profile! Oh, you can edit
            this information later.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </Header>

        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size="sm">Username</Text>
            <TextInput
              prefix="cal.com/"
              placeholder="your-username"
              {...register('username')}
            />

            <FormError size="sm">{errors?.username?.message}</FormError>
          </label>

          <label>
            <Text size="sm">Full name</Text>
            <TextInput placeholder="Your name" {...register('name')} />

            <FormError size="sm">{errors?.name?.message}</FormError>
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Next Step
            <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}
