import { useEffect, useRef } from 'react';

export function LayoutViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw placeholder grid
    ctx.strokeStyle = '#e2e8f0';
    const gridSize = 40;

    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw sample fixtures
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(80, 80, 120, 80);
    ctx.fillRect(240, 80, 160, 80);
    ctx.fillRect(80, 200, 320, 120);
  }, []);

  return (
    <div className="aspect-video w-full rounded-lg border bg-white">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ minHeight: '300px' }}
      />
    </div>
  );
}