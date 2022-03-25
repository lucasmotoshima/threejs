//import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { AlphaFormat, SphereGeometry } from 'three'
let keydown = []
// Loading
const normalTexture = new THREE.TextureLoader().load('');

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects

//SOLO
const geometry = new THREE.BoxGeometry(5,0.1,5);
const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const solo = new THREE.Mesh( geometry, material2 );
solo.position.z = 2.5
solo.position.x = 0.1
solo.position.y = -0.6
scene.add( solo );

//TETO
const geometryTeto  = new THREE.BoxGeometry(5,0.1,5);
const material3 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const teto = new THREE.Mesh( geometryTeto, material3 );
teto.position.z = 2.5
teto.position.x = 0
teto.position.y = 0.9
scene.add( teto );



//Parede Frente
const geometryParedeFrente  = new THREE.BoxGeometry(5, 1.5, 0.1 );
const material4 = new THREE.MeshBasicMaterial( {color: 0x212121} );
const paredeFrente = new THREE.Mesh( geometryParedeFrente, material4 );
paredeFrente.position.z = 0
paredeFrente.position.x = 0
paredeFrente.position.y = 0.2
scene.add( paredeFrente );


// CUBES    

const texture = new THREE.TextureLoader().load( '/textures/sand.jpg' );
const material = new THREE.MeshBasicMaterial( { map: texture } )

const geometrySquare1  = new THREE.BoxGeometry(1,1,1)
const cube = new THREE.Mesh(geometrySquare1,material) 
cube.position.z = 5
cube.position.x = 0.5
cube.position.y = 0.2
scene.add(cube)

const geometrySquare2  = new THREE.BoxGeometry(1,1,1)
const cube2 = new THREE.Mesh(geometrySquare2,material)
cube2.position.z = 10
cube2.position.x = 0.5
cube2.position.y = 0.2
scene.add(cube2)

/**
 * Camera
 */
// Base camera

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 12
scene.add(camera)
window.onkeydown = function(e) {
    keydown[e.key] = true;
}
window.onkeyup = function(e) {
    keydown[e.key] = false;
}

// Controls
var animate = function () {
    requestAnimationFrame(animate)
    if(keydown["ArrowUp"])camera.position.z -= 0.1;
    if(keydown["ArrowDown"])camera.position.z += 0.1;
    if(keydown["ArrowRight"])camera.position.x += 0.1;
    if(keydown["ArrowLeft"])camera.position.x -= 0.1;
    renderer.render(scene,camera)
}
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.render(scene, camera)
animate();