const style = {
  list: `flex space-x-10`,
  element: `font-semibold text-gray-600 transition-all hover:text-black dark:text-gray-300 hover:dark:text-white`,
}

const NavMenus = ({ menus }) => {
  return (
    <nav>
      <ul className={style.list}>
        {menus.map((menu, index) => (
          <li key={index}>
            <a href={menu.href} className={style.element}>
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenus
