import { useState } from 'react';
import './App.css';
import ColorList from './components/ColorList';
import SVGInput from './components/SVGInput';
import SVGRender from './components/SVGRender';

function App() {
  const [svgInput, setSvgInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSvgInput(e.target.value);
  }

  return (
    <div className="flex gap-5 p-4 h-screen w-screen">
      <div className="w-1/2 flex flex-col gap-10 max-w-[600px]">
        <SVGInput svgInput={svgInput} onChange={handleInputChange} />
        <ColorList />
      </div>
      <div className="w-1/2">
        <SVGRender svgInput={svgInput} />
      </div>
    </div>
  );
}

export default App;
