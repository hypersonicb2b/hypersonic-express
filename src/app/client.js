import {render} from 'react-dom';
import ClientContextWrapper from './components/ClientContextWrapper';
import routes from './routes';

render(
  <ClientContextWrapper routes={routes}/>
  , document.querySelectorAll('[data-ui-role="content"]')[0]);
