export type TTodoList = {
  title: string;
  filter: TTodoFilterValues;
};

export type TTodoFilterValues = "all" | "active" | "completed";
