(function () {

    var link = document.getElementsByTagName("a")[0];

    link.onclick = function () {

        // Create XHR request
        var xhr = new XMLHttpRequest();

        // handle the "onreadystagechange" event
        // xhr.readyState property values
        // xhr.readyState = 0 Uninitialized
        // xhr.readyState = 1 Loading (request is open)
        // xhr.readyState = 2 loaded (request sent to server)
        // xhr.readyState = 3 Interactive (server is responding)
        // xhr.readyState = 4 Complete

        xhr.onreadystatechange = function () {
            if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
                var body = document.getElementsByTagName("body")[0];
                var p = document.createElement("p");
                var pText = document.createTextNode(xhr.response);
                p.appendChild(pText);
                body.appendChild(p);
            }
        }

        // Open the request
        xhr.open("GET", "files/ajax.txt", true);

        // Send the request
        xhr.send(null);

        return false;
    }

})();
