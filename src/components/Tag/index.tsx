import { useEffect, useState } from "react";
import { TagStyled } from "./Tag.styled";
import { TagStyledProps, TagType } from "./Tag.types";

const generateColor = (status: string) => {
  if (status === "success")
    return { color: "#04BB00", backgroundColor: "#E7FAE6" };
  if (status === "alert")
    return { color: "#FF0D0D", backgroundColor: "#FAE6E6" };
  if (status === "attention")
    return { color: "#FF800B", backgroundColor: "#FAF2E6" };
};

const Tag = ({ text, status }: TagType) => {
  const [type, setType] = useState<TagStyledProps>();

  useEffect(() => {
    setType(generateColor(status));
  }, [status]);

  return (
    <TagStyled
      color={type?.color as string}
      backgroundColor={type?.backgroundColor as string}
    >
      {text}
    </TagStyled>
  );
};

export default Tag;
