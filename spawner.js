import { el, mount } from "redom";

const element = el("article.card", [
  el(
    "section.back-side",
    el(".", [
      el("p", "cvv/cvv2"),
      el("input", {
        type: "password",
        name: "have-question",
        id: "cvv-1",
        placeholder: "0 0 0",
        maxlenght: "3",
      }),
      el("p", "last 3 numbers from backside's card"),
    ])
  ),
  el("section.front-side", [
    el("h3", "Enter payment details"),
    el(".block", [
      el("p", "Card's number"),
      el("input", {
        type: "password",
        name: "have-question",
        id: "number-1",
        placeholder: "0000 0000 0000 000",
        maxlenght: "16",
      }),
    ]),
    el(".line", [
      el("p", "Validity period"),
      el("input", {
        type: "password",
        name: "have-question",
        id: "mounth-1",
        placeholder: "01",
        maxlenght: "2",
      }),
      el("p", "/"),
      el("input", {
        type: "password",
        name: "have-question",
        id: "day-1",
        placeholder: "22",
        maxlenght: "2",
      }),
    ]),
    el(".block", [
      el("p", "Owner's name"),
      el("input", {
        type: "text",
        name: "have-question",
        id: "name-1",
        placeholder: "OLEG FOMIN",
        maxlenght: "256",
      }),
    ]),
  ]),
]);

mount(document.body, element)