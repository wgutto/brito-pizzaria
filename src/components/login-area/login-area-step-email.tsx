"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const formSchema = z.object({
    email: z.string().email("E-mail inválido").max(254)
})

type Props = {
    onValidade: (hasEmail: boolean, email: string) => void
}

export const LoginAreaStepEmail = ({ onValidade }: Props) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {

    }

    return (
            <form className="flex gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field>
                                <Input
                                    {...field}
                                    placeholder="Digite seu email"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>
                <Button className="bg-green-600 cursor-pointer hover:bg-green-700">Continuar</Button>
            </form>
    )
}