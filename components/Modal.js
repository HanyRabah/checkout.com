import { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { FakeRatings } from '../helpers/fakeRatings'

const Modal = ({ ratings, className }) => {
  let tmp = {}
  let results = {}
  const [chartData, setChartDate] = useState({
    title: '',
    xAxis: { categories: [] },
    yAxis: {
      title: { text: 'Rating' },
      tickAmount: 5,
      labels: { formatter: (e) => e.pos },
    },
    series: [{ data: [] }],
  })

  const getAverageRating = (data) => {
    data.forEach(function (item) {
      var obj = (tmp[item.date] = tmp[item.date] || { count: 0, total: 0 })
      obj.count++
      obj.total += parseInt(item.rating, 10)
    })

    results = Object.entries(tmp).map(function (entry) {
      return { date: entry[0], ave: Math.ceil(entry[1].total / entry[1].count) }
    })
  }

  useEffect(() => {
    getAverageRating(ratings)
    setChartDate({
      xAxis: { categories: results.map((val) => val.date) },
      series: [{ data: results.map((val) => val.ave) }],
    })
  }, [ratings])

  const fakeTheData = () => {
    getAverageRating(FakeRatings)
    setChartDate({
      xAxis: { categories: results.map((val) => val.date) },
      series: [{ data: results.map((val) => val.ave) }],
    })
  }

  return (
    <div className={className}>
      <button
        type="button"
        className="btn btn-secondry"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Show Trend Graph
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Rating Average Per day
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <HighchartsReact highcharts={Highcharts} options={chartData} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={fakeTheData}
              >
                Fake rating data
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
