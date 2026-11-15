import * as THREE from 'three';
import { ROOM, WINDOW } from './config.js';
import { addRoom } from './room.js';
import { addWindow } from './window.js';
import { addEnvironment } from './environment.js';
import { addLights } from './lights.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
addEnvironment(scene);
addRoom(scene);
addWindow(scene);
addLights(scene);

// Камера у задней стены, смотрит прямо в центр окна
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);
camera.position.set(0, WINDOW.y, ROOM.depth / 2 - 0.3);
camera.lookAt(0, WINDOW.y, -ROOM.depth / 2);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

renderer.setAnimationLoop(() => renderer.render(scene, camera));
