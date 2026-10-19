import { useForm } from 'react-hook-form';
import { Field, Input, Button, Flex, Box, Heading, Text, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useTogglePassword } from '../auth/Authworker';

interface FormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { isPasswordVisible, togglePassword } = useTogglePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Flex h="100dvh" justify="center" align="center" p="4">
      <Box
        border="2px solid"
        borderColor="gray.400"
        p="8"
        rounded="md"
        w={{ base: 'full', md: '1/3' }}
      >
        <Heading fontSize="2xl" mb="4">
          Welcome to FaceUp
        </Heading>
        <form onSubmit={onSubmit}>
          <Field.Root invalid={!!errors.email} mb={2}>
            <Flex justify="space-between" w="full">
              <Field.Label fontSize="md">Email</Field.Label>
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Flex>
            <Input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
              })}
              fontSize="md"
              placeholder="Enter email"
            />
          </Field.Root>
          <Field.Root invalid={!!errors.password}>
            <Flex justify="space-between" w="full">
              <Field.Label fontSize="md">Password</Field.Label>
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Flex>
            <Flex position="relative" w="full">
              <Input
                {...register('password', {
                  required: 'This Field is required',
                  minLength: { value: 4, message: 'This field must be alteast 4 characters' },
                })}
                placeholder="Please enter your password"
                fontSize="md"
                type={isPasswordVisible ? 'text' : 'password'}
              />
              <Icon position="absolute" top="3" right="3" onClick={togglePassword}>
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </Icon>
            </Flex>
          </Field.Root>
          <Box textAlign="right" mt="2">
            <Text textDecoration="underline">
              <Link to="/signup">Create Account</Link>
            </Text>
          </Box>
          <Button type="submit" w="full" mt="2">
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginPage;
