import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  async createRole(dto: CreateRoleDto){
    return await this.roleRepository.create(dto);
  }

  async getRoleByPosition(position: string){
    return await this.roleRepository.findOne({where: {position}});
  }
}
