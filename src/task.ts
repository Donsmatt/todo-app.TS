export const task = () => {
  const addButton = document.querySelector<HTMLButtonElement>("#button");
  const listContainer =
    document.querySelector<HTMLUListElement>("#list-container")!;
  const inputBox = document.querySelector<HTMLInputElement>("#input-box")!;

  addButton?.addEventListener("click", () => {
    if (inputBox.value === "") {
      alert("You have to write something!");
    } else {
      let li = document.createElement("li");
      let p = document.createElement("p");
      let span = document.createElement("span");
      let currentDate = new Date();
      const date = currentDate.toDateString();
      const time = currentDate.toLocaleTimeString();

      li.innerHTML = inputBox.value;
      p.innerHTML = `${time}, ${date}`;
      span.innerHTML = "\u00d7";

      li.appendChild(p);
      li.appendChild(span);
      listContainer?.appendChild(li);
    }
    inputBox.value = "";
    saveData();
  });

  listContainer.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement;

      if (target.tagName === "LI") {
        target.classList.toggle("checked");
        saveData();
      } else if (target.tagName === "SPAN") {
        target.parentElement?.remove();
        saveData();
      }
    },
    false
  );

  const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
  };

  const getData = () => {
    const data = localStorage.getItem("data");

    if (data !== null) {
      listContainer.innerHTML = data;
    }
  };

  getData();
};
