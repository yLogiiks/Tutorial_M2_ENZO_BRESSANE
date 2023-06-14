async function loadMessages() {
  await $.ajax({
    url: `http://localhost:3001/mensagem`,
    method: "GET",
  }).then((response) => {
    const section = document.querySelector('div.section__content');
    section.innerHTML = '';
    
    if(!response) return;

    response.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('section__content');
      div.innerHTML = `
        <label class="content__lable">mensagem:</label> ${item.texto} <br>
      `;
      section.appendChild(div);
    });


    console.log(response);
  })
}

loadMessages()

async function createinsere() {
  await $.ajax({
    url: `http://localhost:3001/inseremensagem`,
    method: "POST",
    data: {
      texto: document.getElementById('texto').value
    }
  }).then((response) => {
    const section = document.querySelector('#texto');

    loadMessages()
    if(!response) return;

    response.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('section__content');
      div.innerHTML = `
        <label class="content__lable">mensagem:</label> ${item.texto} <br>
      `;
      section.appendChild(div);
    });


    console.log(response);
  })
}
