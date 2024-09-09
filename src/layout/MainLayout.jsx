//EL LAYOUT ES COMO EL PROTOTIPO DE MI PAGINA, AQUI ORGANIZAMOS LA FORMA QUE VA A TENER


const MainLayout =({children}) => {
    return (
        <div>
            {/* LAS PAGINAS WEB SUELEN TENER EL MISMO NAVBAR Y FOOTER */}
            
            {/*LOS COMPONENTES DINAMICOS IRIAN DE AQUI*/}
            {children}
            {/*HASTA AQUI*/}
            <div>Footer a hacer despues</div>
        </div>
    );
};

export default MainLayout;