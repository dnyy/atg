import ReactDOM from 'react-dom';
import App from './components/App';
import { SWRConfig } from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json());

ReactDOM.render(
  <SWRConfig value={{ fetcher }}>
    <App />
  </SWRConfig>,
  document.querySelector('#root')
);
