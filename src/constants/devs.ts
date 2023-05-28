import { StaticImageData } from 'next/image';
import gitOne from '../../public/images/git-octorick-one.png';
import gitTwo from '../../public/images/git-octorick-two.png';
import gitThree from '../../public/images/git.png';

export interface IDevsComp {
  image: StaticImageData;
  link: string;
  name: string;
}

export interface IDevsArray {
  devs: IDevsComp[];
}

export const devsArray: IDevsArray = {
  devs: [
    {
      image: gitOne,
      link: 'https://github.com/rishat-se',
      name: 'rishat-se',
    },
    {
      image: gitTwo,
      link: 'https://github.com/KohnoA',
      name: 'KohnoA',
    },
    {
      image: gitThree,
      link: 'https://github.com/Cibulya',
      name: 'Cibulya',
    },
  ],
};
