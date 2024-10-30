import * as THREE from "three";
import $ from 'jquery';

import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


//Global
const CIRCLES = 0; const POINTS = 1; const LINES = 2;
var clock = new THREE.Clock();
var delta = 0;

//Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

//Render
const renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5);
const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);

//Lights
const ambientLight = new THREE.AmbientLight(0xFFFFFF, .4);
scene.add(ambientLight);

//Bloom effect
const bloomPass = new UnrealBloomPass(
new THREE.Vector2(window.innerWidth, window.innerHeight),5.5, 1.2, 0);
composer.addPass(bloomPass);
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 10;

//Add the canvas
const three_div = $("#epicycloid")[0];
const home_div = $("#home")[0]
renderer.setSize(window.innerWidth, window.innerHeight);
three_div.appendChild(renderer.domElement);

//Page observer (stop rendering when leaving)
let isRendering = true;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !isRendering) {
            isRendering = true;
            animate(); 
        } else if (!entry.isIntersecting && isRendering) {
            isRendering = false;
        }
    });
}, {threshold: 0});
observer.observe(three_div);


function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomPulse(min, max) { 
    
    const rdm = Math.floor(Math.random() * (max - min + 1) + min);
    if (rdm ==0) return 1;
    else return rdm;
}

function calcEpicycloidPoints(numPoints, numCircles, radius, pulses, quaternions) {
 
    var points = [];
    
    for (let c = 0; c < numCircles; c++) {
        for (let t = 0; t < numPoints; t++) {
            
            const theta = (t / numPoints) * 2 * Math.PI;
            const x = radius[c] * Math.cos(pulses[c]*theta);
            const y = radius[c] * Math.sin(pulses[c]*theta);
            var rotated_point = (new THREE.Vector3(x, y, 0)).applyQuaternion(quaternions[c]);

            if (c==0) points.push(rotated_point);
            else points[t].add(rotated_point);
        }
    }
    
    points.push(points[0]);
    return points;
}

function createEpicycloidConstructors(numCircles, radius, quaternions, rotate_group) {
    
    const circles = []; const points = []; const lines = [];
    const material = new THREE.LineBasicMaterial({ color: 0xccff00, linewidth: 1 });
    
    for (let c = 0; c < numCircles; c++) {

        const line = [new THREE.Vector3(0,0,0), new THREE.Vector3(radius[c],0,0)];

        //Geometries
        const circle_geometry = new THREE.CircleGeometry(radius[c], 30);
        circle_geometry.setAttribute( 'position', new THREE.BufferAttribute(circle_geometry.attributes.position.array.slice(3, circle_geometry.attributes.position.array.length-3), 3));
        circle_geometry.index = null;
        const line_geometry = new THREE.BufferGeometry().setFromPoints(line);
        const point_geometry = new THREE.SphereGeometry(.1, 20, 10);

        const draw_circle = new THREE.LineLoop(circle_geometry, material);
        const draw_point = new THREE.Mesh( point_geometry, material);
        const draw_line = new THREE.Line(line_geometry, material);

        draw_circle.applyQuaternion(quaternions[c]); //rotate circles

        rotate_group.add(draw_point);
        rotate_group.add(draw_circle);
        rotate_group.add(draw_line);

        points.push(draw_point)
        circles.push(draw_circle);  
        lines.push(draw_line);
    }

    //Center point
    const point_geometry = new THREE.SphereGeometry(.1, 20, 10);
    const last_draw_point = new THREE.Mesh(point_geometry, material);
    scene.add(last_draw_point);

  return [circles, points, lines];
}

function playEpicycloidConstructors(t, epicycloidConstructors, numPoints, numCircles, radius, pulses, quaternions) {
  
    var circle_pos = new THREE.Vector3(0,0,0); //Start position

    for (let c = 0; c < numCircles; c++) {
        
        //Create a rotating point in a 2D plane (z=0)
        const x = radius[c] * Math.cos(pulses[c]*t);
        const y = radius[c] * Math.sin(pulses[c]*t);
        
        //Rotate the plane
        var rotated_point = (new THREE.Vector3(x, y, 0)).applyQuaternion(quaternions[c]);

        //Update lines position
        epicycloidConstructors[LINES][c].geometry.attributes.position.array.set([circle_pos.x,circle_pos.y,circle_pos.z],0);
        circle_pos.add(rotated_point); //Update start position for next circles
        epicycloidConstructors[LINES][c].geometry.attributes.position.array.set([circle_pos.x,circle_pos.y,circle_pos.z],3);
        epicycloidConstructors[LINES][c].geometry.attributes.position.needsUpdate = true;

        //Update circles position
        if (c < numCircles-1) epicycloidConstructors[CIRCLES][c+1].position.set(circle_pos.x,circle_pos.y,circle_pos.z);

        //Update points position
        epicycloidConstructors[POINTS][c].position.set(circle_pos.x,circle_pos.y,circle_pos.z);
    }
  
}

function updateCirclesGeometry(circles, radius) {
    for (let c = 0; c < numCircles; c++) {
        circles[c].geometry.dispose();
        circles[c].geometry = new THREE.CircleGeometry(radius[c], 30);
        circles[c].geometry.setAttribute( 'position', new THREE.BufferAttribute(circles[c].geometry.attributes.position.array.slice(3, circles[c].geometry.attributes.position.array.length-3), 3));
        circles[c].geometry.index = null;
    }
}

function updateRadiusEpicycloid(epicycloidConstructors, radius, numPoints, numCircles, pulses, quaternions) {
    
    updateCirclesGeometry(epicycloidConstructors[CIRCLES],radius);

    const epicycloidPoints = calcEpicycloidPoints(numPoints, numCircles, radius, pulses, quaternions);
    const curve = new THREE.CatmullRomCurve3(epicycloidPoints, true);

    epicycloid.geometry.dispose();
    epicycloid.geometry = new THREE.TubeGeometry(curve, 200, 0.1, 15, false);
}

function updateCirclesQuaternions(epicycloidConstructors, quaternions, numCircles) {
    for (var c = 0; c < numCircles; c++) {
        epicycloidConstructors[CIRCLES][c].quaternion.identity();
        epicycloidConstructors[CIRCLES][c].applyQuaternion(quaternions[c]);
    }
}

function setRandomParams(numCircles, radius, quaternions, pulses) {
    for (let c = 0; c < numCircles; c++) {
        radius[c] = getRandomFloat(1,4);
        pulses[c] = getRandomPulse(-5,5);
        const rdm_axis = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
        const rdm_angle = Math.random()*2*Math.PI;
        quaternions[c] = (new THREE.Quaternion()).setFromAxisAngle(rdm_axis, rdm_angle);
      }
}

function setRadiusMouse(event, radius) {
    
    radius[0] = event.clientX/window.innerWidth*5;
    radius[1] = event.clientY/window.innerHeight*5;
}

function onMouseMove(event) {
    
    setRadiusMouse(event, radius);
    updateRadiusEpicycloid(epicycloidConstructors, radius, numPoints, numCircles, pulses, quaternions)
}

function onMouseClick(event) {
    setRandomParams(numCircles, radius, quaternions, pulses);
    setRadiusMouse(event, radius);
    updateRadiusEpicycloid(epicycloidConstructors, radius, numPoints, numCircles, pulses, quaternions);
    updateCirclesQuaternions(epicycloidConstructors, quaternions, numCircles);
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );


}

//Parameters

const numCircles = 3;
const numPoints = 100; 

//Init random parameters
const radius = new Array(numCircles).fill(0);
const quaternions = new Array(numCircles).fill(0);
const pulses = new Array(numCircles).fill(0);
setRandomParams(numCircles, radius, quaternions, pulses);

//Rotating group
const rotate_group = new THREE.Group();

//Epicycloid objects
const epicycloidConstructors = createEpicycloidConstructors(numCircles, radius, quaternions, rotate_group);
var epicycloidPoints = calcEpicycloidPoints(numPoints, numCircles, radius, pulses, quaternions);
var curve = new THREE.CatmullRomCurve3(epicycloidPoints, true);
const tubeGeometry = new THREE.TubeGeometry(curve, 200, 0.08, 15, false);
const tubeMaterial = new THREE.MeshStandardMaterial( {color: 0x4800ff});
var epicycloid =  new THREE.Mesh(tubeGeometry, tubeMaterial);

rotate_group.add(epicycloid);
scene.add(rotate_group);

//Events
home_div.addEventListener('mousemove', onMouseMove, false);
home_div.addEventListener('click', onMouseClick, false);
window.addEventListener('resize',onWindowResize, true);

var t = .0;
function animate() {

    if (isRendering) {
        delta = clock.getDelta(); 

        rotate_group.rotation.y +=  .5 * delta;
        playEpicycloidConstructors(t, epicycloidConstructors, numPoints, numCircles, radius, pulses, quaternions);

        composer.render()
        requestAnimationFrame(animate);
        
        t = (t + delta/2) % (2*Math.PI);

    } 
}
animate();




