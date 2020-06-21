const getCurrentDate = () => {
  const currentDate = new Date()
  return `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
}

export default getCurrentDate
