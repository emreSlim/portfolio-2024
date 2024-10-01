import axios, { AxiosResponse } from 'axios';
import { Experience, MyProfile, Project, Skill } from 'src/interfaces';

axios.defaults.baseURL = 'http://localhost:3001/';

export class Service {
  static getMyProfile = async () => {
    return await axios.get<any, AxiosResponse<MyProfile>>('/my-profile', {
      params: {
        profileId: 1,
      },
    });
  };

  static getExperience = async () => {
    return await axios.get<any, AxiosResponse<Experience>>('/experience', {});
  };

  static getProjects = async () => {
    return await axios.get<any, AxiosResponse<Project>>('/projects', {});
  };

  static getSkills = async () => {
    return await axios.get<any, AxiosResponse<Skill>>('/skills', {});
  };
}
