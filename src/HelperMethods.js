var getPhotos = function(urlArray){

    urlArray.forEach(url => {
        const img = new Image();
        img.src= url;
        console.log(img.width);
    });
}
exports.getPhotos = getPhotos;