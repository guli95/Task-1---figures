const btn = document.querySelector("#btn");
const tables = document.querySelectorAll("table");
const wrapper = document.querySelector(".wrapper");

figuresData = [];

const getFiguresData = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    const number = Math.floor(Math.random() * 100);
    data.push(number);
  }
  return data.sort((a, b) => a - b);
};

const reset = () => {
  figuresData = [];
};
const loadTable = (figuresData) => {
  getFiguresData();
  const evenTableBody = document.querySelector("#evenTableData");
  const oddTableBody = document.querySelector("#oddTableData");
  let evenDataHTML = "";
  let oddDataHTML = "";

  for (let data of figuresData) {
    if (data % 2 == 0) {
      evenDataHTML += `<tr><td>${data}</td></tr>`;
    } else {
      oddDataHTML += `<tr><td>${data}</td></tr>`;
    }
  }
  tables.forEach((table) => (table.className = "active"));
  evenTableBody.innerHTML = evenDataHTML;
  oddTableBody.innerHTML = oddDataHTML;
};

btn.addEventListener("click", () => {
  reset();
  loadTable(getFiguresData());
});
