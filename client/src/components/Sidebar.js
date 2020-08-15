import React, { useContext } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartLine,
    faCalendarDay,
    faBook,
    faLongArrowAltLeft,
    faCog,
  } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
//import { AuthContext } from './../context/AuthContext'

const navItems = [
  {
    label: 'Dashboard',
    path: 'dashboard',
    icon: faChartLine,
  },
  {
    label: 'Events',
    path: 'events',
    icon: faCalendarDay,
  },
  {
    label: 'Settings',
    path: 'settings',
    icon: faCog,
  },
  {
    label: 'Bookings',
    path: 'bookings',
    icon: faBook,
  },
  {
    label: 'Sign Out',
    path: 'signOut',
    icon: faLongArrowAltLeft,
  }
];

const NavItem = ({ navItem }) => {
  const location = useLocation();
  const isCurrentRoute =
    location.pathname === `/${navItem.path}`;
  const classes = classNames({
    'px-2 sm:px-6 justify-center sm:justify-start py-3 rounded-full flex': true,
    'text-white hover:text-blue-500 transform hover:translate-x-1 transition ease-in-out duration-100': !isCurrentRoute,
    'bg-white text-blue-500 shadow-sm': isCurrentRoute
  });
  return (
    <Link to={navItem.path} className={classes}>
      <div className="flex items-center">
        <div className="mr-0 sm:mr-4">
          <FontAwesomeIcon icon={navItem.icon} />
        </div>
        <span className="hidden sm:block">
          {navItem.label}
        </span>
      </div>
    </Link>
  );
};

const NavItemContainer = ({ children }) => (
  <div>{children}</div>
);

const Sidebar = () => {
//   const authContext = useContext(AuthContext);
  return (
    <section className="h-screen">
      <div className="w-16 sm:w-24 m-auto">
        <img src='' rel="logo" alt="Logo" />
      </div>
      <div className="mt-20">
        {navItems.map((navItem, i) => (
          <>
            <NavItemContainer key={i}>
                <NavItem navItem={navItem} />
            </NavItemContainer>
          </>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
