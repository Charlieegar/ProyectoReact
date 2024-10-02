//EL LAYOUT ES COMO EL PROTOTIPO DE MI PAGINA, AQUI ORGANIZAMOS LA FORMA QUE VA A TENER

import { Footer } from "../components/Footer/Footer";


const MainLayout =({children}) => {
    return (
        <div>
            {/* LAS PAGINAS WEB SUELEN TENER EL MISMO NAVBAR Y FOOTER */}
            
            {/*LOS COMPONENTES DINAMICOS IRIAN DE AQUI*/}
            {children}
            {/*HASTA AQUI*/}
            <Footer/>
        </div>
    );
};

export default MainLayout;