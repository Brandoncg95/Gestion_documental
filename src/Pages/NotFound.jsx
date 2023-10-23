import { Link } from "react-router-dom"
import { Card, CardBody } from "@material-tailwind/react";


function NotFound() {
    return (
        <div className="h-[calc(100vh-64px)] flex items-center justify-center flex-col">
            <Card>
            <CardBody>
                <h1 className="text-4xl font-bold my-2 text-center">Page Not Found</h1>
                <h3 className="text-2xl text-center">404</h3>
        <div className="text-2xl text-center">
            <Link  to="/"> Vuelve al Inicio</Link>
            </div>
            </CardBody>
            </Card>
        </div>
    )
}

export default NotFound
