
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source.js';
import { Especialista } from '../entities/EspecialistaEntidade.js';

export const especialistas = async (req: Request, res: Response): Promise<void> => {
  const allEspecialistas = await AppDataSource.manager.find(Especialista)
  res.json(allEspecialistas)
}

export const especialistaPost = async (req: Request, res: Response): Promise<void> => {
  const {
    nome, crm, imagem, especialidade, email, telefone, nota, planosSaude
  } = req.body;

  const especialista = new Especialista()
  especialista.nome = nome
  especialista.crm = crm
  especialista.imagem = imagem
  especialista.especialidade = especialidade
  especialista.email = email
  especialista.telefone = telefone
  especialista.nota = nota
 
  await AppDataSource.manager.save(Especialista, especialista)
  res.json(especialista)
}

//Get By Id

export const especialistaById = async(req:Request, res: Response) => {
  const {id} = req.params;
  const especialista = await AppDataSource.manager.findOneBy(Especialista, {
   id: id, 
   }) 
   console.log(especialista);
     res.json(especialista)
}

//Put

export const especialistaPut =async (req:Request, res:Response) => {
  const {nome, crm, imagem, especialidade, email, telefone, nota} = req.body;
console.log('não chegou');

  const {id} = req.params

  const especialistaUpdate = await AppDataSource.manager.findOneBy(Especialista,{
    id:id,
  })

  //deve entrar no repository?
especialistaUpdate.nome = nome
especialistaUpdate.crm = crm
especialistaUpdate.imagem = imagem
especialistaUpdate.especialidade =especialidade
especialistaUpdate.email = email
especialistaUpdate.telefone = telefone
especialistaUpdate.nota = nota

  await AppDataSource.manager.save(Especialista, especialistaUpdate)
  console.log('especialistaUpdate');
  res.json(especialistaUpdate)
    
}

//  nome, crm, imagem, especialidade, email, telefone, nota, planosSaude,

//   const { especialista_id } = req.params;
//   const especialistaIndex = especialistaMemoria.findIndex((especialista) => especialista.id === especialista_id);
//   especialistaMemoria.splice(especialistaIndex, 1);
//   res.json({ message: 'Especialista apagado' })
// }

