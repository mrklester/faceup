import HomePageSidebar from '../components/HomePageSidebar';
import HomePageTopNav from '../components/HomePageTopNav';
import { Flex } from '@chakra-ui/react';
import UserFeeds from '../features/userfeeds/UserFeeds';
import HomeSponsorRightbar from '../components/HomeSponsorRightbar';

const HomePageLayout = () => {
  return (
    <Flex direction="column">
      <HomePageTopNav />
      <Flex>
        <HomePageSidebar />
        <UserFeeds />
        <HomeSponsorRightbar />
      </Flex>
    </Flex>
  );
};

export default HomePageLayout;
