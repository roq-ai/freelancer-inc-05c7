import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  deadline: yup.date().nullable(),
  status: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
