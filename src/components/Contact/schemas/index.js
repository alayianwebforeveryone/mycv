import * as Yup from 'yup';

const contactFormValidation = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address'
    )
    .required('Email is required'),

  subject: Yup.string()
    .min(4, 'Subject must be at least 5 characters long')
    .max(50, 'Subject cannot exceed 50 characters')
    .required('Subject is required'),

  message: Yup.string()
    .min(10, 'Message must be at least 10 characters long')
    .max(500, 'Message cannot exceed 500 characters')
    .required('Message is required'),
});

export default contactFormValidation;
