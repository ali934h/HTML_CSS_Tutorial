document.querySelectorAll("select").forEach((event) => {
  event.addEventListener("change", () => {
    let containerElement = document.getElementById("container");
    let str = "containerElement.style." + event.name + "=event.value";
    console.log(str);
    eval(str);
  });
});
document.querySelectorAll("fieldset.size-container input[type=range]").forEach((event) => {
  event.addEventListener("input", () => {
    let containerElement = document.getElementById("container");
    let str = "containerElement.style." + event.name + "=event.value" + '+"px"';
    let strSpanId = event.name + "-Value";
    document.getElementById(strSpanId).innerText = event.value + "px";
    console.log(str);
    eval(str);
  });
});
document.querySelectorAll("fieldset.size-box input[type=range]").forEach((event) => {
  event.addEventListener("input", () => {
    let radios = document.querySelectorAll("div.radio-pack input[type=radio]");
    for (let index = 0; index < radios.length; index++) {
      let element = radios[index];
      if (element.checked) {
        if (element.id == "radio-All") {
          let allBoxes = document.querySelectorAll("div.box");
          allBoxes.forEach((oneBoxElement, index) => {
            let str = "oneBoxElement.style." + event.name + "=event.value" + '+"px"';
            let strSpanId = event.name + "-box-Value";
            document.getElementById(strSpanId).innerText = event.value + "px";
            eval(str);
          });
          break;
        }

        let numberBox = element.value;
        console.log(numberBox);
        let boxElement = document.getElementById(numberBox);
        let str = "boxElement.style." + event.name + "=event.value" + '+"px"';
        let strSpanId = event.name + "-box-Value";
        document.getElementById(strSpanId).innerText = event.value + "px";
        eval(str);
        break;
      }
    }
  });
});

let radios = document.querySelectorAll("div.radio-pack input[type=radio]");
radios.forEach((radio)=>{ 
  radio.addEventListener("click",()=>{
    let boxSizeSpans=document.querySelectorAll("fieldset.size-box span");
    boxSizeSpans.forEach((boxSize) => {
      boxSize.innerHTML="waiting"
    });
  })
})
