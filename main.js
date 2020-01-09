const div = dom.find("#test>.red")[0]; // 获取对应的元素
console.log("div", div);
dom.style(div, "color", "red"); // 设置 div.style.color
dom.style(div, { border: "1px solid red" }); // 设置 div.style.color

const divList = dom.find(".red"); // 获取多个 div.red 元素
console.log("divList", divList);
dom.each(divList, n => console.log("n", n)); // 遍历 divList 里的所有元素
