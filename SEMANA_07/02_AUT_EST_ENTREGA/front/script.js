async function createExperiencia() {
  await $.ajax({
    url: `http://localhost:3001/Experiencia`,
    // Metódos:
    // GET, POST, PUT, DELETE, PATCH, OPTIONS
    // GET deve ser usado apenas para buscar dados
    method: "GET",
  }).then((response) => {
    const section = document.querySelector('#experiencia');

    response.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('section__content');
      // "" '' ``
      div.innerHTML = `
        <label class="content__label">Nome da empresa:</label> ${item.Nome_Empresa} <br>
        <label class="content__label">Cargo:</label> ${item.Cargo_Empresa} <br>
        <label class="content__label">Ano de incio:</label> ${item.Ano_Inicio} <br>
        <label class="content__label">Ano de finalização:</label> ${item.Ano_Final} <br>
        <label class="content__label">Descrição da Empresa:</label> ${item.Descricao_Empresa} <br>
      `;
      section.appendChild(div);
    });


    console.log(response);
  })
}

createExperiencia()

async function createHabilidades() {

    await $.ajax({
      url: `http://localhost:3001/Habilidade`,
      // Metódos:
      // GET, POST, PUT, DELETE, PATCH, OPTIONS
      // GET deve ser usado apenas para buscar dados
      method: "GET",
    }).then((response) => {
      const section = document.querySelector('#habilidades');
  
      response.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('section__content');
        // "" '' ``
        div.innerHTML = `
        <label class="content__label">Profissionalidade:</label> ${item.Profissionalidade} <br>
        <label class="content__label">Nivel de habilidade:</label> ${item.Nivel_Habilidades} <br>
        `;
        section.appendChild(div);
      });
      console.log(response);
    })
  }

  createHabilidades()

  async function createFormacao() {

    await $.ajax({
      url: `http://localhost:3001/Formacao`,
      // Metódos:
      // GET, POST, PUT, DELETE, PATCH, OPTIONS
      // GET deve ser usado apenas para buscar dados
      method: "GET",
    }).then((response) => {
      const section = document.querySelector('#formacao');
  
      response.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('section__content');
        // "" '' ``
        div.innerHTML = `
        <label class="content__label">Curso de Formação:</label> ${item.Curso_Formacao}<br>
        <label class="content__label">Descrição do Curso:</label> ${item.Descrição_Curso}<br>
        <label class="content__label">Ano de inicio:</label> ${item.Ano_inicio}<br>
        <label class="content__label">Ano de finalização:</label> ${item.Ano_Final}<br> 
        `;
        section.appendChild(div);
      });
      console.log(response);
    })
  }
  createFormacao()

  async function createSobre_Mim() {

    await $.ajax({
      url: `http://localhost:3001/Sobre_Mim`,
      // Metódos:
      // GET, POST, PUT, DELETE, PATCH, OPTIONS
      // GET deve ser usado apenas para buscar dados
      method: "GET",
    }).then((response) => {
      const section = document.querySelector('#sobre_mim');
  
      response.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('section__content');
        // "" '' ``
        div.innerHTML = `
            <label class="content__label">Localização:</label>${item.Locallização}<br>
            <label class="content__label">Telefone:</label>${item.Telefone}<br>
            <label class="content__label">Email:</label>${item.Email}<br>
        `;
        section.appendChild(div);
      });
      console.log(response);
    })
  }
  createSobre_Mim()

  async function createRealizacao() {
    await $.ajax({
      url: `http://localhost:3001/Realizacao`,
      // Metódos:
      // GET, POST, PUT, DELETE, PATCH, OPTIONS
      // GET deve ser usado apenas para buscar dados
      method: "GET",
    }).then((response) => {
      const section = document.querySelector('#realização');
  
      response.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('section__content');
        // "" '' ``
        div.innerHTML = `
        <label class="content__label">Nome da realização:</label> ${item.Nome_Realizacao} <br>
        <label class="content__label">Ano da realização:</label> ${item.Ano_Realizacao} <br>
        <label class="content__label">Descrição da realização:</label> ${item.Descricao_Realizacao}<br>
        `;
        section.appendChild(div);
      });
  
  
      console.log(response);
    })
  }
  
  createRealizacao()

  async function createPersonalidade() {
    await $.ajax({
      url: `http://localhost:3001/Personalidade`,
      // Metódos:
      // GET, POST, PUT, DELETE, PATCH, OPTIONS
      // GET deve ser usado apenas para buscar dados
      method: "GET",
    }).then((response) => {
      const section = document.querySelector('#Personalidade');
  
      response.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('section__content');
        // "" '' ``
        div.innerHTML = `
        <label class="content__label">Traço de personalidade:</label> ${item.Ponstos_Positivos}<br>
        <label class="content__label">Outro traço de personalidade:</label> ${item.Pontos_Negativos}
        `;
        section.appendChild(div);
      });
  
  
      console.log(response);
    })
  }
  
  createPersonalidade()