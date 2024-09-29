import { Injectable } from '@nestjs/common';
import { myProfile } from './my-profile.fixture';
import { Repository } from 'typeorm';
import { Location, MyProfile, ProfessionalProfile } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { MyProfileDTO } from 'src/dtos';

@Injectable()
export class MyProfileService {
  constructor(
    @InjectRepository(MyProfile)
    private readonly myProfileRepo: Repository<MyProfile>,
    @InjectRepository(Location)
    private readonly locationRepo: Repository<Location>,
    @InjectRepository(ProfessionalProfile)
    private readonly professionalProfileRepo: Repository<ProfessionalProfile>
  ) {}

  getMyProfile = (): MyProfileDTO => myProfile;
  addMyProfile = async (profile: MyProfileDTO) => {
    const myProfile: MyProfile = {
      first_name: profile.firstName,
      last_name: profile.lastName,
      nick_name: profile.nickName,
      email: profile.email,
      phone: profile.phone,
      about: profile.about,
      introduction: profile.introduction,
    };

    const savedMyProfile = await this.myProfileRepo.save(myProfile);

    const locations: Location[] = profile.locations.map((lo) => {
      return {
        city: lo.city,
        country: lo.country,
        state: lo.state,
        location_type: lo.locationType,
        my_profile_id: savedMyProfile.my_profile_id,
      };
    });

    await this.locationRepo.save(locations);

    const proProfiles: ProfessionalProfile[] = profile.professionalProfiles.map(
      (pp) => {
        return {
          my_profile_id: savedMyProfile.my_profile_id,
          platform_name: pp.platformName,
          url: pp.url,
        };
      }
    );

    await this.professionalProfileRepo.save(proProfiles);

    return savedMyProfile;
  };
  updateMyProfile = () => {};
}
