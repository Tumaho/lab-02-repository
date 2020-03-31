'use strict'
let arrayObject = [];
let optionArray = [];
let arrayObject2 = [];
let optionArray2 = [];
$('#art2').hide();

let btn1 = $('#button1');
let btn2 = $('#button2');
btn1.on('click',function(){
    
$('#art1').show();
$('#art2').hide();
});
btn2.on('click',function(){
    $('#art2').show();
    $('#art1').hide();
});




$.get('./data/page-1.json')
    .then(data => {
        data.forEach(element => {
            let x = new constructor(element.image_url, element.title, element.description, element.keyword, element.horns);
            arrayObject.push(x);
            x.render($('#page1'));

        });

        let selectt = $("#one");
        selectt.append(`<option >keyword</option>`);
        arrayObject.forEach(element => {
            if (!optionArray.includes(element.keyword)) {
                optionArray.push(element.keyword);
                selectt.append(`<option >${element.keyword}</option>`);
            }

        });
        selectt.on('change', function () {
            console.log('heil');
            $('#page1 section').hide();
            let value1 = this.value;
            optionArray.forEach(element => {
                if (element == value1) {
                    optionRender(value1,$('#page1'),arrayObject);
                }
            });
        });

        let selectt2 = $("#two");
        selectt2.append(`<option >Sort</option>`);
        selectt2.append(`<option >title</option>`);
        selectt2.append(`<option >horns</option>`);
        selectt2.on('change', function () {

            if (this.value == 'title') {
                arrayObject.sort((a, b) =>
                    (a.title > b.title) ? 1 : -1);
                $('#page1 section').hide();
                arrayObject.forEach((element) => {
                    console.log(element.title);
                    let temp = $('#obada').html();

                    var temp1 = Mustache.render(temp, element);
                    $('#page1').append(temp1);


                });
            }
            if (this.value == 'horns') {
                arrayObject.sort((a, b) =>
                    (a.horns > b.horns) ? 1 : -1);
                $('#page1 section').hide();
                arrayObject.forEach((element) => {
                    
                    let temp = $('#obada').html();

                    var temp1 = Mustache.render(temp, element);
                    $('#page1').append(temp1);


                });
            }

        });

    });



$.get('./data/page-2.json')
    .then(data => {
        data.forEach(element => {
            let x = new constructor(element.image_url, element.title, element.description, element.keyword, element.horns);
            arrayObject2.push(x);
            x.render($('#page2'));

        });

        let selectt = $("#three");
        selectt.append(`<option >keyword</option>`);
        arrayObject2.forEach(element => {
            if (!optionArray2.includes(element.keyword)) {
                optionArray2.push(element.keyword);
                selectt.append(`<option >${element.keyword}</option>`);
            }

        });
        selectt.on('change', function () {
            console.log('heil');
            $('#page2 section').hide();
            let value = this.value;
            optionArray2.forEach(element => {
                if (element == value) {
                    optionRender(value,$('#page2'),arrayObject2);
                }
            });
        });

        let selectt2 = $("#four");
        selectt2.append(`<option >Sort</option>`);
        selectt2.append(`<option >title</option>`);
        selectt2.append(`<option >horns</option>`);
        selectt2.on('change', function () {

            if (this.value == 'title') {
                arrayObject2.sort((a, b) =>
                    (a.title > b.title) ? 1 : -1);
                $('#page2 section').hide();
                arrayObject2.forEach((element) => {
                    console.log(element.title);
                    let temp = $('#obada').html();

                    var temp1 = Mustache.render(temp, element);
                    $('#page2').append(temp1);


                });
            }
            if (this.value == 'horns') {
                arrayObject2.sort((a, b) =>
                    (a.horns > b.horns) ? 1 : -1);
                $('#page2 section').hide();
                arrayObject2.forEach((element) => {
                    console.log(element.title);
                    let temp = $('#obada').html();

                    var temp1 = Mustache.render(temp, element);
                    $('#page2').append(temp1);


                });
            }
        });

    });

// to render the images from selected option in menu
function optionRender(selected,article,arr) {
    arr.forEach((element) => {
        if (element.keyword == selected) {
            let temp = $('#obada').html();

            var temp1 = Mustache.render(temp, element);
            article.append(temp1);

        }
        
    });
}
// constructor
function constructor(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    
}

// to render the default images (all images)
constructor.prototype.render = function (f) {
    let temp = $('#obada').html();

    var temp1 = Mustache.render(temp, this);
    f.append(temp1);

}


   



