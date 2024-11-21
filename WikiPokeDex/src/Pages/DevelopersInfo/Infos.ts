import { StyleSheet } from "react-native";
import ana from '../../assets/developers/ana.jpg';
import bruna from '../../assets/developers/bruna.jpg';
import gabriel from '../../assets/developers/gabriel.jpg';
import geovane from '../../assets/developers/geovane.jpg';
import gabry from '../../assets/developers/gabry.jpg';
import leticia from '../../assets/developers/leticia.jpg';


export const developers = [
  {
    name: 'Ana Matos',
    photo: ana, 
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
  },
  {
    name: 'Bruna Medeiros',
    photo: bruna,
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
  },
  {
    name: 'Geovane Rosa',
    photo: geovane,
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
  },
  {
    name: 'Gabriel Bardasson',
    photo: gabriel,
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
  },
  {
    name: 'Jõao Gabriel',
    photo: gabry,
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
  },
  {
    name: 'Leticia Peixoto',
    photo: leticia,
    github: 'https://github.com/leticiapzs',
    linkedin: 'https://linkedin.com/in/leticiapeixotol',
  },
];


export const InfoStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  icons: {
    flexDirection: 'row',
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
