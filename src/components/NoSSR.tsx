'use client';

import type { ReactElement, ReactNode } from 'react';
import { useState, useEffect } from 'react';

type Props = {
  children: ReactNode;
  onSSR?: ReactNode;
};

export default function NoSSR({
  children,
  onSSR = '\u00A0'
}: Props): ReactElement {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient ? children : onSSR}</>;
}
