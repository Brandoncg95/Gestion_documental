import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
    Checkbox
    } from "@material-tailwind/react";
import  { Input, Label} from "../componentes/ui"
import {useForm} from "react-hook-form"

function Login() {
    const {register, handleSubmit} = useForm();

    const onSubmit=handleSubmit((data) =>{
        console.log(data)
    });
    return (
        <div className="h-[calc(100vh-10rem)] mt-20 flex items-center justify-center">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader 
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center">
    
            <Typography variant="h3" color="white">
                Inicio de sesión
            </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-8">
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
                <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                </div>
                <div className=" flex justify-center w-full mt-4">
                <Button type="submit" color= "light-blue" ripple={true}>
                    Ingresar
                </Button>
                </div>
            </form>
            </CardBody>
        </Card>
    </div>
)
}

export default Login
