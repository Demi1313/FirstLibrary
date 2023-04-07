import $ from '../core';

$.prototype.setAttr = function(id, ...attribute) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(id === attribute)) {
            this[i].setAttribute(id, ...attribute);
        }
    }
    return this;
};

$.prototype.removeAttr = function(id) {
    for (let i = 0; i < this.length; i++) { 
        this[i].removeAttribute(id); 
    }
    return this;
};

$.prototype.toggleAttr = function(...id) {
    for (let i = 0; i < this.length; i++) {
        this[i].toggleAttribute(...id);
    }
    return this;
};