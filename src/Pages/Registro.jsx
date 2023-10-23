import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
    } from "@material-tailwind/react";
import {Input} from "../componentes/ui"
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
    <div className="h-[calc(100vh-10rem)] mt-20 flex items-center justify-center">
    <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
        <CardHeader 
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center">

        <Typography variant="h3" color="white">
            Registro Usuario
        </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-8">
            
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
                errors.contraseña && <p className=" text-red-400"> La contraseña es requerida</p>
            }
        
        <div className="flex justify-center w-full mt-4">
            <Button type="submit" color= "light-blue" ripple={true}>
                Registrar
            </Button>
            </div>
        </form>
        </CardBody>
    </Card>
    </div>
);
}

export default Registro;