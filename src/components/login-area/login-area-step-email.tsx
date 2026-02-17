"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { validateEmailService } from "@/services/validateEmailService"

const validateSchema = z.object({
    email: z.email({error: "Digite um email válido"}).max(254, { error: "Email muito longo" })
})

type Props = {
    onValidade: (hasEmail: boolean, email: string) => void
}

export const LoginAreaStepEmail = ({ onValidade }: Props) => {
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof validateSchema>>({
        resolver: zodResolver(validateSchema),
        defaultValues: {
            email: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof validateSchema>) => {

        const parsed = validateSchema.safeParse(data)

        if(!parsed.success) return

        try {
            setLoading(true)
            
            const response = await validateEmailService(data.email)

            onValidade(response.exists ? true : false, data.email)
            
        } catch (error) {
            console.error(error)
            // Adicionar um erro para o user
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
            <div className="w-full flex justify-end">
                <Button disabled={loading} className="cursor-pointer bg-blue-700 hover:bg-blue-800">Continuar</Button>
            </div>
        </form>
    )
}