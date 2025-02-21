Object.prototype.getOrDefault = function (key, defaultValue) {
  return this[key] || defaultValue;
};

function isDigit(string) {
  return isDigitReg.test(string);
}

function goMousetoPoint(object, e, offset) {
  object.style.top = `${e.clientY - offset.y}px`;
  object.style.left = `${e.clientX - offset.x}px`;
}

function removeSelf(object) {
  object.remove();
}

////

const helper = document.getElementById("helper");
const cursor = document.getElementById("cursor");
const errorMsg = document.getElementById("error");
const isDigitReg = /^[0-9]+$/;

const helpLines = {
  number: "It's card number 16 lenght",
  name: "Just your Name and Surname",
  cvv: "Your cvv/cvv2 code",
  day: "Card's day creation",
  mounth: "Card's mounth creation",
};

const MaxLenghts = {
  number: 16,
  cvv: 3,
  day: 2,
  mounth: 2,
};

window.addEventListener("mousemove", (e) => {
  goMousetoPoint(cursor, e, { x: 4, y: 4 });
});

document.getElementsByName("have-question").forEach((element) => {
  element.onpaste = (e) => {
    if (!isDigit(e.key) && element.id !== "name") {
      errorMsg.style.padding = "5px 10px";
      errorMsg.textContent = "It's a number?";
      return false;
    }

    max = MaxLenghts.getOrDefault(element.id, 256);
    if ((element.value + e.clipboardData.getData("text")).length > max) {
      errorMsg.style.padding = "5px 10px";
      errorMsg.textContent = `Limit Lenght! Max:${max}`;
      return false;
    }
  };

  element.onkeypress = (e) => {
    max = MaxLenghts.getOrDefault(element.id, 256);
    if (!isDigit(e.key) && element.id !== "name") {
      errorMsg.style.padding = "5px 10px";
      errorMsg.textContent = "It's a number?";
      return false;
    }
    if (element.value.length > max - 1) {
      errorMsg.style.padding = "5px 10px";
      errorMsg.textContent = `Limit Lenght! Max:${max}`;
      return false;
    }
    errorMsg.style.padding = "";
    errorMsg.textContent = "";
  };

  element.addEventListener("mouseenter", (e) => {
    goMousetoPoint(helper, e, { x: -20, y: -15 });
    goMousetoPoint(errorMsg, e, { x: -20, y: 55 });

    cursor.style.borderRadius = "0px";
    cursor.style.width = "4px";

    helper.style.padding = "5px 10px";
    helper.textContent = helpLines.getOrDefault(element.id, "None :(");
  });

  element.addEventListener("mouseleave", (e) => {
    cursor.style.borderRadius = "8px";
    cursor.style.width = "6px";

    helper.style.padding = "";
    helper.textContent = "";

    errorMsg.style.padding = "";
    errorMsg.textContent = "";
  });
});

/// footer

const footer = document.getElementsByTagName("footer")[0];

function footerBehavior() {
  footer.style.animationName = "vanish";
  footer.style.animationDuration = "3s";
  footer.style.bottom = "-50px";

  footer.children[0].textContent =
    "Russion Mode is Active!\nThx for choosing meee!";

  for (article of document.getElementsByTagName("article"))
    article.classList.toggle("vanish");

  setTimeout(removeSelf, 3500, footer);
  footer.removeEventListener("click", footerBehavior);
}

footer.addEventListener("click", footerBehavior);
