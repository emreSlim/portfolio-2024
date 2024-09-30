import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { SkillService } from './skill.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { SkillDTO, SkillDTOWithId } from 'src/dtos';

@Controller('skill')
export class SkillController {
  constructor(private readonly service: SkillService) {}

  @Get()
  @ApiResponse({ type: SkillDTOWithId })
  getSkills(): Promise<SkillDTOWithId[]> {
    return this.service.getAllSkills();
  }

  @Post()
  @ApiBody({ type: SkillDTO })
  @ApiResponse({ type: SkillDTOWithId })
  addSkill(@Body() skill: SkillDTO): Promise<SkillDTOWithId> {
    return this.service.addSkill(skill);
  }

  @Put()
  @ApiBody({ type: SkillDTOWithId })
  @ApiResponse({ type: SkillDTOWithId })
  updateSkill(@Body() skill: SkillDTOWithId): Promise<SkillDTOWithId> {
    return this.service.updateSkill(skill);
  }
}
