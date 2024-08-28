import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './NavigationBar.css'

const NavigationBar = () => {
  const navigate = useNavigate()

  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [navBarClass, setNavBarClass] = useState('')

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
    navigate(`/${event.currentTarget.id}`)
  }
  return (
    <div className={`navigation-bar ${navBarClass}`}>
        <button className='navigation-bar-item' id='main' onClick={linkClick}>Main</button>
        <button className='navigation-bar-item' id='career' onClick={linkClick}>Career</button>
      </div>
  )
}

export default NavigationBar