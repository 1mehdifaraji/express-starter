import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
// export class UserModel extends BaseEntity {
export class UserModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  disabled: boolean;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column({
    default: 0,
  })
  gender: 0 | 1 | 2;
  // 0 -> unknown
  // 1 -> male
  // 2 -> female

  @Column({ default: "" })
  photo: string;

  @Column({ default: 0 })
  age: number;
  // auto generate with dob

  @Column({
    default: "",
  })
  dob: string;

  @Column({
    default: "",
  })
  city: string;

  @Column({
    default: "",
  })
  melli_code: string;

  @Column({ default: "" })
  phone: string;

  @Column({
    default: "",
  })
  postal_code: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @Column({
    type: "simple-json",
  })
  settings: {
    darkmode: boolean;
    notifications: boolean;
  };
}
