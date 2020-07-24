import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {useAuth, AuthProvider} from './utils/AuthProvider';
import {TasksProvider} from './utils/TasksProvider';
import {TasksView} from './scenes/home/TasksView';
import {LogInView} from './scenes/login/LogInView';

const App = () => {
  return (
    <AuthProvider>
      <AppBody />
    </AuthProvider>
  );
};

// The AppBody is the main view within the App. If a user is not logged in, it
// renders the login view. Otherwise, it renders the tasks view. It must be
// within an AuthProvider.
function AppBody() {
  const {user} = useAuth();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          {user == null ? (
            <LogInView />
          ) : (
            <TasksProvider projectId="My Project">
              <TasksView />
            </TasksProvider>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
