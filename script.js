
var VIDEO_ASPECT_RATIO = 16.0 / 9.0;

var lxlTextStrings = [
  "Original GS",
  "Edited GS",
  "Edited GS",
  "Edited GS",
  "Edited GS",
  "Edited GS",
];

var manTextStrings = [
  "Original GS",
  "Edited GS",
  "Edited GS",
  "Edited GS",
  "Edited GS",
  "Edited GS",
  "Edited GS",
  "Edited GS",
];

// var farmTextStrings = [
//     "Original GS",
//     "Edited GS",
//     "Edited GS",
//     "Edited GS",
//     "Edited GS",
//     "Edited GS",
//     "Edited GS",
// ];

// var bearTextStrings = [
//   "Original GS",
//   "Edited GS",
//   "Edited GS",
//   "Edited GS",
// ];

// $("#farm-video").on('loadedmetadata', function() {
//     this.width = this.videoWidth;
//     this.height = this.videoHeight;
//     console.log(this.width, this.height);
//   });
// $("#lxl-video").on('loadedmetadata', function() {
//     this.width = this.videoWidth;
//     this.height = this.videoHeight;
//     console.log(this.width, this.height);
//   });
$("#man-video").on('loadedmetadata', function() {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });

$(function() {
    current_lxl_idx = 0;
    current_man_idx = 0;
    // current_farm_idx = 0;
    // current_bear_idx = 0;

    lxlVideo = document.getElementById('lxl-video');
    manVideo = document.getElementById('man-video');
    // farmVideo = document.getElementById('farm-video');
    // bearVideo = document.getElementById('bear-video');

    lxlText = document.getElementById('lxl-text');
    manText = document.getElementById('man-text');
    // farmText = document.getElementById('farm-text');
    // bearText = document.getElementById('bear-text');

    lxlThumbnails = [
      document.getElementById('original-lxl'),
      document.getElementById('short-blk-up'),
      document.getElementById('short-blue-low'),
      document.getElementById('blue-up'),
      document.getElementById('blue-low-lxl'),
      document.getElementById('black-up'),
    ];
    for (var i = 0; i < lxlThumbnails.length; i++) {
      lxlThumbnails[i].addEventListener('click', change_lxl_index.bind(this, i));
    }
    change_lxl_index(current_lxl_idx);

    manThumbnails = [
      document.getElementById('original-man'),
      document.getElementById('blue-low'),
      document.getElementById('dark-green-up'),
      document.getElementById('red-low'),
      document.getElementById('short-gray-up'),
      document.getElementById('short-green-up'),
      document.getElementById('sleeveless'),
    ];
    for (var i = 0; i < manThumbnails.length; i++) {
      manThumbnails[i].addEventListener('click', change_man_index.bind(this, i));
    }
    change_man_index(current_man_idx);

    // farmThumbnails = [
    //     document.getElementById('original'),
    //     document.getElementById('autumn'),
    //     document.getElementById('desert-sand'),
    //     document.getElementById('midnight'),
    //     document.getElementById('snow'),
    //     document.getElementById('storm'),
    //     document.getElementById('sunset'),
    //   ];
    //   for (var i = 0; i < farmThumbnails.length; i++) {
    //     farmThumbnails[i].addEventListener('click', change_farm_index.bind(this, i));
    //   }
    //   change_farm_index(current_farm_idx);


      // bearThumbnails = [
      //   document.getElementById('original-bear'),
      //   document.getElementById('grizzly'),
      //   document.getElementById('polar'),
      //   document.getElementById('panda'),
      // ];
      // for (var i = 0; i < bearThumbnails.length; i++) {
      //   bearThumbnails[i].addEventListener('click', change_bear_index.bind(this, i));
      // }
      // change_bear_index(current_bear_idx);

  });

function change_man_index (idx) {
    manThumbnails[idx].classList.add("active-btn");
    if (current_man_idx != idx) {
        manThumbnails[current_man_idx].classList.remove("active-btn");
    }
    current_man_idx = idx;
    manText.innerHTML = manTextStrings[idx];
    manVideo.src = "data/videos/man/man-" + manThumbnails[idx].id + ".mp4";
    manVideo.load();
}  

function change_lxl_index (idx) {
    lxlThumbnails[idx].classList.add("active-btn");
    if (current_lxl_idx != idx) {
        lxlThumbnails[current_lxl_idx].classList.remove("active-btn");
    }
    current_lxl_idx = idx;
    lxlText.innerHTML = lxlTextStrings[idx];
    lxlVideo.src = "data/videos/lxl/lxl-" + lxlThumbnails[idx].id + ".mp4";
    lxlVideo.load();
}  

// function change_farm_index (idx) {
//     farmThumbnails[idx].classList.add("active-btn");
//     if (current_farm_idx != idx) {
//         farmThumbnails[current_farm_idx].classList.remove("active-btn");
//     }
//     current_farm_idx = idx;
//     farmText.innerHTML = farmTextStrings[idx];
//     farmVideo.src = "data/videos/farm/farm-" + farmThumbnails[idx].id + ".mp4";
//     farmVideo.load();
// }

// function change_bear_index (idx) {
//     bearThumbnails[idx].classList.add("active-btn");
//     if (current_bear_idx != idx) {
//         bearThumbnails[current_bear_idx].classList.remove("active-btn");
//     }
//     current_bear_idx = idx;
//     bearText.innerHTML = bearTextStrings[idx];
//     bearVideo.src = "data/videos/bear/bear-" + bearThumbnails[idx].id + ".mp4";
//     bearVideo.load();
// }
