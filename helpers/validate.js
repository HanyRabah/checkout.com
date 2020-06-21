const validate = (values) => {
  let errors = {}
  if (!values.name) {
    errors.name = 'Name is important!'
  }
  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is not valid'
  }
  if (!values.rating || values.rating < 1) {
    errors.rating = 'Please rate us!'
  }
  if (!values.comment) {
    errors.comment = 'Leave your feedback, Please!'
  }
  return errors
}

export default validate
