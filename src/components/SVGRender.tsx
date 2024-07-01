const SVGRender = ({ svgInput }: { svgInput: string }) => {
  // Remove width and height attributes from the SVG
  const normalizedSize = svgInput
    .replace(/width=".*?"/, '')
    .replace(/height=".*?"/, '');
  return <div dangerouslySetInnerHTML={{ __html: normalizedSize }} />;
};

export default SVGRender;
