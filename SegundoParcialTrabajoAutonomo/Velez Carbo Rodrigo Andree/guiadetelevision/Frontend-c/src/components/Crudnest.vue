<template>
        <nav class="navbar navbar-expand-lg bg-success mb-5  ">
        <div class="container-fluid  ">
            <a class="navbar-brand text-dark fs-2" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-5">
                    <a class="nav-link" href="#"> <router-link to="/"
                            class="list-style-none text-decoration-none fs-5 mx-2 text-dark">Inicio</router-link></a>
                    <a class="nav-link" href="#"><router-link
                            class="list-style-none text-decoration-none fs-5 mx-2 text-dark" to="/login"
                            v-if="show">Login</router-link></a>
                    <a class="nav-link "><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-dark"
                            to="/crudnest" v-if="!show">Crud</router-link></a>
                </div>
            </div>
        </div>
    </nav>

    <section class="primerformulario"> 
        <div class="container-fluid">
        <div class="col">
            <div class="row">
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!mostarformCanal">
                    <h2 class="text-center "> Guia </h2>
                    <form action="" class="" @submit.prevent="postCanal()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre</label>
                                <input type="text" class="form-control" v-model="nombreCanal.nombre_canal">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!mostrarformPrograma">
                    <h2 class="text-center ">Programa</h2>
                    <form action="" class="" @submit.prevent="postPrograma()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">programa de tv</label>
                                <input type="text" class="form-control" v-model="nombrePrograma.programa_tv">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">tipo</label>
                                <input type="text" class="form-control" v-model="nombrePrograma.tipo">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">categoria</label>
                                <input type="text" class="form-control" v-model="nombrePrograma.categoria">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                    v-if="!mostrarformGuia">
                    <h2 class="text-center ">Ingreso de Guia</h2>
                    <form action="" class="" @submit.prevent="postGuia()">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">fecha</label>
                                <input type="text" class="form-control" v-model="nombreGuia.fecha">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">hora</label>
                                <input type="text" class="form-control" v-model="nombreGuia.hora_transmision">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">escala</label>
                                <input type="text" class="form-control" v-model="nombreGuia.escala">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div class="row">
               
            </div>
        </div>
    </div>
    </section>

    <section class="tablass">
        <div class="m-auto">
        <table class="table table-striped w-75 text-center">
            <tr>
                <th>id</th>
                <th>Nombre de canal</th>
                <th>Buttons</th>

            </tr>
            <tr v-for="(item, index) in Canales" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.nombre_canal }}</td>
                

                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        @click="editarCanal(item.id)">
                        Editar
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarcanal(nombreCanal)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre de canal</label>
                                <input type="text" class="form-control" v-model="nombreCanal.nombre_canal">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-danger bg-danger" @click="EliminarCanal(item.id)">Eliminar</button>
                </td>
            </tr>
        </table>
        <table class="table table-striped w-75">
            <tr>
                <th>id</th>
                <th>programa de tv</th>
                <th>tipo</th>
                <th>categoria</th>
                <th>Buttons</th>
            </tr>
            <tr v-for="(item, index) in Programas" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.programa_tv }}</td>
                <td>{{ item.tipo }}</td>
                <td>{{ item.categoria }}</td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                        @click="editarprograma(item.id)">
                        Editar
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarprograma(nombrePrograma)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">programa de tv</label>
                                <input type="text" class="form-control" v-model="nombrePrograma.programa_tv">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">tipo</label>
                                <input type="text" class="form-control" v-model="nombrePrograma.tipo">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">categoria</label>
                                <input type="text" class="form-control" v-model="nombrePrograma.categoria">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-danger bg-danger" @click="eliminarPrograma(item.id)">Eliminar</button>
                </td>

            </tr>
        </table>
        <table class="table table-striped w-75">
            <tr>
                <th>id</th>
                <th>fecha</th>
                <th>hora de transmision</th>
                <th>escala</th>

            </tr>

            <tr v-for="(item, index) in Guias" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.fecha }}</td>
                <td>{{ item.hora_transmision }}</td>
                <td>{{ item.escala }}</td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                        @click="editarGuia(item.id)">
                        Editar
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarnota(notaNota)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">fecha</label>
                                <input type="text" class="form-control" v-model="nombreGuia.fecha">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">hora de transmision</label>
                                <input type="text" class="form-control" v-model="nombreGuia.hora_transmision">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">escala</label>
                                <input type="text" class="form-control" v-model="nombreGuia.escala">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                            </div>
                        </div>
                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-danger bg-danger"
                        @click="eliminarguia(item.id)">Eliminar</button>
                </td>
            </tr>

        </table>

    </div>
    </section>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                mostarformCanal:false,
                mostrarformPrograma:true,
                mostrarformGuia: true,
                nombreCanal:[],
                nombrePrograma:[],
                nombreGuia:[],
                nombreCanal: {
                    nombre_canal: '',
                    
                },
                nombrePrograma:{
                    programa_tv:'',
                    tipo:'',
                    categoria:''
                },
                nombreGuia:{
                    fecha:'',
                    hora_transmision:'',
                    escala:''
                }

            }
        },
        created(){
            this.getEntitys()
        },
        methods:{
            getEntitys(){
                axios.get('trabajoautonomoarauz-production.up.railway.app/alumno')
                .then(resp =>{
                    this.notaAlumnos = resp.data
                    console.log(resp.data)
                })
                axios.get('trabajoautonomoarauz-production.up.railway.app/asignatura')
                .then(resp =>{
                    this.notaAsignaturas = resp.data
                    console.log(resp.data)
                })
                axios.get('trabajoautonomoarauz-production.up.railway.app/nota')
                .then(resp =>{
                    this.notaNotas = resp.data
                    console.log(resp.data)
                })
            },  
            postAlumno(){
                axios.post('https://trabajoautonomoarauz-production.up.railway.app/alumno', this.notaAlumno)
                .then(resp =>{
                    this.notaAlumnos.push(resp.data)
                })
                .catch(e =>{
                    console.log(e)
                })
                this.mostarformAlumno= true
                this.mostrarformAsignatura= false
            },
            postAsignatura(){
                axios.post('trabajoautonomoarauz-production.up.railway.app/asignatura', this.notaAsignatura)
                .then(resp =>{
                    this.notaAsignaturas.push(resp.data)
                })
                .catch(e =>{
                    console.log(e)
                })
                this.mostrarformAsignatura=true
                this.mostrarformnota= false
            },
            postNota(){
                axios.post('trabajoautonomoarauz-production.up.railway.app/nota', this.notaNota)
                .then(resp =>{
                    this.notaNotas.push(resp.data)
                })
                .catch(e =>{
                    console.log(e)
                })
                this.mostrarformnota= true
                this.mostarformAlumno= false
            },
            notaEliminarAlumno( id ){
                axios.delete(`trabajoautonomoarauz-production.up.railway.app/alumno/${ id }`)
                .then(resp =>{
                    const index  = this.notaAlumnos.findIndex(i => i.id === resp.data.id)
                    this.notaAlumnos.splice(index, 1)
                })
            },
            notaeliminarAsignatura( id ){
                axios.delete(`trabajoautonomoarauz-production.up.railway.app/asignatura/${ id }`)
                .then(resp =>{
                    const index  = this.notaAsignaturas.findIndex(i => i.id === resp.data.id)
                    this.notaAsignaturas.splice(index, 1)
                })
            },
            notaeliminarnota( id ){
                axios.delete(`trabajoautonomoarauz-production.up.railway.app/nota/${ id }`)
                .then(resp =>{
                    const index  = this.notaNotas.findIndex(i => i.id === resp.data.id)
                    this.notaNotas.splice(index, 1)
                })
            },
            notaeditarAlumno( id ){
                axios.get(`trabajoautonomoarauz-production.up.railway.app/alumno/${ id }`)
                .then(resp =>{
                    this.notaAlumno.nombre= resp.data.nombre
                    this.notaAlumno.identificacion =resp.data.identificacion

                })
            },
            notaeditaraignatura( id ){
                axios.get(`trabajoautonomoarauz-production.up.railway.app/asignatura/${ id }`)
                .then(resp =>{
                    this.notaAsignatura.descripcion= resp.data.descripcion
                    this.notaAsignatura.nivel =resp.data.nivel
                    this.notaAsignatura.numerodecreditos =resp.data.numerodecreditos

                })
            },
            notaeditarNota( id ){
                axios.get(`trabajoautonomoarauz-production.up.railway.app/nota/${ id }`)
                .then(resp =>{
                    this.notaNota.estado= resp.data.estado
                    this.notaNota.nota =resp.data.nota
                    this.notaNota.observacion =resp.data.observacion
                    this.notaNota.parcial =resp.data.parcial

                })
            },
            editaralumno( item ){
                axios.put(`trabajoautonomoarauz-production.up.railway.app/alumno/${ item.id }`, item )
                .then(resp =>{
                    const index = this.notaAlumnos.findIndex(n=>n.id === resp.data.id)
                    this.notaAlumnos[index].nombre = resp.data.nombre
                    this.notaAlumnos[index].identificacion = resp.data.identificacion

                })
            },
            editarasignatura(item){
                axios.put(`trabajoautonomoarauz-production.up.railway.app/asignatura/${ item.id }`, item )
                .then(resp =>{
                    const index = this.notaAsignaturas.findIndex(n=>n.id === resp.data.id)
                    this.notaAsignaturas[index].descripcion = resp.data.descripcion
                    this.notaAsignaturas[index].nivel = resp.data.nivel
                    this.notaAsignaturas[index].numerodecreditos = resp.data.numerodecreditos

                })
            },
            editarnota(item){
                axios.put(`trabajoautonomoarauz-production.up.railway.app/nota/${ item.id }`, item )
                .then(resp =>{
                    const index = this.notaNotas.findIndex(n=>n.id === resp.data.id)
                    this.notaNotas[index].estado = resp.data.estado
                    this.notaNotas[index].nota = resp.data.nota
                    this.notaNotas[index].observacion = resp.data.observacion
                    this.notaNotas[index].parcial = resp.data.parcial

                })
            }

        }
    }
</script>

<style scoped>
table {
    width: 750px;
    border-collapse: collapse;
    margin: 50px auto;
    border-radius: 5px;
}

/* Zebra striping */
tr:nth-of-type(odd) {
    background: rgb(149, 152, 204);
}

th {
    background: #f30303;
    color: rgb(0, 0, 0);
    font-weight: bold;
    border-radius: 10px;

}

td,
th {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
    font-size: 18px;
}



</style>