const SVGInput = ({
  svgInput,
  onChange,
  onClear,
}: {
  svgInput: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onClear: () => void;
}) => {
  return (
    <div className="h-[300px]">
      <div className="flex gap-3 items-center mb-4 justify-between">
        <h1 className="text-2xl font-bold">Enter your SVG code here</h1>
        <div className="flex gap-3">
          <button
            className="font-semibold bg-neutral-300 text-black p-2 rounded-xl hover:bg-neutral-200 active:bg-neutral-100"
            onClick={() => navigator.clipboard.writeText(svgInput)}
          >
            Copy
          </button>
          <button
            className="font-semibold bg-neutral-300 text-black p-2 rounded-xl hover:bg-red-400 active:bg-red-500"
            onClick={onClear}
          >
            Clear
          </button>
        </div>
      </div>
      <textarea
        className="w-full h-full resize-none p-2"
        value={svgInput}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default SVGInput;
