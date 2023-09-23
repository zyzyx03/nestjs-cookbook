import { Controller,Get, Post, Put, Delete, Param, Query} from '@nestjs/common';
import { query } from 'express';
import { type } from 'os';

@Controller('ninjas')
export class NinjasController {
    
    // GET /ninjas?type=fast --> []
    @Get()
    getNinjas(@Query('type') type: string){
        return [{ type }]
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
    createNinja(){
        return {}
    }
    // PUT /ninjas/:id --> { ... }
    @Put(':id')
    updateNinja(){
        return {}
    }
    // DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(){
        return {}
    }

}

