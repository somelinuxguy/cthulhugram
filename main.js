var imageList = [{
        url: "https://cdn.shopify.com/s/files/1/1029/3689/products/04_P4-preview_grande.jpg?v=1510151836",
        caption: "Goodnight Cthulhu"
    },
    {
        url: "https://cdn7.bigcommerce.com/s-v4eyu8t/images/stencil/1024x1024/products/1683/1918/Flying_Spaghetti_Monster_Cthulhu__25392.1424387525.jpg?c=2",
        caption: "Silly Things"
    },
    {
        url: "https://i.redd.it/786vtfv1dedz.jpg",
        caption: "Water Benders VS Cthulhu"
    },
    {
        url: "https://img.huffingtonpost.com/asset/574fbb1112000025008951c4.jpeg?ops=scalefit_720_noupscale",
        caption: "Gnargth Pw'gnarld Fghte'ghtr"
    },
    {
        url: "https://vignette.wikia.nocookie.net/lovecraft/images/c/cf/Screenshot_20171018-093500.jpg/revision/latest?cb=20171020174137",
        caption: "Get my good side"
    },
    {
        url: "https://i.kym-cdn.com/photos/images/original/000/786/185/53b.jpg",
        caption: "Yikes"
    },
    {
        url: "https://pre00.deviantart.net/2a71/th/pre/i/2016/365/e/2/cute_cthulhu_by_psycho_kuscheldecke-datlfec.png",
        caption: "Lol"
    },
    {
        url: "https://geekandsundry.com/wp-content/uploads/2016/04/cthulhu_and_the_ninth_wave_by_fantasio-d9nw88r.jpg",
        caption: "Im on a boat"
    },
    {
        url: "https://static.comicvine.com/uploads/original/14/146991/5494117-2409085460-cthul.jpg",
        caption: "nomnom delicious"
    },
    {
        url: "https://vignette.wikia.nocookie.net/lovecraft/images/2/29/Azathoth_the_blind_idiot_god.jpg/revision/latest?cb=20180305005840",
        caption: "Republican National Convention"
    }
]

const toggleHidden = function(event) {
    console.log(event.currentTarget);
    console.log("toggle modal");
    modal.classList.toggle("show-modal");
}

const closeModal = function(event) {
    console.log(event.currentTarget);
    if (event.currentTarget === closeButton) {
        console.log("oink");
        modal.classList.toggle("show-modal");
    }
}

var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", toggleHidden);

for (var i = 0; i < imageList.length; i++) {
    // lets make a closure for each image.
    (function(){
        var content = document.querySelector('.mainbox'); //dot for query by class
        var thumbnailDIV = document.createElement('div');
        var thumbnailTextDIV = document.createElement('div');
        var thumbnailTextCaption = document.createElement('p');
        var newImg = document.createElement('img');
        var index = i;
        // set new image class, and attributes
        newImg.classList.add('smallpicture');
        newImg.src = imageList[index].url;
        newImg.alt = imageList[index].caption;

        //handle click function
        var handleClick = function(event) {
            var imageData = imageList[index];
            // show the modal:
            toggleHidden(event);
            // make new image, select element where .modal-content is
            const modalImage = document.createElement('img');
            const modalCaption = document.createElement('p');
            const container = modal.querySelector(".modal-content");
            // kill the old ones off.
            for (let child of container.children) {
                if (child.tagName === "P") {
                    container.removeChild(child);
                }
            }
            for (let child of container.children) {
                if (child.tagName === "IMG") {
                    container.removeChild(child);
                }
            }
            container.appendChild(modalImage);
            container.appendChild(modalCaption);
            modalCaption.classList.add('modalcaption');
            modalCaption.textContent = imageList[index].caption;
            modalImage.src = imageData.url;
            modalImage.classList.add('modalimg');
            }   //end handleClick

        thumbnailDIV.addEventListener('click', handleClick);
        thumbnailDIV.classList.add('thumbnail');
        // set up text div
        thumbnailTextDIV.classList.add('thumbnail-text');
        // set up caption div
        thumbnailTextCaption.classList.add('thumbnail-caption');
        thumbnailTextCaption.textContent = imageList[i].caption;
        // now add the new image to the new div, then to the content
        thumbnailDIV.appendChild(newImg);
        thumbnailDIV.appendChild(thumbnailTextDIV);
        thumbnailTextDIV.appendChild(thumbnailTextCaption);
        content.appendChild(thumbnailDIV);
    })();   //IIFE
}