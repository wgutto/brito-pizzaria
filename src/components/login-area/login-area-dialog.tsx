"use client"

import { useAuth } from "@/stores/auth"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { useState } from "react"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"
import { LoginAreaStepEmail } from "./login-area-step-email"
import { LoginAreaStepRegister } from "./login-area-step-register"
import { LoginAreaStepLogin } from "./login-area-step-login"

type STEPS = "EMAIL" | "LOGIN" | "REGISTER"

export const LoginAreaDialog = () => {
    const auth = useAuth()

    const [step, setStep] = useState<STEPS>("EMAIL")
    const [emailField, setEmailField] = useState("")

    

    const handleStepEmail = (hasEmail: boolean, email: string) => {
        setEmailField(email)

        if(hasEmail) {
            setStep("LOGIN")
        } else {
            setStep("REGISTER")
        }
    }
    return (
        <Dialog
            open={auth.open}
            onOpenChange={(open) => auth.setOpen(open)}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex text-xl items-center gap-2 font-bold">
                        {step !== "EMAIL" &&
                            <Button
                                variant="ghost"
                                size="icon"
                                className="flex cursor-pointer"
                                onClick={() => setStep("EMAIL")}
                            >
                                <ArrowLeft className="size-4"/>
                            </Button>
                        }
                        
                        {step === "EMAIL" && "Continuar"}
                        {step === "REGISTER" && "Cadastro"}
                        {step === "LOGIN" && "Login"}
                    </DialogTitle>
                    <DialogDescription>
                        {step === "EMAIL" && "Informe seu email para continuar."}
                        {step === "REGISTER" && "Faça o cadastro para concluir seu pedido."}
                        {step === "LOGIN" && "Faça o login para concluir seu pedido."}
                    </DialogDescription>
                </DialogHeader>

                <div>
                    {step === "EMAIL" &&
                        <LoginAreaStepEmail onValidade={handleStepEmail}/>
                    }

                    {step === "REGISTER" &&
                        <LoginAreaStepRegister  email={emailField}/>
                    }

                    {step === "LOGIN" &&
                        <LoginAreaStepLogin email={emailField} setStep={() => setStep("EMAIL")}/>
                    }
                </div>
            </DialogContent>
        </Dialog>
    )
}