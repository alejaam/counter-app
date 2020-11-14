const getImage = async() => {
    const apiKey = "Ccx08K44oZE5u1GL4d4EOuhejM2dStiO";
    const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await respuesta.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    console.log(data);
    
};

getImage();
