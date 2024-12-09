import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

var audio;
var audioContext;
var analyser;
var source;
var bufferLength;
var dataArray;
var cons;
var es1;
var es2;
var es3;
var es4;
var es5;
var esr;

let selectedSong = null; 

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Pantalla de inicio
const intro = document.getElementById('intro');
const startButton = document.getElementById('start');
const songButtons = document.querySelectorAll('.song-button');

const songs = {
    s1: 'musica/pumpum.mp3', 
    s2: 'musica/arca.mp3', 
    s3: 'musica/diva.mp3'  
};


songButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedSong = songs[button.id]; 
        console.log(`Canción seleccionada: ${selectedSong}`);
    });
});


// Scene
const scene = new THREE.Scene();

// MODELS
const gltfLoader = new GLTFLoader();

//cargar para poder emeter el material 
const textureLoader = new THREE.TextureLoader();


// funsion para cargar los modelos al intro 
function addModelToIntro() {
    gltfLoader.load(
        '/models/console.glb',  
        (gltf) => {
            const model = gltf.scene.clone();
            //crear una variable para guardar el modelo y poder editarlo con esa constante
            cons = model
            
            model.position.set(0, 14.5, 99);  // Posición del modelo
            
            const scale = 0.7;
            model.scale.set(scale, scale, scale);  // Escala del modelo

            // Establecer la inclinación inicial solo en el eje X
            model.rotation.set(0.2, 80, 0);  // Incluir una ligera inclinación en el eje X (hacia adelante)

            scene.add(model);

            // Animación para cambiar la rotación sobre el eje Y
            const animateRotation = () => {
                // Hacer que el modelo gire solo sobre el eje Y
                model.rotation.y += 0.01;  // Controlar la velocidad de la rotación en el eje Y

                renderer.render(scene, camera);
                requestAnimationFrame(animateRotation);
            };

            animateRotation();  // Llamar a la función de animación
        }
    );

   //cargar otro modelo al intro
    gltfLoader.load(
        '/models/estrella1.glb',  
        (gltf) => {
            const model = gltf.scene.clone();
            es1 = model

            
            // cargar la textura
            textureLoader.load(
                '/models/texturi.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                model.traverse((obj) => {
                    //console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })

            
            model.position.set(6, 15, 99);  // Posición del modelo
            
            const scale = 0.1;
            model.scale.set(scale, scale, scale);  // Escala del modelo

            // Establecer la inclinación inicial solo en el eje X
            model.rotation.set(6, 5, 0);  // Incluir una ligera inclinación en el eje X (hacia adelante)

            scene.add(model);

            // Animación para cambiar la rotación sobre el eje Y
            const animateRotation = () => {
                // Hacer que el modelo gire solo sobre el eje Y
                model.rotation.y -= 0.03;  // Controlar la velocidad de la rotación en el eje Y

                renderer.render(scene, camera);
                requestAnimationFrame(animateRotation);
            };

            animateRotation();  // Llamar a la función de animación
        }
    );

    //cargar tercer modelo
    gltfLoader.load(
        '/models/estrella2.glb',  
        (gltf) => {
            const model = gltf.scene.clone();
            es2 = model
            console.log(es2)
            
            // cargar la textura
            textureLoader.load(
                '/models/texturi.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                model.traverse((obj) => {
                    //console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })

            model.position.set(12, 15, 99);  // Posición del modelo
            
            const scale = 0.1;
            model.scale.set(scale, scale, scale);  // Escala del modelo

            // Establecer la inclinación inicial solo en el eje X
            model.rotation.set(0.2, 80, 0);  // Incluir una ligera inclinación en el eje X (hacia adelante)

            scene.add(model);

            // Animación para cambiar la rotación sobre el eje Y
            const animateRotation = () => {
                // Hacer que el modelo gire solo sobre el eje Y
                model.rotation.y += 0.01;  // Controlar la velocidad de la rotación en el eje Y

                renderer.render(scene, camera);
                requestAnimationFrame(animateRotation);
            };

            animateRotation();  // Llamar a la función de animación
        }
    );

    //cargar cuarto modelo primera estrella 
    gltfLoader.load(
        '/models/estrella3.glb',  
        (gltf) => {
            const model = gltf.scene.clone();
            es3 = model
            
            // cargar la textura
            textureLoader.load(
                '/models/texturi.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                model.traverse((obj) => {
                    //console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })

            model.position.set(-12, 15, 99);  // Posición del modelo
            
            const scale = 0.5;
            model.scale.set(scale, scale, scale);  // Escala del modelo

            // Establecer la inclinación inicial solo en el eje X
            model.rotation.set(0.7, 80, 0);  // Incluir una ligera inclinación en el eje X (hacia adelante)

            scene.add(model);

            // Animación para cambiar la rotación sobre el eje Y
            const animateRotation = () => {
                // Hacer que el modelo gire solo sobre el eje Y
                model.rotation.y += 0.01;  // Controlar la velocidad de la rotación en el eje Y

                renderer.render(scene, camera);
                requestAnimationFrame(animateRotation);
            };

            animateRotation();  // Llamar a la función de animación
        }
    );

    //cargar quint modelo segunda estrella
    gltfLoader.load(
        '/models/estrella4.glb',  
        (gltf) => {
            const model = gltf.scene.clone();
            es4 = model
            
            // cargar la textura
            textureLoader.load(
                '/models/texturi.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                model.traverse((obj) => {
                    //console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })

            model.position.set(-6, 15, 99);  // Posición del modelo
            
            const scale = 0.1;
            model.scale.set(scale, scale, scale);  // Escala del modelo

            // Establecer la inclinación inicial solo en el eje X
            model.rotation.set(0.2, 80, 0);  // Incluir una ligera inclinación en el eje X (hacia adelante)

            scene.add(model);

            // Animación para cambiar la rotación sobre el eje Y
            const animateRotation = () => {
                // Hacer que el modelo gire solo sobre el eje Y
                model.rotation.y += 0.01;  // Controlar la velocidad de la rotación en el eje Y

                renderer.render(scene, camera);
                requestAnimationFrame(animateRotation);
            };

            animateRotation();  // Llamar a la función de animación
        }
    );

    //cargar sexto modelo ultima estrella
    gltfLoader.load(
        '/models/estrella5.glb',  
        (gltf) => {
            const model = gltf.scene.clone();
            es5 = model
            
            // cargar la textura
            textureLoader.load(
                '/models/texturi.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                model.traverse((obj) => {
                    //console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })

            model.position.set(18, 15, 98);  // Posición del modelo
            
            const scale = 0.3;
            model.scale.set(scale, scale, scale);  // Escala del modelo

            // Establecer la inclinación inicial solo en el eje X
            model.rotation.set(0.2, 80, 0);  // Incluir una ligera inclinación en el eje X (hacia adelante)

            scene.add(model);

            // Animación para cambiar la rotación sobre el eje Y
            const animateRotation = () => {
                // Hacer que el modelo gire solo sobre el eje Y
                model.rotation.y += 0.01;  // Controlar la velocidad de la rotación en el eje Y

                renderer.render(scene, camera);
                requestAnimationFrame(animateRotation);
            };

            animateRotation();  // Llamar a la función de animación
        }
    );


}
addModelToIntro();

const ducks = [];
const foxes = [];
const estrellas = [];
const estrellas2 = [];
const estrellas3 = [];
const estrellas4 = [];




// Funciones para agregar modelos randon segunda parte
function addRandomDuck() {
    gltfLoader.load(
        '/models/console.glb',
        (gltf) => {
            const duck = gltf.scene.children[0].clone();

            const randomX = (Math.random() - 0.5) * 200; 
            const randomY = Math.random() * 70 + 10; 
            const randomZ = -50 + Math.random() * 50; 
            duck.position.set(randomX, randomY, randomZ);

            const scale = 0.2;
            duck.scale.set(scale, scale, scale);

            const speed = (Math.random() * 0.02) + 0.01;
            const rotationSpeed = (Math.random() * 0.02) + 0.01; 

            ducks.push({ duck, speed, rotationSpeed });

            scene.add(duck);
        }
    );
}

function addRandomFox() {
    gltfLoader.load(
        '/models/estrella1.glb',
        (gltf) => {
            const fox = gltf.scene.clone(); 

            // cargar la textura
            textureLoader.load(
                '/models/texturi2.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                fox.traverse((obj) => {
                    console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })
            
            const randomX = (Math.random() - 0.5) * 200; 
            const randomY = Math.random() * 70 + 10; 
            const randomZ = -50 + Math.random() * 50;
            fox.position.set(randomX, randomY, randomZ);

            const scale = 4;
            fox.scale.set(scale, scale, scale);

            const speed = (Math.random() * 0.02) + 0.01;
            const rotationSpeed = (Math.random() * 0.02) + 0.01;

            foxes.push({ fox, speed, rotationSpeed });

            scene.add(fox);
        }
    );
}

function addRandomEs2() {
    gltfLoader.load(
        '/models/estrella2.glb',
        (gltf) => {
            const es2 = gltf.scene.clone(); 

            // cargar la textura
            textureLoader.load(
                '/models/texturi3.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                es2.traverse((obj) => {
                    console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })
            
            const randomX = (Math.random() - 0.5) * 200; 
            const randomY = Math.random() * 70 + 10; 
            const randomZ = -50 + Math.random() * 50;
            es2.position.set(randomX, randomY, randomZ);

            const scale = 4;
            es2.scale.set(scale, scale, scale);

            const speed = (Math.random() * 0.02) + 0.01;
            const rotationSpeed = (Math.random() * 0.02) + 0.01;

            estrellas.push({ es2, speed, rotationSpeed });

            scene.add(es2);
        }
    );

    
}

function addRandomEs3() {
    gltfLoader.load(
        '/models/estrella3.glb',
        (gltf) => {
            const es3 = gltf.scene.clone(); 

            // cargar la textura
            textureLoader.load(
                '/models/texturi3.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                es3.traverse((obj) => {
                    console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })
            
            const randomX = (Math.random() - 0.5) * 200; 
            const randomY = Math.random() * 70 + 10; 
            const randomZ = -50 + Math.random() * 50;
            es3.position.set(randomX, randomY, randomZ);

            const scale = 4;
            es3.scale.set(scale, scale, scale);

            const speed = (Math.random() * 0.02) + 0.01;
            const rotationSpeed = (Math.random() * 0.02) + 0.01;

            estrellas2.push({ es3, speed, rotationSpeed });

            scene.add(es3);
        }
    );

    
}

function addRandomEs4() {
    gltfLoader.load(
        '/models/estrella4.glb',
        (gltf) => {
            const es4 = gltf.scene.clone(); 

            // cargar la textura
            textureLoader.load(
                '/models/texturi4.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                es4.traverse((obj) => {
                    console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })
            
            const randomX = (Math.random() - 0.5) * 200; 
            const randomY = Math.random() * 70 + 10; 
            const randomZ = -50 + Math.random() * 50;
            es4.position.set(randomX, randomY, randomZ);

            const scale = 2;
            es4.scale.set(scale, scale, scale);

            const speed = (Math.random() * 0.01) + 0.01;
            const rotationSpeed = (Math.random() * 0.02) + 0.01;

            estrellas3.push({ es4, speed, rotationSpeed });

            scene.add(es4);
        }
    );

    
}

function addRandomEs5() {
    gltfLoader.load(
        '/models/estrella5.glb',
        (gltf) => {
            const es5 = gltf.scene.clone(); 

            // cargar la textura
            textureLoader.load(
                '/models/texturi3.png', 
                (matcapTexture) => {
                // Crear el material MatCap
                const matcapMaterial = new THREE.MeshMatcapMaterial({
                    matcap: matcapTexture
                });
                
                es5.traverse((obj) => {
                    console.log(obj.material)
                    obj.material = matcapMaterial
                })

            })
            
            const randomX = (Math.random() - 0.5) * 200; 
            const randomY = Math.random() * 70 + 10; 
            const randomZ = -50 + Math.random() * 50;
            es5.position.set(randomX, randomY, randomZ);

            const scale = 2;
            es5.scale.set(scale, scale, scale);

            const speed = (Math.random() * 0.01) + 0.01;
            const rotationSpeed = (Math.random() * 0.02) + 0.01;

            estrellas4.push({ es5, speed, rotationSpeed });

            scene.add(es5);
        }
    );

    
}



// Fondo degradado reactivo al audio
const gradientGeometry = new THREE.PlaneGeometry(400, 200);
const gradientMaterial = new THREE.ShaderMaterial({
    uniforms: {
        uColor1: { value: new THREE.Color(0xff0000) },
        uColor2: { value: new THREE.Color(0xff0000) }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying vec2 vUv;
        void main() {
            gl_FragColor = vec4(mix(uColor2, uColor1, vUv.y), 1.0);
        }
    `,
    side: THREE.DoubleSide
});
const gradientPlane = new THREE.Mesh(gradientGeometry, gradientMaterial);
gradientPlane.scale.set(10, 10, 1); 
gradientPlane.position.set(0, 0, -300); 
scene.add(gradientPlane);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

/**
 * Camera
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height, 0.1, 500);
camera.position.set(0, 15, 100); 
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
scene.background = null;

/**
 * Window Resize Handling
 */
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Evento de teclado
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['a', 's', 'd'].includes(key)) {
        addRandomDuck();
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['q', 'w', 'e'].includes(key)) {
        addRandomFox();
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['z','x','c'].includes(key)) {
        addRandomEs2();
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['r','t','y'].includes(key)) {
        addRandomEs3();
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['f','g','h'].includes(key)) {
        addRandomEs4();
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['v','b','n'].includes(key)) {
        addRandomEs5();
    }
});

// Función para actualizar los colores en función del audio
function updateBackgroundColor() {
    if (analyser) {
        analyser.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < bufferLength/ 1; i++) {
            sum += dataArray[i];
        }
        let average = sum / bufferLength;

        const colorFactor = (average / 255) * 2  ; // multiplicar x numeros mas grandes para hacer mas evidente el cmabio de colores
        const newColor1 = new THREE.Color(0xff0000).lerp(new THREE.Color(0xff0000), colorFactor); 
        const newColor2 = new THREE.Color(0xff0000).lerp(new THREE.Color(0x000000), colorFactor);
        
        gradientMaterial.uniforms.uColor1.value = newColor1;
        gradientMaterial.uniforms.uColor2.value = newColor2;
    }
}

const clock = new THREE.Clock();

const animate = () => {
    const elapsedTime = clock.getElapsedTime();
    updateBackgroundColor();

    ducks.forEach(({ duck, speed, rotationSpeed }) => {
        duck.position.z += speed * 10;
        duck.rotation.y += rotationSpeed;
        duck.rotation.x += rotationSpeed * 0.3;

        if (duck.position.z > camera.position.z) {
            scene.remove(duck);
            const index = ducks.indexOf(duck);
            if (index > -1) ducks.splice(index, 1); 
        }
    });

    foxes.forEach(({ fox, speed, rotationSpeed }) => {
        fox.position.z += speed * 10;
        fox.rotation.y += rotationSpeed;
        fox.rotation.x += rotationSpeed * 0.3; 

        if (fox.position.z > camera.position.z) {
            scene.remove(fox);
            const index = foxes.indexOf(fox);
            if (index > -1) foxes.splice(index, 1); 
        }
    });

    estrellas.forEach(({ es2, speed, rotationSpeed }) => {
        es2.position.z += speed * 10;
        es2.rotation.y += rotationSpeed;
        es2.rotation.x += rotationSpeed * 0.3; 

        if (es2.position.z > camera.position.z) {
            scene.remove(es2);
            const index = estrellas.indexOf(es2);
            if (index > -1) estrellas.splice(index, 1); 
        }
    });

    estrellas2.forEach(({ es3, speed, rotationSpeed }) => {
        es3.position.z += speed * 10;
        es3.rotation.y += rotationSpeed;
        es3.rotation.x += rotationSpeed * 0.3; 

        if (es3.position.z > camera.position.z) {
            scene.remove(es3);
            const index = estrellas2.indexOf(es3);
            if (index > -1) estrellas2.splice(index, 1); 
        }
    });

    estrellas3.forEach(({ es4, speed, rotationSpeed }) => {
        es4.position.z += speed * 10;
        es4.rotation.y += rotationSpeed;
        es4.rotation.x += rotationSpeed * 0.3; 

        if (es4.position.z > camera.position.z) {
            scene.remove(es4);
            const index = estrellas3.indexOf(es4);
            if (index > -1) estrellas3.splice(index, 1); 
        }
    });

    estrellas4.forEach(({ es5, speed, rotationSpeed }) => {
        es5.position.z += speed * 10;
        es5.rotation.y += rotationSpeed;
        es5.rotation.x += rotationSpeed * 0.3; 

        if (es5.position.z > camera.position.z) {
            scene.remove(es5);
            const index = estrellas4.indexOf(es5);
            if (index > -1) estrellas4.splice(index, 1); 
        }
    });
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

// Funciones de carga y reproducción de audio
async function waitForAudioLoad(audio) {
    if (audio.readyState >= 3) {
        return;
    }
    return new Promise((resolve) => {
        audio.addEventListener("loadeddata", resolve, { once: true });
    });
}

async function initAudioFileInteraction() {
    audio = document.getElementById("audio");

    await waitForAudioLoad(audio);
    audio.setAttribute('controls', true);
    audio.play(); 
}

function setupAudioContext() {
    if (audioContext) return;

    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256; 

    source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
};

startButton.addEventListener('click', async () => {
    intro.style.display = 'none';     
    await initAudioFileInteraction(); 
    setupAudioContext();
    //cons.visible = false
    //es1.visible = false
   //es2.visible = false

   if (!selectedSong) {
    alert('Por favor, selecciona una canción antes de iniciar.');
    return;
    }

    intro.style.display = 'none'; // Ocultar la pantalla de introducción
    await initAudioFileInteraction(); // Inicializar el archivo de audio
    setupAudioContext();

    const audio = document.getElementById('audio');
    audio.src = selectedSong; // Cargar la canción seleccionada
    audio.load(); // Asegurarse de que se cargue el archivo
    audio.play(); // Reproducir la canción

   
});

izq.addEventListener('click', async () => {
    if (cons) {  
        cons.position.x -= 6;  
    }
    if (es1) { 
        es1.position.x -= 6; 
    }
    if (es2) {
        es2.position.x -= 6;
    }
    if (es3) {
        es3.position.x -= 6;
    }
    if (es4) {
        es4.position.x -= 6;
    }
    if (es5) {
        es5.position.x -= 6;
    }
});

der.addEventListener('click', async () => {
    if (cons) {  
        cons.position.x += 6;  
    }
    if (es1) { 
        es1.position.x += 6; 
    }
    if (es2) {
        es2.position.x += 6;
    }
    if (es3) {
        es3.position.x += 6;
    }
    if (es4) {
        es4.position.x += 6;
    }
    if (es5) {
        es5.position.x += 6;
    }

});

animate();  
