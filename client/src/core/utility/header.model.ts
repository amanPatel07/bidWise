export interface HeaderProps {
  opened: boolean;
  toggle: () => void;
  toggleTheme: () => void;
  computed: 'light' | 'dark';
}