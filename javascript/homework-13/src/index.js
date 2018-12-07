import "@babel/polyfill";
import Controller from "./js/controller";
import Model from "./js/model";
import View from "./js/view";
import "././css/style.css";

const model = new Model();
const view = new View();

const controller = new Controller(model, view);
