"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { api } from "@/lib/axios"

const formSchema = z.object({
    name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres").max(50, "Nome deve ter no máximo 50 caracteres"),
    email: z.string().email("E-mail inválido").max(254),
    password: z.string().min(6, "Senha com no mínimo 6 caracteres").max(60)
})

type Props = {
    email: string
}

export const LoginAreaStepRegister = (email: Props) => {
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {

    }

    return (
        <form className="flex flex-col items-center gap-5 mt-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel>
                                Nome
                            </FieldLabel>
                            <Input
                                {...field}
                                placeholder="Digite seu nome"
                                disabled={loading}
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>
            
            <FieldGroup>
                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel>
                                Email
                            </FieldLabel>
                            <Input
                                {...field}
                                placeholder="Digite seu email"
                                disabled={loading}
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>

            <FieldGroup>
                <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel>
                                Senha
                            </FieldLabel>
                            <Input
                                {...field}
                                type="password"
                                placeholder="Digite sua senha"
                                disabled={loading}
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>

            <div className="w-full flex justify-end">
                <Button disabled={loading} className="cursor-pointer font-bold bg-blue-700 hover:bg-blue-800">Cadastrar</Button>
            </div>
        </form>
    )
}