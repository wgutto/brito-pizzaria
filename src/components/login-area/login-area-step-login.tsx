"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { useAuth } from "@/stores/auth"
import { loginService } from "@/services/loginService"

const loginSchema = z.object({
    email: z.email({ error: "Digite um email válido" }).max(254, { error: "Email muito longo" }),
    password: z.string().min(6, { error: "Mínimo de 6 caracteres" }).max(60, { error: "Senha muito longa" })
})

type Props = {
    email: string
    setStep: () => void
}

export const LoginAreaStepLogin = ({ email, setStep }: Props) => {
    const [loading, setLoading] = useState(false)
    const [errorPassword, setErrorPassword] = useState("")
    const auth = useAuth()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: email,
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        const parsed = loginSchema.safeParse(data)

        if (!parsed.success) return

        try {
            setLoading(true)
            const response = await loginService(parsed.data.email, parsed.data.password)

            if (response.user && response.auth?.token) {
                auth.login(response.user, response.auth.token)
                auth.setOpen(false)
                setStep()
            }

        } catch (error: any) {
            setErrorPassword(error.response?.data?.error || "Email ou senha inválidos")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="flex flex-col gap-5 mt-2" onSubmit={form.handleSubmit(onSubmit)}>
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
                                onChange={(e) => {
                                    field.onChange(e)

                                    if (errorPassword) {
                                        setErrorPassword("")
                                    }
                                }}
                                placeholder="Digite sua senha"
                                disabled={loading}
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                            {errorPassword && !fieldState.invalid &&
                                <FieldError errors={[{ message: errorPassword }]} />
                            }
                        </Field>
                    )}
                />
            </FieldGroup>
            <div className="w-full flex justify-end">
                <Button disabled={loading} className="cursor-pointer font-bold bg-blue-700 hover:bg-blue-800">Entrar</Button>
            </div>
        </form>
    )
}