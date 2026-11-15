import * as THREE from 'three';
import { SKY_COLOR } from './config.js';
import { mesh } from './mesh.js';

// Вид за окном: небо и земля до горизонта
export function addEnvironment(scene) {
  scene.background = new THREE.Color(SKY_COLOR);
  scene.fog = new THREE.Fog(SKY_COLOR, 20, 120);
  scene.add(mesh(
    new THREE.PlaneGeometry(400, 400),
    new THREE.MeshStandardMaterial({ color: 0x6f9a52 }),
    0, -0.05, 0, -Math.PI / 2,
  ));
}
