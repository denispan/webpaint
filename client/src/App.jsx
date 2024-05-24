import './styles/global.scss';
import ToolBar from './components/ToolBar';
import SettingBar from './components/SettingBar';
import Canvas from './components/Canvas';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path='/:id'
            element={
              <>
                <SettingBar />
                <ToolBar />
                <Canvas />
              </>
            }
          />
          <Route path='*' element={<Navigate to={`f${(+new Date).toString(16)}`} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
