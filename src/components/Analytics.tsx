import { Flex } from '@chakra-ui/react';
import { TodoProps, useTodosStore } from '../store/todos';
import { useUsersStore } from '../store/users';
import {
  Bar,
  BarChart,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

type StatusChartData = { [key: string]: number };

export const Analytics = () => {
  const { todos } = useTodosStore();
  const { users } = useUsersStore();

  const statusChartData = todos.reduce(
    (acc: StatusChartData, todo: TodoProps) => {
      if (acc[todo.status]) {
        acc[todo.status] += 1;
      } else {
        acc[todo.status] = 1;
      }

      return acc;
    },
    {}
  );

  const userChartData = todos.reduce(
    (acc: StatusChartData, todo: TodoProps) => {
      const user = todo.assignedTo;
      const foundUser = users.find((u) => u.id === user);
      const userName = foundUser ? foundUser.name : 'Unassigned';

      if (acc[userName]) {
        acc[userName] += 1;
      } else {
        acc[userName] = 1;
      }
      return acc;
    },
    {}
  );
  console.log('🚀 ~ Analytics ~ userChartData:', userChartData);

  return (
    <Flex flexDir='column'>
      <Flex maxW='5xl' gap={4}>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer aspect={2}>
            <BarChart width={150} height={40} data={[statusChartData]}>
              <Tooltip />
              <Legend />
              <Bar dataKey='todo' fill='#3761DE' />
              <Bar dataKey='in-progress' fill='#3796DE' />
              <Bar dataKey='done' fill='#4337DE' />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer aspect={2}>
            <BarChart width={150} height={40} data={[userChartData]}>
              <Tooltip />
              <Legend />
              {Object.keys(userChartData).map((key) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={
                    '#' +
                    ((Math.random() * 0xffffff) << 0)
                      .toString(16)
                      .padStart(6, '0')
                  }
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Flex>
      <Flex maxW='5xl' gap={4}>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer aspect={4}>
            <PieChart>
              <Tooltip />
              <Pie
                data={Object.keys(statusChartData).map((key) => ({
                  name: key,
                  value: statusChartData[key],
                }))}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                outerRadius={80}
                fill='#8884d8'
              />
              <Pie
                data={Object.keys(userChartData).map((key) => ({
                  name: key,
                  value: userChartData[key],
                }))}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                innerRadius={50}
                outerRadius={70}
                fill='#82ca9d'
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Flex>
    </Flex>
  );
};
