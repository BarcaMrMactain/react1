import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <section className="Container bg-purple-600">
        {/* header */}
        <Header />

        <main>
            {/* pages */}
            <Outlet />
        </main>

        {/* footer */}
        <Footer />

    </section>
  )
}

export default Layout