import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';


const Contacts = () => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Имя может содержать не более 15 символов')
          .required('Необходимо ввести Имя'),
        lastName: Yup.string()
          .max(20, 'Фамилия может содержать не более 20 символов')
          .required('Необходимо ввести Фамилию'),
        email: Yup.string().email('Неверный адрес электронной почты').required('Неверный адрес электронной почты'),
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <section id='contact' className='contacts'>
      <div className="container">
      <h2>Оставьте свои контакты для связи</h2>
        <form className='contact-form' onSubmit={formik.handleSubmit}>
          <label className='contact-label' htmlFor="firstName">ИМЯ</label>
          <input className='contact-input'
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          <span className='error'>
            {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
          </span>


          <label className='contact-label' htmlFor="lastName">ФАМИЛИЯ</label>
            <input className='contact-input'
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            <span className='error'>
              {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            </span>


          <label className='contact-label' htmlFor="email">ПОЧТА</label>
            <input className='contact-input'
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          <span className='error'>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </span>

    
          <button className='contact-btn' type="submit">ОТПРАВИТЬ</button>
        </form>
      </div>
    </section>
  )
}


export default Contacts