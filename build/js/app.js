!function r(e,t,n){function a(u,l){if(!t[u]){if(!e[u]){var c="function"==typeof require&&require;if(!l&&c)return c(u,!0);if(o)return o(u,!0);var i=new Error("Cannot find module '"+u+"'");throw i.code="MODULE_NOT_FOUND",i}var f=t[u]={exports:{}};e[u][0].call(f.exports,function(r){var t=e[u][1][r];return a(t?t:r)},f,f.exports,r,e,t,n)}return t[u].exports}for(var o="function"==typeof require&&require,u=0;u<n.length;u++)a(n[u]);return a}({1:[function(r,e,t){function n(r){this.skin=r}n.prototype.calculate=function(r,e,t){var n;return n="+"===t?r+e:"-"===t?r-e:"*"===t?r*e:r/e},t.calculatorModule=n},{}],2:[function(r,e,t){var n=r("./../js/calculator.js").calculatorModule;$(document).ready(function(){$("#calculator-form").submit(function(r){r.preventDefault();var e=parseInt($("#num1").val()),t=parseInt($("#num2").val()),a=$("#operatorSelector").val(),o=new n("hot pink"),u=o.calculate(e,t,a);$("#solution").text(u)})}),$(document).ready(function(){$("#calculator-form").hide(),$("#email").submit(function(r){r.preventDefault();var e=$("#address").val();$("#email").hide(),$("#calculator-form").show(),$("#email-display").text("Thank you! The email "+e+" has been saved.")})})},{"./../js/calculator.js":1}]},{},[2]);