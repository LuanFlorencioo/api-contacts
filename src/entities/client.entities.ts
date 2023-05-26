import { getRounds, hashSync } from "bcryptjs";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany
} from "typeorm";
import Contact from "./contact.entities";


@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column({type: "varchar", length: 127})
  full_name: string

  @Column({type: "varchar", length: 50, unique: true})
  email: string

  @Column({type: "varchar", length: 120})
  password: string

  @Column({type: "varchar", length: 25})
  phone: string

  @CreateDateColumn()
  created_at: Date

  @BeforeInsert()
  @BeforeUpdate()
  hash() {
    const isEncripted = getRounds(this.password);

    if (!isEncripted)
      this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[]
}

export default Client;
