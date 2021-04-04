import { useContext } from 'react';
import APIContext from '../context/APIContext';
import dataResponse from './mockAPI';
import states from './states';

const baseUrl = 'https://findev-backend-serudo.herokuapp.com/candidates';
// const baseUrl = 'http://localhost:3002/candidates/';

const samples = [
  {
    id: 119478,
    city: 'Osasco - SP',
    experience: '3-4 years',
    technologies: [
      {
        name: 'JavaScript',
        is_main_tech: true,
      },
      {
        name: 'React',
        is_main_tech: false,
      },
      {
        name: 'TypeScript',
        is_main_tech: false,
      },
      {
        name: 'CSS3',
        is_main_tech: true,
      },
      {
        name: 'HTML5',
        is_main_tech: false,
      },
      {
        name: 'Angular 8',
        is_main_tech: false,
      },
      {
        name: 'Node.js',
        is_main_tech: false,
      },
    ],
  },
  {
    id: 33653,
    city: 'São Paulo - SP',
    experience: '5-6 years',
    technologies: [
      {
        name: 'C++',
        is_main_tech: false,
      },
      {
        name: 'Python',
        is_main_tech: true,
      },
      {
        name: 'Data science',
        is_main_tech: true,
      },
      {
        name: 'MySQL',
        is_main_tech: false,
      },
    ],
  },
  {
    id: 115789,
    city: 'Campinas - SP',
    experience: '12+ years',
    technologies: [
      {
        name: 'Data science',
        is_main_tech: true,
      },
      {
        name: 'MySQL',
        is_main_tech: false,
      },
      {
        name: 'Python',
        is_main_tech: false,
      },
      {
        name: 'MATLAB',
        is_main_tech: false,
      },
      {
        name: 'Machine learning',
        is_main_tech: false,
      },
      {
        name: 'C++',
        is_main_tech: false,
      },
      {
        name: ' Fortran',
        is_main_tech: false,
      },
      {
        name: 'Visual Basic',
        is_main_tech: false,
      },
    ],
  },
  {
    id: 99046,
    city: 'Goiânia - GO',
    experience: '10-11 years',
    technologies: [
      {
        name: 'JavaScript',
        is_main_tech: true,
      },
      {
        name: 'React',
        is_main_tech: false,
      },
      {
        name: 'Node.js',
        is_main_tech: false,
      },
      {
        name: 'ASP.NET Core',
        is_main_tech: false,
      },
      {
        name: 'C#',
        is_main_tech: false,
      },
      {
        name: 'React Native',
        is_main_tech: false,
      },
      {
        name: 'SCRUM',
        is_main_tech: false,
      },
      {
        name: 'Git',
        is_main_tech: false,
      },
      {
        name: 'Web Services',
        is_main_tech: false,
      },
      {
        name: 'RESTful',
        is_main_tech: false,
      },
      {
        name: 'AngularJS',
        is_main_tech: false,
      },
      {
        name: 'MySQL',
        is_main_tech: false,
      },
      {
        name: 'SQL Server',
        is_main_tech: false,
      },
      {
        name: 'MongoDB',
        is_main_tech: false,
      },
      {
        name: 'SqLite',
        is_main_tech: false,
      },
    ],
  },
  {
    id: 87440,
    city: 'Recife - PE',
    experience: '9-10 years',
    technologies: [
      {
        name: 'Spark',
        is_main_tech: false,
      },
      {
        name: 'MongoDB',
        is_main_tech: false,
      },
      {
        name: 'ORACLE',
        is_main_tech: false,
      },
      {
        name: 'PL/SQL',
        is_main_tech: true,
      },
      {
        name: 'Java',
        is_main_tech: false,
      },
      {
        name: 'BigData',
        is_main_tech: false,
      },
      {
        name: 'Python',
        is_main_tech: true,
      },
      {
        name: 'Shell Script',
        is_main_tech: false,
      },
      {
        name: 'Hive',
        is_main_tech: false,
      },
      {
        name: 'Hadoop',
        is_main_tech: false,
      },
    ],
  },
];

const getAllCandidates = async ({
  page, city, stack, initialYear, finalYear, type,
}) => {
  // http://localhost:3002/candidates/match/?page=1&city=Recife&stack&initialYear&finalYear&type=entre
  const url = `${baseUrl}/match/?page=${page}&city=${city}&stack=${stack}&initialYear=${initialYear}&finalYear=${finalYear}&type=${type}`;
  let request;
  try {
    request = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    const response = await request.json();

    return {
      status: states.SUCCESS,
      data: response,
    };
  } catch (error) {
    return {
      status: states.ERROR,
      data: samples,
    };
  }
};

const getFilteredACandidates = async () => {
  const { candidates } = dataResponse;

  return candidates.slice(5, 10);
};

export { getAllCandidates, getFilteredACandidates };
