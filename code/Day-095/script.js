const app = function () {
    function init() {
        console.log('init ready');
    }
    return {
        init: init
    }
}();