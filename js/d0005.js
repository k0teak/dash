(function($){
  function d0005(item, options) {
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

  d0005.prototype = {
      init: function() {
          this.item.find(".grid-stack-item-content").append("<div class='dash-item-title'>d0005</div>");
      },
      reset: function() {
        this.item.find(".grid-stack-item-content .dash-item-title").remove();
      }
  }

  // jQuery plugin interface
  $.fn.d0005 = function(opt) {
      // slice arguments to leave only arguments after function name
      var args = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
          var item = $(this), instance = item.data('d0005');
          if(!instance) {
              // create plugin instance and save it in data
              item.data('d0005', new d0005(this, opt));
          } else {
              // if instance already created call method
              if(typeof opt === 'string') {
                  instance[opt].apply(instance, args);
              }
          }
      });
  }
}(jQuery));
