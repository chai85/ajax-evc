var evc = {};

evc.ajax = function (url, options) {
    var xhr = evc.createXHR(url, options);
    if (xhr) {
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        if (options.method.toUpperCase() === "POST") {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.send(option.data);
    }
};

evc.createXHR = function (url, options) {
    var xhr = false;

    if (window.XMLHttpRequest)
        xhr = new XMLHttpRequest();

    if (xhr) {
        options = options || {};
        options.method = options.method || "GET";
        options.async = options.async || true;
        options.data = options.data || null;

        if (options.data) {
            var qString = [];
            for (var key in options.data) {
                qString.push(encodeURIComponent(key) + "=" + encodeURIComponent(option.data[key]));
            }

            options.data = qString.join("&");
        }

        xhr.onreadystatechange = function () {
            if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
                var contentType = xhr.getResponseHeader("Content-Type");
                if (options.complete) {
                    if (contentType === "application/json")
                        options.complete.call(xhr, JSON.parse(xhr.responseText), xhr.status);
                    else if (contentType === "text/xml" || contentType === "application/xml")
                        options.complete.call(xhr, xhr.responseXML, xhr.status);
                    else
                        options.complete.call(xhr, xhr.responseText, xhr.status);
                }
            }
        }
        xhr.open(options.method, url, options.async);
        return xhr;
    } else
        return false;
}
