(function($){
  function d0003(item, options) {
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

  d0003.prototype = {
      init: function() {
          this.item.find(".grid-stack-item-content").append("<div class='dash-item-title'>d0003</div>");
      },
      reset: function() {
        this.item.find(".grid-stack-item-content .dash-item-title").remove();
      }
  }

  // jQuery plugin interface
  $.fn.d0003 = function(opt) {
      // slice arguments to leave only arguments after function name
      var args = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
          var item = $(this), instance = item.data('d0003');
          if(!instance) {
              // create plugin instance and save it in data
              item.data('d0003', new d0003(this, opt));
          } else {
              // if instance already created call method
              if(typeof opt === 'string') {
                  instance[opt].apply(instance, args);
              }
          }
      });
  }
}(jQuery));
