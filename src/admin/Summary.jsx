import {FaUsers,FaClipboard, FaChartBar} from 'react-icons/fa'
import Sum from './Sum'
import './summary.css'

const Summary = () => {
    const data =[
        {
            icon:<FaUsers/>,
            digits: 7,
            isMoney: false,
            title: 'users',
            percentage: 4
        },
        {
            icon:<FaClipboard/>,
            digits: 83,
            isMoney: false,
            title: 'orders',
            percentage: 19
        },
        {
            icon:<FaChartBar/>,
            digits: 5869,
            isMoney: true,
            title: 'Earnings',
            percentage: 40
        },
    ]
  return (
    <div className='styledsummary'>
        <div className="mainstats">
            <div className="overview">
                <div className="title">
                    <h2>Overview</h2>
                    <p>shop performance </p>
                </div>
                <div className="widgetwrapper">
                    {data.map((data,index) => <Sum key={index} data={data}/>)}
                </div>
            </div> 
        </div>
        <div className="sidestats">

        </div>
    </div>
  )
}

export default Summary