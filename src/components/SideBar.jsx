import { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody, Navbar } from '@material-tailwind/react'
import ImgLogo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import NavBar from './Navbar'
export default function SideBar() {
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    )
  }
  const [open, setOpen] = useState(0)

  const [openSide, setOpenSide] = useState(true)

  const onClickStyle = () => {
    setOpenSide(!openSide)
    return <NavBar currentState={openSide} />
  }
  return (
    <div
      className={`fixed flex flex-col justify-between z-10 ${
        openSide ? 'lg:w-80 block' : 'w-0 hidden transition ease-in-out delay-150'
      } lg:w-80 lg:block translate-x-0 lg:static shadow-xl h-screen bg-[#151423]`}
    >
      <div className="flex flex-col gap-12 p-4 text-xs">
        <div className="flex justify-center">
          <img src={ImgLogo} alt={ImgLogo} />
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="flex gap-3 p-4 text-white transition ease-in-out rounded-lg hover:bg-white hover:text-black"
                onClick={onClickStyle}
              >
                <i className="fa-solid fa-house"></i>
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Empresa"
                className="flex gap-3 p-4 text-white transition ease-in-out rounded-lg hover:bg-white hover:text-black"
                onClick={onClickStyle}
              >
                <i className="fa-solid fa-building"></i>
                <span>Empresa</span>
              </Link>
            </li>

            {/*            <li>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="p-4 text-xs text-white transition ease-in-out border-b-0 rounded-lg hover:bg-white hover:text-black"
                >
                  <div className="flex gap-3 ">
                    <i class="fa-solid fa-list-check"></i>
                    <span> Comprobante de pago</span>
                  </div>
                </AccordionHeader>
                <AccordionBody className="bg-black rounded-lg">
                  <ul className="block">
                    <li>
                      <a
                        href="www"
                        className="flex px-5 py-. text-white transition ease-in-out hover:bg-white hover:text-black"
                      >
                        Emitir Factura
                      </a>
                    </li>
                    <li>
                      <a
                        href="www"
                        className="flex px-5 py-0 text-white transition ease-in-out hover:bg-white hover:text-black"
                      >
                        Emitir Boleta
                      </a>
                    </li>
                    <li>
                      <a
                        href="www"
                        className="flex px-5 py-0 text-white transition ease-in-out hover:bg-white hover:text-black"
                      >
                        Emitir Nota de Crédito
                      </a>
                    </li>
                    <li>
                      <a
                        href="www"
                        className="flex px-5 py-0 text-white transition ease-in-out hover:bg-white hover:text-black"
                      >
                        Emitir Nota de Débito
                      </a>
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>
            </li>
            <li>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="p-4 text-xs text-white transition ease-in-out border-b-0 rounded-lg hover:bg-white hover:text-black"
                >
                  <div className="flex gap-3 ">
                    <i class="fa-solid fa-ticket"></i>
                    <span>Guía de Remisión</span>
                  </div>
                </AccordionHeader>
                <AccordionBody className="bg-black rounded-lg">
                  <ul className="block">
                    <li>
                      <a
                        href="www"
                        className="flex px-5 py-. text-white transition ease-in-out hover:bg-white hover:text-black"
                      >
                        Crear Guía de Remisión
                      </a>
                    </li>
                    <li>
                      <a
                        href="www"
                        className="flex px-5 py-0 text-white transition ease-in-out hover:bg-white hover:text-black"
                      >
                        Listar Guías de Remisión
                      </a>
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>
            </li>
            <li>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="p-4 text-xs text-white transition ease-in-out border-b-0 rounded-lg hover:bg-white hover:text-black"
                >
                  <div className="flex gap-3 ">
                    <i class="fa-solid fa-chart-simple"></i>
                    <span>Reportes</span>
                  </div>
                </AccordionHeader>
                <AccordionBody className="bg-black rounded-lg">
                  <ul className="block">
                    <li>
                      <a
                        href="www"
                        className="flex px-5 py-. text-white transition ease-in-out hover:bg-white hover:text-black"
                      >
                        Reporte 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="www"
                        className="flex px-5 py-0 text-white transition ease-in-out hover:bg-white hover:text-black"
                      >
                        Reporte 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="www"
                        className="flex px-5 py-0 text-white transition ease-in-out hover:bg-white hover:text-black"
                      >
                        Reporte 3
                      </a>
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>
            </li>
            <li>
              <a
                href="www"
                className="flex gap-3 p-4 text-white transition ease-in-out rounded-lg hover:bg-white hover:text-black"
              >
                <i class="fa-solid fa-gift"></i>
                <span>Productos y Servicios</span>
              </a>
            </li>
            <li>
              <a
                href="www"
                className="flex gap-3 p-4 text-white transition ease-in-out rounded-lg hover:bg-white hover:text-black"
              >
                <i class="fa-solid fa-gear"></i>
                <span>Configuración</span>
              </a>
            </li>*/}
          </ul>
        </div>
      </div>
      <div className="flex justify-center mb-10 lg:hidden">
        <button
          className="flex items-center justify-center p-5 bg-black rounded-full shadow-2xl text-blue-gray-50"
          onClick={onClickStyle}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  )
}
