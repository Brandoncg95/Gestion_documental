import Input from "../componentes/ui/Input"

function Registro() {
return (
    <div>
    <h3 className="text-2xl font-bold">Registro</h3>

    <form>
        <Input placeholder="Registra nombre" />
        <Input type="correo" placeholder="Registra correo" />
        <Input type="celular" placeholder="Registra celular" />
        <Input type="dependencia" placeholder="Escribe dependencia" />
        <Input type="dependencia" placeholder="Escribe rol" />
        <Input type="contrasena" placeholder="Crea tu contraseña" />
        
        <button>
            Registrar
        </button>


    </form>
    </div>
    )
}

export default Registro
