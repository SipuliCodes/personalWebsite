import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './NavigationBar.css'

const NavigationBar = () => {
  const navigate = useNavigate()

  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [navBarClass, setNavBarClass] = useState('')
  const [activeButton, setActiveButton] = useState('main')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop

      if (currentScrollTop > lastScrollTop) {
        setNavBarClass('hidden')
      } else {
        setNavBarClass('visible')
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  const linkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveButton(event.currentTarget.id)
    navigate(`/${event.currentTarget.id}`)
  }
  return (
    <div className={`navigation-bar ${navBarClass}`}>
      <button className={`navigation-bar-item ${activeButton === 'main' ? 'active' : ''}`} id='main' onClick={linkClick}>Main</button>
      <button className={`navigation-bar-item ${activeButton === 'career' ? 'active' : ''}`} id='career' onClick={linkClick}>Career</button>
      <button className={`navigation-bar-item ${activeButton === 'education' ? 'active' : ''}`} id='education' onClick={linkClick}>Education</button>
      <button className={`navigation-bar-item ${activeButton === 'achievements' ? 'active' : ''}`} id='achievements' onClick={linkClick}>Achievements</button>
      <button className={`navigation-bar-item ${activeButton === 'about' ? 'active' : ''}`} id='about' onClick={linkClick}>About</button>
    </div>
  )
}

export default NavigationBar