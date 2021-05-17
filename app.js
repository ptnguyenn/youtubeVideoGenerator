var input = document.getElementById('input');
var submit = document.getElementById('submit');

submit.addEventListener('click', getVideo);

function getVideo() {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyBj8hXNspUSEr4yW34qWcl7MXBvg_guOf4',
          q: input.value,
          part: 'snippet',
          maxResults: 1,
          type: 'video',
          videoEmbeddable: true,
      },
      success: function(data){
          embedVideo(data)
      },
      error: function(response){
          console.log("Request Failed");
      }
    });
  }

function embedVideo(data) {
  $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
  $('h3').text(data.items[0].snippet.title)
  $('.description').text(data.items[0].snippet.description)
}

getVideo();