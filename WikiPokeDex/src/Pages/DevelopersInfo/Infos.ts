import { StyleSheet } from "react-native";
import Ana from '../../../assets/Ana.png';
import bruna from '../../../assets/Ana.png';
import gabriel from '../../../assets/bardasson.png';
import geovane from '../../../assets/Ana.png';
import gabry from '../../../assets/gabry.png';
import leticia from '../../../assets/leticia.png';



export const developers = [
  {
    name: 'Ana Matos',
    photo: Ana, 
    github: 'https://github.com/username',
    linkedin: 'https://www.linkedin.com/in/ana-luiza-maciell/',
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
    github: 'https://github.com/geovanerosa',
    linkedin: 'https://www.linkedin.com/in/geovane-rosa-8779391b6/',
  },
  {
    name: 'Gabriel Bardasson',
    photo: gabriel,
    github: 'https://github.com/bardasson10',
    linkedin: 'https://www.linkedin.com/in/gabriel-bardasson-49858b204/',
  },
  {
    name: 'Jõao Gabriel',
    photo: gabry,
    github: 'https://github.com/Joaogabrielgabry',
    linkedin: 'https://www.linkedin.com/in/joaogabrielgabry/',
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
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Substitua as propriedades de sombra aqui
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

