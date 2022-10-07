export interface ArweaveCollectionProps {
  state: ArweaveCollectionState;
  id: string;
  artefacts: number;
  lastCursor: string;
}

export interface ArweaveCollectionState {
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  dateCreated: string;
  link: string;
  ownerInfo: string;
  contributors: { [key: string]: string };
  tokens: { [key: string]: string };
  totalContributions: string;
  totalSupply: string;
  balance: string;
}

export type ButtonType = "primary" | "secondary" | "tertiary";

export interface IURLView {
  account: URLViewType[]
}

export type URLViewType = {
  index: number;
  label: string;
  icon: string;
  disabled: boolean;
  url: string;
  view: React.ComponentType;
}

export type ValidationType = {
  status: boolean,
  message: string | null
}

export type KeyValueStringType = { [key: string]: string };
export type TableHeaderType = { [key: string]: { width: string } };
