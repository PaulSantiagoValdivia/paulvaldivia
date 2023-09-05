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
      <h2 className={styles.aboutMeTitle}>
        SOBRE MI
      </h2>
      <p className={styles.description}> Soy Santiago, un desarrollador de software con sólidos fundamentos en ingeniería en sistemas y una formación autodidacta. Completé dos años de la universidad en ingeniería en sistemas, donde comenzó mi pasión por la programación. He dedicado gran parte de mi tiempo a aprender de forma independiente a través de cursos en línea y otros recursos. Adquirí experiencia tanto en el desarrollo frontend como en el backend, aunque me siento particularmente atraído por este último. He desarrollado aplicaciones web utilizando tecnologías como JavaScript, Node.js y bases de datos SQL como PostgreSQL. Mi enfoque principal se centra en construir soluciones eficientes, escalables y seguras, basadas en una sólida comprensión de la lógica de programación. Me entusiasma la oportunidad de aplicar mis habilidades y conocimientos en proyectos desafiantes dentro del campo del desarrollo de software.</p>
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
          <button className={styles.linkedin} ><Linkedin/> Escríbeme en LinkedIn</button>
        <button className={styles.github} ><Github /> Visita mi github</button>

        </div>
</>
  );
}
