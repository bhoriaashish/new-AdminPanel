import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsSearch}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
    <div className='main-title'>
        <h3>Hello Shahrukh👋🏻</h3>
        <div className="search_bar">
        <span class="material-symbols-outlined search_icon"><BsSearch  className='icon'/></span>
        
        <input
          className="search_input"
          placeholder="Search "
        />
      </div>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                {/* <BsFillArchiveFill className='card_icon'/> */}
                <img className="logo" src="/src/assets/dollor.png"/>
                <div className='card-inner-right'>
                <div className="profit">Earning</div>
                <div className="matter">$198k</div>
                <div className="percent"><span>37.8%</span> this month</div>
                </div>
               
            </div>
            {/* <div>$198k</div> */}
        </div>
        <div className='card'>
            <div className='card-inner'>
                {/* <BsFillGrid3X3GapFill className='card_icon'/> */}
                <img className='book' src="/src/assets/icons8-bill-40.png"/>
                <div className='card-inner-right'>
                <div className="quantity">Order</div>
                <div className="down-price">$2.4k</div>
                <div className="down-percent"><span>2%</span> this month</div>
                </div>
            </div>
        </div>
        <div className='card'>
            <div className='balance-inner'>
                {/* <BsPeopleFill className='card_icon'/> */}
                <img className='amount' src="icons8-balance-40.png"/>
                <div className='card-inner-right'>
                <div className="recept">Balance</div>
                <div className="down-end">$2.4k</div>
                <div className="down-money"><span>2%</span> this month</div>
                </div>
            </div>
        </div>
        <div className='card'>
            <div className='card-inner'>
                {/* <BsFillBellFill className='card_icon'/> */}
                <img className='scale' src="icons8-sales-performance-40.png"/>
                <div>
                <div className="range">Total Sales</div>
                <div className="profit">$89k</div>
                <div className="up-money"><span>11%</span> this week</div>
                </div>
            </div>
        </div>
    </div>
        <div className='charts'>
            <div className='main-charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            </div>
           

           <div className='color'>
           <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
           </div>

        </div>
    </main>
  )
}

export default Home