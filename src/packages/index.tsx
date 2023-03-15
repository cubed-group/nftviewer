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

export default function NFTViewer({
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
}: Props) {
  let content: React.ReactNode = noContentText;
  let resourceType = type;

  if (url) {
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
  } else {
    content = null;
  }

  return <>{content}</>;
}
