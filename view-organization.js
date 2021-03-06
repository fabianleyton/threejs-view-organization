/* Fabian Leyton */
var ViewOrganization = ViewOrganization || {};
var arrayNode = [];

ViewOrganization.init = () =>{

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var cube;
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    //var geometry = new THREE.BoxGeometry(1,2,1);
    //var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    
    if(arrayNode.length > 0){
        arrayNode.forEach(function(index, item){
            var geometry = new THREE.BoxGeometry(1,2,1);
            var material = new THREE.MeshBasicMaterial({color: 0x00ff00});        
             cube = new THREE.Mesh(geometry, material);    
            scene.add(cube);
        });
    }
    
    camera.position.z = 5;
    //camera.position.y = 2;
    
    function animate(){
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        
        //cube.rotation.x += 0.01;
        //cube.rotation.y += 0.01;
        //cube.rotation.z +=0.01;
    }
    
    animate();
    
}

ViewOrganization.addNode = (id, text, color,x,y,z) => {
    arrayNode.push({
        "id": id,
        "text": text,
        "color" : color,
        "x":x,
        "y":y,
        "z":z
    })
}