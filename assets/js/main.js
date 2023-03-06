
$(document).ready(function () {

  $('#Business-Dropdown').click(function () {
    $('.Business-Dropdown').toggleClass('show');
  });
  $('#Business-Dropdown-1').click(function () {
    $('.Business-Dropdown-1').toggleClass('show');
  });
  $('.panel-button').click(function () {
    $('.panel-dropdown-menu').toggleClass('show');
  });
  $('#Sales-Dropdown').click(function () {
    $('.Sales-Dropdown').toggleClass('show');
  });
  $('#Transactions-Dropdown').click(function () {
    $('.transactions-dropdown').toggleClass('show');
  });
  $('#Setting-Dropdown').click(function () {
    $('.Setting-Dropdown').toggleClass('show');
  });
  $('#Setting-Dropdown-1').click(function () {
    $('.Setting-Dropdown-1').toggleClass('show');
  });
  $('.close').click(function () {
    $('.aside').toggleClass('is-active');
  });
  $('.panel_link').click(function () {
    $('.panel_link').removeClass("active_panel");
    $(this).addClass("active_panel");
  });
});


let uploadBotton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");

uploadBotton.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(uploadBotton.files[0]);
  reader.onload = () => {
    chosenImage.setAttribute("src", reader.result);



  }
  fileName.textContent = uploadBotton.files[0].name;
}








/* Bootstrap 5 JS included */

console.clear();
('use strict');


// Drag and drop - single or multiple image files
// https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
// https://codepen.io/joezimjs/pen/yPWQbd?editors=1000
(function () {

  'use strict';

  // Four objects of interest: drop zones, input elements, gallery elements, and the files.
  // dataRefs = {files: [image files], input: element ref, gallery: element ref}

  const preventDefaults = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  const highlight = event =>
    event.target.classList.add('highlight');

  const unhighlight = event =>
    event.target.classList.remove('highlight');

  const getInputAndGalleryRefs = element => {
    const zone = element.closest('.upload_dropZone') || false;
    const gallery = zone.querySelector('.upload_gallery') || false;
    const input = zone.querySelector('input[type="file"]') || false;
    return { input: input, gallery: gallery };
  }

  const handleDrop = event => {
    const dataRefs = getInputAndGalleryRefs(event.target);
    dataRefs.files = event.dataTransfer.files;
    handleFiles(dataRefs);
  }


  const eventHandlers = zone => {

    const dataRefs = getInputAndGalleryRefs(zone);
    if (!dataRefs.input) return;

    // Prevent default drag behaviors
    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
      zone.addEventListener(event, preventDefaults, false);
      document.body.addEventListener(event, preventDefaults, false);
    });

    // Highlighting drop area when item is dragged over it
    ;['dragenter', 'dragover'].forEach(event => {
      zone.addEventListener(event, highlight, false);
    });
    ;['dragleave', 'drop'].forEach(event => {
      zone.addEventListener(event, unhighlight, false);
    });

    // Handle dropped files
    zone.addEventListener('drop', handleDrop, false);

    // Handle browse selected files
    dataRefs.input.addEventListener('change', event => {
      dataRefs.files = event.target.files;
      handleFiles(dataRefs);
    }, false);

  }


  // Initialise ALL dropzones
  const dropZones = document.querySelectorAll('.upload_dropZone');
  for (const zone of dropZones) {
    eventHandlers(zone);
  }

  // file upload drag N drop js start
  // No 'image/gif' or PDF or webp allowed here, but it's up to your use case.
  // Double checks the input "accept" attribute
  const isImageFile = file =>
    ['image/jpeg', 'image/png', 'image/svg+xml'].includes(file.type);
  function previewFiles(dataRefs) {
    if (!dataRefs.gallery) return;
    for (const file of dataRefs.files) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        let img = document.createElement('img');
        img.className = 'upload_img mt-2';
        img.setAttribute('alt', file.name);
        img.src = reader.result;
        dataRefs.gallery.appendChild(img);
      }
    }
  }
  // Based on: https://flaviocopes.com/how-to-upload-files-fetch/
  const imageUpload = dataRefs => {
    // Multiple source routes, so double check validity
    if (!dataRefs.files || !dataRefs.input) return;
    const url = dataRefs.input.getAttribute('data-post-url');
    if (!url) return;
    const name = dataRefs.input.getAttribute('data-post-name');
    if (!name) return;
    const formData = new FormData();
    formData.append(name, dataRefs.files);
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log('posted: ', data);
        if (data.success === true) {
          previewFiles(dataRefs);
        } else {
          console.log('URL: ', url, '  name: ', name)
        }
      })
      .catch(error => {
        console.error('errored: ', error);
      });
  }
  // Handle both selected and dropped files
  const handleFiles = dataRefs => {
    let files = [...dataRefs.files];
    // Remove unaccepted file types
    files = files.filter(item => {
      if (!isImageFile(item)) {
        console.log('Not an image, ', item.type);
      }
      return isImageFile(item) ? item : null;
    });
    if (!files.length) return;
    dataRefs.files = files;
    previewFiles(dataRefs);
    imageUpload(dataRefs);
  }

})();
// file upload drag N drop js end


// function TabHighlighter(target) {
//   var $this = target;
//   var width = $this.closest("li").width();
//   var offset = $this.closest("li").offset().left;
//   var outerWidth = $this.closest("li").outerWidth();
//   var left = width / 2 + offset;
//   document.getElementByClassName("tab-highlighter").css({
//     left: left,
//   });
// }
// document.on("click", "ul.navbar-body li a", function () {
//   TabHighlighter(this);
//   $this.closest("li").siblings(".active").classList.remove("active");
//   $this.closest("li").classList.add("active");
// });
// window.resize(function () {
//   TabHighlighter("ul.navbar-body li.active a");
// });
// document.ready(function () {
//   TabHighlighter("ul.navbar-body li.active a");
// });  
// });
window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    data: [{
      type: "column",
      color: "#775DA6",
      legendMarkerColor: "grey",
      dataPoints: [
        { y: 0, label: "Older" },
        { y: 1000, label: "Jan" },
        { y: 2100, label: "Feb" },
        { y: 1700, label: "Mar" },
        { y: 7000, label: "Apr" },
        { y: 2500, label: "Future" },
      ]
    }]
  });
  chart.render();

}











// jQuery(document).ready(function ($) {
//   jQuery(".f-p-carousel").owlCarousel({
//     loop: true,
//     margin: 30,
//     nav: true,
//     dots: false,
//     navText: [
//       '<i class="fa fa-arrow-left"></i>',
//       '<i class="fa fa-arrow-right"></i>',
//     ],
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 2,
//       },
//       1000: {
//         items: 3,
//       },
//     },
//   });
//   $("a").click(function () {
//     $("a").addClass("clickme");
//   });
// }); // End of document ready function


//range
/* range */
function rangeSlider(value) {
  document.getElementById('rangeValue').innerHTML = value;
}

/* range2 */
const inputLeft = document.getElementById("input-left");
const inputRight = document.getElementById("input-right");

const thumbLeft = document.querySelector(".slider > .thumb.left");
const thumbRight = document.querySelector(".slider > .thumb.right");
const range = document.querySelector(".slider > .range");

const setLeftValue = () => {
  const _this = inputLeft;
  const [min, max] = [parseInt(_this.min), parseInt(_this.max)];

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  const percent = ((_this.value - min) / (max - min)) * 100;
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
};

const setRightValue = () => {
  const _this = inputRight;
  const [min, max] = [parseInt(_this.min), parseInt(_this.max)];

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  const percent = ((_this.value - min) / (max - min)) * 100;
  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
};

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

function rangeLeftSlider(value) {
  document.getElementById('range2LeftValue').innerHTML = value;
}
function rangeRightSlider(value) {
  document.getElementById('range2RightValue').innerHTML = value;
}