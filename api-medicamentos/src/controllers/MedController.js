const database = require('../database/connection')

class MedController {
    novoMedicamento(request, response){
        const {nomeMedicamento, intervaloH, qntdPilula, liquido} = request.body

        console.log(nomeMedicamento, intervaloH, qntdPilula, liquido)

        database.insert({nomeMedicamento, intervaloH, qntdPilula, liquido}).table("medicamentos").then(data =>{
            console.log(data)
            response.json({message:"Medicamento cadastrado com sucesso!"})
        }).catch(error =>{
            console.log(error)
        })
    }

    listarMedicamentos(request, response){
        database.select("*").table("medicamentos").then(medicamentos =>{
            console.log(medicamentos)
            response.json(medicamentos)
        }).catch(error =>{
            console.log(error)
        })
    }

    buscaMedicamento(request, response){
        const id = request.params.id

        database.select("*").table("medicamentos").where({id:id}).then(medicamento =>{
            response.json(medicamento)

        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new MedController();