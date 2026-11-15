import * as THREE from 'three';

// Рассеянный свет + солнце снаружи, светит в окно
export function addLights(scene) {
  const sun = new THREE.DirectionalLight(0xfff1d6, 4);
  sun.position.set(2, 8, -10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.normalBias = 0.02;
  Object.assign(sun.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6 });

  scene.add(new THREE.HemisphereLight(0xffffff, 0xd8cfc2, 2), sun);
}
