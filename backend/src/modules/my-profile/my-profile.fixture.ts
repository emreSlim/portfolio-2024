import { MyProfileFullDTO } from 'src/dtos';

export const myProfile: MyProfileFullDTO = {
  nickName: 'Emre',
  firstName: 'Imran',
  lastName: 'Qureshi',
  email: 'emraanqureshi9@gmail.com',
  professionalProfiles: [
    {
      platformName: 'LinkedIn',
      url: 'https://www.linkedin.com/in/imran-qureshi-92b822154/',
    },
    {
      url: 'https://github.com/emreSlim',
      platformName: 'GitHub',
    },
    {
      platformName: 'LeetCode',
      url: 'https://leetcode.com/u/emreSlim/',
    },
  ],
  phone: '+91 7532 866 857',
  locations: [
    {
      city: 'Noida',
      state: 'Uttar Pradesh',
      country: 'India',
      locationType: 'current',
    },
    {
      city: 'Noida',
      state: 'Uttar Pradesh',
      country: 'India',
      locationType: 'permanent',
    },
  ],
  introduction: `I am a full stack developer. I program and design websites, web apps and native apps using my deep understanding in javaScript and it's libraries React-JS, React-Native, jQuery, bootstrap etc..`,
  about:
    'Hi, my name is Imran and I am from Ghaziabad (UP) India. I have been learning frontend web developing , cross platform app developing , functional and object-oriented programming for last 1+ years and I am so passionate about how I can picture, program and write code and make website and app according to user-story. I always have been curious about how things work and how I can manipulate those processes according to my curiosity. For more details about myself, please check out my resume below.',
} as MyProfileFullDTO;
