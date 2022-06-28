document.querySelectorAll("select").forEach((event) => {
  event.addEventListener("change", () => {
    let containerElement = document.getElementById("container");
    let str = "containerElement.style." + event.name + "=event.value";
    eval(str);
    printComputedStyle();
  });
});
document.querySelectorAll("fieldset.size-container input[type=range]").forEach((event) => {
  event.addEventListener("input", () => {
    let containerElement = document.getElementById("container");
    let str = "containerElement.style." + event.name + "=event.value" + '+"px"';
    eval(str);
    printComputedStyle();
  });
});
document.querySelectorAll("fieldset.size-box input[type=range]").forEach((event) => {
  event.addEventListener("input", () => {
    let radios = document.querySelectorAll("div.box-property input[type=radio]");
    for (let index = 0; index < radios.length; index++) {
      let element = radios[index];
      if (element.checked) {
        if (element.id == "radio-All") {
          let allBoxes = document.querySelectorAll("div.box");
          allBoxes.forEach((oneBoxElement) => {
            let str = "oneBoxElement.style." + event.name + "=event.value";
            if (event.name != "flexShrink" && event.name != "flexGrow") {
              str += '+"px"';
            }
            eval(str);
            printComputedStyle();
          });
          break;
        }
        let str = "boxElement.style." + event.name + "=event.value";
        if (event.name != "flexShrink" && event.name != "flexGrow") {
          str += '+"px"';
        }
        let numberBox = element.value;
        let boxElement = document.getElementById(numberBox);
        eval(str);
        printComputedStyle();
        break;
      }
    }
  });
});

let boxesElements = document.querySelectorAll("div.container div.box");
boxesElements.forEach((boxElement) => {
  boxElement.addEventListener("dblclick", (box) => {
    let radioAsBoxValue = "input[type=radio][value=" + boxElement.id + "]";
    let radioAsBox = document.querySelector(radioAsBoxValue);
    if (!radioAsBox.checked) {
      boxElement.remove();
      strClass = "td." + boxElement.id;
      let tdElements = document.querySelectorAll(strClass);
      tdElements.forEach((tdElement) => {
        tdElement.remove();
        printComputedStyle();
      });
    }
  });
});
let radios = document.querySelectorAll("div.box-property input[type=radio]");
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    printComputedStyle();
  });
});

const printComputedStyle = () => {
  let radios = document.querySelectorAll("div.box-property input[type=radio]");
  for (let index = 0; index < radios.length; index++) {
    let element = radios[index];
    if (element.checked) {
      let showBoxWithElement = document.getElementById("width-box-Value");
      let showBoxHeightElement = document.getElementById("height-box-Value");
      let showBoxFlexShrinkElement = document.getElementById("flexShrink-box-Value");
      let showBoxFlexGrowElement = document.getElementById("flexGrow-box-Value");

      if (element.id == "radio-All") {
        showBoxWithElement.innerText = "waiting";
        showBoxHeightElement.innerText = "waiting";
        showBoxFlexShrinkElement.innerText = "waiting";
        showBoxFlexGrowElement.innerText = "waiting";
      } else {
        let containerElement = document.getElementById("container");
        let containerStyle = window.getComputedStyle(containerElement);
        let containerWidth = containerStyle.getPropertyValue("width");
        let containerHeight = containerStyle.getPropertyValue("height");

        let numberBox = element.value;
        let boxElement = document.getElementById(numberBox);
        let boxStyle = window.getComputedStyle(boxElement);
        let boxWidth = boxStyle.getPropertyValue("width");
        let boxHeight = boxStyle.getPropertyValue("height");
        let boxFlexShrink = boxStyle.getPropertyValue("flex-shrink");
        let boxFlexGrow = boxStyle.getPropertyValue("flex-grow");

        let showContainerWithElement = document.getElementById("width-container-Value");
        let showContainerHeightElement = document.getElementById("height-container-Value");

        showContainerWithElement.innerText = containerWidth;
        showContainerHeightElement.innerText = containerHeight;

        showBoxWithElement.innerText = boxWidth;
        showBoxHeightElement.innerText = boxHeight;
        showBoxFlexShrinkElement.innerText = boxFlexShrink;
        showBoxFlexGrowElement.innerText = boxFlexGrow;
      }
    }
  }
};

setTimeout(() => {
  printComputedStyle();
}, 200);
