
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,0.1,1000);
var renderer = new THREE.WebGLRenderer();

// Canvas
const canvas = document.querySelector('canvas.webgl')

renderer.setSize( window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry,material);
scene.add(cube);

camera.position.z = 5;


renderer.render(scene,camera);