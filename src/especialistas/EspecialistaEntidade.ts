import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Relation } from 'typeorm'
import { Avaliacoes } from '../avaliacoes/avaliacoesEntity.js'

enum PlanosSaude {
  Sulamerica,
  Unimed,
  Bradesco,
  Amil,
  Biosaúde,
  Biovida,
  Outro
}

@Entity()
export class Especialista {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column('varchar', { length: 100 })
    nome: string

  @Column('varchar', { length: 100 })
    crm: string

  @Column('varchar')
    imagem: string

  @Column('varchar', { length: 100 })
    especialidade: string

  @Column('varchar', { length: 100 })
    email: string

  @Column('varchar', { length: 50 })
    telefone: string

  @Column({ type: 'enum', enum: PlanosSaude })
    planosSaude: PlanosSaude
 
  @OneToMany(() => Avaliacoes, (avaliacoes) => avaliacoes.especialista, {
      eager: true
    })
      avaliacoes: Relation<Avaliacoes>

 constructor(nome, crm, imagem, especialidade,email, telefone){
      this.nome = nome;
      this.crm = crm;
      this.imagem = imagem
      this.especialidade = especialidade
      this.email = email
      this.telefone = telefone
  }
}