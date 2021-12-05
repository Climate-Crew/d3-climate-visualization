// 1. Setup scene
const scene = new THREE.Scene();
var flames_mesh;
var sun_mesh;

var storms_pre_mesh;
var storms_post_mesh;

var drought_pre_mesh;
var drought_post_mesh;

var heat_pre_mesh;
var heat_post_mesh;

var camera;

(function() {
    const container = document.getElementById("globe");
    const canvas = container.getElementsByTagName("canvas")[0];
    var mixer;
    var delta;

    function init(points) {
        const { width, height } = container.getBoundingClientRect();


        // 2. Setup camera
        camera = new THREE.PerspectiveCamera(15, width / height);
        // 3. Setup renderer
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(width, height);

        // Single geometry to contain all points.
        const mergedGeometry = new THREE.Geometry();
        // Material that the points will be made of.
        const pointGeometry = new THREE.SphereGeometry(0.5, 1, 1);
        const pointMaterial = new THREE.MeshBasicMaterial({
            color: "white"
        });

        for (let point of points) {
            const { x, y, z } = convertFlatCoordsToSphereCoords(
                point.x,
                point.y,
                width,
                height
            );

            pointGeometry.translate(x, y, z);
            mergedGeometry.merge(pointGeometry);
            pointGeometry.translate(-x, -y, -z);
        }





        const globeShape = new THREE.Mesh(mergedGeometry, pointMaterial);
        scene.add(globeShape);

        const light = new THREE.AmbientLight( 0x404040, 50 ); // soft white light
        scene.add( light );
        const loader = new THREE.GLTFLoader();
        var pos;
        let clock = new THREE.Clock();

        loader.load('./3d_assets/sphere.glb', function ( gltf ) {
            mixer = new THREE.AnimationMixer(gltf.scene);

            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play()

                console.log(gltf.animations)
            });
            scene.add(gltf.scene);


        })

        loader.load('./3d_assets/flames.glb', function ( gltf ) {
            scene.add(gltf.scene);
            flames_mesh = gltf.scene;
            flames_mesh.visible = true;

        })

        loader.load('./3d_assets/sun.glb', function ( gltf ) {
            scene.add(gltf.scene);
            sun_mesh = gltf.scene
            sun_mesh.visible = true;

        })
        loader.load('./3d_assets/storms_pre.glb', function ( gltf ) {
            scene.add(gltf.scene);
            storms_pre_mesh = gltf.scene
            storms_pre_mesh.visible = true;

        })
        loader.load('./3d_assets/storms_post.glb', function ( gltf ) {
            scene.add(gltf.scene);
            storms_post_mesh = gltf.scene
            storms_post_mesh.visible = true;

        })
        loader.load('./3d_assets/drought_pre.glb', function ( gltf ) {
            scene.add(gltf.scene);
            drought_pre_mesh = gltf.scene
            drought_pre_mesh.visible = true;

        })
        loader.load('./3d_assets/drought_post.glb', function ( gltf ) {
            scene.add(gltf.scene);
            drought_post_mesh = gltf.scene
            drought_post_mesh.visible = true;

        })
        loader.load('./3d_assets/heat_pre.glb', function ( gltf ) {
            scene.add(gltf.scene);
            heat_pre_mesh = gltf.scene
            heat_pre_mesh.visible = true;

        })
        loader.load('./3d_assets/heat_post.glb', function ( gltf ) {
            scene.add(gltf.scene);
            heat_post_mesh = gltf.scene
            heat_post_mesh.visible = true;

        })




        ;



        //
        //  const { a, b, c } = convertFlatCoordsToSphereCoords(
        //      100,
        //      100,
        //
        //  );
        //
        //  const geometry = new THREE.Geometry();
        //  // Material that the points will be made of.
        //  const newGeometry = new THREE.SphereGeometry(1, 1, 1);
        //  const material = new THREE.MeshBasicMaterial({color: "#FF0000" } );
        //
        //  newGeometry.translate(a, b, c);
        //  geometry.merge(pointGeometry);
        //  newGeometry.translate(-a, -b, -c);
        //
        // // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        //  const DOT = new THREE.Mesh(geometry, material);
        //  scene.add(DOT);


        camera.orbitControls = new THREE.OrbitControls(camera, canvas);
        camera.orbitControls.enablePan = true;
        camera.orbitControls.enableRotate = true;
        camera.orbitControls.autoRotate = true;
        camera.orbitControls.maxDistance = 1800;
        camera.orbitControls.minDistance = 400;

        // Tweak this value based on how far/away you'd like the camera
        // to be from the globe.
        camera.position.z = -900;

        // 4. Use requestAnimationFrame to recursively draw the scene in the DOM.
        function animate() {
            camera.orbitControls.update();
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            //mixer.update( delta )
        }
        animate();
    }

    function hasWebGL() {
        const gl =
            canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (gl && gl instanceof WebGLRenderingContext) {
            return true;
        } else {
            return false;
        }
    }

    const globeRadius = 100;
    const globeWidth = 4098 / 2;
    const globeHeight = 1968 / 2;

    function convertFlatCoordsToSphereCoords(x, y) {
        let latitude = ((x - globeWidth) / globeWidth) * -180;
        let longitude = ((y - globeHeight) / globeHeight) * -90;
        latitude = (latitude * Math.PI) / 180;
        longitude = (longitude * Math.PI) / 180;
        const radius = Math.cos(longitude) * globeRadius;

        return {
            x: Math.cos(latitude) * radius,
            y: Math.sin(longitude) * globeRadius,
            z: Math.sin(latitude) * radius
        };
    }


    if (hasWebGL()) {
        window.fetch("3d_assets/points.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                init(data.points);
            });
    }
})()


function addModel(name){
    if(name == "flames"){
        flames_mesh.visible = true;
    }
    if(name == "sun"){
        sun_mesh.visible = true;
    }

    if(name == "storm"){
        storms_pre_mesh.visible = true;
    }
    if(name == "stormP"){
        storms_post_mesh.visible = true;
    }
    if(name == "drought"){
        drought_pre_mesh.visible = true;
    }
    if(name == "droughtP"){
        drought_post_mesh.visible = true;
    }
    if(name == "heat"){
        heat_pre_mesh.visible = true;
    }
    if(name == "heatP"){
        heat_post_mesh.visible = true;
    }
}


function removeModel(name){

    if(name == "flames"){
        flames_mesh.visible = false;
    }
    if(name == "sun"){
        sun_mesh.visible = false;
    }
    if(name == "storm"){
        storms_pre_mesh.visible = false;
    }
    if(name == "stormP"){
        storms_post_mesh.visible = false;
    }
    if(name == "drought"){
        drought_pre_mesh.visible = false;
    }
    if(name == "droughtP"){
        drought_post_mesh.visible = false;
    }
    if(name == "heat"){
        heat_pre_mesh.visible = false;
    }
    if(name == "heatP"){
        heat_post_mesh.visible = false;
    }

}

