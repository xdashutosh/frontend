import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../assets/images/Cursor.png';
import Sidebar from './Sidebar';
import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';
import { DoubnutChart, LineChart } from '../Chart';

const Databox = ({ title, qty, qtypercent, profit }) => {
  return (
    <Box
      w={['full', '40%', '20%']}
      boxShadow={'lg'}
      p={'8'}
      borderRadius={'lg'}
    >
      <Text fontWeight={'bold'}>{title}</Text>
      <HStack>
        <HStack spacing={'8'}>
          <Text fontSize={'2xl'} fontWeight={'bolder'}>
            {qty}
          </Text>
          <Text>{`${qtypercent}%`}</Text>
        </HStack>
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
      <Text fontSize={'sm'} opacity={'0.5'}>
        Since last month
      </Text>
    </Box>
  );
};

const Bar = ({ title, value, profit }) => {
  return (
    <Box py={'4'} px={['0', '20']}>
      <Heading size={'sm'} mb={'2'}>
        {title}
      </Heading>
      <HStack w={'full'} alignItems={'center'}>
        <Text children={profit ? '0%' : `-${value}`} />
        <Progress
          w={'full'}
          value={value}
          colorScheme={profit ? 'blue' : 'red'}
        />
        <Text children="100%" />
      </HStack>
    </Box>
  );
};

const Dashboard = () => {
  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
  

      <Box boxSizing="border-box" px={['4', '0']}>
        <Text textAlign={'center'} opacity={'.5'}>
          Last update on {new Date().toISOString().split('T')[0]}
        </Text>
        <Heading
          children="DashBoard"
          textAlign={['center', 'start']}
          ml={['0', '8']}
          borderBottomWidth={['0', '2px']}
          w={['full', '-webkit-max-content']}
        />
        <Stack direction={['column', 'row']} justifyContent={'center'}>
          <Databox title="Views" qty={123} qtypercent={30} profit={true} />
          <Databox title="Users" qty={32} qtypercent={78} profit={true} />
          <Databox
            title="Subscription"
            qty={13}
            qtypercent={20}
            profit={false}
          />
        </Stack>
        <Box
          mt={['4', '16']}
          boxShadow={'-5px 0px 10px darkGray'}
          borderRadius={'lg'}
          p={['4', '8']}
          mx={['0', '16']}
        >
          <Heading
            children="View Graph"
            fontSize={['xl', '2xl']}
            textAlign={['center', 'start']}
            ml={['0', '8']}
            borderBottomWidth={['0', '2px']}
            w={['full', '-webkit-max-content']}
          />
          {/* Line graph */}
          <Box maxW={'100vw'}>
          <LineChart/>

          </Box>
        </Box>
      

        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p={'4'}  >
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children="Progress Bar"
              my={'8'}
              ml={['0', '16']}
              />
         

            <Box mt={['0','24']}> 
              <Bar title="views" value={30} profit={true} />
              <Bar title="Users" value={78} profit={true} />
              <Bar title="Subscription" value={20} profit={false} />
            </Box>
        
          </Box>

          <Box p={'4'}>
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children="Pie chart"
              my={'8'}
              ml={['0', '16']}
              />
            <Box >

            <DoubnutChart/>

            </Box>
          </Box>
        </Grid>
            
      </Box>
      
      <Sidebar />
      
    </Grid>
  );
};

export default Dashboard;
