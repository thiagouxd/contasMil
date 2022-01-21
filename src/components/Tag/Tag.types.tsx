export type TagType = {
  text: string;
  status: StatusProps;
};

export type StatusProps = "success" | "attention" | "alert";

export type TagStyledProps = { color: string; backgroundColor: string };
