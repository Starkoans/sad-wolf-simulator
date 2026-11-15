// Все размеры в метрах
export const ROOM = { width: 6, height: 3, depth: 6, wall: 0.25 };
export const WINDOW = { width: 1.6, height: 1.4, y: 1.5, frame: 0.06 };
export const SKY_COLOR = 0xa8d4f5;

// Границы оконного проёма в плоскости передней стены
export const OPENING = {
  x0: -WINDOW.width / 2,
  x1: WINDOW.width / 2,
  y0: WINDOW.y - WINDOW.height / 2,
  y1: WINDOW.y + WINDOW.height / 2,
};
