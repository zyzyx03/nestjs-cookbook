import { Controller,Get, Post, Put, Delete, Param, Query, Body, NotFoundException, ParseIntPipe} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

/*
You can imagine something like this happened behind the scene (DI)
const service = new NinjasService()
const controller = new NinjasController(service)
*/

@Controller('ninjas')
export class NinjasController {

    /*
    Avoid instantiate NinjasService to each route by declaring this constructor.
    NinjasController depends on NinjasService by simply providing it as parameter
    to the constructor nest will look at NinjasService type and automatically instantiate
    */
    constructor(private readonly ninjaService: NinjasService){}

    // GET /ninjas?weapon=stars --> []
    @Get()
    getNinjas(@Query('weapon') weapon : 'stars' | 'nunchucks'){
        // Since NinjasService is a class it can be instatiated
        // const service = new NinjasService()
        return this.ninjaService.getNinjas(weapon)
    }

    // GET /ninjas/:id --> { ... }
    // +id is a unary plus to convert string into an actual numeric
    // nest pipe can also be used to convert from string to numeric 
    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id: number){
        try {
            return this.ninjaService.getNinja(id)
        }catch (err){
            throw new NotFoundException()
        }
        
    }

    // POST /ninjas/:id
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return this.ninjaService.createNinja(createNinjaDto)
    }

    // PUT /ninjas/:id --> { ... }
    @Put(':id')
    updateNinja(@Param('id', ParseIntPipe) id: number, @Body() updateNinjaDto: UpdateNinjaDto){
        return this.ninjaService.updateNinja(id, updateNinjaDto)
    }

    // DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id', ParseIntPipe) id: number){
        return this.ninjaService.removeNinja(id)
    }

}

