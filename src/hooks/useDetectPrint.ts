import { useState, useEffect } from 'react';

const useDetectPrint = (): boolean => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const handleBeforeprint = () => setIsPrinting(true);
    const handleAfterprint = () => setIsPrinting(false);

    window.addEventListener('beforeprint', handleBeforeprint);
    window.addEventListener('afterprint', handleAfterprint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforeprint);
      window.removeEventListener('afterprint', handleAfterprint);
    };
  }, []);

  return isPrinting;
};

export default useDetectPrint;
