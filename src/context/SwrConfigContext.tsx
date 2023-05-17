"use client";

import { SWRConfig } from "swr";

interface Props {
  children: React.ReactNode;
}

export default function SwrConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{ fetcher: (url: string) => fetch(url).then((res) => res.json()) }}
    >
      {children}
    </SWRConfig>
  );
}
