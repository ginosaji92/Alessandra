ko.bindingHandlers.slideUpDown = {  
     init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {  
          var visible = ko.utils.unwrapObservable(valueAccessor());  
          if (visible) {  
            $(element).show();  
       } else {  
            $(element).hide();  
       }  
  },  
  update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {  
       var visible = ko.utils.unwrapObservable(valueAccessor());  
       if (visible) {  
            $(element).slideDown();  
       } else {  
            $(element).slideUp();  
       }  
  }  
};  
$(document).ready(function() {  
     ko.applyBindings({  
          visible: ko.observable(false)  
     });  
});  