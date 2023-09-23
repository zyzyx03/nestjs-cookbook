import { Controller,Get, Post, Put, Delete, Param, Query, Body} from '@nestjs/common';
import { query } from 'express';
import { type } from 'os';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    
    // GET /ninjas?weapon=fast --> []
    @Get()
    getNinjas(@Query('weapon') weapon : 'stars' | 'nunchucks'){
        const service = new NinjasService();
        return service.getNinjas(weapon)
    }

    // GET /ninjas/:id --> { ... }
    @Get(':id')
    getOneNinja(@Param('id') id: string){
        return {
            id,
        }
    }

    // POST /ninjas/:id
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return {
            name: createNinjaDto.name
        }
    }

    // PUT /ninjas/:id --> { ... }
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
        return {
            id,
            name: updateNinjaDto
        }
    }

    // DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(){
        return {}
    }

}

