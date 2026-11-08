import cachorros from '../assets/service-cachorros.webp'
import obediencia from '../assets/service-obediencia.webp'
import rehabilitacion from '../assets/service-rehabilitacion.webp'
import socializacion from '../assets/service-socializacion.webp'
import paseador from '../assets/service-paseador.webp'
import actividades from '../assets/service-actividades.webp'
import asesoramiento from '../assets/service-asesoramiento.webp'
import talleres from '../assets/service-talleres.webp'

const services = [
    {
        id: 'service-cachorros',
        name: 'Escuela de Cachorros',
        image: cachorros,
        body: [
            'Ven a nuestra escuela de cachorros a divertirte y a educarlo de forma lúdica. Te ayudaremos a entender mejor sus necesidades, a comunicarte de forma asertiva y a lograr armonía en la convivencia familiar.',
            'Nuestra escuela de cachorros es la mejor alternativa para aprender en un espacio seguro, limpio, sin peligros y para socializar con más cachorros con la misma energía.'
        ],
        callout: 'Enseñamos siempre en POSITIVO.',
        note: 'El curso para cachorros es PARTICULAR desde los 2 a los 6 meses.',
        whatsappMessage: 'Hola Arcanes! Quisiera más información sobre la Escuela de Cachorros.'
    },
    {
        id: 'service-obediencia',
        name: 'Curso de Obediencia y Comunicación',
        image: obediencia,
        body: 'Con este curso aprenderás a:',
        list: [
            'Comunicarte con tu perro de forma clara y efectiva',
            'Mantener la calma en situaciones de estrés',
            'Pasear sin tirones',
            'Conseguir que acuda a la primera llamada',
            'Disfrutar de espacios públicos con tranquilidad',
            'Relacionarse con otros perros y personas sin excitación ni conflictos'
        ],
        callout: 'Entrenamos siempre desde la calma y el respeto.',
        note: 'Curso disponible para perros a partir de los 6 meses.',
        whatsappMessage: 'Hola Arcanes! Quisiera más información sobre el Curso de Obediencia y Comunicación.'
    },
    {
        id: 'service-rehabilitacion',
        name: 'Rehabilitación del comportamiento',
        image: rehabilitacion,
        body: [
            'Hoy en día, por el gran estrés que se vive en las ciudades y por el ajetreado ritmo de vida que llevamos, los perros desarrollan varios problemas de comportamiento, además del aburrimiento, y otros ocasionados de manera inconsciente por sus propietarios o guías.',
            'Si estas pasando por alguna de estas situaciones, llámanos, podemos ayudarte:'
        ],
        list: [
            'Reactividad hacia otros perros o personas', 
            'Ansiedad, estrés, destrucción de objetos',
            'Ladrido u otros trastornos compulsivos',
            'Micciones dentro de casa',
            'Miedos, inseguridades, fobias',
            'Agresividad',
            'Problemas de convivencia con otros perros o niños',
            'Problemas para ir en coche',
            'Conductas antisociales'
        ],
        callout: 'Si observas alguna conducta de las mencionadas anteriormente: atención, no lo pases por alto. Pasa a la acción.',
        note: 'Contáctanos, te asesoraremos, y juntos, con un tratamiento de rehabilitación adecuado, encontraremos la solución.',
        whatsappMessage: 'Hola Arcanes! Quisiera más información sobre la Rehabilitación del Comportamiento.'
    },
    {
        id: 'service-socializacion',
        name: 'Jornadas de Socialización',
        image: socializacion,
        body: [
            'Los perros, como nosotros, son seres sociables. Necesitan interacción con otros perros, drenar energía y comunicarse de forma equilibrada con sus semejantes para sentirse plenos. Se sienten en armonía y felices compartiendo y disfrutando con otros perros.',
            'Un perro sociable y equilibrado es aquel que interactúa desde la alegría, el juego y el contacto, con buenas intenciones, naturalidad y calma, tanto con sus semejantes, como con las personas, los niños y otras especies en cualquier entorno.'
        ],
        callout: '',
        note: '',
        whatsappMessage: 'Hola Arcanes! Quisiera más información sobre las Jornadas de Socialización.'
    },
    {
        id: 'services-paseador',
        name: 'Paseos Caninos',
        image: paseador,
        body: [
            'Nuestro servicio de paseador canino consiste en ofrecer paseos y socialización con recogida y entrega en tu domicilio.',
            'El objetivo de esta actividad es cubrir las necesidades sociales y recreativas de nuestros perros, dándoles libertad, bienestar y conexión con la naturaleza. Lo que todos los perros necesitan pero que muchos propietarios no tienen tiempo de brindar. Si es así, no te preocupes porque tú y tu perro estáis de suerte: ARCANES está en tu ciudad!',
            'Estos paseos caninos son una estupenda manera de drenar la energía física y mental, entrenar la capacidad de espera, pasear de manera correcta con la correa, y mejorar el comportamiento con otros compañeros de especie.',
            'Dado que estos paseos se hacen en manada, los perros aprenden más rápido imitando el lenguaje corporal y la energía de los miembros que llevan más tiempo. A través de estas largas caminatas se eliminan durante unas horas la excitación, ansiedad, estrés y energía acumulada, repercutiendo así en su vida diaria. También pueden ayudar en algunos problemas de comportamiento derivados de la falta de ejercicio, estimulación mental e interacción social.'
        ],
        callout: '',
        note: '',
        whatsappMessage: 'Hola Arcanes! Quisiera más información sobre los Paseos Caninos.'
    },
    {
        id: 'service-actividades',
        name: 'Actividades Recreativas',
        image: actividades,
        body: 'Durante todo el año hacemos varias actividades de recreación canina para integrarnos, acercarnos y disfrutar siempre de la naturaleza:',
        list: [
            'Socialización y Obediencia Urbana',
            'Excursiones a la Naturaleza (playa y montaña)',
            'Prácticas grupales de obediencia',
            'Arcanes en tren',
            'SupCanClub',
        ],
        callout: '',
        note: '',
        whatsappMessage: 'Hola Arcanes! Quisiera más información sobre las Actividades Recreativas.'
    },
    {
        id: 'service-asesoramiento',
        name: 'Asesoramiento',
        image: asesoramiento,
        body: 'Es frecuente en nuestros días que a la hora de elegir un perro cachorro, joven o adulto, nos dejemos influir por la apariencia y el aspecto físico, siendo muy común la frase: “lo vi y me enamoré”. Desde Arcanes entendemos esto y sabemos que es normal que ocurra. Pero hay ocasiones en las que por motivos de tiempo, trabajo o salud, no estamos preparados para tener cualquier tipo de perro. Por eso, por el bien del perro y del propietario, es ideal elegir en base a:',
        list: [
            'Nivel de energía',
            'Temperamento',
            'Desarrollo de instintos',
            'Tamaño',
            'Necesidades físicas',
        ],
        callout: 'De acuerdo con tu estilo de vida y respetando las necesidades mutuas se formará un vínculo sano y equilibrado para siempre.',
        note: 'En Arcanes queremos ayudarte a que la relación con tu perro sea única desde el primer momento, y que estéis hechos el uno para el otro. Contáctanos y te asesoramos y acompañamos desde que piensas en él por primera vez.',
        whatsappMessage: 'Hola Arcanes! Quisiera pedir asesoramiento sobre...'
    },
    {
        id: 'service-talleres',
        name: 'Charlas y Talleres',
        image: talleres,
        body: '¡Mantente informado/a de cuándo será nuestro próximo encuentro (presencial o virtual) sobre los temas que más te interesan de tu peludo!',
        callout: '',
        note: '',
        whatsappMessage: 'Hola Arcanes! Quisiera saber cuándo es vuestra siguiente charla o taller.'
    }
]

export default services