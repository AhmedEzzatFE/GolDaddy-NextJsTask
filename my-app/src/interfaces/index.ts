import { InputType } from "@/types";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import React from "react";
export interface AppState {
  title: string;
  description: string;
  ImageUrl: string;
  buttonText: string;
  buttonURL: string;
}
export interface IProps {
  placeholder: string;
  type: "text" | "textarea";
  name: keyof AppState;
  value: string;
  className?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: "text";
  name: keyof AppState;
  value: string;
  className?: string;
}

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  type: "textarea";
  name: keyof AppState;
  value: string;
  className?: string;
}

export type CustomInputProps = InputProps | TextareaProps;
