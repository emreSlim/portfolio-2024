import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  Location,
  locationEntity,
  MyProfile,
  myProfileEntity,
  ProfessionalProfile,
  professionalProfileEntity,
} from 'src/entities';
import { GetMyProfile } from './my-profile.dto';
import {
  LocationDTO,
  ProfessionalProfileDTO,
  MyProfileFullDTO,
  MyProfileFullDTOWithId,
  LocationDTOWithId,
  ProfessionalProfileDTOWithId,
} from 'src/dtos';
import { Repository } from '../json-db/repository';

@Injectable()
export class MyProfileService {
  private readonly myProfileRepo = new Repository(myProfileEntity);
  private readonly locationRepo = new Repository(locationEntity);
  private readonly professionalProfileRepo = new Repository(
    professionalProfileEntity
  );

  constructor() {}

  mapLocationDTOToEntity(
    dto: LocationDTO,
    myProfileId: number,
    entity = {} as Location
  ): Location {
    entity.my_profile_id = myProfileId;
    entity.city = dto.city;
    entity.country = dto.country;
    entity.state = dto.state;
    entity.location_type = dto.locationType;
    return entity;
  }

  mapLocationDTOFromEntity(entity: Location): LocationDTOWithId {
    return {
      city: entity.city,
      country: entity.country,
      locationId: entity.location_id,
      locationType: entity.location_type,
      state: entity.state,
    };
  }

  mapProfessionalProfileDTOToEntity(
    dto: ProfessionalProfileDTO,
    myProfileId: number,
    entity = {} as ProfessionalProfile
  ): ProfessionalProfile {
    entity.my_profile_id = myProfileId;
    entity.platform_name = dto.platformName;
    entity.url = dto.url;
    return entity;
  }

  mapProfessionalProfileDTOFromEntity(
    entity: ProfessionalProfile
  ): ProfessionalProfileDTOWithId {
    return {
      platformName: entity.platform_name,
      professionalProfileId: entity.professional_profile_id,
      url: entity.url,
    };
  }

  mapProfileDTOToEntity(
    dto: MyProfileFullDTO,
    entity = {} as MyProfile
  ): MyProfile {
    entity.first_name = dto.firstName;
    entity.last_name = dto.lastName;
    entity.nick_name = dto.nickName;
    entity.email = dto.email;
    entity.phone = dto.phone;
    entity.about = dto.about;
    entity.introduction = dto.introduction;
    entity.image_url = dto.imageUrl;
    return entity;
  }

  mapProfileDTOFromEntity(
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
      imageUrl: mp.image_url,
      professionalProfiles: pp.map((p) => {
        return this.mapProfessionalProfileDTOFromEntity(p);
      }),
      locations: lc.map((l) => {
        return this.mapLocationDTOFromEntity(l);
      }),
    };
  }

  async getMyProfile(
    query: GetMyProfile.Query
  ): Promise<MyProfileFullDTOWithId> {
    const mp = await this.myProfileRepo.findOne({
      my_profile_id: query.profileId,
    });
    if (mp == null) {
      throw new HttpException('Profile not found', HttpStatus.BAD_REQUEST);
    }

    const lc = await this.locationRepo.find({
      where: { my_profile_id: query.profileId },
    });
    const pp = await this.professionalProfileRepo.find({
      where: {
        my_profile_id: query.profileId,
      },
    });

    return this.mapProfileDTOFromEntity(mp, lc, pp);
  }

  async addMyProfile(body: MyProfileFullDTO): Promise<MyProfileFullDTOWithId> {
    const myProfile = this.mapProfileDTOToEntity(body);

    const mp = await this.myProfileRepo.save(myProfile);

    const locations: Location[] = body.locations.map((lo) => {
      return this.mapLocationDTOToEntity(lo, mp.my_profile_id);
    });

    const lc = await this.locationRepo.save(locations);

    const proProfiles: ProfessionalProfile[] = body.professionalProfiles.map(
      (pp) => {
        return this.mapProfessionalProfileDTOToEntity(pp, mp.my_profile_id);
      }
    );

    const pp = await this.professionalProfileRepo.save(proProfiles);

    return this.mapProfileDTOFromEntity(mp, lc, pp);
  }

  async updateMyProfile(body: MyProfileFullDTOWithId) {
    let mp = await this.myProfileRepo.findOne({
      my_profile_id: body.myProfileId,
    });

    if (mp == null) {
      throw new HttpException('Profile not found', HttpStatus.BAD_REQUEST);
    }

    mp = this.mapProfileDTOToEntity(body, mp);

    await this.myProfileRepo.save(mp);

    const locations: Location[] = body.locations.map((lo) => {
      return {
        ...this.mapLocationDTOToEntity(lo, mp.my_profile_id),
        location_id: lo.locationId,
      };
    });

    const lc = await this.locationRepo.save(locations);

    const proProfiles: ProfessionalProfile[] = body.professionalProfiles.map(
      (pp) => {
        return {
          ...this.mapProfessionalProfileDTOToEntity(pp, mp.my_profile_id),
          professional_profile_id: pp.professionalProfileId,
        };
      }
    );

    const pp = await this.professionalProfileRepo.save(proProfiles);

    return this.mapProfileDTOFromEntity(mp, lc, pp);
  }
}
