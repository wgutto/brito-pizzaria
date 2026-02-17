"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { registerService } from "@/services/registerService"

const registerSchema = z.object({
    name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres").max(50, {error: "Nome muito longo"}),
    email: z.email({error: "Digite um email válido"}).max(254, {error: "Email muito longo"}),
    password: z.string().min(6, {error: "Mínimo de 6 caracteres"}).max(60, {error: "Senha muito longa"}),
    confirmPassword: z.string().min(1, "Confirme sua senha")
}).refine(data => {
    if(!data.confirmPassword) return true
    return data.password === data.confirmPassword
}, {error: "As senhas não coincidem", path: ["confirmPassword"]}) // refine esta fazendo a validacao das senhas, se elas batem

type Props = {
    email: string
    setStep: () => void
    onRegister: (email: string) => void
}

export const LoginAreaStepRegister = ({ email, setStep, onRegister }: Props) => {
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: email,
            password: "",
            confirmPassword: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof registerSchema>) => {

        const parsed = registerSchema.safeParse(data)

        if(!parsed.success) return

        try {
            setLoading(true)

            const response = await registerService(
                parsed.data.name,
                parsed.data.email,
                parsed.data.password,
                parsed.data.confirmPassword
            )

            if(response) {
                setStep()
                onRegister(response.email)
            }

        } catch (error) {

        } finally {
            setLoading(false)
        }
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
                                type="password"
                                {...field}
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

            <FieldGroup>
                <Controller
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel>
                                Confirmar senha
                            </FieldLabel>
                            <Input
                                type="password"
                                {...field}
                                placeholder="Repita sua senha"
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