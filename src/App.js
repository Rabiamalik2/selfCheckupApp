import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import MainNavigation from './services/navigation';
import { store } from './services/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainNavigation />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
