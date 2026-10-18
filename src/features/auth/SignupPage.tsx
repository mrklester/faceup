import { Field, Input, Flex, Box, Heading, Button, Text, Icon, useToggle } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useTogglePassword } from './Authworker';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const { isPasswordVisible, togglePassword } = useTogglePassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <Flex justify="center" align="center" h="100vh">
      <Box
        w={{ base: 'full', md: '1/3' }}
        border="2px solid"
        p="8"
        borderColor="gray.400"
        rounded="md"
      >
        <Heading fontSize="2xl" mb="4">
          Create your Account
        </Heading>
        <form onSubmit={onSubmit}>
          <Field.Root mb="4" invalid={!!errors.firstName}>
            <Flex w="full" justify="space-between">
              <Field.Label fontSize="md">First Name</Field.Label>
              <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
            </Flex>
            <Input
              {...register('firstName', {
                required: 'This field is required',
              })}
              placeholder="Enter your first name"
            />
          </Field.Root>
          <Field.Root mb="4" invalid={!!errors.lastName}>
            <Flex w="full" justify="space-between">
              <Field.Label fontSize="md">Last Name</Field.Label>
              <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
            </Flex>
            <Input
              {...register('lastName', {
                required: 'This field is required',
              })}
              placeholder="Enter your last name"
            />
          </Field.Root>
          <Field.Root mb="4" invalid={!!errors.email}>
            <Flex w="full" justify="space-between">
              <Field.Label fontSize="md">Email</Field.Label>
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Flex>

            <Input
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
                required: 'This field is required',
              })}
              placeholder="Enter your email"
            />
          </Field.Root>
          <Field.Root mb="2" invalid={!!errors.password}>
            <Flex w="full" justify="space-between">
              <Field.Label fontSize="md">Password</Field.Label>
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Flex>
            <Flex w="full" position="relative">
              <Input
                {...register('password', {
                  required: 'This field is required',
                  minLength: { value: 4, message: 'Password must be alteast 4 characters' },
                })}
                placeholder="Enter your email"
                type={isPasswordVisible ? 'text' : 'password'}
              />
              <Icon onClick={togglePassword} position="absolute" top="3" right="2">
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </Icon>
            </Flex>
          </Field.Root>
          <Flex justify="end" w="full" mb="2">
            <Text>Already have an account?</Text>
            <Text textDecoration="underline">
              <NavLink to="/login">Login</NavLink>
            </Text>
          </Flex>
          <Button w="full" type="submit">
            Create Account
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default SignupPage;
