import { toast, ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import './App.css';
import Router from './routes';
import { store } from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;

export const toastNotify = (type, message) =>
  toast(`${message}`, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type,
  });
