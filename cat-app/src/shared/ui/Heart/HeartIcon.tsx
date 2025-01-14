import { useState } from 'react'
import { Heart } from 'lucide-react'
import styles from './HeartIcon.module.css'

export default function HeartIcon() {
  const [isActive, setIsActive] = useState(false)

  return (
    <button
      className={`${styles.heartButton} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <Heart className={styles.heartIcon} />
    </button>
  )
}

