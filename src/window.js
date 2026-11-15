import * as THREE from 'three';
import { ROOM, WINDOW, OPENING } from './config.js';
import { mesh } from './mesh.js';

// Рама с вертикальной перемычкой и стекло — посередине толщины стены
export function addWindow(scene) {
  const { width, height, y, frame: f } = WINDOW;
  const { x0, x1, y0, y1 } = OPENING;
  const z = -ROOM.depth / 2 - ROOM.wall / 2;
  const frameMat = new THREE.MeshStandardMaterial({ color: 0xffffff });

  scene.add(
    mesh(new THREE.BoxGeometry(width, f, f), frameMat, 0, y0 + f / 2, z),
    mesh(new THREE.BoxGeometry(width, f, f), frameMat, 0, y1 - f / 2, z),
    mesh(new THREE.BoxGeometry(f, height, f), frameMat, x0 + f / 2, y, z),
    mesh(new THREE.BoxGeometry(f, height, f), frameMat, x1 - f / 2, y, z),
    mesh(new THREE.BoxGeometry(f, height, f), frameMat, 0, y, z),
  );

  const glass = mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshStandardMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.12, depthWrite: false }),
    0, y, z,
  );
  glass.castShadow = false;
  scene.add(glass);
}
