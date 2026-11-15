import * as THREE from 'three';

// Меш с позицией, поворотом и тенями
export function mesh(geometry, material, x, y, z, rx = 0, ry = 0) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, 0);
  m.castShadow = m.receiveShadow = true;
  return m;
}
