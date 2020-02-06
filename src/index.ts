import "@bospieter/ws-helper/styles.css";
// @ts-ignore
import { add, initBody } from "@bospieter/ws-helper";

import { interval, Observable } from "rxjs";
import { map, take, share } from "rxjs/operators";

initBody("rx-js");

const obs = Observable.create(function(observer) {
  observer.next("Hello Pieter");
  setTimeout(() => observer.next("Hello Henk"), 4000);
}).pipe(share());

add.buttonHeader("TEST 1", "test1");
add.buttonHeader("TEST 2", "test2");

const btn1 = document.getElementById("test1");
const btn2 = document.getElementById("test2");

btn1.addEventListener("click", function() {
  add.li("subscribe A");
  obs.subscribe(value => {
    add.li("value A" + value);
  });
});

btn2.addEventListener("click", function() {
  add.li("subscribe B");

  obs.subscribe(value => {
    add.li("value B  " + value);
  });
});
