import * as THREE from 'three';
import { ROOM, OPENING } from './config.js';
import { mesh } from './mesh.js';

const { width: W, height: H, depth: D, wall: T } = ROOM;

// Пол, потолок, стены; в передней стене — проём под окно
export function addRoom(scene) {
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xeeeae4 });
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x8a6a4f });

  scene.add(
    mesh(new THREE.PlaneGeometry(W, D), floorMat, 0, 0, 0, -Math.PI / 2),           // пол
    mesh(new THREE.PlaneGeometry(W, D), wallMat, 0, H, 0, Math.PI / 2),             // потолок
    mesh(new THREE.PlaneGeometry(D, H), wallMat, -W / 2, H / 2, 0, 0, Math.PI / 2), // левая
    mesh(new THREE.PlaneGeometry(D, H), wallMat, W / 2, H / 2, 0, 0, -Math.PI / 2), // правая
    mesh(new THREE.PlaneGeometry(W, H), wallMat, 0, H / 2, D / 2, 0, Math.PI),      // задняя
    mesh(frontWallGeometry(), wallMat, 0, 0, -D / 2 - T),                           // передняя
  );
}

function frontWallGeometry() {
  const { x0, x1, y0, y1 } = OPENING;
  const shape = new THREE.Shape(rect(-W / 2, 0, W / 2, H));
  shape.holes.push(new THREE.Path(rect(x0, y0, x1, y1)));
  return new THREE.ExtrudeGeometry(shape, { depth: T, bevelEnabled: false });
}

function rect(x0, y0, x1, y1) {
  return [
    new THREE.Vector2(x0, y0), new THREE.Vector2(x1, y0),
    new THREE.Vector2(x1, y1), new THREE.Vector2(x0, y1),
  ];
}
