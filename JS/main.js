cargarListener();

function cargarListener() {
    document.addEventListener('DOMContentLoaded', SideNav);
    document.addEventListener('DOMContentLoaded', Tabs);
    document.addEventListener('DOMContentLoaded', Scrollspy);
    document.addEventListener('DOMContentLoaded', Collapsible);
    document.addEventListener('DOMContentLoaded', Floating);
    document.addEventListener('DOMContentLoaded', Tooltipped);
}

function SideNav() {
    var options = {
        edge: 'right',
        draggable: 'true',
        preventScrolling: 'true'
    }
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
}

function Tabs() {
    var options = {
        duration: '300'
    }
    var el = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(el, options);
}

function Scrollspy() {
    var options = {
        throttle: '100'
    }
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
}

function Collapsible() {
    var options = {
        accordion: 'true'
    }
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
}

function Floating() {
    options = {
        direction: 'top'
    }
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
}

function Tooltipped() {
    options = {
        position: 'left'
    }
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);
}