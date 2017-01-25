function MsgAlert(msg) {
    if (msg !== undefined) {
        var wrapper_css = {
            "padding": "20px 30px",
            "background": "#f39c12",
            "display": "none",
            "z-index": "999999",
            "font-size": "16px",
            "font-weight": 600
        };
        var link_css = {
            "color": "rgba(255, 255, 255, 0.9)",
            "display": "inline-block",
            "margin-right": "10px",
            "text-decoration": "none"
        };
        var close_css = {
            "color": "#fff",
            "font-size": "20px"
        }
        var wrapper = $("<div />").css(wrapper_css);
        var link = $("<a />")
            .html('<i class="fa fa-warning" style="margin-right:10px"></i>' +msg)
            .css(link_css);
        var close = $("<a />", {
            "class": "pull-right",
            href: "#",
            "data-toggle": "tooltip",
            "data-placement": "left",
            "title": "Fechar"
        }).html("&times;")
            .css(close_css)
            .click(function (e) {
                e.preventDefault();
                $(wrapper).slideUp();
            });
        wrapper.append(close);
        wrapper.append(link);
        $(".content-wrapper").prepend(wrapper);
        wrapper.hide(4).delay(1500).slideDown();
        setTimeout(
            function () {
                $(wrapper).slideUp();
            },
            8000);
    }
}
function MsgInfo(msg) {
    if (msg !== undefined) {
        var wrapper_css = {
            "padding": "20px 30px",
            "background": "#00c0ef",
            "display": "none",
            "z-index": "999999",
            "font-size": "16px",
            "font-weight": 600
        };
        var link_css = {
            "color": "rgba(255, 255, 255, 0.9)",
            "display": "inline-block",
            "margin-right": "10px",
            "text-decoration": "none"
        };
        var close_css = {
            "color": "#fff",
            "font-size": "20px"
        }
        var wrapper = $("<div />").css(wrapper_css);
        var link = $("<a />")
            .html('<i class="fa fa-info" style="margin-right:10px"></i>'+msg)
            .css(link_css);
        var close = $("<a />", {
            "class": "pull-right",
            href: "#",
            "data-toggle": "tooltip",
            "data-placement": "left",
            "title": "Fechar"
        }).html("&times;")
            .css(close_css)
            .click(function (e) {
                e.preventDefault();
                $(wrapper).slideUp();
            });
        wrapper.append(close);
        wrapper.append(link);
        $(".content-wrapper").prepend(wrapper);
        wrapper.hide(4).delay(1500).slideDown();
        setTimeout(
            function () {
                $(wrapper).slideUp();
            },
            8000);
    }
}
function MsgErro(msg) {
    if (msg === undefined) {
        msg = 'Aconteceu um erro ao processar a operação.';
    }
    var wrapper_css = {
        "padding": "20px 30px",
        "background": "#dd4b39",
        "display": "none",
        "z-index": "999999",
        "font-size": "16px",
        "font-weight": 600
    };
    var link_css = {
        "color": "rgba(255, 255, 255, 0.9)",
        "display": "inline-block",
        "margin-right": "10px",
        "text-decoration": "none"
    };
    var close_css = {
        "color": "#fff",
        "font-size": "20px"
    }
    var wrapper = $("<div />").css(wrapper_css);
    var link = $("<a />")
        .html('<i class="fa fa-ban" style="margin-right:10px"></i>' +msg)
        .css(link_css);
    var close = $("<a />", {
        "class": "pull-right",
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "left",
        "title": "Fechar"
    }).html("&times;")
        .css(close_css)
        .click(function (e) {
            e.preventDefault();
            $(wrapper).slideUp();
        });
    wrapper.append(close);
    wrapper.append(link);
    $(".content-wrapper").prepend(wrapper);
    wrapper.hide(4).delay(1500).slideDown();
    setTimeout(
        function () {
            $(wrapper).slideUp();
        },
        8000);
}
function MsgOk(msg) {
    if (msg === undefined) {
        msg = 'Operação processada com exito';
    }
    var wrapper_css = {
        "padding": "20px 30px",
        "background": "#00a65a",
        "display": "none",
        "z-index": "999999",
        "font-size": "16px",
        "font-weight": 600
    };
    var link_css = {
        "color": "rgba(255, 255, 255, 0.9)",
        "display": "inline-block",
        "margin-right": "10px",
        "text-decoration": "none"
    };
    var close_css = {
        "color": "#fff",
        "font-size": "20px"
    }
    var wrapper = $("<div />").css(wrapper_css);
    var link = $("<a />")
        .html('<i class="fa fa-check" style="margin-right:10px"></i>' + msg)
        .css(link_css);
    var close = $("<a />", {
        "class": "pull-right",
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "left",
        "title": "Fechar"
    }).html("&times;")
        .css(close_css)
        .click(function (e) {
            e.preventDefault();
            $(wrapper).slideUp();
        });
    wrapper.append(close);
    wrapper.append(link);
    $(".content-wrapper").prepend(wrapper);
    wrapper.hide(4).delay(1500).slideDown();
    setTimeout(
        function () {
            $(wrapper).slideUp();
        },
        8000);
}
function ModalMsgErro(msg) {
    if (msg === undefined) {
        msg = 'Aconteceu um erro ao processar a operação.';
    }
    var wrapper_css = {
        "padding": "20px 30px",
        "background": "#dd4b39",
        "display": "none",
        "z-index": "999999",
        "font-size": "16px",
        "font-weight": 600
    };
    var link_css = {
        "color": "rgba(255, 255, 255, 0.9)",
        "display": "inline-block",
        "margin-right": "10px",
        "text-decoration": "none"
    };
    var close_css = {
        "color": "#fff",
        "font-size": "20px"
    }
    var wrapper = $("<div />").css(wrapper_css);
    var link = $("<a />")
        .html('<i class="fa fa-ban" style="margin-right:10px"></i>' + msg)
        .css(link_css);
    var close = $("<a />", {
        "class": "pull-right",
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "left",
        "title": "Fechar"
    }).html("&times;")
        .css(close_css)
        .click(function (e) {
            e.preventDefault();
            $(wrapper).slideUp();
        });
    wrapper.append(close);
    wrapper.append(link);
    $(".modal-body").prepend(wrapper);
    wrapper.hide(4).delay(1500).slideDown();
    setTimeout(
        function () {
            $(wrapper).slideUp();
        },
        8000);
}
function ModalMsgOk(msg) {
    if (msg === undefined) {
        msg = 'Operação processada com exito';
    }
    var wrapper_css = {
        "padding": "20px 30px",
        "background": "#00a65a",
        "display": "none",
        "z-index": "999999",
        "font-size": "16px",
        "font-weight": 600
    };
    var link_css = {
        "color": "rgba(255, 255, 255, 0.9)",
        "display": "inline-block",
        "margin-right": "10px",
        "text-decoration": "none"
    };
    var close_css = {
        "color": "#fff",
        "font-size": "20px"
    }
    var wrapper = $("<div />").css(wrapper_css);
    var link = $("<a />")
        .html('<i class="fa fa-check" style="margin-right:10px"></i>' + msg)
        .css(link_css);
    var close = $("<a />", {
        "class": "pull-right",
        href: "#",
        "data-toggle": "tooltip",
        "data-placement": "left",
        "title": "Fechar"
    }).html("&times;")
        .css(close_css)
        .click(function (e) {
            e.preventDefault();
            $(wrapper).slideUp();
        });
    wrapper.append(close);
    wrapper.append(link);
    $(".modal-body").prepend(wrapper);
    wrapper.hide(4).delay(1500).slideDown();
    setTimeout(
        function () {
            $(wrapper).slideUp();
        },
        8000);
}