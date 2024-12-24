export interface Error {
  errCode: string | undefined;
  errMsg: string | undefined;
}

export interface Image {
  id: string;
  urls: { regular: string; small: string };
  alt_description: string;
  description?: string;
  likes?: number;
}

export interface Data {
  results: Image[];
  total_pages: number;
  total: number;
}
