"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { api } from "@/lib/axios"
import { useAuth } from "@/stores/auth"
import { authResponse } from "@/types/authResponse"
import { toast } from "sonner"

const formSchema = z.object({
    email: z.string().email("E-mail inválido").max(254),
    password: z.string().min(6, "Senha com no mínimo 6 caracteres").max(60)
})

type Props = {
    email: string
}

export const LoginAreaStepLogin = ({ email }: Props) => {
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState("")
    const auth = useAuth()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: email,
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)

            const response = await api.post("/login", {
                email: data.email,
                password: data.password
            })

            const res: authResponse = response.data

            if (res.user && res.auth?.token) {
                auth.setUser(res.user)
                auth.setToken(res.auth.token)
                auth.setOpen(false)
            }

        } catch (error: any) {
            setErro(error.response.data.error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="flex flex-col items-center gap-5 mt-2" onSubmit={form.handleSubmit(onSubmit)}>
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
                <Button disabled={loading} className="bg-green-700 cursor-pointer hover:bg-green-800 font-bold">Login</Button>
            </div>
        </form>
    )
}