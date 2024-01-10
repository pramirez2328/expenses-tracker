import { existingExpenses } from '../../util/getExistingExpenses';
interface Expense {
  id: number;
  description: string;
  category: string;
  date: string;
  amount: number;
}

function ListExpenses() {
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
          </tr>
        </thead>
        <tbody>
          {existingExpenses.map((expense: Expense) => {
            return (
              <tr key={expense.id}>
                <th scope='row'>{expense.description}</th>
                <td>{expense.category}</td>
                <td> {expense.date}</td>
                <td>{expense.amount}</td>
                <td>
                  <button type='button' className='btn btn-danger btn-sm'>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListExpenses;
