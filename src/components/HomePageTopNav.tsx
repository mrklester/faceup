import { NavLink } from 'react-router-dom';
import { Flex, InputGroup, Input, Icon } from '@chakra-ui/react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { RiVideoLine } from 'react-icons/ri';
import { TbUserSquareRounded } from 'react-icons/tb';
import { MdOutlineStorefront } from 'react-icons/md';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { FaCircleUser } from 'react-icons/fa6';

const HomePageTopNav = () => {
  return (
    <Flex p="2" shadow="md" align="center" px="6">
      <Flex w="1/3">
        <InputGroup startElement={<FaSearch />}>
          <Input placeholder="Search here" />
        </InputGroup>
      </Flex>
      <Flex spaceX="4" w="1/2" justify="center">
        <NavLink to="/home">
          <Icon fontSize="2xl">
            {' '}
            <FiHome />
          </Icon>
        </NavLink>
        <NavLink to="/video">
          <Icon fontSize="2xl">
            <RiVideoLine />
          </Icon>
        </NavLink>
        <NavLink to="/friends">
          <Icon fontSize="2xl">
            <TbUserSquareRounded />
          </Icon>
        </NavLink>
        <NavLink to="/friends">
          <Icon fontSize="2xl">
            {' '}
            <MdOutlineStorefront />
          </Icon>
        </NavLink>
      </Flex>
      <Flex spaceX="2" w="1/3" justify="end">
        <Icon fontSize="2xl">
          <BiSolidMessageRounded />
        </Icon>
        <Icon fontSize="2xl">
          <FaBell />
        </Icon>
        <Icon fontSize="2xl">
          <BsGrid3X3GapFill />
        </Icon>
        <Icon fontSize="2xl">
          <FaCircleUser />
        </Icon>
      </Flex>
    </Flex>
  );
};

export default HomePageTopNav;
