// Ce composant est utilisé pour afficher le champ de saisie de tâche.

import styles from './Footer.module.css'

export const Footer = ({ completedTask }) => {
  if (!completedTask) {
    return (
      <footer>
        <code className={styles.footer}>
          avec Tackyflow tu as éliminé {completedTask} tâche
          {completedTask > 1 ? 's' : ''} !
        </code>
      </footer>
    )
  }
  return null
}
