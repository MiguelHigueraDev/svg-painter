import { useState } from 'react';
import './App.css';
import ColorList from './components/ColorList';
import SVGInput from './components/SVGInput';
import SVGRender from './components/SVGRender';

function App() {
  const [svgInput, setSvgInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSvgInput(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    const oldColor = e.target.defaultValue;
    setSvgInput(svgInput.replace(new RegExp(oldColor, 'g'), newColor));
  };

  return (
    <div className="flex gap-10 p-4 h-screen w-screen items-center justify-center">
      <div className="w-1/3 flex flex-col gap-14 max-w-[600px]">
        <SVGInput svgInput={svgInput} onChange={handleInputChange} />
        <ColorList svgInput={svgInput} onChange={handleColorChange} />
      </div>
      <div className="w-1/3">
        <SVGRender svgInput={svgInput} />
      </div>
    </div>
  );
}

export default App;
