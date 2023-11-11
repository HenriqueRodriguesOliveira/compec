import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {Button} from './src/components/Button/Button';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text color="gray1" preset="headingLarge" marginBottom="s16" italic>
            Compec
          </Text>

          <Button title="Entrar" marginBottom="s12" preset="primary" />

          <Button title="Cadastrar" preset="outline" marginBottom="s12" />
          <Button loading title="Loading" marginBottom="s12" />
          <Button title="Desabilitado" disabled marginBottom="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
