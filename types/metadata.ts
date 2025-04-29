export interface Metadata {
  url: string;
  twitter: {
    card: string | undefined;
    image: string | undefined;
    title: string | undefined;
    description: string | undefined;
  };
  openGraph: {
    image: string | undefined;
    title: string | undefined;
    description: string | undefined;
  };
}
