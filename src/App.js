import './App.css';
import { Logo } from './components/Logo/Logo.jsx';
import { Dados } from './components/DadosPix/DadosPix.jsx';
import { Button } from './components/Button/Button';
import { QrCode } from '../src/components/QrCode/Qrcode.jsx';
import iconeQrCode from '../src/assets/qrcode.jpeg';

function App() {
  return (
    <main className="App">
      <Logo />
      <div className='box-qrcode-dados'>
        <QrCode imgQrcode={iconeQrCode} />
        <Dados />
      </div>
      <Button texto={"Copiar Chave Pix"}/>
    </main>
  );
}

export default App;
