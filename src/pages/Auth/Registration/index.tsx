import React from 'react'
import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useCustomToast } from '@hooks/useCustomToast'
import { InputDefault } from '@components/ui/Forms/InputDefault'
import { InputPassword } from '@components/ui/Forms/InputPassword'
import * as Yup from 'yup'
import api from '@api/index'

const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Невалидный e-mail')
    .max(254, 'Не больше 255 символов')
    .required('Обязательное поле'),
  password1: Yup.string()
    .min(8, 'Пароль должен содержать как минимум 8 символов.')
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'Пароль должен содержать цифры, строчные латинские буквы, прописные латинские буквы.',
    )
    .required('Обязательное поле'),
  password2: Yup.string()
    .when('password1', {
      is: (val: string) => val && val.length > 0,
      then: Yup.string().oneOf([Yup.ref('password1')], 'Пароли не совпадают'),
    })
    .min(8, 'Пароль должен содержать как минимум 8 символов.')
    .required('Обязательное поле'),
})

const Registration = () => {
  const toast = useCustomToast()
  return (
    <Box>
      <Heading mb="30px" textAlign="center">
        Регистрация
      </Heading>

      <Formik
        initialValues={{
          email: '',
          password1: '',
          password2: '',
        }}
        validationSchema={Schema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await api.auth.registration(values)

            console.log(response)
          } catch (error) {
            console.log(error)
            toast({
              text: 'Ошибка на сервере. Повтори позже.',
              type: 'error',
            })
          }

          setSubmitting(false)
        }}>
        {({ handleSubmit, isSubmitting, isValid, dirty }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={'20px'} align="stretch">
              <InputDefault
                name="email"
                type="email"
                label="E-mail"
                autoComplete="username"
              />
              <InputPassword
                name="password1"
                label="Пароль"
                autoComplete="current-password"
              />
              <InputPassword
                name="password2"
                label="Повторите пароль"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={!(isValid && dirty)}
                colorScheme="blue">
                Зарегистрироваться
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default Registration
