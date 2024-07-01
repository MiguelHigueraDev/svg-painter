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
    <div className="mt-5">
      <h2 className="text-2xl font-bold">Color List</h2>
      <ul className="flex flex-wrap gap-2 mt-2">
        {uniqueColors?.map((color, index) => (
          <li key={index} className="bg-gray-200 text-black p-2 rounded-md">
            <input type="color" value={color} onChange={onChange} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
