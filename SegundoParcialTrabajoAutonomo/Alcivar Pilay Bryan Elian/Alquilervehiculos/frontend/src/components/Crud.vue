<template>
    <nav class="navbar navbar-expand-lg bg-primary mb-5  ">
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
                to="/login" v-if="entrarcrud">Login</router-link></a>
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
                    <h3 class="card-title text-center mb-4">Agregar datos sobre el espacio del parqueo</h3>
                    <form @submit.prevent="insertarespacio()">
                      <div class="form-group mb-3">
                        <label for="text">Descripcion del espacio parqueadero</label>
                        <input type="text" class="form-control" v-model="arrayespacio.Descripcion" id="text">
                      </div>
                      <button type="submit" class="btn btn-primary btn-block mt-4">Insertar</button>
                    </form>
                  </div>
                </div>
                <br>
  
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center mb-4">Agregar datos sobre el vehiculo</h3>
                    <form @submit.prevent="insertarvehiculo()">
                      <div class="form-group mb-3">
                        <label for="text">Placa del vehiculo</label>
                        <input type="text" class="form-control" v-model="arrayvehiculo.Placa" id="text">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">Descripcion del vechiculo</label>
                        <input type="text" class="form-control" v-model="arrayvehiculo.Descripcion" id="password">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">color del vehiculo</label>
                        <input type="text" class="form-control" v-model="arrayvehiculo.Color" id="password">
                      </div>
                      <button type="submit" class="btn btn-primary btn-block mt-4">Insertar</button>
  
                    </form>
                  </div>
                </div>
                <br>
  
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center mb-4">Agregar datos sobre parquear</h3>
                    <form @submit.prevent="insertarparquear()">
                      <div class="form-group mb-3">
                        <label for="text">Fecha de entrada al parqueo</label>
                        <input type="text" class="form-control" v-model="arrayparquear.FechaEntrada" id="text">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">hora de entrada al parqueo</label>
                        <input type="text" class="form-control" v-model="arrayparquear.HoraEntrada" id="password">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">Fecha de salida al parqueo</label>
                        <input type="text" class="form-control" v-model="arrayparquear.FechaSalida" id="password">
                      </div>
                      <div class="form-group mb-3">
                        <label for="text">hora de salida al parqueo</label>
                        <input type="text" class="form-control" v-model="arrayparquear.HoraSalida" id="password">
                      </div>
                      <button type="submit" class="btn btn-primary btn-block mt-4">Insertar</button>
  
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
                <th>Descripcion del espacio de parqueo</th>
                <th>Botones del crud</th>
              </tr>
              <tr v-for="(item, index) in datosespacio" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.Descripcion }}</td>
                <td>
                  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    @click="editarespacio(item._id)">
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
                          <form action="" class="" @submit.prevent="editarenbaseclientes(arrayespacio)">
                            <div class="mx-1 mt-3">
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Descripcion del espacio de parqueo</label>
                                <input type="text" class="form-control" v-model="arrayespacio.Descripcion">
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
                  <button class="btn btn-danger bg-danger mx-2" @click="eliminardatosespacio(item._id)">Eliminar</button>
                </td>
              </tr>
            </table>
  
            <table>
              <tr>
                <th>id</th>
                <th>Placa del vehiculo</th>
                <th>Descripcion del vechiculo</th>
                <th>color del vechiculo</th>
                <th>Botones del crud</th>
              </tr>
              <tr v-for="(item, index) in datosvehiculo" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.Placa }}</td>
                <td>{{ item.Descripcion }}</td>
                <td>{{ item.Color }}</td>
                <td>
                  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                    @click="editarvehiculo(item._id)">
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
                          <form action="" class="" @submit.prevent="editarenbasevehiculo(arrayvehiculo)">
                            <div class="mx-1 mt-3">
                              <div class="text-center">
                                <label for="" class="form-label fs-5">IPlaca del vehiculo</label>
                                <input type="text" class="form-control" v-model="arrayvehiculo.Placa">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Descripcion del vechiculo</label>
                                <input type="text" class="form-control" v-model="arrayvehiculo.Descripcion">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">color del vechiculo</label>
                                <input type="text" class="form-control" v-model="arrayvehiculo.Color">
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
                  <button class="btn btn-danger bg-danger mx-2" @click="eliminardatosvehiculo(item._id)">Eliminar</button>
                </td>
              </tr>
            </table>
  
            <table>
              <tr>
                <th>id</th>
                <th>Fecha de entrada al parqueo</th>
                <th>hora de entrada al parqueo</th>
                <th>Fecha de salida al parqueo</th>
                <th>hora de salida al parqueo</th>
                <th>Botones del crud</th>
              </tr>
              <tr v-for="(item, index) in datosparquear" :key="index">
                <td>{{ item._id }}</td>
                <td>{{ item.FechaEntrada }}</td>
                <td>{{ item.HoraEntrada }}</td>
                <td>{{ item.FechaSalida }}</td>
                <td>{{ item.HoraSalida }}</td>
                <td>
                  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                    @click="editarparquear(item._id)">
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
                          <form action="" class="" @submit.prevent="editarenbaseparquear(arrayparquear)">
                            <div class="mx-1 mt-3">
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Fecha de entrada al parqueo</label>
                                <input type="text" class="form-control" v-model="arrayparquear.FechaEntrada">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">hora de entrada al parqueo</label>
                                <input type="text" class="form-control" v-model="arrayparquear.HoraEntrada">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">Fecha de salida al parqueo</label>
                                <input type="text" class="form-control" v-model="arrayparquear.FechaSalida">
                              </div>
                              <div class="text-center">
                                <label for="" class="form-label fs-5">hora de salida al parqueo</label>
                                <input type="text" class="form-control" v-model="arrayparquear.HoraSalida">
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
                  <button class="btn btn-danger bg-danger mt-2" @click="eliminardatosparquear(item._id)">Eliminar</button>
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
        datosespacio: [],
        datosvehiculo: [],
        datosparquear: [],
        arrayespacio: {
            Descripcion: ''
        },
        arrayvehiculo: {
            Placa: '',
            Descripcion: '',
            Color: ''
  
        },
        arrayparquear: {
            FechaEntrada: '',
            HoraEntrada: '',
            FechaSalida: '',
            HoraSalida: ''
  
        }
      }
    },
    created() {
      this.vizualizarDatos()
    },
    methods: {
      vizualizarDatos() {
        axios.get('https://trabajoautonomo2parcial-production.up.railway.app/espacio-parqueo')
          .then(resp => {
            this.datosespacio = resp.data;
            console.log(resp)
          }),
          axios.get('https://trabajoautonomo2parcial-production.up.railway.app/vehiculo')
            .then(resp => {
              this.datosvehiculo = resp.data;
              console.log(resp)
            })
        axios.get('https://trabajoautonomo2parcial-production.up.railway.app/parquear')
          .then(resp => {
            this.datosparquear = resp.data;
            console.log(resp)
          })
      },
      insertarespacio() {
        axios.post('https://trabajoautonomo2parcial-production.up.railway.app/espacio-parqueo', this.arrayespacio)
          .then(resp => {
            this.datosespacio.push(resp.data)
          })
      },
      insertarvehiculo() {
        axios.post('https://trabajoautonomo2parcial-production.up.railway.app/vehiculo', this.arrayvehiculo)
          .then(resp => {
            this.datosvehiculo.push(resp.data)
          })
      },
      insertarparquear() {
        axios.post('https://trabajoautonomo2parcial-production.up.railway.app/parquear', this.arrayparquear)
          .then(resp => {
            this.datosparquear.push(resp.data)
          })
      },
      eliminardatosespacio(_id) {
        axios.delete(`https://trabajoautonomo2parcial-production.up.railway.app/espacio-parqueo/${_id}`)
          .then(resp => {
            const index = this.datosespacio.findIndex(item => item._id === resp.data._id);
            this.datosespacio.splice(index, 1)
          })
      },
      eliminardatosvehiculo(_id) {
        axios.delete(`https://trabajoautonomo2parcial-production.up.railway.app/vehiculo/${_id}`)
          .then(resp => {
            const index = this.datosvehiculo.findIndex(item => item._id === resp.data._id);
            this.datosvehiculo.splice(index, 1)
          })
      },
      eliminardatosparquear(_id) {
        axios.delete(`https://trabajoautonomo2parcial-production.up.railway.app/parquear/${_id}`)
          .then(resp => {
            const index = this.datosparquear.findIndex(item => item._id === resp.data._id);
            this.datosparquear.splice(index, 1)
          })
      },
      editarespacio(_id) {
        axios.get(`https://trabajoautonomo2parcial-production.up.railway.app/espacio-parqueo/${_id}`)
          .then(resp => {
            const datoesp = resp.data;
            const array = datoesp.filter(c => c._id === _id)
            console.log(array[0]._id)
            this.arrayespacio.Descripcion = array[0].Descripcion;  
          })
          .catch(e => {
            console.log(e)
          })
  
      },
      editarvehiculo(_id) {
        axios.get(`https://trabajoautonomo2parcial-production.up.railway.app/vehiculo/${_id}`)
          .then(resp => {
            const datovehiculo = resp.data;
            const array = datovehiculo.filter(c => c._id === _id)
            console.log(array[0]._id)
            this.arrayvehiculo.Placa = array[0].Placa;
            this.arrayvehiculo.Descripcion = array[0].Descripcion;
            this.arrayvehiculo.Color = array[0].Color;

          })
          .catch(e => {
            console.log(e)
          })
  
      },
      editarparquear(_id) {
        axios.get(`https://trabajoautonomo2parcial-production.up.railway.app/parquear/${_id}`)
          .then(resp => {
            const datoparquear= resp.data;
            const array = datoparquear.filter(c => c._id === _id)
            console.log(array[0]._id)
            this.arrayparquear.FechaEntrada = array[0].FechaEntrada;
            this.arrayparquear.HoraEntrada = array[0].HoraEntrada;
            this.arrayparquear.FechaSalida = array[0].FechaSalida;
            this.arrayparquear.HoraSalida = array[0].HoraSalida;
  
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
    background: #5a6beb;
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