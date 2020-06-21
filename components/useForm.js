import { useState, useEffect } from 'react'

const useForm = (initialValues, callback, validate) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValues(initialValues)
      callback()
    }
  }, [errors])

  const getCurrentDate = () => {
    const currentDate = new Date()
    return `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
  }
  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    // Only validate if the validate function is used
    if (validate) {
      setErrors(validate(values))
    }
    setValues((values) => ({
      ...values,
      date: getCurrentDate(),
    }))
    setIsSubmitting(true)
  }

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
