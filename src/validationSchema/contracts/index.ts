import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  project_id: yup.string().nullable().required(),
});
