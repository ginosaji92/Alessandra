
var vm = {
	nombre_regalo: ko.observable(), 
	texto_regalo: ko.observable(),
  email_regalo: ko.observable()
};
/*
vm.nombre_regalo("David");
vm.texto_regalo("Hola cómo estás?");*/

ko.applyBindings(vm);
