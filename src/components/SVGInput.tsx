const SVGInput = ({
  svgInput,
  onChange,
}: {
  svgInput: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return (
    <div className='h-1/3'>
      <h1 className='text-2xl font-bold mb-4'>Enter your SVG code here</h1>
      <textarea className='w-full h-full resize-none' value={svgInput} onChange={onChange}></textarea>
    </div>
  );
};

export default SVGInput;
