import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr'],
  datasets: [
    {
      label: 'USD/BRL',
      data: [4.9, 5.1, 5.0, 5.2],
      borderColor: '#009C9A',
      backgroundColor: '#D9DFF2',
    }
  ]
}

export default function CurrencyChartCard() {
  return (
    <div className="bg-mintbreeze p-4 rounded-xl shadow-lg text-white">
      <h2 className="text-xl font-bold mb-4">Gráfico</h2>
      <Line data={data} />
    </div>
  )
}