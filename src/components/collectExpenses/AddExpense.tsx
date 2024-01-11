import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import categories from '../../util/getCategories';

interface FormValues {
  id: number;
  description: string;
  category: string;
  date: string;
  amount: number;
}

interface FormProps {
  handleOnSubmit: (values: FormValues) => void;
  onHide: () => void;
}

function AddExpense({ handleOnSubmit, onHide }: FormProps) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    description: yup
      .string()
      .trim()
      .required('Description is required')
      .min(3, 'Description must be at least 3 characters'),
    category: yup.string().trim().required('Category is required'),
    date: yup.string().required('Date is required'),
    amount: yup.number().min(1, 'Amount must be greater than 0').required('Amount is required'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleOnSubmit}
      initialValues={{
        id: 0,
        description: '',
        category: '',
        date: '',
        amount: 0,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => {
        const hasErrors =
          values.amount === 0 || values.category === '' || values.date === '' || values.description === '';

        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group as={Col} md='6' controlId='description' className='position-relative'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='text'
                  name='description'
                  value={values.description}
                  onChange={handleChange}
                  isValid={touched.description && !errors.description}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type='invalid' tooltip>
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md='6' controlId='category' className='position-relative'>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as='select'
                  name='category'
                  value={values.category}
                  onChange={handleChange}
                  isInvalid={!!errors.category}
                  isValid={touched.category && !errors.category}
                >
                  <option value=''>Select a category</option>
                  {categories.map((category) => {
                    return (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    );
                  })}
                </Form.Control>
                <Form.Control.Feedback type='invalid' tooltip>
                  {errors.category}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='6' controlId='date'>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type='date'
                  placeholder='date'
                  aria-describedby='inputGroupPrepend'
                  name='date'
                  value={values.date}
                  onChange={handleChange}
                  isValid={touched.date && !errors.date}
                  isInvalid={!!errors.date}
                />
                <Form.Control.Feedback type='invalid' tooltip>
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md='6' controlId='amount' className='position-relative'>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='amount'
                  name='amount'
                  value={values.amount}
                  onChange={handleChange}
                  isValid={touched.amount && !errors.amount}
                  isInvalid={!!errors.amount}
                  min='1'
                />
                <Form.Control.Feedback type='invalid' tooltip>
                  {errors.amount}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button style={{ display: hasErrors ? 'none' : 'block' }} type='submit' onClick={() => onHide()}>
              Save Expense
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AddExpense;
