interface Expense {
  id: number;
  description: string;
  category: string;
  date: string;
  amount: number;
}

function CardExpense({
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
  console.log(total);
  return (
    <>
      <div className='text-center'>
        <h5 className='text-muted'>
          You have spent: <span className='total'>${total}</span> {category && `on ${category.toLowerCase()}`}
        </h5>
      </div>
      <div className='m-0 p-0 col-12 d-flex flex-wrap justify-content-between'>
        {expenses.map((e) => {
          return (
            <div key={e.id} className='col-12 col-sm-6 col-md-4 col-xl-3 p-1'>
              <div className='card shadow bg-body rounded' id='card'>
                <div className='card-body d-flex flex-wrap p-2' id='card-body'>
                  <div className='col-6 mb-3'>
                    <p className='card-title text-muted m-0'>Description</p>
                    <p className='card-text fw-bold'>{e.description}</p>
                  </div>
                  <div className='col-6'>
                    <p className='card-title text-muted m-0 text-end'>Amount</p>
                    <p className='card-text text-end fw-bold'>${e.amount}</p>
                  </div>

                  <div className='col-6'>
                    <p className='card-title text-muted m-0 '>Category</p>
                    <p className='card-text fw-bold'>{e.category}</p>
                  </div>
                  <div className='col-6'>
                    <p className='card-title text-muted m-0 text-end'>Date</p>
                    <p className='fw-bold text-end'>{e.date}</p>
                  </div>

                  <button
                    onClick={() => handleRemove(e.id, e.category)}
                    type='button'
                    className='btn btn-danger btn-sm button col-12 mt-3'
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardExpense;
