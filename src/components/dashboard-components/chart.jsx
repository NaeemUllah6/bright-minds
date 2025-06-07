import React, { useRef, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';

Chart.register(ArcElement, Tooltip);

const RadialProgress = ({ percentage = 33, imageSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='60' r='60' fill='%23f5f5f5'/%3E%3Cpath d='M30 45c0-5 4-9 9-9h42c5 0 9 4 9 9v6c0 2-2 4-4 4s-4-2-4-4v-6c0-1-1-2-2-2H37c-1 0-2 1-2 2v6c0 2-2 4-4 4s-4-2-4-4v-6z' fill='%23333'/%3E%3Cpath d='M35 55c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5zm50 0c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z' fill='%23333'/%3E%3Cpath d='M40 70c0-3 2-5 5-5h30c3 0 5 2 5 5s-2 5-5 5H45c-3 0-5-2-5-5z' fill='%23d2691e'/%3E%3Cpath d='M45 75c0 8 7 15 15 15s15-7 15-15z' fill='%23333'/%3E%3C/svg%3E" }) => {
  const chartRef = useRef(null);

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#ff6a00', '#fceee5'],
        borderWidth: 0,
        cutout: '95%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
    },
    animation: {
      animateRotate: true,
      duration: 1000,
    },
  };

  const centerImagePlugin = {
    id: 'centerImagePlugin',
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      const centerX = width / 2;
      const centerY = height / 2;

      const image = new Image();
      image.src = imageSrc;

      if (image.complete) {
        const imgSize = 230;
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, imgSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(image, centerX - imgSize / 2, centerY - imgSize / 2, imgSize, imgSize);
        ctx.restore();
      }
    },
  };

  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      if (chartRef.current) {
        chartRef.current.update();
      }
    };
  }, [imageSrc]);

  return (
    <div className="!z-30">
      <div style={{ width: '250px', height: '250px', position: 'relative' }}>
        <Doughnut
          ref={chartRef}
          data={data}
          options={options}
          plugins={[centerImagePlugin]}
        />
      </div>
    </div>
  );
};

export { RadialProgress }