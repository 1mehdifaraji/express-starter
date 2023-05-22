import { dataSource } from "@config/db";
import { UserModel } from "@model/user";
import { NextFunction, Request } from "express";
import { ParsedUrlQuery } from "querystring";

export const getUsers = async (query: any, next: NextFunction) => {
  const userRepo = dataSource.getRepository(UserModel);

  const users = await userRepo.findAndCount({
    order: { created_at: "desc" },
    take: query.perPage,
    skip: query.page === 1 ? 0 : Number(query.page),
  });

  console.log(users);
};

export const getUser = async (
  query: { userId: string },
  next: NextFunction
) => {
  const userRepo = dataSource.getRepository(UserModel);
  try {
    const user = await userRepo.find({ where: { id: query.userId } });
    return user;
  } catch (e) {
    const error = new Error("Couldn't get user .");
    next(error);
  }
};

export const updateUser = async () => {
  // const userRepo = dataSource.getRepository(UserModel);
  // const updatedUser = new UserModel();
  // updatedUser.name = "updated name";
  // const user = await userRepo.save();
};

export const deleteUser = () => {};

export const createUser = async (userProps: any) => {
  const userRepo = dataSource.getRepository(UserModel);
  const newUser = new UserModel();
  newUser.name = "updated name";
  await userRepo.save(newUser);
  return newUser;
};
