import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Client from "./client.entities";


@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "varchar", length: 127 })
  full_name: string

  @Column({ type: "varchar", length: 50 })
  email: string

  @Column({ type: "varchar", length: 25 })
  phone: string

  @CreateDateColumn()
  created_at: Date

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client
}

export default Contact;
