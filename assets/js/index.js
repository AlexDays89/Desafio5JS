const input = document.querySelector('input');
const button = document.querySelector('.agregar');
const listatareas = document.getElementById('tablatareas');
const total = document.querySelector('.numerototal');
const realizadas = document.querySelector('.numerorealizadas');

const tareas = [
  { id: Math.round(Math.random()*1000), descripcion: "Revisar Biopsias HCSBA", realizada: false },
  { id: Math.round(Math.random()*1000), descripcion: "Revisar Biopsias Clínica Dávila", realizada: false },
  { id: Math.round(Math.random()*1000), descripcion: "Revisar Biopsias HSJD", realizada: false },
];

function borrar(id) {
  const index = tareas.findIndex(tarea => tarea.id === id);
  tareas.splice(index, 1);
  render();
}

function cambiarEstado(id) {
  const index = tareas.findIndex(tarea => tarea.id === id);
  tareas[index].realizada = !tareas[index].realizada;
  render();
}
const render = () => {
  let template = '';
  for (const tarea of tareas) {
    template += `<tr>
    <td>${tarea.id}</td>
    <td class="${tarea.realizada ? 'tachado' : ''}">${tarea.descripcion}</td>
    <td><input type="checkbox" ${tarea.realizada ? 'checked' : ''} onchange="cambiarEstado(${tarea.id})"></td>
    <td><button onclick="borrar(${tarea.id})">x</button></td>
    </tr>`;
  }
  listatareas.innerHTML = template;
  total.innerHTML = tareas.length;
  realizadas.innerHTML = tareas.filter(tarea => tarea.realizada === true).length;
}
  render();

  button.addEventListener('click', () => {
  if (input.value === '') return
  const nuevatarea = { id: Math.round(Math.random()*1000), descripcion: input.value, realizada: false}
  tareas.push(nuevatarea)
  input.value = '';
  render();
  }); 