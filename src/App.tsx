import { useState } from 'react';
import './App.css';
import ColorList from './components/ColorList';
import SVGInput from './components/SVGInput';
import SVGRender from './components/SVGRender';

function App() {
  const [svgInput, setSvgInput] = useState(`<svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M500.8 766.4c8 4.8 11.2 14.4 6.4 22.4s-14.4 11.2-22.4 6.4l-176-96c-8-4.8-11.2-14.4-6.4-22.4 4.8-8 14.4-11.2 22.4-6.4l176 96z" fill="#050D42" /><path d="M652.8 460.8v-32c57.6 0 86.4 89.6 64 188.8-22.4 96-134.4 179.2-224 179.2v-32c75.2 0 174.4-73.6 192-155.2 19.2-81.6-3.2-148.8-32-148.8zM316.8 908.8h352c9.6 0 16 6.4 16 16s-6.4 16-16 16h-352c-9.6 0-16-6.4-16-16s6.4-16 16-16z" fill="#050D42" /><path d="M652.8 94.4c46.4 27.2 62.4 84.8 35.2 131.2L528 502.4l-166.4-96 160-276.8c25.6-46.4 84.8-60.8 131.2-35.2z" fill="#2F4BFF" /><path d="M336 428.8c-9.6-6.4-14.4-17.6-11.2-24s16-9.6 27.2-3.2l184 107.2c9.6 6.4 14.4 17.6 11.2 24-4.8 8-16 9.6-27.2 3.2L336 428.8z" fill="#050D42" /><path d="M358.4 443.2l139.2 80-24 41.6c-4.8 8-14.4 9.6-22.4 6.4l-110.4-64c-8-4.8-9.6-14.4-6.4-22.4l24-41.6z" fill="#2F4BFF" /><path d="M652.8 444.8m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#2F4BFF" /><path d="M476.8 828.8v96h32v-96z" fill="#050D42" /><path d="M492.8 780.8m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#2F4BFF" /></svg>`);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSvgInput(e.target.value);
  }

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    const oldColor = e.target.defaultValue;
    setSvgInput(svgInput.replace(new RegExp(oldColor, 'g'), newColor));
  }

  return (
    <div className="flex gap-5 p-4 h-screen w-screen items-center justify-center">
      <div className="w-1/3 h-[300px] flex flex-col gap-10 max-w-[600px]">
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
