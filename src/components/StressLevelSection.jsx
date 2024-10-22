import React from 'react';
import styles from './Dashboard.module.css';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ลงทะเบียน scale และ elements ที่จำเป็น
Chart.register(LinearScale, BarElement, Title, Tooltip, Legend);

function StressLevelSection() {
  const data = {
    labels: ['ต่ำกว่า 20', '20-29', '30-39', '40-49', '50-59', '60 ขึ้นไป'],
    datasets: [
      {
        label: 'เฉลี่ย 3 ปี (%)',
        data: [24.4, 20.7, 10.9, 4.1, 1.7, 0.9],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'ปี 2021 (%)',
        data: [23.5, 19.8, 10.5, 3.9, 1.6, 0.8],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'ปี 2022 (%)',
        data: [24.1, 20.3, 11.2, 4.0, 1.7, 0.9],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'ปี 2023 (%)',
        data: [25.0, 21.0, 11.0, 4.2, 1.8, 1.0],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      },
      {
        label: 'ปี 2024 (%)',
        data: [25.5, 22.1, 12.0, 4.5, 1.9, 1.1],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'สัดส่วน (%)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'ช่วงอายุ'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'สัดส่วนผู้มีความเสี่ยงซึมเศร้าในระบบ Mental Health Check-in (%)'
      }
    },
    responsive: true,
  };

  return (
    <section className={styles.stressLevelSection}>
      <div className={styles.chartWrapper}>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}

export default StressLevelSection; 
