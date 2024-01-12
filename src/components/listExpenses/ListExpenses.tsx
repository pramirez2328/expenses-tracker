import './ListExpenses.css';
import CardExpense from './CardExpense';

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
  return (
    <>
      <CardExpense expenses={expenses} handleRemove={handleRemove} category={category} total={total} />
    </>
  );
}

export default ListExpenses;
