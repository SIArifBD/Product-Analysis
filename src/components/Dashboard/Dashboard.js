import { Col, Row } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    },
];

const data2 = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: '40-49',
        uv: 8.63,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: '50+',
        uv: 2.63,
        pv: 4800,
        fill: '#d0ed57',
    },
    {
        name: 'unknow',
        uv: 6.67,
        pv: 4800,
        fill: '#ffc658',
    },
];
const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};
const Dashboard = () => {
    const demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    return (
        <Row>

            <Col sm={{ span: 24, }} md={{ span: 12 }}>
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
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                </LineChart>
            </Col>
            <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data2}>
                        <RadialBar
                            minAngle={15}
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            clockWise
                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );

}

export default Dashboard;