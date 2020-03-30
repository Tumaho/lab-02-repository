'use strict'
var arrayObject = [];
let optionArray = [];


$.get('./data/page-1.json')
    .then(data => {
        data.forEach(element => {
            let x = new constructor(element.image_url, element.title, element.description, element.keyword);
            x.render();

        });

        let selectt = $("select");
        arrayObject.forEach(element => {
            if (!optionArray.includes(element.keyword)) {
                optionArray.push(element.keyword);
                selectt.append(`<option >${element.keyword}</option>`);
            }

        });
        selectt.on('change', function () {
            console.log('heil');
            $('section').hide();
            let value = this.value;
            optionArray.forEach(element => {
                if (element == value) {
                    optionRender(value);
                }
            });
        });
    });

// to render the images from selected option in menu
function optionRender(selected) {
    arrayObject.forEach(element => {
        if (element.keyword === selected) {
            let sec = $("<section></section>");
            $("main").append(sec);
            let h = $(`<h2> ${element.title}</h2>`);
            sec.append(h);
            let imgs = $(`<img src=${element.image_url}>`);
            sec.append(imgs);
            let paragraph = $(`<p> ${element.description}</p>`);
            imgs.after(paragraph);
        }
    });
}
// constructor
function constructor(image_url, title, description, keyword) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    arrayObject.push(this);
}
// to render the default images (all images)
constructor.prototype.render = function () {
    let sec = $("<section></section>");
    $("main").append(sec);
    let h = $(`<h2> ${this.title}</h2>`);
    sec.append(h);
    let imgs = $(`<img src=${this.image_url}>`);
    sec.append(imgs);
    let paragraph = $(`<p> ${this.description}</p>`);
    imgs.after(paragraph);

}


