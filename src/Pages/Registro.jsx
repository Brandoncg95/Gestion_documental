import {Button,Card,Input} from "../componentes/ui"
import {useForm} from "react-hook-form"

function Registro() {
    const {register, 
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit= handleSubmit(data => {
        console.log(data)
    })
return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
        <Card>
    <h3 className="text-2xl font-bold text-center">Registro Usuario</h3>
    <form onSubmit={onSubmit}>

        <Input placeholder="Registra nombre" {...register("nombre", {
            required: true
            })}/>
            {
                errors.nombre && <p className=" text-red-400"> Nombre es requerido</p>
            }
        <Input type="email" placeholder="Registra correo" {...register("email", {
            required: true
            })}/>
            {
                errors.email && <p className=" text-red-400"> El correo es requerido</p>
            }
        <Input type="tel" placeholder="Registra celular" {...register("tel",  {
            required: true
            })} />
            {
                errors.tel && <p className=" text-red-400"> El celular es requerido</p>
            }
        <Input type="text" placeholder="Escribe dependencia" {...register("dependencia", {
            required: true
            })} />
            {
                errors.dependencia && <p className=" text-red-400"> La dependencia es requerida</p>
            }
        <Input type="text" placeholder="Escribe rol" {...register("rol",  {
            required: true
            })} />
            {
                errors.rol && <p className=" text-red-400"> El rol es requerido</p>
            }
        <Input type="password" placeholder="Crea contraseña" {...register("contraseña",  {
            required: true
            })}/>
            {
                errors.password && <p className=" text-red-400"> La contraseña es requerida</p>
            }
        
        <div className=" flex justify-center w-full mt-4">
        <Button>Registrar</Button>  
        </div>
    </form>
    </Card>
    </div>
    )
}

export default Registro
