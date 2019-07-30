/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js2', '/js/particlesjssecond-config.json', function() {
    console.log('callback - particles2.js config loaded');
})