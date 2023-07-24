import './summary.css'

const Sum = ({data }) => {
  return (
    <div className="styledsum">
        <div className="sumicon" color={data.color } bgcolor={data.bgcolor}>
            {data.icon}
        </div>
        <div className="text">
            <h3>
                {data.isMoney ? '$' + data.digits?. toLocaleString() : data.digits ?. toLocaleString()}
            </h3>
            <p>{data.title}</p>
        </div>
        <div className='percentage'>{data.percentage + '%' }</div>
    </div>
  )
}

export default Sum