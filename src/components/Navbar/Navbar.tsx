import { useTheme, Text, Spacer, Image, Link } from '@nextui-org/react';
import { ActiveLink } from './ActiveLink';
import { MenuItem } from './types';

const menuItems: MenuItem[] = [
  {
    text: 'Favorites',
    href: '/favorites',
  },
];

export const Navbar = () => {
  const { theme, isDark } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 24px',
        backgroundColor: theme?.colors.gray100.value,
      }}
      // className={`${styles["menu-container"]}`}
    >
      <Link href="/">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="App Icon" width={70} height={70} />

          <Text color="white" h2>
            P
          </Text>

          <Text color="white" h3>
            okémon
          </Text>
        </div>
      </Link>

      <Spacer css={{ flex: 1 }} />

      {menuItems.map((menuItem) => (
        <ActiveLink key={menuItem.href} href={menuItem.href} text={menuItem.text} />
      ))}
    </div>
  );
};
