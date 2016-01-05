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

    var form = document.getElementsByTagName("form")[0];

    form.onsubmit = function () {

        var url = form.getAttribute("action");
        var emailVal = form.getElementById("email");

        evc.ajax(url, {
            method: "POST",
            data: {
                email: emailVal
            }
        });

        return false;
    }

})();
