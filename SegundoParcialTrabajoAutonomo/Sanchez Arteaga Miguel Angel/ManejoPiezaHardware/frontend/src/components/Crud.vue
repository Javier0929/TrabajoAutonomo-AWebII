<template>
  <nav class="navbar navbar-expand-lg bg-success mb-5  ">
    <div class="container-fluid  ">
      <a class="navbar-brand text-white fs-2" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav mx-5">
          <a class="nav-link" href="#"> <router-link to="/"
              class="list-style-none text-decoration-none fs-5 mx-2 text-white">Inicio</router-link></a>
          <a class="nav-link" href="#"><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white"
              to="/login" v-if="mostrar">Login</router-link></a>
          <a class="nav-link "><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white"
              to="/crud">Crud</router-link></a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="col">
      <div class="row mb-5">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title text-center mb-4">Agregar datos sobre el equipo</h3>
                  <form @submit.prevent="insertarequipo()">
                    <div class="form-group mb-3">
                      <label for="text">Descripcion del equipo</label>
                      <input type="text" class="form-control" v-model="arrayllave.Descripcion_Equipo" id="text">
                    </div>
                    <div class="form-group mb-3">
                      <label for="text">Carasteristicas del equipo</label>
                      <input type="text" class="form-control" v-model="arrayllave.Caracteristicas" id="password">
                    </div>
                    <button type="submit" class="btn btn-success btn-block mt-4">Insertar</button>
                  </form>
                </div>
              </div>
              <br>

              <div class="card">
                <div class="card-body">
                  <h3 class="card-title text-center mb-4">Agregar datos sobre el manejo</h3>
                  <form @submit.prevent="insertarmanejo()">
                    <div class="form-group mb-3">
                      <label for="text">Instruciones del manejo de la pieza</label>
                      <input type="text" class="form-control" v-model="arraymanejo.Instruciones" id="text">
                    </div>
                    <div class="form-group mb-3">
                      <label for="text">Detalles Tecnicos del manejo de la pieza</label>
                      <input type="text" class="form-control" v-model="arraymanejo.Detalles_Tecnicos" id="password">
                    </div>
                    <button type="submit" class="btn btn-success btn-block mt-4">Insertar</button>

                  </form>
                </div>
              </div>
              <br>

              <div class="card">
                <div class="card-body">
                  <h3 class="card-title text-center mb-4">Agregar datos sobre la pieza</h3>
                  <form @submit.prevent="insertarpieza()">
                    <div class="form-group mb-3">
                      <label for="text">Descripcion de la Pieza</label>
                      <input type="text" class="form-control" v-model="arraypieza.Descripcion_De_Pieza" id="text">
                    </div>
                    <div class="form-group mb-3">
                      <label for="text">Caracteristicas de la pieza</label>
                      <input type="text" class="form-control" v-model="arraypieza.Caracteristica" id="password">
                    </div>
                    <div class="form-group mb-3">
                      <label for="text">Identificacion de la pieza</label>
                      <input type="text" class="form-control" v-model="arraypieza.Identificaion_Pieza" id="password">
                    </div>
                    <button type="submit" class="btn btn-success btn-block mt-4">Insertar</button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row ">
          <table>
            <tr>
              <th>id</th>
              <th>Descripcion del equipo</th>
              <th>Caracteristicas</th>
              <th>Botones del crud</th>
            </tr>
            <tr v-for="(item, index) in datosequipo" :key="index">
              <td>{{ item._id }}</td>
              <td>{{ item.Descripcion_Equipo }}</td>
              <td>{{ item.Caracteristicas }}</td>
              <td>
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"
                  @click="editarequipo(item._id)">
                  Editar
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form action="" class="" @submit.prevent="editarenbaseclientes(arrayllave)">
                          <div class="mx-1 mt-3">
                            <div class="text-center">
                              <label for="" class="form-label fs-5">Descripcion del equipo</label>
                              <input type="text" class="form-control" v-model="arrayllave.Descripcion_Equipo">
                            </div>
                            <div class="text-center">
                              <label for="" class="form-label fs-5">Caracteristica del equipo</label>
                              <input type="text" class="form-control" v-model="arrayllave.Caracteristicas">
                            </div>
                            <div class="d-flex justify-content-center">
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-danger bg-danger" @click="eliminardatosequipo(item._id)">Eliminar</button>
              </td>
            </tr>
          </table>

          <table>
            <tr>
              <th>id</th>
              <th>Instruciones del manejo de la pieza</th>
              <th>Detalles Tecnicos del manejo de la pieza</th>
              <th>Botones del crud</th>
            </tr>
            <tr v-for="(item, index) in datosmanejo" :key="index">
              <td>{{ item._id }}</td>
              <td>{{ item.Instruciones }}</td>
              <td>{{ item.Detalles_Tecnicos }}</td>
              <td>
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                  @click="editarmanejo(item._id)">
                  Editar
                </button>
                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form action="" class="" @submit.prevent="editarenbasemanejo(arraymanejo)">
                          <div class="mx-1 mt-3">
                            <div class="text-center">
                              <label for="" class="form-label fs-5">Instrucciones del manejo</label>
                              <input type="text" class="form-control" v-model="arraymanejo.Instruciones">
                            </div>
                            <div class="text-center">
                              <label for="" class="form-label fs-5">Detalles tecnicos del manejo</label>
                              <input type="text" class="form-control" v-model="arraymanejo.Detalles_Tecnicos">
                            </div>
                            <div class="d-flex justify-content-center">
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-danger bg-danger" @click="eliminardatosmanejo(item._id)">Eliminar</button>
              </td>
            </tr>
          </table>

          <table>
            <tr>
              <th>id</th>
              <th>Descripcion de la Pieza</th>
              <th>Caracteristicas de la pieza</th>
              <th>Identificacion de la pieza</th>
              <th>Botones del crud</th>
            </tr>
            <tr v-for="(item, index) in datospieza" :key="index">
              <td>{{ item._id }}</td>
              <td>{{ item.Descripcion_De_Pieza }}</td>
              <td>{{ item.Caracteristica }}</td>
              <td>{{ item.Identificaion_Pieza }}</td>
              <td>
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                  @click="editarpieza(item._id)">
                  Editar
                </button>
                <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form action="" class="" @submit.prevent="editarenbasepieza(arraypieza)">
                          <div class="mx-1 mt-3">
                            <div class="text-center">
                              <label for="" class="form-label fs-5">Descripcion de la pieza</label>
                              <input type="text" class="form-control" v-model="arraypieza.Descripcion_De_Pieza">
                            </div>
                            <div class="text-center">
                              <label for="" class="form-label fs-5">Caracteristica de la pieza</label>
                              <input type="text" class="form-control" v-model="arraypieza.Caracteristica">
                            </div>
                            <div class="text-center">
                              <label for="" class="form-label fs-5">identificacion de la pieza</label>
                              <input type="text" class="form-control" v-model="arraypieza.Identificaion_Pieza">
                            </div>
                            <div class="d-flex justify-content-center">
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-danger bg-danger" @click="eliminardatospieza(item._id)">Eliminar</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
  <br>
  <br>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      datosequipo: [],
      datosmanejo: [],
      datospieza: [],
      arrayllave: {
        Descripcion_Equipo: '',
        Caracteristicas: '',
      },
      arraymanejo: {
        Instruciones: '',
        Detalles_Tecnicos: ''

      },
      arraypieza: {
        Descripcion_De_Pieza: '',
        Caracteristica: '',
        Identificaion_Pieza: ''

      }
    }
  },
  created() {
    this.verdatos()
  },
  methods: {
    verdatos() {
      axios.get('https://trabajo-autonomo-segundop-production.up.railway.app/equipo')
        .then(resp => {
          this.datosequipo = resp.data;
          console.log(resp)
        }),
        axios.get('https://trabajo-autonomo-segundop-production.up.railway.app/manejo')
          .then(resp => {
            this.datosmanejo = resp.data;
            console.log(resp)
          })
      axios.get('https://trabajo-autonomo-segundop-production.up.railway.app/pieza')
        .then(resp => {
          this.datospieza = resp.data;
          console.log(resp)
        })
    },
    insertarequipo() {
      axios.post('https://trabajo-autonomo-segundop-production.up.railway.app/equipo', this.arrayllave)
        .then(resp => {
          this.datosequipo.push(resp.data)
        })
    },
    insertarmanejo() {
      axios.post('https://trabajo-autonomo-segundop-production.up.railway.app/manejo', this.arraymanejo)
        .then(resp => {
          this.datosmanejo.push(resp.data)
        })
    },
    insertarpieza() {
      axios.post('https://trabajo-autonomo-segundop-production.up.railway.app/pieza', this.arraypieza)
        .then(resp => {
          this.datospieza.push(resp.data)
        })
    },
    eliminardatosequipo(_id) {
      axios.delete(`https://trabajo-autonomo-segundop-production.up.railway.app/equipo/${_id}`)
        .then(resp => {
          const index = this.datosequipo.findIndex(item => item._id === resp.data._id);
          this.datosequipo.splice(index, 1)
        })
    },
    eliminardatosmanejo(_id) {
      axios.delete(`https://trabajo-autonomo-segundop-production.up.railway.app/manejo/${_id}`)
        .then(resp => {
          const index = this.datosmanejo.findIndex(item => item._id === resp.data._id);
          this.datosmanejo.splice(index, 1)
        })
    },
    eliminardatospieza(_id) {
      axios.delete(`https://trabajo-autonomo-segundop-production.up.railway.app/pieza/${_id}`)
        .then(resp => {
          const index = this.datospieza.findIndex(item => item._id === resp.data._id);
          this.datospieza.splice(index, 1)
        })
    },
    editarequipo(_id) {
      axios.get(`https://trabajo-autonomo-segundop-production.up.railway.app/equipo/${_id}`)
        .then(resp => {
          const datoe = resp.data;
          const array = datoe.filter(c => c._id === _id)
          console.log(array[0]._id)
          this.arrayllave.Descripcion_Equipo = array[0].Descripcion_Equipo;
          this.arrayllave.Caracteristicas = array[0].Caracteristicas;

        })
        .catch(e => {
          console.log(e)
        })

    },
    editarmanejo(_id) {
      axios.get(`https://trabajo-autonomo-segundop-production.up.railway.app/manejo/${_id}`)
        .then(resp => {
          const datom = resp.data;
          const array = datom.filter(c => c._id === _id)
          console.log(array[0]._id)
          this.arraymanejo.Instruciones = array[0].Instruciones;
          this.arraymanejo.Detalles_Tecnicos = array[0].Detalles_Tecnicos;

        })
        .catch(e => {
          console.log(e)
        })

    },
    editarpieza(_id) {
      axios.get(`https://trabajo-autonomo-segundop-production.up.railway.app/pieza/${_id}`)
        .then(resp => {
          const datop= resp.data;
          const array = datop.filter(c => c._id === _id)
          console.log(array[0]._id)
          this.arraypieza.Descripcion_De_Pieza = array[0].Descripcion_De_Pieza;
          this.arraypieza.Caracteristica = array[0].Caracteristica;
          this.arraypieza.Identificaion_Pieza = array[0].Identificaion_Pieza;

        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
<style>
table {
  width: 900px;
  border-radius: 10px;
  /* border-collapse: collapse; */
  margin-bottom: 50px;

}

/* Zebra striping */
tr:nth-of-type(odd) {
  background: #eee;
}

th {
  background: #228850;
  color: white;
  font-weight: bold;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 18px;
}

@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px) {

  table {
    width: 100%;

  }

  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    content: attr(data-column);

    color: #000;
    font-weight: bold;
  }

}
</style>