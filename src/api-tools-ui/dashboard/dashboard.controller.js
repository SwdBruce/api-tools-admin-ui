/* jshint latedef: false */
(function () {
  'use strict';

  angular
    .module('api-tools')
    //.constant('marked', marked)
    // .directive('markdown', function ($sce, marked) {
    //   'use strict';
    //   // marked.setOptions({
    //   //   highlight: function (code) {
    //   //     return hljs.highlightAuto(code).value;
    //   //   }
    //   // });
      
    //   var link = function (scope, element) {
    //     var html = marked(element.text()),
    //         trustedHtml = $sce.getTrustedHtml(html);
            
    //     element.html(trustedHtml);
    //   };
        
    //   return {
    //     restrict: 'EA',
    //     link: link
    //   };
    // })
    .controller('Dashboard', Dashboard);

  Dashboard.$inject = [ '$rootScope', '$http' ];

  function Dashboard($rootScope, $http) {
    /* jshint validthis:true */
    var vm = this;

    // URL del archivo Markdown
    var url = "http://localhost:8023/README.md";
    // $http.get('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(function(response) {
    //     // Si la solicitud es exitosa, procesa el contenido Markdown
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     // Manejar errores, como la URL no válida o el archivo no encontrado
    //     console.error('Error al cargar el archivo Markdown:', error);
    //   });

    // Realizar una solicitud HTTP para obtener el contenido del archivo Markdown
    var requestOptions = {
      method: 'GET',
      redirect: 'follow', 
      mode: 'no-cors',
    };

    
    // fetch("http://localhost:8023/README.md", {
    //   method: "GET",
    //     withCredentials: true,
    //     crossorigin: true,
    //     //mode: "no-cors", 
    //     credentials: 'include', 
    //     headers: {
    //       'Origin': 'http://localhost:3000',
    //       "Content-Type": "text/markdown",
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    //       "Access-Control-Allow-Headers": "Content-Type, X-Requested-With"
    //     }
    // })
    // .then(response => {
    //   console.log(response);
    // })
    //.then(result => document.getElementById('readme-container').innerHTML = marked.parse(result))
    ;

    $http.get(url)
      .then(function(response) {
        // Si la solicitud es exitosa, procesa el contenido Markdown
        var markdownText = response.data;
        $rootScope.renderedHtml = marked.parse(markdownText);
      })
      .catch(function(error) {
        // Manejar errores, como la URL no válida o el archivo no encontrado
        console.error('Error al cargar el archivo Markdown:', error);
      });
  }
})();
