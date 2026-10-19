import { Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { FaUserFriends } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import type { IconType } from 'react-icons';

interface INavItem {
  label: string;
  to: string;
  icon: IconType;
}

const HomePageSidebar = () => {
  const navItem: INavItem[] = [
    { label: 'Mark Lester Maranan', to: '/profile', icon: CgProfile },
    {
      label: 'Friends',
      to: '/friends',
      icon: FaUserFriends,
    },
  ];

  return (
    <Flex direction="column" w="1/3">
      <Heading p="2" fontSize="2xl">
        FaceUp
      </Heading>
      <Stack>
        {navItem.map((item) => {
          return (
            <Flex
              key={item.to}
              textAlign="left"
              _hover={{ background: 'gray.100' }}
              p="2"
              align="center"
              spaceX="2"
              rounded="sm"
            >
              <Icon fontSize="2xl">{<item.icon />}</Icon>
              <Text> {item.label}</Text>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default HomePageSidebar;
