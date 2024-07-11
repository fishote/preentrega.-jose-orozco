import { CartWidget } from "./CartWidget";

export const NavBar =  () => (
 <>
  <h6>Muebles Herreria</h6>
    <ul>
        <li>
            <a href="#">mesas</a>
        </li>
        <li>
            <a href="#">repisas</a>
        </li>
        <li>
            <a href="#">muebles </a>
        </li>
    </ul>
    <CartWidget/>
  </>
);