import reactLogo from '../../assets/react.svg'
import styles from './Header.module.css'
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={reactLogo} alt="logo" width={50} height={50} />
      </div>
      <div>
        <h1>TaskyFlow</h1>
        <div className="color-gray">
          <code>Éliminer le chaos suiver le flow</code>
        </div>
      </div>
      <code className="color-primary">v.0.0.1</code>
    </div>
  )
}
