import { useEffect, useState } from 'react';

import './ListExpenses.css';
import MobileList from './MobileList';
import DesktopList from './DesktopList';

interface Expense {
  id: number;
  description: string;
  category: string;
  date: string;
  amount: number;
}

function ListExpenses({
  expenses,
  handleRemove,
  total,
  category,
}: {
  expenses: Expense[];
  handleRemove: (id: number, category: string) => void;
  total: number;
  category: string;
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMobile) {
    return (
      <>
        <DesktopList expenses={expenses} handleRemove={handleRemove} category={category} total={total} />
      </>
    );
  }

  return (
    <>
      <MobileList expenses={expenses} handleRemove={handleRemove} category={category} total={total} />
    </>
  );
}

export default ListExpenses;
