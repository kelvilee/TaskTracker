import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useAuth} from '../../utils/AuthProvider';
import {useTasks} from '../../utils/TasksProvider';
import {TaskItem} from '../../components/atoms/TaskItem';
import {AddTaskView} from '../../utils/AddTaskView';

// The Tasks View displays the list of tasks of the parent TasksProvider.
// It has a button to log out and a button to add a new task.
export function TasksView() {
  // Get the logOut function from the useAuth hook.
  const {logOut} = useAuth();

  // Get the list of tasks and the projectId from the useTasks hook.

  const {tasks, projectId} = useTasks();

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <Button
          buttonStyle={{backgroundColor: 'red'}}
          type="solid"
          title="Log Out"
          onPress={logOut}
        />

        <AddTaskView />
      </View>
      <Text h2 style={{textAlign: 'center'}}>
        {projectId}
      </Text>
      <ScrollView>
        {tasks.map((task) => (
          <TaskItem key={`${task._id}`} task={task} />
        ))}
      </ScrollView>
    </>
  );
}
