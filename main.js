function showSpecialElement() {
  let element = document.getElementById("special");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

(function () {
  function toJSONString(form) {
    let obj = {};
    let elements = form.querySelectorAll("input");
    for (let i = 0; i < elements.length; ++i) {
      let element = elements[i];
      let name = element.name;
      let value = element.value;
      if (name) {
        obj[name] = value;
      }
    }
    return JSON.stringify(obj);
  }
  document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("productList");
    let output = document.getElementById("output");
    form.addEventListener(
      "submit",
      function (element) {
        element.preventDefault();
        let json = toJSONString(this);
        output.innerHTML = json;
        console.log(json);
      },
      false
    );
  });
})();
