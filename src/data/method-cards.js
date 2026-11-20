import education from '../assets/education.svg';
import obedience from '../assets/hand.svg';
import psychology from '../assets/discussion.svg';
import emotionalContact from '../assets/heart-plus.svg';
import socialization from '../assets/arrow-down-up.svg';

const methodCards = [
  {
    id: education,
    title: 'Educación',
    description: 'Transmitir conocimientos, formas de actuar, costumbres y rutinas que generan hábitos saludables para el perro y su guía.',
    image:{ education }
  },
  {
    id: obedience,
    title: 'Obediencia',
    description: 'Disciplina y gestión del impulso, a través de una excelente comunicación con tu perro para lograr el entendimiento mutuo desde la calma para que él tenga el control.',
    image: { obedience }
    },
    {
    id: psychology,
    title: 'Psicología',
    description: 'Es una terapia muy útil para tratamientos de rehabilitación del comportamiento y desequilibrios emocionales como: hiperapego, miedos, traumas, ansiedad, hiperactividad, estrés, agresión, etc.',
    image: { psychology }
  },
  {
    id: emotionalContact,
    title: 'Contacto Emocional',
    description: 'Permite el contacto, la comunicación y la expresión. Ayuda a los perros a socializarse, integrarse y moverse con mas libertad y naturalidad.',
    image: { emotionalContact }
  },
  {
    id: socialization,
    title: 'Socialización',
    description: 'Los perros, como nosotros, son seres sociables, necesitan interacción con otros perros para sentirse plenos, drenar energía y comunicarse de forma equilibrada.',
    image: { socialization }
  }
];

export default methodCards;