<template>
    <nav class="navbar navbar-expand-lg bg-dark mb-5  ">
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
                to="/login" v-if="vercrud">Login</router-link></a>
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
                    <h3 class="card-title text-center mb-4">Insertar datos sobre la computadora</h3>
                    <form @submit.prevent="insertarcomputadora()">
                      <div class="form-group mb-3">
                        <label for="text">Descripcion de la computadora</label>
                        <input type="text" class="form-control" v-model="arraycomputadora.Descripcion" id="text">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">Detalles tecnicos y espesificos del PC</label>
                        <input type="text" class="form-control" v-model="arraycomputadora.Detallestecnicos" id="password">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">Descripcion del precio por hora que va tener el prestamo</label>
                        <input type="text" class="form-control" v-model="arraycomputadora.Costo_Por_Hora_Prestamo" id="password">
                      </div>
                      <button type="submit" class="btn btn-dark btn-block mt-4">Insertar</button>
                    </form>
                  </div>
                </div>
                <br>
  
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center mb-4">Insertar datos sobre el prestamista</h3>
                    <form @submit.prevent="insertarprestamista()">
                      <div class="form-group mb-3">
                        <label for="text">Nombre del prestamista</label>
                        <input type="text" class="form-control" v-model="arrayprestamista.Nombre" id="text">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">Numero de Identificaion del prestamista</label>
                        <input type="text" class="form-control" v-model="arrayprestamista.Identificaion" id="password">
                      </div>
                      <button type="submit" class="btn btn-dark btn-block mt-4">Insertar</button>
  
                    </form>
                  </div>
                </div>
                <br>
  
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center mb-4">Insertar datos sobre el prestamo</h3>
                    <form @submit.prevent="insertarprestamo()">
                      <div class="form-group mb-3">
                        <label for="text">Fecha cuando se realizo el prestamo</label>
                        <input type="text" class="form-control" v-model="arrayprestamo.Fecha" id="text">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">Hora cuando se realizo el prestamo</label>
                        <input type="text" class="form-control" v-model="arrayprestamo.Hora" id="password">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">Numero de horas que duro el Prestamo</label>
                        <input type="text" class="form-control" v-model="arrayprestamo.Numero_horas_de_Prestamo" id="password">
                      </div>
                      <button type="submit" class="btn btn-dark btn-block mt-4">Insertar</button>
  
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
                <th>Descripcion de la Computadora</th>
                <th>Detalles tecnicos y espesificos del PC</th>
                <th>Descripcion del precio por hora que va tener el prestamo</th>
                <th>Acciones</th>
              </tr>
              <tr v-for="(item, index) in datoscomputadora" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.Descripcion }}</td>
                <td>{{ item.Detallestecnicos }}</td>
                <td>{{ item.Costo_Por_Hora_Prestamo }}</td>
                <td>
                  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    @click="editarcomputadora(item._id)">
                    Editar
                  </button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Editar</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form action="" class="" @submit.prevent="editarenbasecomputadora(arraycomputadora)">
                            <div class="mx-1 mt-3">
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Descripcion de la computadora</label>
                                <input type="text" class="form-control" v-model="arraycomputadora.Descripcion_Equipo">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Detalles tecnicos y espesificos del PC</label>
                                <input type="text" class="form-control" v-model="arraycomputadora.Detallestecnicos">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Descripcion del precio por hora que va tener el prestamo</label>
                                <input type="text" class="form-control" v-model="arraycomputadora.Costo_Por_Hora_Prestamo">
                              </div>
                              <div class="d-flex justify-content-center">
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                          <button type="button" class="btn btn-primary">Guardar cambios</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-danger mt-2 bg-danger" @click="eliminardatoscomputadora(item._id)">Eliminar</button>
                </td>
              </tr>
            </table>
  
            <table>
              <tr>
                <th>id</th>
                <th>Nombre del prestamista</th>
                <th>Numero de Identificaion del prestamista</th>
                <th>Acciones</th>
              </tr>
              <tr v-for="(item, index) in datosprestamista" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.Nombre }}</td>
                <td>{{ item.Identificaion }}</td>
                <td>
                  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                    @click="editarprestamista(item._id)">
                    Editar
                  </button>
                  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Editar</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form action="" class="" @submit.prevent="editarenbasemanejo(arrayprestamista)">
                            <div class="mx-1 mt-3">
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre del prestamista</label>
                                <input type="text" class="form-control" v-model="arrayprestamista.Nombre">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Numero de Identificaion del prestamista</label>
                                <input type="text" class="form-control" v-model="arrayprestamista.Identificaion">
                              </div>
                              <div class="d-flex justify-content-center">
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                          <button type="button" class="btn btn-primary">Guardar cambios</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-danger mx-2 bg-danger" @click="eliminardatosprestamista(item._id)">Eliminar</button>
                </td>
              </tr>
            </table>
  
            <table>
              <tr>
                <th>id</th>
                <th>Fecha cuando se realizo el prestamo</th>
                <th>Hora cuando se realizo el prestamo</th>
                <th>Numero de horas que duro el Prestamo</th>
                <th>Acciones</th>
              </tr>
              <tr v-for="(item, index) in datosprestamo" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.Fecha }}</td>
                <td>{{ item.Hora }}</td>
                <td>{{ item.Numero_horas_de_Prestamo }}</td>
                <td>
                  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                    @click="editarprestamo(item._id)">
                    Editar
                  </button>
                  <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Editar</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form action="" class="" @submit.prevent="editarenbaseprestamo(arrayprestamo)">
                            <div class="mx-1 mt-3">
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Fecha cuando se realizo el prestamo</label>
                                <input type="text" class="form-control" v-model="arrayprestamo.Fecha">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Hora cuando se realizo el prestamo</label>
                                <input type="text" class="form-control" v-model="arrayprestamo.Hora">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Numero de horas que duro el Prestamo</label>
                                <input type="text" class="form-control" v-model="arrayprestamo.Numero_horas_de_Prestamo">
                              </div>
                              <div class="d-flex justify-content-center">
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                          <button type="button" class="btn btn-primary">Guardar cambios</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-danger mt-2 bg-danger" @click="eliminardatosprestamo(item._id)">Eliminar</button>
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
        datoscomputadora: [],
        datosprestamista: [],
        datosprestamo: [],
        arraycomputadora: {
            Descripcion: '',
            Detallestecnicos: '',
            Costo_Por_Hora_Prestamo: ''
        },
        arrayprestamista: {
            Nombre: '',
            Identificaion: ''
  
        },
        arrayprestamo: {
            Fecha: '',
            Hora: '',
            Numero_horas_de_Prestamo: ''
        }
      }
    },
    created() {
      this.obtenerdatos()
    },
    methods: {
      obtenerdatos() {
        axios.get('https://trabajoautonomop2t-production.up.railway.app/computadora')
          .then(resp => {
            this.datoscomputadora = resp.data;
            console.log(resp)
          }),
          axios.get('https://trabajoautonomop2t-production.up.railway.app/prestamista')
            .then(resp => {
              this.datosprestamista = resp.data;
              console.log(resp)
            })
        axios.get('https://trabajoautonomop2t-production.up.railway.app/prestamo')
          .then(resp => {
            this.datosprestamo = resp.data;
            console.log(resp)
          })
      },
      insertarcomputadora() {
        axios.post('https://trabajoautonomop2t-production.up.railway.app/computadora', this.arraycomputadora)
          .then(resp => {
            this.datoscomputadora.push(resp.data)
          })
      },
      insertarprestamista() {
        axios.post('https://trabajoautonomop2t-production.up.railway.app/prestamista', this.arrayprestamista)
          .then(resp => {
            this.datosprestamista.push(resp.data)
          })
      },
      insertarprestamo() {
        axios.post('https://trabajoautonomop2t-production.up.railway.app/prestamo', this.arrayprestamo)
          .then(resp => {
            this.datosprestamo.push(resp.data)
          })
      },
      eliminardatoscomputadora(_id) {
        axios.delete(`https://trabajoautonomop2t-production.up.railway.app/computadora/${_id}`)
          .then(resp => {
            const index = this.datoscomputadora.findIndex(item => item._id === resp.data._id);
            this.datoscomputadora.splice(index, 1)
          })
      },
      eliminardatosprestamista(_id) {
        axios.delete(`https://trabajoautonomop2t-production.up.railway.app/prestamista/${_id}`)
          .then(resp => {
            const index = this.datosprestamista.findIndex(item => item._id === resp.data._id);
            this.datosprestamista.splice(index, 1)
          })
      },
      eliminardatosprestamo(_id) {
        axios.delete(`https://trabajoautonomop2t-production.up.railway.app/prestamo/${_id}`)
          .then(resp => {
            const index = this.datosprestamo.findIndex(item => item._id === resp.data._id);
            this.datosprestamo.splice(index, 1)
          })
      },
      editarcomputadora(_id) {
        axios.get(`https://trabajoautonomop2t-production.up.railway.app/computadora/${_id}`)
          .then(resp => {
            const datocomp = resp.data;
            const array = datocomp.filter(c => c._id === _id)
            console.log(array[0]._id)
            this.arraycomputadora.Descripcion = array[0].Descripcion;
            this.arraycomputadora.Detallestecnicos = array[0].Detallestecnicos;
            this.arraycomputadora.Costo_Por_Hora_Prestamo = array[0].Costo_Por_Hora_Prestamo;
  
          })
          .catch(e => {
            console.log(e)
          })
  
      },
      editarprestamista(_id) {
        axios.get(`https://trabajoautonomop2t-production.up.railway.app/prestamista/${_id}`)
          .then(resp => {
            const datoprest = resp.data;
            const array = datoprest.filter(c => c._id === _id)
            console.log(array[0]._id)
            this.arrayprestamista.Nombre = array[0].Nombre;
            this.arrayprestamista.Identificaion = array[0].Identificaion;
  
          })
          .catch(e => {
            console.log(e)
          })
  
      },
      editarprestamo(_id) {
        axios.get(`https://trabajoautonomop2t-production.up.railway.app/prestamo/${_id}`)
          .then(resp => {
            const datopres= resp.data;
            const array = datopres.filter(c => c._id === _id)
            console.log(array[0]._id)
            this.arrayprestamo.Fecha = array[0].Fecha;
            this.arrayprestamo.Hora = array[0].Hora;
            this.arrayprestamo.Numero_horas_de_Prestamo = array[0].Numero_horas_de_Prestamo;
  
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
    background: #141706;
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