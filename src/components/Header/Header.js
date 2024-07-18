import React from 'react'
import styles from './Header.module.css'
import resumeSvg from '../../assets/resume.svg'
const Header = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
    <div className={styles.right}>
            <img src={resumeSvg} alt='Resume'/>
            </div> 
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stand out!
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>

          <p>(You can customize your resume. By choosing the right color for you and by drag and drop your section)</p>
        </div>
          


   </div>
   </div>
  )
}

export default Header