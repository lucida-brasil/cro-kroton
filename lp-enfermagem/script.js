var parser = new DOMParser();
var doc = parser.parseFromString(
  `<main id="main-container" role="main">
      <section id="itemUm">
        <div class="container-fluid bg-itemUm itemUm">
          <div class="container">
            <div class="container mt-5">

              <div class="row mb-5 ml-0">
                <h2 class="text-title text-white theTitle mb-5 mt-3">Curso de<br> Enfermagem</h2>
              </div>

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent p-0">
                  <li class="breadcrumb-item"><a href="#">Início</a></li>
                  <li class="breadcrumb-item"><a href="#">Cursos de Graduação</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Curso de Enfermagem</li>
                </ol>
              </nav>

              <div class="container justify-content-between m-0 border rounded bg-white shadow box-onde-estudar">

                <div class="row mb-5 ml-0 mr-0">
                  <h2 class="text-cinza-carbono font-weight-bold">Onde você quer estudar?</h2>
                </div>

                <div class="row justify-content-between m-0 px-0">

                  <div class="col col-lg-4 mb-0 borders border-warning pl-0 pr-4 mx-0">
                    <div class="container-fluid borders border-danger px-0 ">
                      <form>

                        <div class="form-group">
                          <small id="cidade" class="form-text text-muted">Cidade</small>
                          <select class="form-control select2 select-city">
                            <option></option>
                          </select>
                        </div>

                        <div class="form-group">
                          <small id="unidade" class="form-text text-muted">Unidade</small>
                          <select class="form-control select2 select-unit">
                            <option></option>
                          </select>
                        </div>

                        <div class="form-group">
                          <small id="modalidade" class="form-text text-muted">Modalidade</small>
                          <select class="form-control select2 select-modals">
                            <option></option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="col col-lg-3 mb-0 borders-box border-left border-right">
                    <div class="jumbotron jumbotron-fluid bg-white my-0 py-0">
                      <div class="container-fluid pb-2">
                        <p class="text-center my-0"><img src="images/icone-estudante.png" alt="" class="img-fluid"></p>
                        <p class="text-center my-0">Titulação:</p>
                        <p class="text-center font-weight-bold mt-0">Bacharelado</p>
                      </div>
                      <div class="container-fluid pb-2">
                        <p class="text-center my-0"><img src="images/icone-calendario.png" alt="" class="img-fluid"></p>
                        <p class="text-center my-0">Duração:</p>
                        <p class="text-center font-weight-bold mt-0">10 Semestres</p>
                      </div>
                      <div class="container-fluid pb-2">
                        <p class="text-center my-0"><img src="images/icone-relogio.png" alt="" class="img-fluid"></p>
                        <p class="text-center my-0">Turno:</p>
                        <p class="text-center font-weight-bold mt-0">Manhã ou Noite</p>
                      </div>
                    </div>
                  </div>

                  <div class="col col-lg-4 mb-0 borders box-valor">
                    <div class="jumbotron jumbotron-fluid bg-white my-5 py-0 align-middle">
                      <div class="container-fluid">
                        <p class="text-left mb-0 pb-0 small">A partir de:</p>
                        <p class="text-center text-warning" style="font-size: 66px;"><strong>449,<sup>00</sup></strong>
                        </p>
                        <div class="text-center"><button type="submit"
                            class="btn btn-block btn-laranja text-uppercase text-white btn-inscreva-se">INSCREVA-SE
                            AGORA!</button>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="itemDois">
        <div class="container my-0 py-0">
          <div class="row justify-content-center align-items-center boxItemDois">
            <div class="text-center">
              <h2 class="text-cinza-carbono font-weight-bold">Conheça o curso de <br>
                <span class="text-laranja2">Enfermagem</span>
              </h2>
              <p class="myTextCenter">A <strong>formação em Enfermagem</strong> faz parte da área das Ciências Biológicas
                e da Saúde, abrangendo muitos conhecimentos sobre o corpo humano e exigindo intensa dedicação dos
                profissionais. Uma das principais funções dos enfermeiros é atuar no cuidado direto de pacientes, ajudando
                a promover a saúde da população em ambientes coletivos (como clínicas e hospitais) ou até mesmo no
                atendimento individual. Eles também são peças chaves em equipes multidisciplinares e programas públicos de
                saúde.</p>
            </div>
          </div>
        </div>
        <div class="bg-itemDois">&nbsp;</div>
      </section>

      <section id="itemTres">
        <div class="container-fluid bg-light itemTres py-5">
          <div class="container">
            <div class="container mt-5 pb-4">
              <div class="row justify-content-center mb-5">
                <h2 class="text-cinza-carbono font-weight-bold">Formas de ingresso</h2>
              </div>
              <div class="row justify-content-center mb-1">
                <div class="col-sm-12 col-lg-4">
                  <div class="jumbotron jumbotron-fluid shadow bg-white border rounded pt-4 pb-5">
                    <div class="container-fluid">
                      <p class="text-center pt-2 card-icons"><img src="images/icone-caneta.png" alt="" class="mt-3"></p>
                      <h5 class="text-center mt-3 mb-2"><strong>Vestibular <br>
                          Presencial ou Online</strong></h5>
                      <p class="text-center small card-text">Faça sua inscrição no vestibular. <br>
                        Processos seletivos abertos!</p>
                      <div class="text-center"><a class="btn btn-block btn-laranja text-uppercase text-white" href="#"
                          role="button">INSCREVA-SE AGORA!</a></div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-lg-4">
                  <div class="jumbotron jumbotron-fluid shadow bg-white border rounded pt-4 pb-5">
                    <div class="container-fluid">
                      <p class="text-center pt-2 card-icons"><img src="images/icone-enem.png" alt=""></p>
                      <h5 class="text-center mt-4 mb-4"><strong>ENEM</strong></h5>
                      <p class="text-center small card-text">Utilize sua nota do ENEM e inscreva-se sem precisar fazer o
                        vestibular.</p>
                      <div class="text-center"><a class="btn btn-block btn-laranja text-uppercase text-white" href="#"
                          role="button">INSCREVA-SE AGORA!</a></div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-lg-4">
                  <div class="jumbotron jumbotron-fluid shadow bg-white border rounded pt-4 pb-5">
                    <div class="container-fluid">
                      <p class="text-center pt-2 card-icons"><img src="images/icone-lista.png" alt="" class="mt-3"></p>
                      <h5 class="text-center mt-4 mb-4"><strong>PROUNI e FIES</strong></h5>
                      <p class="text-center small card-text">Foi pré-selecionado no PROUNI ou FIES? Envie seus documentos
                        para estudar conosco e acompanhe todo o processo seletivo.</p>
                      <div class="text-center"><a class="btn btn-block btn-outline-laranja text-uppercase text-laranja2"
                          href="#" role="button">Saiba mais</a></div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="row justify-content-center mb-5">

                <div class="col col-lg-4">
                  <div class="jumbotron jumbotron-fluid shadow bg-white border rounded pt-4 pb-5">
                    <div class="container-fluid">
                      <p class="text-center pt-2 card-icons"><img src="images/icone-vai-e-vem.png" alt="" class="mt-3">
                      </p>
                      <h5 class="text-center mt-4 mb-4"><strong>Transferência</strong></h5>
                      <p class="text-center small card-text">Transfira seu curso para uma de nossas unidades.</p>
                      <div class="text-center"><a class="btn btn-block btn-outline-laranja text-uppercase text-laranja2"
                          href="#" role="button">Saiba mais</a></div>
                    </div>
                  </div>
                </div>

                <div class="col col-lg-4">
                  <div class="jumbotron jumbotron-fluid shadow bg-white border rounded pt-4 pb-5">
                    <div class="container-fluid">
                      <p class="text-center pt-2 card-icons"><img src="images/icone-beca.png" alt="" class="mt-3"></p>
                      <h5 class="text-center mt-4 mb-4"><strong>2ª Graduação</strong></h5>
                      <p class="text-center small card-text">Torne-se um professor ou obtenha uma segunda licenciatura.
                      </p>
                      <div class="text-center"><a class="btn btn-block btn-laranja text-uppercase text-white" href="#"
                          role="button">INSCREVA-SE AGORA!</a></div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="itemQuatro">
        <div class="bg-divider">&nbsp;</div>
        <div class="container-fluid itemQuatro py-5">
          <div class="container">
            <div class="container mt-5">
              <div class="row justify-content-center mb-5">
                <h2 class="text-cinza-carbono text-center font-weight-bold">Vantagens de ser um aluno de <br
                    class="hideThis">
                  <span class="text-laranja2">Enfermagem</span> na Anhanguera
                </h2>
              </div>

              <div class="container justify-content-center py-3 my-5 border rounded bg-white shadow-lg">
                <div class="row justify-content-center my-3">
                  <div id="vantagens-de-ser" class="carousel carousel-multi-item" data-ride="carousel"
                    data-interval="3000">
                    <ol class="carousel-indicators">
                      <li data-target="#vantagens-de-ser" data-slide-to="0" class="active"></li>
                      <li data-target="#vantagens-de-ser" data-slide-to="1"></li>
                      <li data-target="#vantagens-de-ser" data-slide-to="2"></li>
                      <li data-target="#vantagens-de-ser" data-slide-to="3"></li>
                      <li data-target="#vantagens-de-ser" data-slide-to="4"></li>
                      <li data-target="#vantagens-de-ser" data-slide-to="5"></li>
                      <li data-target="#vantagens-de-ser" data-slide-to="6"></li>
                    </ol>

                    <div class="carousel-inner row w-100 mx-auto">
                      <div class="carousel-item active col col-lg-3 mb-0">
                        <div class="jumbotron jumbotron-fluid bg-white my-5 py-0">
                          <div class="container-fluid">
                            <p class="text-center pb-3"><img src="images/icone-estetoscopio.png" alt="" class="img-fluid">
                            </p>
                            <h6 class="text-center text-laranjinha card-text"><strong>Aprendendo com casos
                                reais</strong>
                            </h6>
                            <p class="text-center mt-4 small">
                              Na aula, o professor trabalha a partir de situações-problema que envolvem
                              casos reais do mundo do trabalho.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="carousel-item col col-lg-3 mb-0">
                        <div class="jumbotron jumbotron-fluid bg-white my-5 py-0">
                          <div class="container-fluid">
                            <p class="text-center pb-3"><img src="images/icone-laboratorio.png" alt="" class="img-fluid">
                            </p>
                            <h6 class="text-center text-laranjinha card-text"><strong>Aulas práticas em
                                laboratório</strong>
                            </h6>
                            <p class="text-center mt-4 small">
                              Na aula prática e nas sessões de vivência, você simulará o dia-a-dia do
                              enfermeiro e aprenderá a atuar profissionalmente, colocando em prática
                              técnicas do exercício da profissão.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="carousel-item col col-lg-3 mb-0">
                        <div class="jumbotron jumbotron-fluid bg-white my-5 py-0">
                          <div class="container-fluid">
                            <p class="text-center pb-3"><img src="images/icone-certificado.png" alt="" class="img-fluid">
                            </p>
                            <h6 class="text-center text-laranjinha card-text"><strong>Trilhas de carreira com
                                microcertificações</strong></h6>
                            <p class="text-center mt-4 small">
                              Opção de formação em trilhas de carreira que te preparam para o mercado
                              de trabalho do futuro. Entre as opções, a trilha digital: Ensino de
                              cultura digital e metodologias ágeis.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="carousel-item col col-lg-3 mb-0">
                        <div class="jumbotron jumbotron-fluid bg-white my-5 py-0">
                          <div class="container-fluid">
                            <p class="text-center pb-3"><img src="images/icone-mala-saude.png" alt="" class="img-fluid">
                            </p>
                            <h6 class="text-center text-laranjinha card-text">
                              <strong>Disciplinas alinhadas com o mercado de trabalho</strong>
                            </h6>
                            <p class="text-center mt-4 small">
                              Parte de sua jornada acadêmica será destinada a desenvolver as
                              competências mais exigidas pelos empregadores.
                            </p>
                          </div>
                        </div>

                      </div>

                      <div class="carousel-item col col-lg-3 mb-0">
                        <div class="jumbotron jumbotron-fluid bg-white my-5 py-0">
                          <div class="container-fluid">
                            <p class="text-center pb-3"><img src="images/icone-mala-saude.png" alt="" class="img-fluid">
                            </p>
                            <h6 class="text-center text-laranjinha card-text">
                              <strong>Aula Destaque</strong>
                            </h6>
                            <p class="text-center mt-4 small">
                              Acesso à vídeo aulas exclusivas comandadas por profissionais
                              renomados em diversas áreas. No campo da saúde, já foram
                              professores destaque o médico Jairo Bouer e Caio Rosenthal.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="carousel-item col col-lg-3 mb-0">
                        <div class="jumbotron jumbotron-fluid bg-white my-5 py-0">
                          <div class="container-fluid">
                            <p class="text-center pb-3"><img src="images/icone-mala-saude.png" alt="" class="img-fluid">
                            </p>
                            <h6 class="text-center text-laranjinha card-text">
                              <strong>Hub de carreira e Canal Conecta</strong>
                            </h6>
                            <p class="text-center mt-4 small">
                              Portal de vagas exclusivo que reúne as melhores oportunidades
                              disponíveis no mercado, além de dicas para evoluir na carreira
                              e se dar bem nos processos seletivos.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="carousel-item col col-lg-3 mb-0">
                        <div class="jumbotron jumbotron-fluid bg-white my-5 py-0">
                          <div class="container-fluid">
                            <p class="text-center pb-3"><img src="images/icone-mala-saude.png" alt="" class="img-fluid">
                            </p>
                            <h6 class="text-center text-laranjinha card-text">
                              <strong>Estágio supervisionado</strong>
                            </h6>
                            <p class="text-center mt-4 small">
                              Ganhe mais experiência com o período de estágio em instituições de saúde.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="itemCinco" class="bg-laranja">
        <div class="bg-divider">&nbsp;</div>

        <div class="container-fluid itemCinco">

          <div class="container">
            <div class="container mt-5">

              <div class="row">

                <div class="col-sm mb-4">
                  <h2 class="text-white section-title">A quem se destina o curso de <span>Enfermagem</span></h2>
                  <p class="text-white section-paragraph">A <strong>graduação em Enfermagem</strong> é uma excelente opção
                    para quem se
                    interessa pela área
                    da saúde e pela oportunidade de ter um trabalho reconhecido e que contribua diretamente com a
                    sociedade. A profissão tem sido ainda mais valorizada nos últimos tempos, diante da variedade de
                    campos em que o enfermeiro pode atuar. O público-alvo do curso são as pessoas que enxergam nessa
                    carreira uma chance de transformar a própria vida, além de colaborar com os outros.</p>
                  <p class="text-white section-paragraph">Essa é uma ótima oportunidade
                    também para quem já trabalha como
                    técnico ou
                    auxiliar de Enfermagem e deseja uma formação mais completa para evoluir profissionalmente. O único e
                    principal critério para iniciar uma formação de nível superior é ter concluído todo o ciclo da
                    educação básica.</p>

                </div>

                <div class="col-sm align-self-center d-md-block d-xl-block">
                  <img src="images/publico-alvo.png" alt="" class="img-fluid section-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="itemSeis">
        <div class="bg-divider">&nbsp;</div>
        <div class="container-fluid itemSeis">
          <div class="container">
            <div class="container mt-5 section-title-container">
              <div style="max-width: 320px; text-align: center;">
                <h2 class="section-title career">Sua carreira na <span>Enfermagem</span></h2>
              </div>
              <p class="section-career-paragraph">
                Com toda a modernização que a profissão de enfermagem passou nos últimos
                anos, o enfermeiro se tornou um profissional requisitado em diferentes áreas da
                saúde. Dentre as principais, estão destacadas:
              </p>
            </div>

            <div class="container justify-content-center">
              <div class="row justify-content-center my-3 py-3">
                <div id="sua-carreira" class="carousel carousel-multi-item" data-ride="carousel" data-interval="3000"
                  data-touch="true">

                  <ol class="carousel-indicators">
                    <li data-target="#sua-carreira" data-slide-to="0" class="active"></li>
                    <li data-target="#sua-carreira" data-slide-to="1"></li>
                    <li data-target="#sua-carreira" data-slide-to="2"></li>
                    <li data-target="#sua-carreira" data-slide-to="3"></li>
                  </ol>
                  <div class="carousel-inner row w-100 mx-auto">
                    <div class="carousel-item col active col-md-4">
                      <div class="career-card">
                        <div class="career-card-header">
                          <div class="round-icon">
                            <img src="./images/heartbeat.svg" alt="Coração com batimento cardíaco" />
                          </div>

                          <div class="career-card-title">
                            <h2>Prevenção e promoção da saúde</h2>
                          </div>
                        </div>

                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Técnicas inovadoras de cuidado no processo saúde-doença.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet">&nbsp;</div>
                          <div class="text">Conhecimento aprofundado de Fatores de proteção: alimentação saudável,
                            atividade
                            física e saúde integral.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Áreas específicas de prevenção e promoção da saúde: criança, jovem, adulto,
                            idoso,
                            mulher, homem, saúde mental e bucal.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Princípios éticos e científicos para atuação na área.</div>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item col col-md-4">
                      <div class="career-card">
                        <div class="career-card-header">
                          <div class="round-icon">
                            <img src="./images/hospital.svg" alt="Hospital" />
                          </div>

                          <div class="career-card-title">
                            <h2>Hospitalar, centro cirúrgico, instituições de saúde</h2>
                          </div>
                        </div>

                        <div class="career-card-item" style="margin-top: -50px; padding-top: 70px;">
                          <div class="bullet"></div>
                          <div class="text">Cuidado ao paciente: especificidades de cada ambiente de trabalho.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet">&nbsp;</div>
                          <div class="text">Atendimento pré hospitalar: técnicas para estabilização do paciente de forma
                            eficaz,
                            rápida e segura.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Emergência clínica: especialização no Acolhimento com Avaliação e
                            Classificação
                            de
                            Risco
                            (AACR).</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Princípios éticos e científicos para atuação na área.</div>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item col col-md-4">
                      <div class="career-card">
                        <div class="career-card-header">
                          <div class="round-icon">
                            <img src="./images/laptop-cross.svg" alt="Notebook com desenho de cruz na tela" />
                          </div>

                          <div class="career-card-title">
                            <h2>Gestão<br> da saúde</h2>
                          </div>
                        </div>

                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Planejamento, coordenação e liderança.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet">&nbsp;</div>
                          <div class="text">Administração de recursos financeiros.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Gestão de recursos materiais e equipamentos.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Gerenciamento de pessoas.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Coordenação com entidades sociais e profissionais.</div>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item col col-md-4">
                      <div class="career-card">
                        <div class="career-card-header">
                          <div class="round-icon">
                            <img src="./images/user-student.svg" alt="Notebook com desenho de cruz na tela" />
                          </div>

                          <div class="career-card-title">
                            <h2>Educação<br> em saúde</h2>
                          </div>
                        </div>

                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Técnicas para educação em saúde: formação de futuros profissionais.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet">&nbsp;</div>
                          <div class="text">Competências processo educativo contínuo.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Como ensinar e avaliar o profissionalismo.</div>
                        </div>
                        <div class="career-card-item">
                          <div class="bullet"></div>
                          <div class="text">Profissionalização da docência.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="itemSete" class="pb-5">
        <div class="bg-divider">&nbsp;</div>

        <div class="container-fluid itemSete">

          <div class="container">
            <div class="container mt-5 section-title-container">

              <div style="max-width: 560px; text-align: center;">
                <h2 class="section-title career">Atuação do profissional
                  de <span>Enfermagem</span></h2>
              </div>

              <div style="display: flex;">
                <div class="section-occupation">
                  <div class="section-occupation-gray-line">
                    <div class="first-segment" style="left: 10px;">
                      <div class="circle-pin"></div>
                      <div class="line"></div>
                    </div>
                    <div class="half-circle" style="left: 109px;">
                      <div class="round-icon">
                        <img src="images/users.svg" alt="Várias pessoas" />
                      </div>
                      <div class="vertical-line"></div>
                    </div>
                    <div class="middle-line" style="left: 177px;"></div>
                    <div class="half-circle" style="left: 406px;">
                      <div class=" round-icon">
                        <img src="images/user-nurse.svg" alt="Profissional de Enfermagem" />
                      </div>
                      <div class="vertical-line"></div>
                    </div>
                    <div class="middle-line" style="left: 475px;"></div>
                    <div class="half-circle" style="left: 704px;">
                      <div class=" round-icon">
                        <img src="images/user-doctor.svg" alt="Profissional de Medicina" />
                      </div>
                      <div class="vertical-line"></div>
                    </div>
                    <div class="middle-line" style="left: 774px;"></div>
                    <div class="half-circle" style="left: 1004px;">
                      <div class=" round-icon">
                        <img src="images/book-reader.svg" alt="Pessoa lendo livro" />
                      </div>
                      <div class="vertical-line"></div>
                    </div>
                    <div class="first-segment" style="left: 1074px">
                      <div class="line"></div>
                      <div class="circle-pin"></div>
                    </div>
                  </div>

                  <div class="cards-occupation-container">
                    <div class="card-occupation">
                      <div class="card-occupation-header">
                        <h2>Nível Médio</h2>
                      </div>
                      <div class="card-occupation-title">
                        Auxiliar de Enfermagem
                      </div>
                      <div class="card-occupation-paragraph">
                        Tem interesse na área?
                        Com o <strong>diploma de ensino médio</strong> você já pode cursar a formação em Auxiliar de
                        enfermagem.
                      </div>

                    </div>
                    <div class="card-occupation">
                      <div class="card-occupation-header">
                        <h2>Técnico</h2>
                      </div>
                      <div class="card-occupation-title">
                        Instrumentador Cirúrgico
                      </div>
                      <div class="card-occupation-paragraph">
                        Instrumentador cirúrgico é uma opção para quem quer fazer um <strong>test-drive</strong> antes de
                        seguir uma
                        carreira de técnico em enfermagem ou enfermeiro.
                      </div>
                      <div class="vertical-line"
                        style="height: 33px; align-self: center; margin-left:0; margin-top: 16px;"></div>
                      <div class="card-occupation-title" style="margin-top: 8px">
                        Técnico de Enfermagem
                      </div>
                      <div class="card-occupation-paragraph">
                        O técnico em enfermagem é uma ótima opção se você quer <strong>formação rápida</strong> e entrada
                        rápida no mercado
                        de trabalho.
                      </div>
                    </div>
                    <div class="card-occupation">
                      <div class="card-occupation-header">
                        <h2>Bacharelado</h2>
                      </div>
                      <div class="card-occupation-title">
                        Enfermeiro
                      </div>
                      <div class="card-occupation-paragraph">
                        O pulo de carreira essencial para sua progressão. O enfermeiro exerce a função de
                        <strong>liderança e coordenação</strong> de equipes de técnicos.
                      </div>
                    </div>
                    <div class="card-occupation">
                      <div class="card-occupation-header">
                        <h2>Especialização</h2>
                      </div>
                      <div class="card-occupation-title">
                        Especialista
                      </div>
                      <div class="card-occupation-paragraph">
                        Após um período na enfermagem generalista, a <strong>residência</strong> ou uma
                        <strong>pós-graduação</strong> são opções de
                        progressão na carreira.
                      </div>
                    </div>
                  </div>

                  <div class="coren-container">
                    <div class="coren-title">
                      COREN
                    </div>

                    <div class="coren-paragraph">
                      Se formou em qualquer uma das carreiras acima? Ter seu cadastro ativo no <strong>COREN</strong> é
                      obrigatório para
                      você exercer a profissão.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="itemSeteMobile" class="pb-5">
        <div class="container-fluid itemSeteMobile">

          <div class="container">
            <div class="container mt-5 section-title-container">

              <div>
                <h2 class="section-title career text-center">Atuação do profissional
                  de <span>Enfermagem</span></h2>
              </div>

              <div class="row mb-4" style="width:100%;" id="atuacaoProfissionalTest">
                <div class="accordion" id="atuacaoProfissional" style="width:100%;">

                  <div class="card headingOne">

                    <div class="card-header rounded" id="headingOne" type="button" data-toggle="collapse"
                      data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <h6 class="mb-0 text-laranja"><strong>Nível Médio</strong></h6>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                      data-parent="#atuacaoProfissional">
                      <p class="card-body"><strong>Auxiliar de Enfermagem</strong><br>
                        <span class="small">Tem interesse na área? Com o <strong>diploma de ensino médio</strong> você já
                          pode cursar a formação em Auxiliar de enfermagem.</span>
                      </p>
                    </div>
                  </div>

                  <div class="card headingTwo">
                    <div class="card-header rounded" id="headingTwo" type="button" data-toggle="collapse"
                      data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <h6 class="mb-0 text-laranja"><strong>Técnico</strong></h6>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                      data-parent="#atuacaoProfissional">
                      <p class="card-body"><strong>Instrumentador Cirúrgico</strong><br>
                        <span class="small">Instrumentador cirúrgico é uma opção para quem quer fazer um
                          <strong>test-drive</strong> antes de seguir uma carreira de técnico em enfermagem ou
                          enfermeiro.</span>
                      </p>
                      <p class="card-body mt-0"><strong>Técnico de Enfermagem</strong><br>
                        <span class="small">O técnico em enfermagem é uma ótima opção se você quer <strong>formação
                            rápida</strong> e entrada rápida no mercado de trabalho.</span>
                      </p>
                    </div>
                  </div>

                  <div class="card headingThree">
                    <div class="card-header rounded" id="headingThree" type="button" data-toggle="collapse"
                      data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <h6 class="mb-0 text-laranja"><strong>Bacharelado</strong></h6>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                      data-parent="#atuacaoProfissional">
                      <p class="card-body"><strong>Enfermeiro</strong><br>
                        <span class="small">O pulo de carreira essencial para sua progressão. O enfermeiro exerce a função
                          de <strong>liderança e coordenação</strong> de equipes de técnicos. </span>
                      </p>
                    </div>
                  </div>

                  <div class="card headingFour">
                    <div class="card-header rounded" id="headingFour" type="button" data-toggle="collapse"
                      data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <h6 class="mb-0 text-laranja"><strong>Especialização</strong></h6>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                      data-parent="#atuacaoProfissional">
                      <p class="card-body"><strong>Especialista</strong><br>
                        <span class="small">Após um período na enfermagem generalista, a <strong>residência</strong> ou
                          uma <strong>pós-graduação</strong> são opções de progressão na carreira.</span>
                      </p>
                    </div>
                  </div>

                </div>
              </div><!-- End row -->

              <div class="row mb-5 justify-content-center">
                <div class="coren-container-mobile text-center p-4 border rounded">
                  <div class="coren-title">COREN</div>

                  <div class="coren-paragraph-mobile">
                    Se formou em qualquer uma das carreiras acima? Ter seu cadastro ativo no <strong>COREN</strong> é
                    obrigatório para você exercer a profissão.
                  </div>
                </div>
              </div><!-- End row -->

            </div>
          </div>

        </div>
      </section>

      <section id="itemOito">
        <div class="bg-divider">&nbsp;</div>

        <div class="container-fluid bg-laranja itemOito">

          <div class="container">
            <div class="container mt-5">

              <div style="align-items: center; text-align: center;">
                <h2 class="text-white section-title">Quem estudou aqui sabe!</h2>
              </div>


              <div class=" row testimonials-container justify-content-between">
                <div class="col-12 col-md testimony-container">
                  <p class="testimony-paragraph">
                    Tenho 44 anos e por toda minha vida soube a importância da educação mas sem nunca conseguir
                    seguir
                    com meus estudos fiz colegial técnico em escola particular e por isso não tenho bolsa do
                    governo,
                    nem tão pouco estudei em escola forte o suficiente para passar em vestibular publico, sempre
                    reconheci minha vocação na área da saúde e ser auxiliar de enfermagem parecia ser meu limite.
                    Todos os anos visitava as faculdades e via preços e condições sem nunca me enquadrar em nenhuma
                    e
                    posso dizer... dói! O que eu não esperava era visitar a Anhanguera, conceituada, boas notas e
                    conseguir me matricular, e ate agora estou conseguindo pagar, não era armadilha, era verdade,
                    eles
                    estavam me ajudando. Como auxiliar de enfermagem eu trabalhei muito pelo bem publico, posto de
                    saúde, hospital, mas minha melhor ação foi no programa DST/HIV AIDS sendo orientada e observada
                    eu
                    fazia palestras que mudavam a vida das pessoas, ajudava a melhorar a qualidade, trazia
                    felicidade
                    em momentos ruins, porem sempre limitada a minha posição. Se Deus quiser, e ele quer, minha
                    especialização sera na área de informação de saúde ao publico e educação continuada, fazer a
                    diferença! :) !
                  </p>

                  <button id="button-1" class="read-more">LER MAIS</button>
                  <p class="testimony-author">Kelly Christina Silva Carminato</p>
                  <p class="testimony-course">Enfermagem - Bacharelado</p>
                </div>
                <div id="modal-1" class="modal">
                  <div class="modal-content">
                    <div class="header">
                      <div class="testimony-author">
                        Kelly Christina Silva Carminato
                      </div>
                      <span id="close-1" class="close">&times;</span>
                    </div>
                    <p class="testimony-course">Enfermagem - Bacharelado</p>
                    <div class="testimony-paragraph">
                      Tenho 44 anos e por toda minha vida soube a importância da educação mas sem nunca conseguir
                      seguir
                      com meus estudos fiz colegial técnico em escola particular e por isso não tenho bolsa do
                      governo,
                      nem tão pouco estudei em escola forte o suficiente para passar em vestibular publico, sempre
                      reconheci minha vocação na área da saúde e ser auxiliar de enfermagem parecia ser meu limite.
                      Todos os anos visitava as faculdades e via preços e condições sem nunca me enquadrar em nenhuma
                      e
                      posso dizer... dói! O que eu não esperava era visitar a Anhanguera, conceituada, boas notas e
                      conseguir me matricular, e ate agora estou conseguindo pagar, não era armadilha, era verdade,
                      eles
                      estavam me ajudando. Como auxiliar de enfermagem eu trabalhei muito pelo bem publico, posto de
                      saúde, hospital, mas minha melhor ação foi no programa DST/HIV AIDS sendo orientada e observada
                      eu
                      fazia palestras que mudavam a vida das pessoas, ajudava a melhorar a qualidade, trazia
                      felicidade
                      em momentos ruins, porem sempre limitada a minha posição. Se Deus quiser, e ele quer, minha
                      especialização sera na área de informação de saúde ao publico e educação continuada, fazer a
                      diferença! :) !
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md testimony-container">
                  <p class="testimony-paragraph">
                    Sou aquela mulher nordestina que veio tentar a sorte aqui em São Paulo. Já estou estou morando em SP
                    a 2 anos e sempre tive um sonho de fazer o curso de enfermagem, mas morava em uma cidade pequena e
                    não tive oportunidade. Quando cheguei em Osasco conheci a Faculdade Anhanguera e me apaixonei pela
                    estrutura da faculdade, os laboratórios, professores renomados e uma serie de fatores. estou indo
                    para o segundo semestre da faculdade e nem toda dificuldade de esta longe da minha familiar só
                    aumenta minha vontade de vencer nessa cidade e voltar formada para minha terra natal.
                  </p>

                  <button id="button-2" class="read-more">LER MAIS</button>
                  <p class="testimony-author">Rosiane Coelho de Sousa</p>
                  <p class="testimony-course">Enfermagem - Bacharelado</p>
                </div>
                <div id="modal-2" class="modal">
                  <div class="modal-content">
                    <div class="header">
                      <div class="testimony-author">
                        Rosiane Coelho de Sousa
                      </div>
                      <span id="close-2" class="close">&times;</span>
                    </div>
                    <p class="testimony-course">Enfermagem - Bacharelado</p>
                    <div class="testimony-paragraph">
                      Sou aquela mulher nordestina que veio tentar a sorte aqui em São Paulo. Já estou estou morando em
                      SP
                      a 2 anos e sempre tive um sonho de fazer o curso de enfermagem, mas morava em uma cidade pequena e
                      não tive oportunidade. Quando cheguei em Osasco conheci a Faculdade Anhanguera e me apaixonei pela
                      estrutura da faculdade, os laboratórios, professores renomados e uma serie de fatores. estou indo
                      para o segundo semestre da faculdade e nem toda dificuldade de esta longe da minha familiar só
                      aumenta minha vontade de vencer nessa cidade e voltar formada para minha terra natal.
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md testimony-container">
                  <p class="testimony-paragraph">
                    Enfermagem sempre foi um sonho, mas sempre pensei que ficaria somente nisso, um sonho. Um dia decidi
                    vencer o medo de lutar por mim e fui até a Anhanguera, nossa, não acreditava que iria finalmente
                    fazer faculdade, consegui o PEP e iniciei os estudos três dias depois. Estou no 5° semestre, ainda
                    lutando, passei por muita coisa até aqui, fiquei doente e com muito esforço e apoio dos colegas e
                    professores, nunca desisti, mesmo não estando bem, permaneci com as aulas. Mais uma vez achei que
                    era o fim por questões financeiras, mas a Anhanguera parece que também não desiste de seus alunos e
                    nos ajuda a não ficar fora da faculdade. Minha coordenadora é ótima, já ouvi reclamações de outras
                    faculdades quanto a coordenação, mas Deus é bom e tem colocado anjos em meu caminho. Só tenho a
                    agradecer a todos, mesmo que tentem me desmotivar, amo o que faço e tenho o apoio da faculdade,
                    colegas,professores, família, e isso é que importa. Desde o ano passado sou representante de classe
                    e acredito cada vez mais no meu objetivo. Na Anhanguera já fiz curso de cuidadora de idoso e veno
                    punção,aprendi libras que era outro sonho. Viu, só a agradecer!
                  </p>

                  <button id="button-3" class="read-more">LER MAIS</button>
                  <p class="testimony-author">Cristiana Sampaio dos Santos</p>
                  <p class="testimony-course">Enfermagem - Bacharelado</p>
                </div>
                <div id="modal-3" class="modal">
                  <div class="modal-content">
                    <div class="header">
                      <div class="testimony-author">
                        Cristiana Sampaio dos Santos
                      </div>
                      <span id="close-3" class="close">&times;</span>
                    </div>
                    <p class="testimony-course">Enfermagem - Bacharelado</p>
                    <div class="testimony-paragraph">
                      Sou aquela mulher nordestina que veio tentar a sorte aqui em São Paulo. Já estou estou morando em
                      SP
                      a 2 anos e sempre tive um sonho de fazer o curso de enfermagem, mas morava em uma cidade pequena e
                      não tive oportunidade. Quando cheguei em Osasco conheci a Faculdade Anhanguera e me apaixonei pela
                      estrutura da faculdade, os laboratórios, professores renomados e uma serie de fatores. estou indo
                      para o segundo semestre da faculdade e nem toda dificuldade de esta longe da minha familiar só
                      aumenta minha vontade de vencer nessa cidade e voltar formada para minha terra natal.
                    </div>
                  </div>
                </div>
              </div>

              <div style="align-items: center; display: flex; justify-content: center; padding: 56px 0;">
                <p>
                  <a class="btn btn-outline-light px-4 text-uppercase text-white"
                    style="font-size: 14px; font-weight: 700; line-height: 14px; padding: 18px;"
                    href="https://www.anhanguera.com/inscricao?origem=quem-estudou-sabe" role="button">
                    INSCREVA-SE AGORA!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <footer class="container">
          <div class="container px-0">
          </div>
        </footer>
      </section>
    </main>`,
  "text/html"
);

document.querySelector("body").appendChild(doc);
