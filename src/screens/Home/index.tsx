import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import { Container, HeaderApp, Content } from './styles';
import { urlOniSaude } from './../../config/BaseUrl';

export default function Home() {

  const [url, setUrl] = useState('');

  useEffect(() => {
    axios.get(urlOniSaude).then(responseUrl => {
      setUrl(responseUrl.data.url);
    });
  }, [url]);

  return (
    <Container>
      <StatusBar style="dark" translucent />
      <Content>
        <WebView
          source={{uri: url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </Content>
    </Container>
  );
}
