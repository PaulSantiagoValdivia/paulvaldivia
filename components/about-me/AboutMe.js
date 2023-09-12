import styles from './aboutme.module.css';
import Github from '@/assets/Github';
import Linkedin from '@/assets/Linkedin';
export default function AboutMe() {

  const elementos = [
    'Supabase',
    'HTML',
    'CSS',
    'Javascript',
    'React.js',
    'Next.js',
    'Postman',
    'PostgreSQL',
    'Figma',
    'Github'
  ];

  const mitadElementos = Math.ceil(elementos.length / 2);
  const elementosPrimerFila = elementos.slice(0, mitadElementos);
  const elementosSegundaFila = elementos.slice(mitadElementos);

  return (
    <>
      <div className={styles.aboutMe}>
        <div className={styles.container}>

        </div>
        <h2 className={styles.aboutMeTitle}>
          SOBRE MI
        </h2>
        <p className={styles.description}> Soy un programador junior con una pasión por el desarrollo web. He adquirido habilidades sólidas en la creación de sitios web. Impulsado por la curiosidad, me gusta explorar y dominar las tecnologías emergentes.
      <br/>Siempre ansioso por enfrentar nuevos desafíos y adquirir nuevos conocimientos para mantenerme a la par con esta industria en constante expansión.</p>
        <h1 className={styles.subtitle}>MI STACK FAVORITO</h1>
        <div className={styles.list}>
          <ul >
            {elementosPrimerFila.map((elemento, index) => (
              <li key={index}>{elemento}</li>
            ))}
          </ul>
          <ul>
            {elementosSegundaFila.map((elemento, index) => (
              <li key={index}>{elemento}</li>
            ))}
          </ul>

        </div>
      </div>
      <div className={styles.divButtons}>
        <button className={styles.linkedin} onClick={() => window.open('https://www.linkedin.com/in/santiagovaldiviadev/', '_blank')}><Linkedin /> Escríbeme en LinkedIn</button>
        <button className={styles.github} onClick={() => window.open('https://github.com/PaulSantiagoValdivia', '_blank')}><Github /> Visita mi github</button>
      </div>
    </>
  );
}
