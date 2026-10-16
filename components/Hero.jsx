const Hero = () => {
    return (
        <section className="bg-bg-main">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-semibold text-center font-heading max-w-5xl mx-auto">Proporcionar <span className="text-h1-emphasis">comprensión</span>, <span className="text-h1-emphasis">educación</span> y una buena <span className="text-h1-emphasis">comunicación</span> a tu perro es tan importante y necesario como <span className="text-h1-emphasis">darle amor</span>.</h1>
                <p className="font-body text-text-main max-w-4xl text-center text-4xl mx-auto font-normal">En Arcanes educamos, entrenamos y rehabilitamos el comportamiento para mejorar la relación entre perros y personas con pasión, respeto y mucho cariño.</p>
                <div className="flex">
                    <button className="bg-accent-primary border-accent-hover border text-text-main font-medium text-3xl font-body">
                        <a href="">Pide cita</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;