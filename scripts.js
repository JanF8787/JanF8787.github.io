let currentPhoto = 0;

let imagesData = [
    {
        photo: 'img/1.jpeg',
        title: 'Night Sky',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id magna eget nunc pharetra malesuada in a tellus. Suspendisse sit amet tortor suscipit, consectetur sapien ut, rutrum nunc. Etiam pharetra lacinia dapibus.'   
    },
    {
        photo: 'img/2.jpeg',
        title: 'Sea',
        description: 'Quisque maximus purus in ipsum fermentum gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus massa arcu, viverra ac justo quis, ullamcorper tincidunt risus. Aliquam malesuada odio in nunc pretium, luctus convallis turpis bibendum. Nullam eros nulla, vestibulum vitae tellus id, pretium accumsan nibh.'
    },
    {
        photo: 'img/3.jpeg',
        title: 'Astronaut',
        description: 'Sed tincidunt vehicula feugiat. In eu rutrum justo. Ut in nisl id massa ultrices efficitur nec id urna. Donec egestas finibus imperdiet. Proin eleifend tempor est a eleifend. Nullam tellus nisl, pellentesque sollicitudin fringilla quis, scelerisque et augue.'
    },
    {
        photo: 'img/4.jpeg',
        title: 'Sky',
        description: 'Proin consequat ipsum vitae nunc mollis, et egestas sem efficitur. Donec eget augue vitae quam maximus faucibus. Vivamus dictum imperdiet imperdiet. Cras ut vestibulum tellus. Nam sagittis est vitae dictum egestas. Proin nisi justo, tincidunt nec enim ut, faucibus pharetra erat.'
    },
    {
        photo: 'img/5.jpeg',
        title: 'Sunset',
        description: 'Quisque consectetur urna et posuere tempus. Nunc eget placerat ipsum, non auctor mi. Donec faucibus suscipit risus. Morbi commodo lectus eu tellus fermentum, bibendum ultrices nisl commodo. Curabitur rutrum vulputate bibendum.'
    },
    {
        photo: 'img/6.jpeg',
        title: 'Hill',
        description: 'Nunc ac consectetur velit. Cras fermentum bibendum hendrerit. Curabitur porttitor lacinia nunc nec hendrerit. Donec vitae nisl nec sapien facilisis interdum.'
    },
    {
        photo: 'img/7.jpeg',
        title: 'Waterfall',
        description: 'Fusce sagittis arcu et quam tincidunt facilisis. Vivamus ac sodales sem, ac luctus justo. Mauris sagittis odio id elit maximus, eget rhoncus elit suscipit.'
    },
    {
        photo: 'img/8.jpeg',
        title: 'Mountains',
        description: 'Mauris dignissim nisl et odio ullamcorper consequat. Pellentesque feugiat tellus sed nisl vehicula, vel euismod mi luctus. Praesent est leo, pharetra sed tempus eget, convallis eu erat. Sed dictum tellus lorem, sed interdum nisi ultricies et.'
    },
]

let loadPhoto = (numberPhoto) => {
    $('#photo').attr('src', imagesData[numberPhoto].photo);
    $('#photo-title').text(imagesData[numberPhoto].title);
    $('#photo-description').text(imagesData[numberPhoto].description);
}

loadPhoto(currentPhoto);

$('#left-arrow').click(() =>  {
    if (currentPhoto > 0){
        currentPhoto--;
    }
    loadPhoto(currentPhoto);
});

$('#right-arrow').click(() => {
    if (currentPhoto < imagesData.length){
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
});

let index = 0;

imagesData.forEach((data) => {
    $('#container2').append(`<div id="images"><img src='${data.photo}' id="image" data-number='${index}'>
      <div class="title">'${data.title}'</div></div>`);
    index++;
});

loadPhoto(currentPhoto);

$('#container2').click((event) => {
    currentPhoto = $(event.target).attr('data-number');
    loadPhoto(currentPhoto);
});






