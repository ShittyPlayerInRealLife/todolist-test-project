export type TTodoList = {
  title: string;
  filter: FilterValues;
};

export enum FilterValues {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}
