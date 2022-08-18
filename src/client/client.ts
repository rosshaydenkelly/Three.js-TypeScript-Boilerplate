import * as THREE from 'three'
import { Int8Attribute } from 'three';

//TODO
//.gitignore
//add XR button

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

let cube: THREE.Mesh;

init();
animate();

function init() {
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 2

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);

    setupCube();

    window.addEventListener('resize', onWindowResize, false);

}

function setupCube(){
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
    });

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    render();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    renderer.render(scene, camera);
}

