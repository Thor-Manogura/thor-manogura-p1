var photos = [];

function Photo(name,rooms,booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked

    this.checkAvailability = function (){
        return this.rooms + this.booked * .2;
    }
}
function photoClick(event){
    // console.log(event);
    var photoName = event.target.innerHTML;
    var photo = photos.find(function (photo)
    {return photo.name === photoName});


    if (photo != undefined) {
        var nameEl = document.getElementById('name');
        nameEl.textContent = photo.name;

        var roomsEl = document.getElementById('rooms')
        roomsEl.textContent = photo.rooms;

        var bookedEl = document.getElementById('booked');
        bookedEl.textContent = photo.booked;

        // var availableEl = document.getElementById('available')
        // availableEl.textContent = photo.available;
        var availableEl = document.getElementById('available')
        availableEl.textContent = photo.checkAvailability();
    }
}
function getTodayDate() {
    var today = new Date();
    return today.getFullYear();
}
// Page init function
function init() {
    //Construct Hotels and add to data 
    photos.push(new Photo('Senior Picture', 80, 130));
    photos.push(new Photo('Photo Session', 100, 190));
    photos.push(new Photo('Wedding', 120, 140));
    photos.push(new Photo('Fashion', 150, 350));

    // // Write copyright date{
    // var dateEl = document.getElementById('date')
    // dateEl.textContent = getTodayDate();

    //Wire click event fir the hotel list
    var list = document.getElementById('photo-list');
    list.onclick = photoClick;
}


init();