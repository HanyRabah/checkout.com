export const getTextWidth = (props) => {
  const { text } = props
  var canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'))
  var context = canvas.getContext('2d')
  context.font = '13px arial'
  var metrics = context.measureText(text)
  return Math.ceil(metrics.width + 23)
}
