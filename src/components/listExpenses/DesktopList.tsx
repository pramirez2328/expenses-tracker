interface Expense {
  id: number;
  description: string;
  category: string;
  date: string;
  amount: number;
}

function DesktopList({
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
      <div className='table-responsive shadow p-2 mb-5 bg-body rounded'>
        <table className='table '>
          <thead>
            <tr>
              <th scope='col' className='text-muted text-center'>
                Date
              </th>
              <th scope='col' className='text-muted text-center'>
                amount
              </th>
              <th scope='col' className='text-muted text-center'>
                Category
              </th>
              <th scope='col' className='text-muted text-center'>
                Description
              </th>
              <th scope='col' className='text-muted text-center'>
                {''}
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              return (
                <tr key={expense.id}>
                  <td className='text-center'> {expense.date}</td>
                  <td className='text-center'>${expense.amount}</td>
                  <th scope='row' className='text-center'>
                    {expense.description}
                  </th>
                  <td className='text-center'>{expense.category}</td>
                  <td className='text-center'>
                    <button
                      onClick={() => handleRemove(expense.id, category)}
                      type='button'
                      className='btn btn-danger btn-sm button'
                    >
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
            You have spent: <span className='total'>${total}</span>{' '}
            {category !== 'Filter by Category' ? `on ${category.toLowerCase()}.` : ''}
          </h5>
        </div>
      </div>
    </>
  );
}

export default DesktopList;
