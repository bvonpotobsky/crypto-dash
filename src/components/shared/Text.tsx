import React, {FunctionComponent, JSXElementConstructor, CSSProperties} from "react";

interface Props {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | any;
  html?: string;
  truncate?: boolean;
  lines?: string;
}

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "smallText";

const Text: FunctionComponent<Props> = ({
  style,
  className = "",
  variant = "p",
  children,
  html,
  truncate = false,
  lines,
}) => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string;
  } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    smallText: "small",
  };

  const Component: JSXElementConstructor<any> | React.ReactElement<any> | React.ComponentType<any> | string =
    componentsMap[variant];

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: {__html: html},
      }
    : {};

  return (
    <Component
      className={className}
      style={{
        ...style,
        ...(truncate && {
          display: "-webkit-box",
          WebkitLineClamp: truncate ? lines : "none",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }),
      }}
      {...htmlContentProps}
    >
      {children}
    </Component>
  );
};

export default Text;
