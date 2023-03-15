import ThreeD from "./ThreeD";
import Image from "./Image";
import Video from "./Video";
import Audio from "./Audio";
import Skeleton from "./Skeleton";
import { ResourceType } from "./interface";
import useResourceType from "./utils/useResourceType";
import "./index.css";

export interface Props {
  type?: ResourceType;
  url: string;
  width?: string;
  height?: string;
  className?: string;
  containerClassname?: string;
  skeleton?: React.ReactNode;
  onError?: (e: any) => void;
  noContentText?: "No resource";
}

const Viewer = ({
  url = "",
  type,
  width,
  height,
  className,
  containerClassname = "nftviewer-container",
  skeleton = <Skeleton />,
  onError = () => {},
  noContentText,
  ...others
}: Props) => {
  let content: React.ReactNode = noContentText;
  let resourceType = type;

  if (!type) {
    resourceType = useResourceType(url);
  }

  const commonProps = {
    // skeleton,
    url,
    onError,
    className,
    containerClassname,
    ...others,
  };

  if (resourceType === "image") {
    content = <Image {...commonProps}></Image>;
  } else if (resourceType === "video") {
    content = <Video {...commonProps}></Video>;
  } else if (resourceType === "audio") {
    content = <Audio {...commonProps}></Audio>;
  } else if (resourceType === "3d") {
    content = <ThreeD {...commonProps}></ThreeD>;
  }

  return <>{content}</>;
};

export default function NFTViewer({ url = "", ...others }: Props) {
  if (url) {
    return <Viewer url={url} {...others}></Viewer>;
  } else {
    return null;
  }
}
