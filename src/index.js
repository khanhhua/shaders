import * as T3 from 'three';

const scene = new T3.Scene();
const camera = new T3.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer = new T3.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);

document.body.appendChild(renderer.domElement);

const sphere = new T3.Mesh(new T3.SphereGeometry(5, 50, 50),
    new T3.MeshBasicMaterial({ color: 0xFF0000 }));
scene.add(sphere);

camera.position.z = 16;

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
