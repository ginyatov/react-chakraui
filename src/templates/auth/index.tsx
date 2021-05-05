import React from 'react'

import LayoutPageProperties from '@templates/interfaces/LayoutPageProperties'
import { Box, HStack, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { ROUTES_PATH } from '@routes/RoutesPath'

const AuthLayout = ({ Component, route }: LayoutPageProperties) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minH="100vh"
    backgroundColor="grey.50">
    <Box
      backgroundColor="blue.700"
      p="40px"
      color="white"
      maxW="600px"
      w="100%"
      boxShadow="0 4px 10px 4px rgb(19 35 47 / 30%)">
      <Box as="nav">
        <HStack spacing="24px" mb="32px" justify="center">
          <Link as={NavLink} to={ROUTES_PATH.registration}>
            Зарегистрироваться
          </Link>
          <Link as={NavLink} to={ROUTES_PATH.login}>
            Авторизоваться
          </Link>
        </HStack>
      </Box>
      <Component route={route} />
    </Box>
  </Box>
)

export default AuthLayout
