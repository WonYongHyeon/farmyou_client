import { RadioChangeEvent } from "antd";
import { ChangeEvent } from "react";

import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IData {
  email?: string;
  password?: string;
  password2?: string;
}
// export interface IDataChange {
//   password2?: string;
// }
export interface IPropsLogin {
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSend: () => void;
  onClickCheck: () => void;
  onClickLogin: (data: IData) => Promise<void>;
  onClickSellerLogin: (data: IData) => Promise<void>;
  onClickMove: (move: string) => () => void;
  onChangeAuth: (event: RadioChangeEvent) => void;
  onClickModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleOk2: () => void;
  handleCancel2: () => void;
  register: UseFormRegister<IData>;
  handleSubmit: UseFormHandleSubmit<IData>;
  onSubmitChangeUser: (data: IData) => void;
  onSubmitChangeSeller: (data: IData) => void;
  isUser: string;
  isModal: boolean;
  isModal2: boolean;
  isCheck: boolean;
  formState: FormState<FieldValues>;
  userType: String;
}
