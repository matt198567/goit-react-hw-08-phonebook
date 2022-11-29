import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.link} to="/">
        <svg id="Home" x="0px" y="0px" viewBox="0 0 251.479 251.479">
          <g>
            <path
              d="M209.355,135.551c-4.143,0-7.5,3.358-7.5,7.5v76.109H49.634v-76.109c0-4.142-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5
		v83.609c0,4.142,3.357,7.5,7.5,7.5h167.221c4.143,0,7.5-3.358,7.5-7.5v-83.609C216.855,138.909,213.497,135.551,209.355,135.551z"
            />
            <path
              d="M249.282,137.748L131.035,19.515c-2.928-2.929-7.677-2.928-10.606,0L2.197,137.748c-2.929,2.929-2.929,7.678,0,10.606
		c1.465,1.464,3.385,2.197,5.304,2.197c1.92,0,3.839-0.732,5.304-2.197l112.929-112.93l112.943,112.93
		c2.928,2.929,7.677,2.928,10.607-0.001C252.211,145.425,252.211,140.676,249.282,137.748z"
            />
          </g>
        </svg>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
