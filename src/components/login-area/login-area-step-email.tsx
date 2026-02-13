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
    email: z.string().email("E-mail inválido").max(254)
})

type Props = {
    onValidade: (hasEmail: boolean, email: string) => void
}

export const LoginAreaStepEmail = ({ onValidade }: Props) => {
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {

        try {
            setLoading(true)
            
            const response = await api.post("/validate_email", {
                email: data.email
            })

            setLoading(false)

            onValidade(response.data.exists ? true : false, data.email)
            
        } catch (error) {
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
            <div className="w-full flex justify-end">
                <Button disabled={loading} className="bg-green-600 cursor-pointer hover:bg-green-700">Continuar</Button>
            </div>
        </form>
    )
}