$(function(){
    if (window.location.pathname.endsWith("/index.html") || window.location.pathname.endsWith("/")) {
        $.get("http://api.wrlus.com/security/android", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#android-result").html(result[1])
            $("#android-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
        $.get("http://api.wrlus.com/security/ios", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#ios-result").html(result[1])
            $("#ios-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
    } else if (window.location.pathname.endsWith("/chipset.html")) {
        $.get("http://api.wrlus.com/security/qualcomm", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#qualcomm-result").html(result[1])
            $("#qualcomm-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
    }
});