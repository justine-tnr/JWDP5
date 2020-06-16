const url = 'http://localhost:3000/api/cameras';
const fetchCameras = fetch(url)
    .catch(error => new error(response.status))
    .then((res) => res.json());
    
fetchCameras.then(data => displayCameras(data));

const displayCameras = (cameras) => {
    console.log (cameras);
    const list = document.getElementById("list");
    console.log (list);
    cameras.map(camera => {
        const div = document.createElement("div");
        div.innerHTML = camera.name;
        list.appendChild(div);
    })
}