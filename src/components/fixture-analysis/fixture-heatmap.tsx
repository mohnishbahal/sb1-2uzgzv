import { useEffect, useRef } from 'react';

export function FixtureHeatmap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#ef4444');   // Low traffic (red)
    gradient.addColorStop(0.5, '#eab308'); // Medium traffic (yellow)
    gradient.addColorStop(1, '#22c55e');   // High traffic (green)

    // Draw heatmap cells
    const cellSize = 40;
    const rows = Math.floor(canvas.height / cellSize);
    const cols = Math.floor(canvas.width / cellSize);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const intensity = Math.random();
        ctx.fillStyle = `rgba(${Math.floor(intensity * 255)}, ${Math.floor(
          intensity * 100
        )}, 0, 0.6)`;
        ctx.fillRect(
          col * cellSize,
          row * cellSize,
          cellSize - 1,
          cellSize - 1
        );
      }
    }

    // Draw legend
    ctx.fillStyle = '#000';
    ctx.font = '14px sans-serif';
    ctx.fillText('Traffic Intensity:', 10, canvas.height - 20);

    const legendWidth = 200;
    const legendHeight = 20;
    const legendX = 120;
    const legendY = canvas.height - 30;

    const legendGradient = ctx.createLinearGradient(
      legendX,
      0,
      legendX + legendWidth,
      0
    );
    legendGradient.addColorStop(0, '#ef4444');
    legendGradient.addColorStop(0.5, '#eab308');
    legendGradient.addColorStop(1, '#22c55e');

    ctx.fillStyle = legendGradient;
    ctx.fillRect(legendX, legendY, legendWidth, legendHeight);
  }, []);

  return (
    <div className="aspect-video w-full rounded-lg border bg-white p-4">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
}