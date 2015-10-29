if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
    var version = parseFloat(RegExp.$1);
    if (version > 2.3) {
        var phoneScale = parseInt(window.screen.width) / 320;
        document.write('<meta name="viewport" content="width=320, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi, user-scalable=no">');
    } else {
        document.write('<meta name="viewport" content="width=320, target-densitydpi=device-dpi, user-scalable=no">');
    }
} else {
    document.write('<meta name="viewport" content="width=320, target-densitydpi=device-dpi, user-scalable=no">');
}
