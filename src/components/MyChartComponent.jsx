import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './MyChartComponent.css'; // เพิ่ม CSS

const MyChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // ลงทะเบียนสเกลและองค์ประกอบที่จำเป็น
  Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  useEffect(() => {
    // หากมี Chart ที่สร้างขึ้นแล้ว ให้ทำลายก่อน
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // สร้าง Chart ใหม่
    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'bar', // ประเภทกราฟ
      data: {
        labels: ['ระดับต่ำ', 'ระดับกลาง', 'ระดับสูง'],
        datasets: [
          {
            label: 'สัดส่วนระดับความเครียดของผู้ใช้สัปดาห์นี้',
            data: [10, 40, 50], // ข้อมูลจริง
            backgroundColor: [
              'rgba(255, 0, 0, 0.5)', // สีแดงสำหรับระดับต่ำ
              'rgba(255, 165, 0, 0.5)', // สีส้มสำหรับระดับกลาง
              'rgba(0, 191, 255, 0.5)', // สีน้ำเงินสำหรับระดับสูง
            ],
            borderColor: [
              'rgba(255, 0, 0, 1)', // สีแดงสำหรับระดับต่ำ
              'rgba(255, 165, 0, 1)', // สีส้มสำหรับระดับกลาง
              'rgba(0, 191, 255, 1)', // สีน้ำเงินสำหรับระดับสูง
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // ให้กราฟปรับขนาดตาม container
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 20,
              padding: 15,
            },
          },
          title: {
            display: true,
            text: 'สัดส่วนระดับความเครียดของผู้ใช้',
            font: {
              size: 20,
              weight: 'bold',
            },
            padding: {
              bottom: 20,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'ระดับความเครียด',
              font: {
                size: 16,
                weight: 'bold',
              },
            },
            ticks: {
              font: {
                size: 12, // ขนาดตัวอักษรบนแกน x
              },
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'จำนวนคน',
              font: {
                size: 16,
                weight: 'bold',
              },
            },
            ticks: {
              font: {
                size: 12, // ขนาดตัวอักษรบนแกน y
              },
            },
          },
        },
      },
    });

    // ทำลาย Chart เมื่อ Component ถูกลบ
    return () => {
      chartInstanceRef.current.destroy();
    };
  }, []);

  return (
    <div style={{ width: '80%', height: '400px', margin: '0 auto', padding: '20px' }}>
      <canvas ref={chartRef} />
      {/* <div className="stats-container">
        <h3>ข้อมูลสถิติความเครียด</h3>
        <ul>
          <li>ระดับต่ำ: 10 คน</li>
          <li>ระดับกลาง: 40 คน</li>
          <li>ระดับสูง: 50 คน</li>
        </ul>
      </div> */}
    </div>
  );
};

export default MyChartComponent;
