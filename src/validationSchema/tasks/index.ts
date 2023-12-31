import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  deadline: yup.date().nullable(),
  status: yup.string().required(),
  project_id: yup.string().nullable().required(),
});
