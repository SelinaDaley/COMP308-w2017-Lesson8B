/* custom javascript */

// IFEE
(function(){
    $(".btn-danger").click(function(event){
        if(!confirm("Are you sure?")) {
            window.location.assign('/games');
            event.preventDefault();
        }
    });
})();