import HeroPluniverse from './components/HeroPluniverse';
import Header from './components/Header';
import AudioPlayer from './components/AudioPlayer';
import WidthContainer from './components/WidthContainer';
import Footer from './components/Footer';
import Loading from 'react-fullscreen-loading';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var readyStateCheckInterval = setInterval(function () {
      if (document.readyState === 'complete') {
        clearInterval(readyStateCheckInterval);
        setLoading(false);
      }
    }, 10);
  }, []);
  return (
    <div className="App">
      <Loading loading={loading} background="#4a9ec6" loaderColor="#FFF" />
      <div className="container">
        <WidthContainer>
          <Header />
        </WidthContainer>

        <WidthContainer>{!loading && <AudioPlayer />}</WidthContainer>

        <div style={{ flex: 1 }}>
          <HeroPluniverse />
        </div>

        <WidthContainer>
          <Footer />
        </WidthContainer>
      </div>
    </div>
  );
}

export default App;
