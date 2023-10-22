import  {Card, Input, Button, Label} from "../componentes/ui"
import {useForm} from "react-hook-form"

function Login() {
    const {register, handleSubmit} = useForm();

    const onSubmit=handleSubmit((data) =>{
        console.log(data)
    });
    return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
        <Card>
            <h1 className="text-4xl font-bold my-2 text-center">Inicio de Sesion</h1>
            <form onSubmit={onSubmit}>
                <Label htmlFor="Correo">
                    Correo
                </Label>
                <Input type= "email" placeholder=" Correo"{...register ("email",{
                    required: true,
                })}
                />
                <Label htmlFor="password">
                    Contraseña
                </Label>
                <Input type= "password" placeholder=" Contraseña"{...register ("password",{
                    required: true,
                })} />
                <div className=" flex justify-center w-full mt-4">
                <Button>
                    Ingresar
                </Button>
                </div>
            </form>
        </Card>
    </div>
)
}

export default Login
