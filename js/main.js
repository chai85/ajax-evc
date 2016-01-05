(function () {

    var link = document.getElementsByTagName("a")[0];

    link.onclick = function () {

        evc.ajax('files/ajax.xml', {
            method: "GET",
            complete: function (response) {
                console.log(response);
            }
        });

        return false;
    }

})();
