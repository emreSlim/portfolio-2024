import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Location, MyProfile, ProfessionalProfile } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { GetMyProfile } from './my-profile.dto';
import { MyProfileFullDTO, MyProfileFullDTOWithId } from 'src/dtos';

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

  mapResProfileFromEntity(
    mp: MyProfile,
    lc: Location[],
    pp: ProfessionalProfile[]
  ): MyProfileFullDTOWithId {
    return {
      firstName: mp.first_name,
      lastName: mp.last_name,
      nickName: mp.nick_name,
      about: mp.about,
      email: mp.email,
      introduction: mp.introduction,
      myProfileId: mp.my_profile_id,
      phone: mp.phone,
      professionalProfiles: pp.map((p) => {
        return {
          platformName: p.platform_name,
          professionalProfileId: p.professional_profile_id,
          url: p.url,
        };
      }),
      locations: lc.map((l) => {
        return {
          locationType: l.location_type,
          city: l.city,
          country: l.country,
          locationId: l.location_id,
          state: l.state,
        };
      }),
    };
  }

  async getMyProfile(
    query: GetMyProfile.Query
  ): Promise<MyProfileFullDTOWithId> {
    const mp = await this.myProfileRepo.findOneBy({
      my_profile_id: query.profileId,
    });
    if (mp == null) {
      throw new HttpException('Profile not found', HttpStatus.BAD_REQUEST);
    }

    const lc = await this.locationRepo.findBy({
      my_profile_id: query.profileId,
    });
    const pp = await this.professionalProfileRepo.findBy({
      my_profile_id: query.profileId,
    });

    return this.mapResProfileFromEntity(mp, lc, pp);
  }

  async addMyProfile(body: MyProfileFullDTO): Promise<MyProfileFullDTOWithId> {
    const myProfile: MyProfile = {
      first_name: body.firstName,
      last_name: body.lastName,
      nick_name: body.nickName,
      email: body.email,
      phone: body.phone,
      about: body.about,
      introduction: body.introduction,
    };

    const mp = await this.myProfileRepo.save(myProfile);

    const locations: Location[] = body.locations.map((lo) => {
      return {
        my_profile_id: mp.my_profile_id,
        city: lo.city,
        country: lo.country,
        state: lo.state,
        location_type: lo.locationType,
      };
    });

    const lc = await this.locationRepo.save(locations);

    const proProfiles: ProfessionalProfile[] = body.professionalProfiles.map(
      (pp) => {
        return {
          my_profile_id: mp.my_profile_id,
          platform_name: pp.platformName,
          url: pp.url,
        };
      }
    );

    const pp = await this.professionalProfileRepo.save(proProfiles);

    return this.mapResProfileFromEntity(mp, lc, pp);
  }
  async updateMyProfile(body: MyProfileFullDTOWithId) {
    const myProfile: MyProfile = {
      my_profile_id: body.myProfileId,
      first_name: body.firstName,
      last_name: body.lastName,
      nick_name: body.nickName,
      email: body.email,
      phone: body.phone,
      about: body.about,
      introduction: body.introduction,
    };
    const mp = await this.myProfileRepo.save(myProfile);

    const locations: Location[] = body.locations.map((lo) => {
      return {
        my_profile_id: mp.my_profile_id,
        location_id: lo.locationId,
        city: lo.city,
        country: lo.country,
        state: lo.state,
        location_type: lo.locationType,
      };
    });

    const lc = await this.locationRepo.save(locations);

    const proProfiles: ProfessionalProfile[] = body.professionalProfiles.map(
      (pp) => {
        return {
          my_profile_id: mp.my_profile_id,
          professional_profile_id: pp.professionalProfileId,
          platform_name: pp.platformName,
          url: pp.url,
        };
      }
    );

    const pp = await this.professionalProfileRepo.save(proProfiles);

    return this.mapResProfileFromEntity(mp, lc, pp);
  }
}
