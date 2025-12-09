import * as THREE from "https://unpkg.com/three@0.159.0/build/three.module.js";
import { GLTFLoader } from "https://unpkg.com/three@0.159.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://unpkg.com/three@0.159.0/examples/jsm/controls/OrbitControls.js";

const viewers = [];
const loader = new GLTFLoader();
const modelCache = new Map();

function loadModel(path) {
    if (modelCache.has(path)) {
        return modelCache.get(path);
    }

    const promise = new Promise((resolve, reject) => {
        loader.load(
            path,
            gltf => {
                resolve(gltf.scene);
            },
            undefined,
            error => {
                reject(error);
            }
        );
    });

    modelCache.set(path, promise);
    return promise;
}

function initViewer(container) {
    const width = container.clientWidth;
    const height = container.clientHeight || 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(1.2, 0.9, 1.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(1);
    container.appendChild(renderer.domElement);

    const light1 = new THREE.DirectionalLight(0xffffff, 1.2);
    light1.position.set(3, 4, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(-3, 2, -4);
    scene.add(light2);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.4;
    controls.minDistance = 0.6;
    controls.maxDistance = 2.2;

    const modelPath = container.dataset.model;

    loadModel(modelPath)
        .then(baseScene => {
            const model = baseScene.clone(true);

            const box = new THREE.Box3().setFromObject(model);
            const center = new THREE.Vector3();
            const size = new THREE.Vector3();
            box.getCenter(center);
            box.getSize(size);

            model.position.x -= center.x;
            model.position.y -= center.y;
            model.position.z -= center.z;

            const scale = 0.8 / Math.max(size.x, size.y, size.z);
            model.scale.setScalar(scale);

            scene.add(model);
        })
        .catch(() => {
        });

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();

    viewers.push({ container, camera, renderer });
}

function resizeViewers() {
    viewers.forEach(v => {
        const w = v.container.clientWidth;
        const h = v.container.clientHeight || 260;
        v.camera.aspect = w / h;
        v.camera.updateProjectionMatrix();
        v.renderer.setSize(w, h);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".product-3d-viewer").forEach(el => initViewer(el));
    window.addEventListener("resize", resizeViewers);
});
