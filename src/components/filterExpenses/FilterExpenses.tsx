import { ChangeEvent, SelectHTMLAttributes } from 'react';
import categories from '../../util/getCategories';
import './FilterExpenses.css';

interface FilterExpensesProps extends SelectHTMLAttributes<HTMLSelectElement> {
  handleFilterExpenses: (event: ChangeEvent<HTMLSelectElement>) => void;
  filter: string;
}

function FilterExpenses({ handleFilterExpenses, filter }: FilterExpensesProps) {
  return (
    <div className='mt-4 mb-4 p-0'>
      <select
        id='filter-expenses'
        onChange={handleFilterExpenses}
        className='form-select bg-body-secondary'
        aria-label='Default select example'
        value={filter}
      >
        <option defaultValue=''>Filter by Category</option>
        {categories.map((category) => (
          <option key={category} defaultValue={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterExpenses;
