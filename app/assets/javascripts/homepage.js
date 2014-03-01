$(document).ready(function(){
  bindEvents();
})


bindEvents = function() {
  $('.courses-container').on('click', '.course', function(e) {
    e.preventDefault();
    Overlay.display();
    Overlay.populate(this);
  }),

  $('.exit-modal').on('click', function(e){
    e.preventDefault();
    Overlay.hide();
  })
}

var Overlay = (function() {
  //private _methods and _vars
  return {
    display: function() {
      $('.overlay').css('display', 'block');
      $('.modal').css('display', 'block');
    },

    hide: function(){
     $('.overlay').css('display', 'none');
     $('.modal').css('display', 'none');
    },

    populate: function(course) {
      var course_id = $(course).attr('data-course-id');
      alert(course_id);
    }
  }

}());
