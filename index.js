import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './src/Navigator';
import storeConfig from './src/store/storeConfig';

const store = storeConfig();
const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
