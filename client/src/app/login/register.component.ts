import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators } from "@angular/forms";
// import * as swal  from 'sweetalert'
// import { UsuariosService } from '../services/service.index'
import { Usuario } from "../models/usuario.model";
@Component({
    selector:'app-register',
    templateUrl:'./register.component.html',
    styleUrls:['./login.component.css']
})

export class RegisterComponent implements OnInit{
    
    // forma: FormGroup

    // constructor(public _usuariosService:UsuariosService){

    // }
    constructor(){

    }

    // sonIguales(campo1:string, campo2:string){
    //     return (group: FormGroup) => {

    //         let pass1 = group.controls[campo1].value
    //         let pass2 = group.controls[campo2].value

    //         if(pass1 === pass2){
    //             return null
    //         }

    //         return {
    //             sonIguales:true
    //         }
    //     }
    // }

    // Si no se cumple debo retornar un error
    // Si pasa la validación debo retornar un null

    ngOnInit(): void {
        // this.forma = new FormGroup({
        //     nombre: new FormControl(null, Validators.required),
        //     correo: new FormControl(null, [Validators.required, Validators.email]),
        //     password: new FormControl(null, Validators.required),
        //     password2: new FormControl(null, Validators.required),
        //     condiciones: new FormControl(false),
        // }, {validators: this.sonIguales('password', 'password2') });
    }

    registrarUsuario(){
        // if(this.forma.invalid){
        //     return
        // }
        // if(!this.forma.value.condiciones){
        //     // swal('Importante', 'Debe aceptar los terminos y condiciones', 'warning')
        //     return
        // }

        // let usuario = new Usuario(this.forma.value.nombre, this.forma.value.correo, this.forma.value.password)
        // // this._usuariosService.crearUsuario(usuario).subscribe( data => {
        // //    console.log(data) 
        // // })
    }
}