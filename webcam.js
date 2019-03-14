(function () {
  navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

  navigator.getMedia(
      //allows video not audio
      { video:true, audio: false },

      // success callback
      function (stream) {
          var video = document.getElementsByTagName('video')[0];
          video.srcObject = stream;
          video.play();
      },   
      //handle error
      function (error) {
          console.log(error);
      })   
})();