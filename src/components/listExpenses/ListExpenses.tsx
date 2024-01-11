import './ListExpenses.css';
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
}: {
  expenses: Expense[];
  handleRemove: (id: number) => void;
  total: number;
}) {
  return (
    <div className='table-responsive shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
      <table className='table '>
        <thead>
          <tr>
            <th scope='col' className='text-muted'>
              Description
            </th>
            <th scope='col' className='text-muted'>
              Category
            </th>
            <th scope='col' className='text-muted'>
              Date
            </th>
            <th scope='col' className='text-muted'>
              amount
            </th>
            <th scope='col' className='text-muted'>
              {''}
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <th scope='row'>{expense.description}</th>
                <td>{expense.category}</td>
                <td> {expense.date}</td>
                <td>{expense.amount}</td>
                <td>
                  <button onClick={() => handleRemove(expense.id)} type='button' className='btn btn-danger btn-sm'>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='text-center'>
        <h5 className='text-muted'>
          You have spent: <span className='total'>${total}</span>
        </h5>
      </div>
    </div>
  );
}

export default ListExpenses;
