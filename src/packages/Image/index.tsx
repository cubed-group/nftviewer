import { useEffect, useState } from "react";
import NotFound from "../assets/not-found.jpg";
import "./index.css";

export default function Image({
  url,
  onError,
  className,
  containerClassname,
  ...others
}: any) {
  const [src, setSrc] = useState(url);

  useEffect(() => {}, [url]);

  const handleError = (e: any) => {
    setSrc(NotFound);
  };

  return (
    <div className={containerClassname}>
      <img
        src={src}
        onError={handleError}
        className={`image ${className ? className : ""}`}
        {...others}
      ></img>
    </div>
  );
}
