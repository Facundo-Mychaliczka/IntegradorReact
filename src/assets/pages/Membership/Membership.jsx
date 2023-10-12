import React from 'react'
import { AboutUsGral, AboutUsMembership, AboutUswrapper, LevelsDescription, MembershipDescription, MembershipImage, MembershipItems, MembershipItemsWrapper, MembershipLevels, StyledA } from './MembershipStyles'

const AboutUs = () => {
  return (
    <AboutUswrapper>
        <AboutUsGral>
            <p>ENFOCANDONOS EN LA CALIDAD Y RENDIMIENDO DE NUESTROS PRODUCTOS HIGH PERFORMANCE, AORUS SE CONVIRTIÓ EN UNA MARCA LÍDER EN EL MERCADO GAMING.</p>
            <p>CONTAMOS CON GARANTÍA POR PRODUCTO AL COMPRAR EN LA WEB, JUNTO A ATENCIÓN PERSONALIZADA PARA QUE SIEMPRE ESTÉS EN CONTACTO DIRECTO CON NOSOTROS</p>
        </AboutUsGral>
        <AboutUsMembership>
            <h2>MEMBRESÍA</h2>
            <p>Aorus cuenta con un sistema de Membresía, en el que puedes aprovechar al máximo jugando juegos, ganando puntos, obteniendo recompensas, y más</p>
            <MembershipDescription>
                <h3>CÓMO FUNCIONA</h3>
                <MembershipItemsWrapper>
                    <MembershipItems>
                        <MembershipImage src="https://member.aorus.com/images/whyjoin/icon-account.svg" alt="" />
                        <h4>Crea una cuenta</h4>
                        <p>Regístrese con su dirección de correo electronico o sus cuentas de redes sociales.</p>
                    </MembershipItems>
                    <MembershipItems>
                        <MembershipImage src="https://member.aorus.com/images/whyjoin/icon-unlock.svg" alt="" />   
                        <h4>Desbloquear insignias</h4>
                        <p>Gana las insignias de logros completando las acciones en el sitio web de AORUS.</p>
                    </MembershipItems>
                    <MembershipItems>
                        <MembershipImage src="https://member.aorus.com/images/whyjoin/icon-get-rewarded.svg" alt="" />
                        <h4>Obtener recompensas</h4>
                        <p>Use puntos para canjear recompesas exclusivas.</p>
                    </MembershipItems>
                    <MembershipItems>
                        <MembershipImage src="https://member.aorus.com/images/whyjoin/icon-upgrade.svg" alt="" />
                        <h4>Mejorar</h4>
                        <p>Avance al siguiente nivel para obtener aún más beneficios.</p>
                    </MembershipItems>
                </MembershipItemsWrapper>
            </MembershipDescription>
            <MembershipLevels>
                    <h2>AFILIACIÓN</h2>
                    <LevelsDescription>
                         <p>La membresía GIGABYTE AORUS es gratuita. Simplemente registre una cuenta para unirse a nosotros, comenzará como miembro de BRONZE. Gana puntos interactuando con la comunidad en el sitio de AORUS; a veces incluso desbloquearás una insignia de logro. Invita a tus amigos, contribuye con contenido o registra tus productos GORABYTE AORUS también te ayudarán a recibir más puntos AORUS, que también son los puntos de experiencia (Exp.) Para subir de nivel.</p>
                         <p>Puede recibir nuestra invitación secreta a DIAMOND si contribuye mucho a esta comunidad.</p>
                    </LevelsDescription>
            </MembershipLevels>
        </AboutUsMembership>
        <h4>Por último, queremos darte la bnienvenida a AORUS, podés contactarnos a través del <StyledA href="https://esupport.gigabyte.com/Login/Index?ReturnUrl=%2f">SOPORTE ONLINE</StyledA>, Sporte técnico: (+5411) 6091-2350, nuestro E-MAIL: rma_argentina@gigabyte.com</h4>
    </AboutUswrapper>
  )
}

export default AboutUs