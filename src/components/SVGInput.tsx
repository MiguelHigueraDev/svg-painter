const SVGInput = ({
  svgInput,
  onChange,
}: {
  svgInput: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return (
    <div className='h-[300px]'>
      <h1 className='text-2xl font-bold mb-4'>Enter your SVG code here</h1>
      <textarea className='w-full h-full resize-none p-2' value={svgInput} onChange={onChange}></textarea>
    </div>
  );
};

export default SVGInput;
