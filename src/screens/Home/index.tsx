import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import { Container, HeaderApp, Content } from './styles';
import { urlOniSaude } from './../../config/BaseUrl';
import Loading from './../../../components/Loading';

export default function Home() {

  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(urlOniSaude).then(responseUrl => {
      setUrl(responseUrl.data.url);
      setLoading(false);
    });
  }, [url]);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <StatusBar style="dark" translucent />
      <Content>
        <WebView
          source={{uri: url}}
          startInLoadingState={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
        />
      </Content>
    </Container>
  );
}
