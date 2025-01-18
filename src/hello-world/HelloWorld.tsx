interface HelloWorldProps {
  title: string;
  style?: React.CSSProperties;
}

export default function HelloWorld({ title, style }: HelloWorldProps) {
  return (
    <>
      <h1 style={style}>{title.toUpperCase()}</h1>
    </>
  );
}
