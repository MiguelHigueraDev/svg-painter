const ColorList = ({
  svgInput,
  onChange,
}: {
  svgInput: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  // Get all hexadecimal colors from string
  const colors = svgInput.match(/#[0-9a-fA-F]{6}/g);
  const uniqueColors = colors ? Array.from(new Set(colors)) : [];

  return (
    uniqueColors.length > 0 && (
      <div className="mt-5">
        <h2 className="text-2xl font-bold">Color List</h2>
        <ul className="flex flex-wrap gap-2 mt-2 overflow-auto max-h-[300px] items-center">
          {uniqueColors?.map((color, index) => (
            <li
              key={index}
              className="bg-gray-200 text-black p-2 rounded-md flex gap-3 items-center justify-center"
            >
              <input type="color" value={color} onChange={onChange} />
              <input
                className="bg-gray-200 w-[72px]"
                type="text"
                value={color}
                readOnly
              />
              <button onClick={() => navigator.clipboard.writeText(color)}>
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20px"
                  height="20px"
                  viewBox="0 0 93.842 93.843"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M74.042,11.379h-9.582v-0.693c0-1.768-1.438-3.205-3.206-3.205h-6.435V3.205C54.819,1.437,53.381,0,51.614,0H42.23c-1.768,0-3.206,1.438-3.206,3.205V7.48H32.59c-1.768,0-3.206,1.438-3.206,3.205v0.693h-9.582c-2.393,0-4.339,1.945-4.339,4.34v73.785c0,2.394,1.946,4.34,4.339,4.34h54.238c2.394,0,4.339-1.946,4.339-4.34V15.719C78.38,13.324,76.434,11.379,74.042,11.379zM32.617,25.336h28.61c1.709,0,3.102-1.391,3.102-3.1v-3.438h7.554l0.021,68.164l-49.939,0.021V18.801h7.554v3.436C29.517,23.945,30.907,25.336,32.617,25.336z" />
                  </g>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ColorList;
