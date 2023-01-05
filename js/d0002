(function($){
  function d0002(item, options) {
    var defaults = {
      color: "#000000",
      backgroundColor: "#ffffff",
      beforeInit: function(){},
      complete: function(){}
    };
    this.options = $.extend(defaults, options);
    this.item = $(item);
    this.init();
  }

  d0002.prototype = {
      init: function() {
          this.item.find(".grid-stack-item-content").append("<div class='dash-item-title'>d0002</div>");
      },
      reset: function() {
        this.item.find(".grid-stack-item-content .dash-item-title").remove();
      }
  }

  // jQuery plugin interface
  $.fn.d0002 = function(opt) {
      // slice arguments to leave only arguments after function name
      var args = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
          var item = $(this), instance = item.data('d0002');
          if(!instance) {
              // create plugin instance and save it in data
              item.data('d0002', new d0002(this, opt));
          } else {
              // if instance already created call method
              if(typeof opt === 'string') {
                  instance[opt].apply(instance, args);
              }
          }
      });
  }
}(jQuery));
