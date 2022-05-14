import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'

export function MainLayout({ children, title = 'Учет студентов' }) {
  let navigate = useNavigate()
  let location = useLocation()
  return (
    <>
      {/* <Head>
        <title>{title}</title>
      </Head> */}
      <div className="wrapper">
        <header>
          <h2 className="header__title">Учет студентов</h2>
          <Link to="/">
            <div className="header__button">На главную</div>
          </Link>
        </header>
        <main>{children}</main>
        <footer>
          <div
            className="header__button header__button_back"
            onClick={location.pathname === '/' ? undefined : () => navigate(-1)}
          >
            Назад
          </div>
        </footer>
      </div>
    </>
  )
}
