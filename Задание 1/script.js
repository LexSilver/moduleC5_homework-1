const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const studentNodes = xmlDOM.querySelectorAll("student");

let list = [];
for (let element of studentNodes){
  let obj = {};
  const firstNodes = element.querySelector('first').textContent;
  const secondNodes = element.querySelector('second').textContent;
  const ageNodes = Number(element.querySelector('age').textContent);
  const profNodes = element.querySelector('prof').textContent;
  const langAttr = element.querySelector('name').getAttribute('lang');
  obj.name = `${firstNodes} ${secondNodes}`;
  obj.age = ageNodes;
  obj.prof = profNodes;
  obj.lang = langAttr;
  list.push(obj);
}
const result = {
  list: list
}
console.log(result);
