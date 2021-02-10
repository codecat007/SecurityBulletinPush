$(function(){
    if (window.location.pathname.endsWith("/index.html") || window.location.pathname.endsWith("/")) {
        $.get("http://api.wrlus.com/security/android", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#android-result").html(result[1])
            $("#android-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
        $.get("http://api.wrlus.com/security/pixel", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#pixel-result").html(result[1])
            $("#pixel-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
        $.get("http://api.wrlus.com/security/aaos", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#aaos-result").html(result[1])
            $("#aaos-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
        $.get("http://api.wrlus.com/security/ios", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#ios-result").html("iOS & iPadOS "+result[1])
            $("#ios-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
        $.get("http://api.wrlus.com/security/macos", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#macos-result").html("macOS "+result[1])
            $("#macos-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
        $.get("http://api.wrlus.com/security/tvos", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#tvos-result").html("tvOS "+result[1])
            $("#tvos-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
        $.get("http://api.wrlus.com/security/watchos", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#watchos-result").html("watchOS "+result[1])
            $("#watchos-link").attr("href", result[2])
            $("#datetime").html(new Date().toLocaleString())
        })
        $.get("http://api.wrlus.com/security/microsoft", {}, function(response) {
            var exp = /\(\'(\S*)\'\, \'(\S*)\'\)/
            var result = exp.exec(response)
            $("#microsoft-result").html(result[1])
            $("#microsoft-link").attr("href", result[2])
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